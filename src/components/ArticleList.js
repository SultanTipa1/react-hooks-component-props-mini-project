// ArticleList.js
import React from 'react';
import Article from './Article'; // Ensure the path is correct

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map(post => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date} // This can be omitted if you want to use the default date
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;