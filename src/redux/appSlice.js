import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getTodos, toggleDone, updateTodo } from "./appThunk";
//전역적인 데이터 관리하기 위한 Slice 생성,
const appSlice = createSlice({
  name: "appSlice", // 객체를 만든 후, 초기값을 설정,
  initialState: {
    todos: null, //backend로부터 데이터를 받아올 것이기에 초기 값 null
    isLoading: false, //backend로부터 데이터를 받는 때 부터 도착해서 작동하는데 까지 걸리는 로딩이 있기에 로딩값을 설정
    newTodo: ""
  },
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    }); // state : 상태(todos,loading 등등) , action : state를 사용하여 행동함
    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { setNewTodo } = appSlice.actions;

export default appSlice; //store에 부착
