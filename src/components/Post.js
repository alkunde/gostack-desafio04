import React from 'react';

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.avatar} />
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
