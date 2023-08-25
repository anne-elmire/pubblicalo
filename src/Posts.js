import React from "react";
import "./Posts.css";

const postsData = await fetch(
  "https://jsonplaceholder.typicode.com/posts"
).then((response) => response.json());

function capitalizeBody(string) {
  return string.replace(/^./, string[0].toUpperCase());
}

export class PostsGrid extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        {postsData.map((post) => (
          <div className="TextPost">
            <h3>{post.title.toUpperCase()}</h3>
            <p>{capitalizeBody(post.body)}.</p>
          </div>
        ))}
      </div>
    );
  }
}
