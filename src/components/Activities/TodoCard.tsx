import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Todo } from '../../types';

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => (
  <View style={styles.todoCard}>
    <View style={styles.todoContent}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <View
        style={[
          styles.statusBadge,
          todo.completed ? styles.completedBadge : styles.pendingBadge,
        ]}
      >
        <Text style={todo.completed ? styles.completedText : styles.pendingText}>
          {todo.completed ? 'Completed' : 'Pending'}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 6,
    borderLeftColor: '#a9d100',
  },
  todoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 15,
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  completedBadge: {
    backgroundColor: '#d4f4c5',
  },
  pendingBadge: {
    backgroundColor: '#ffe2c6',
  },
  completedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3da83d',
  },
  pendingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff8c42',
  },
});

export default TodoCard;
