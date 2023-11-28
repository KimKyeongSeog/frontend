import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer); // 어떤 값을 가져올 지 선택하는 useSelector
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return;

    dispatch(getTodos()); //디스패치에 의에 출력된 값에 따라서 appSlice의 initialState 값이 변경
  }, [todos, dispatch]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto mt-20 flex flex-col items-center ">
      <CreateTodo />
      <ul className="mt-6 flex flex-col gap-6">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            index={i}
            id={v.id}
            title={v.title}
            isDone={v.isDone}
          />
        ))}
      </ul>
    </div>
  );
};
//todos? : todos에 값이 있을 때 작동하라는 뜻
export default App;
