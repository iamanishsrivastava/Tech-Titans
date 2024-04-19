import React from 'react';

const CreatePost = (props) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img className="avatar" src={props.avatarSrc} alt={props.username} />
        <div className="tweet-info">
          <span className="username">{props.username}</span>
          <span className="handle">@{props.handle}</span>
        </div>
      </div>
      <div className="tweet-body">
        <p>{props.text}</p>
      </div>
      <div className="tweet-footer">
     
        <button className="tweet-action">Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
