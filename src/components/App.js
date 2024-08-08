import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const blogName = 'Sultan blog';
console.log(blogData);
const posts = [
  { id: 1, title: 'First Article', content: 'This is the first article.' },
  { id: 2, title: 'Second Article', content: 'This is the second article.' },
];


function App() {
  return (
    <div className="App">
      <Header name={blogName}/>
      <h1>Welcome to My Blog</h1>
      <About about="This is a blog about web development and React." />
      <ArticleList posts={posts} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}


export default App;
