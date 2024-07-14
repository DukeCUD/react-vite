import { useState } from "react";

const TodoInput = (props) => {
  const { addNew } = props;
  const [valueInput, setValueInput] = useState("");
  // valueInput là biến thay đổi
  //setValueInput là hàm thay đổi giá trị

  const handChange = (name) => {
    setValueInput(name);
    // Thay đổi trong bộ nhớ, không ảnh hưởng bên ngoài
  };

  const handleClick = () => {
    addNew(valueInput);
    setValueInput("");
  };

  return (
    <div className="ToDolist-Input">
      <input
        onChange={(event) => handChange(event.target.value)}
        value={valueInput} // Tạo mới thuộc tính value để kiếm soát dữ liệu nhập vào
        type="text"
        className="input"
        placeholder="Enter your task"
      ></input>
      <button onClick={handleClick} className="bth">
        Add
      </button>
      <div>My input is = {valueInput}</div>
    </div>
  );
};
export default TodoInput;
