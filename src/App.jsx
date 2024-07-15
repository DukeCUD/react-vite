import "./components/todo/todo.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Chọn những phầ`n được thừa kế từ parent-page  */}
      <Footer />
    </>
  );
};

export default App;
