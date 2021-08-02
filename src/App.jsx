import React from "react";
import "./assets/styles/index.css";
import { Header, AlbumInfo, Footer } from "./components/organisms";
function App() {
  return (
    <div className="App">
      <Header />
      <AlbumInfo />
      <Footer />
    </div>
  );
}

export default App;
