import "./style.css";

const MyComponent = () => {
  const input = [1, 2, 3];
  return (
    <>
      <div className="cp1">{input} My component update filal </div>
      <div>{console.log("Nguyen Hong Duc")} </div>
      <div className="cp2" style={{ color: "green" }}>
        Component first one
      </div>
    </>
  );
};

export default MyComponent;
// Dùng để xuất ra duy nhất 1 biến
// JSX chỉ có thể chứa 1 phần tử
// {:dùng JS bên trong HTML{:object}}
// Nếu muốn convert array, object từ dạng chuỗi JSON.stringify(tên array,object)
