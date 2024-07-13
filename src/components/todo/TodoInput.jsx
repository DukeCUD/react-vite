const TodoInput = (props) => {
  const { addNew } = props;
  addNew("Nguyen Hong Duc");
  return (
    <div className="ToDolist-Input">
      <input
        type="text"
        className="input"
        placeholder="Enter your task"
      ></input>
      <button className="bth">Add</button>
    </div>
  );
};
export default TodoInput;
