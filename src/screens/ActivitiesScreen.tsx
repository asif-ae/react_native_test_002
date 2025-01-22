import {useInfiniteQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import ErrorState from '../components/Activities/ErrorState';
import Loading from '../components/Activities/Loading';
import TodoCard from '../components/Activities/TodoCard';
import {Todo} from '../types';

const PAGE_SIZE = 20;

const fetchTodosPaginated = async ({
  pageParam = 1,
}: {
  pageParam: number | unknown;
}): Promise<Todo[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=${PAGE_SIZE}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

const ActivitiesScreen: React.FC = () => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: ({pageParam = 1}) => fetchTodosPaginated({pageParam}),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState errorMessage="Error loading data" />;
  }

  const todos = data?.pages.flat() || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TodoCard todo={item} />}
        contentContainerStyle={styles.listContent}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color="#a9d100" />
            </View>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fa',
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  listContent: {
    paddingVertical: 30,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ActivitiesScreen;
