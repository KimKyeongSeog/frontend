import { MdModeEditOutline } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toggleDone, updateTodo } from "../redux/appThunk";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const TodoCard = ({ id, title, isDone }) => {
  const [updateToggle, setUpdateToggle] = useState(false);

  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    if (!newTodo || newTodo === title) return;

    dispatch(updateTodo({ todoId: id, title: newTodo }));
    setNewTodo(newTodo);
    setUpdateToggle(false);
  };

  return (
    <li className="w-96 py-4 text-sm flex">
      <span className="bg-cyan-500 w-6 h-6 inline-block border-black border-2 text-center text-white font-semibold">
        {id}
      </span>

      {updateToggle ? (
        <form className="w-7/12  flex gap-4 " onSubmit={onSubmitUpdateTodo}>
          <input
            type="text"
            className="border-b-[1px] border-gray-300 w-60 y-4 ml-4 text-sm"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">
            <MdModeEditOutline size={25} />
          </button>
        </form>
      ) : (
        <button
          className={`mx-4 inline-block w-7/12 text-left pl-6 border-gray-700 border-b-[1px] ${
            isDone && "line-through"
          }`}
          onClick={onClickIsDone}
        >
          {title}
        </button>
      )}

      <button
        className="w-2/12 text-2xl mx-2 hover:text-gray-500 active:text-black"
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? (
          <HiMiniXMark className="ml-4" />
        ) : (
          <MdModeEditOutline />
        )}
      </button>
      <button className="w-2/12 text-2xl hover:text-gray-500 active:text-black">
        <ImBin />
      </button>
    </li>
  );
};

export default TodoCard;
