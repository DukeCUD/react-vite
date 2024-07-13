const TodoTask = (props) => {
  const { name, age } = props;
  console.log(">> check props: ", props);
  return (
    <div className="ToDoList-Task">
      <div>
        Name: {name} - Age: {age}
      </div>
      <div>Learning React</div>
      <div>Writing React</div>
    </div>
  );
};
export default TodoTask;
