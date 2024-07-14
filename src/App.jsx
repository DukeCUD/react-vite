import "./components/todo/todo.css";
import TodoInput from "./components/todo/TodoInput";
import TodoTask from "./components/todo/TodoTask";
import reactlogo from "./assets/react.svg";
//Việc import ảnh trước khi sử dụng ảnh nhằm tối ưu hóa hiệu năng
import { useState } from "react";

const App = () => {
  const name = "Nguyen Hong Duc";
  const age = "18";
  const data = {
    address: "Ninh Binh",
    country: "Viet Nam",
  };

  const [todoList, setTodoList] = useState([
    { id: 0, name: "Learning React" },
    { id: 1, name: "Watching Udemy" },
  ]);
  const addNew = (name) => {
    const newTodo = {
      id: randomIntFromInterval(0, 20),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="ToDoList-Manager">
      <div>
        <img className="img" src={reactlogo} />
      </div>
      <div className="ToDoList-Title">Todo list</div>
      <TodoInput addNew={addNew} />
      <TodoTask name={name} age={age} data={{ data }} todoList={todoList} />
    </div>
  );
};

export default App;
