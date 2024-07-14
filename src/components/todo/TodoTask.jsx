const TodoTask = (props) => {
  const { todoList, deleteData } = props;
  console.log(">> check props: ", props);
  const handDelete = (id) => {
    deleteData(id);
  };
  return (
    <div className="ToDoList-Task">
      {todoList.map((item, value) => {
        console.log(">> Check props: ", item, value);
        return (
          <div className="list" key={item.id}>
            <div className="item">{item.name} </div>
            <button onClick={() => handDelete(item.id)} className="item">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoTask;
