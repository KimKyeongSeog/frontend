import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos"); // 객체없이 직접 넣어 사용 (slice와 비교할 것) 주소는 환경변수로 사용할 예정(데이터 보호, 운영상의 목적, .env) ++ todos의 get요청으로

  return response.data.todos; // 모든 데이터가 이 코드를 통해 전달받음
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo", // CreateTodo에서 Dispatch를 통해 전달받음 , 리덕스에서 비동기를 사용하기 위한 것
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      { title }, //json 등 파일이 어떤 형태인지 확인하기 위함 / 메타데이터/ 헤더
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ); // 상기내용이 todos.js(백엔드)로 전달
    return response.data.todo;
  }
);

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}/done`
    );

    return response.data.todo;
  }
);
