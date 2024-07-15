import "./components/todo/todo.css";
import TodoInput from "./components/todo/TodoInput";
import TodoTask from "./components/todo/TodoTask";
import reactlogo from "./assets/react.svg";
//Việc import ảnh trước khi sử dụng ảnh nhằm tối ưu hóa hiệu năng
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
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
    <>
      <Header />
      <Outlet />
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
      <Footer />
      {/* Chọn những phầ`n được thừa kế từ parent-page  */}
      <Outlet />
    </>
  );
};

export default App;
