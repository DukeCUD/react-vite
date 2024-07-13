import "./style.css";

const MyComponent = () => {
  return (
    <>
      <p className="cp1">My component update file </p>
      <div className="cp2" style={{ color: "green" }}>
        Component first one
      </div>
    </>
  );
};

export default MyComponent;
// Dùng để xuất ra duy nhất 1 biến
// JSX chỉ có thể chứa 1 phần tử
