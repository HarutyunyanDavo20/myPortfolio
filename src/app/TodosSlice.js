import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Learn Html", isCompleted: false },
    { id: 2, title: "Learn CSS", isCompleted: false },
    { id: 3, title: "Learn JavaScript", isCompleted: false },
  ],
  readCount: 0,
  messages: [],
  completed: 0,
  isLoading: false,
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.todos.push({
        id: Date.now(),
        title: payload.title,
        isCompleted: false,
      });
      state.readCount++;
      state.messages.push({
        body: ` ( ${payload.title} ) Added `,
        color: "#78F100",
      });
    },
    end: (state, { payload }) => {
      state.completed--;
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    setCompleted: (state, { payload }) => {
      state.completed++;
      state.readCount++;
      state.messages.push({
        body: ` ( ${payload.title} ) Completed`,
        color: "orange",
      });
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, isCompleted: true } : todo
      );
    },
    closeMessages: (state) => {
      state.readCount = 0;
      state.messages = [];
    },
  },
});

export const { add, end, setCompleted, closeMessages } = TodosSlice.actions;

export default TodosSlice.reducer;
