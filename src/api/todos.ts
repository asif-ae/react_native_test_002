import axios from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
};
