import TodoInput from "./TodoInput";
import TodoTask from "./TodoTask";
import reactlogo from "../../assets/react.svg";
//Việc import ảnh trước khi sử dụng ảnh nhằm tối ưu hóa hiệu năng
import { useState } from "react";
import "./todo.css";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const addNew = (name) => {
    const newTodo = {
      id: randomIntFromInterval(0, 20),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const deleteData = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    setTodoList(result);
  };
  // Hàm random ID
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="ToDoList-Manager">
      <div></div>
      <div className="ToDoList-Title">Todo list</div>
      <TodoInput addNew={addNew} />
      {todoList.length > 0 ? (
        <TodoTask deleteData={deleteData} todoList={todoList} />
      ) : (
        <img className="img" src={reactlogo} />
      )}
    </div>
  );
};
export default TodoApp;
