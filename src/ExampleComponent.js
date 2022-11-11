import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "./lib";

export function ExampleComponent() {
  const counter = useSelector((state) => state.counter);
  const secondCounter = useSelector((state) => state.secondCounter);
  const thirdCounter = useSelector((state) => state.thirdCounter);
  const posts = useSelector((state) => state.posts ?? []);
  const loading = useSelector((state) => state.loadingPosts);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Counter: {counter}</div>
      <hr />
      <div>Second counter (+ val): {secondCounter}</div>
      <hr />
      <div>Third counter (* 2): {thirdCounter}</div>
      <hr />
      <div>
        <button onClick={() => dispatch("decrement", 2)}>-</button>
        <button onClick={() => dispatch("increment", 2)}>+</button>
      </div>
      <hr />
      <button onClick={() => dispatch("fetchPosts")}>Fetch Posts</button>
      {loading && <span>Loading posts...</span>}
      <div>{posts.map((post) => post.title)}</div>
      <hr />
    </div>
  );
}
