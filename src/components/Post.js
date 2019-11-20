import React from 'react';

function Post({ content, author, avatar, date }) {
  return (
    <li>
      <img src={avatar} />
      <p className="author">{author}</p>
      <p className="data">{date}</p>
      <p className="content">{content}</p>
    </li>
  );
}

export default Post;