import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo })); //리덕스 사용 안한다면 여기에 axios 사용 해당코드로 appThunk로 이동

    dispatch(setNewTodo("")); // dispatch는 비동기 함수, 비동기 함수가 실행되는 순서를 보장받을 수 없음, 그렇기에 상단에 await를 설정하는 방향으로 실행순서를 조정할 수 있다.
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        className="border-2 rounded-lg border-cyan-500 px-2 py-1 focus:outline-none focus:border-cyan-300"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-8 px-4 py-1 rounded-xl text-ml border-2 border-black bg-cyan-500 hover:bg-cyan-300 active:bg-cyan-500 text-white font-semibold"
        type="submit"
        value="생  성"
      />
    </form>
  );
};

export default CreateTodo;
