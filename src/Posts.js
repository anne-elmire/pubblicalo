import React from "react";
import "./Posts.css";

const postsData = await fetch("https://dummyjson.com/posts").then((response) =>
  response.json()
);

const usersData = await fetch("https://dummyjson.com/users").then((response) =>
  response.json()
);

function capitalizeBody(string) {
  return string.replace(/^./, string[0].toUpperCase());
}

function getUserById(number) {
  const userDetails = usersData.users.find((x) => x.id === number);
  if (userDetails === undefined) {
    return "anonymous note";
  } else {
    return `by ${userDetails.firstName} ${userDetails.lastName}`;
  }
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
        {postsData.posts.map((post) => (
          <div className="TextPost">
            <h3>{post.title.toUpperCase()}</h3>
            <h4>{getUserById(post.userId)}</h4>
            <p>{capitalizeBody(post.body)}</p>
          </div>
        ))}
      </div>
    );
  }
}
