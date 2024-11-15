import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSide from "../Components/Layout Components/LeftSide";

import RightSide from "../Components/Layout Components/RightSide";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <Header></Header>

      {/* Latest section */}
      <LatestNews></LatestNews>

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 py-5">
        <section className="col-span-3">
          <LeftSide></LeftSide>
        </section>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="col-span-3">
          <RightSide></RightSide>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
