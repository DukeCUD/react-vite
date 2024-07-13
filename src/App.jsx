import "./components/todo/todo.css";
import TodoInput from "./components/todo/TodoInput";
import TodoTask from "./components/todo/TodoTask";
import reactlogo from "./assets/react.svg"; //Tối ưu hóa hiệu năng

const App = () => {
  const name = "Nguyen Hong Duc";
  const age = "18";
  const data = {
    address: "Ninh Binh",
    country: "Viet Nam",
  };
  const addNew = (name) => {
    alert(`Call me ${name}`);
  };
  return (
    <div className="ToDoList-Manager">
      <div>
        <img className="img" src={reactlogo} />
      </div>
      <div className="ToDoList-Title">Todo list</div>
      <TodoInput addNew={addNew} />
      <TodoTask name={name} age={age} data={{ data }} />
    </div>
  );
};

export default App;
