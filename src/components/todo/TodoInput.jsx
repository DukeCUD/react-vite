const TodoInput = (props) => {
  const { name, age } = props;
  console.log(">> check props: ", props);
  return (
    <div className="ToDolist-Input">
      <input
        type="text"
        className="input"
        placeholder="Enter your task"
      ></input>
      <button className="bth">Add</button>
      <div>
        Name: {name} - Age: {age}
      </div>
    </div>
  );
};
export default TodoInput;
