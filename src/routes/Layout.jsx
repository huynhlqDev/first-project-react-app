import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Layout = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      {/* Added footer if need*/}
    </div>
  );
};

export default Layout;
