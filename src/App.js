import React from "react";
import HeaderBar from "./components/HeaderBar";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import "../src/App.css"

export default function App(){
  return(
    <div className = "app">
      <HeaderBar />
      <BodyContent />
      <Footer />
    </div>
  )
}