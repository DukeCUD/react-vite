import "./components/todo/todo.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
      {/* Chọn những phầ`n được thừa kế từ parent-page  */}
    </>
  );
};

export default App;
