import React from "react";
import { Header } from "./components/Header";
import { PostsGrid } from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostsGrid></PostsGrid>
    </div>
  );
}

export default App;
