import { MdModeEditOutline } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toggleDone } from "../redux/appThunk";

const TodoCard = ({ id, title, isDone }) => {
  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  return (
    <li className="w-96 py-4 text-sm flex">
      <span className="bg-cyan-500 w-6 y-6 inline-block border-black border-2 text-center text-white font-semibold">
        {id}
      </span>

      <button
        className={`mx-4 inline-block w-7/12 text-left pl-6 border-gray-700 border-b-[1px] ${
          isDone && "line-through"
        }`}
        onClick={onClickIsDone}
      >
        {title}
      </button>
      <button className="w-2/12 text-2xl ml-4 hover:text-gray-500 active:text-black">
        <MdModeEditOutline />
      </button>
      <button className="w-2/12 text-2xl hover:text-gray-500 active:text-black">
        <ImBin />
      </button>
    </li>
  );
};

export default TodoCard;
