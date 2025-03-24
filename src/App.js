import React, { Component } from "react";
import Header from "./Header/Header";
import Cardpage from "./Cardpage/CardPage";
import Slidepage from "./Slide/Slidepage";
import Bunline from "./Bunline/Bunline";
import Teapdslide from "./Teashops/Teapdslide";

function App() {
  return (
    <div>
      <Header />
      <Slidepage/>
      <Cardpage/>
      <Bunline/>
      <Teapdslide/>
    </div>
  );
}

export default App;
