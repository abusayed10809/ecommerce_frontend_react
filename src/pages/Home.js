import React from "react";
import AppAnnouncement from "../components/AppAnnouncement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/NewsLetter";

export default function Home() {
  return (
    <div>
      <AppAnnouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}
