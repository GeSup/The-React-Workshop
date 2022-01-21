import React from 'react';
import './Comment.css';

export const Comment = ({ comment, withReply }) => (
    <div className="comment">
        <div className="comment-container">
            <img className="comment-img" src={comment.image} alt={comment.name} />
            <div className="comment-content">
                <h2>{comment.name}</h2>
                <strong>{comment.time}</strong>
                <p>{comment.text}</p>
                {withReply && <button className="comment-reply">Reply</button>}
            </div>            
        </div>
        {comment.comments && comment.comments.map((comment, key) => (
            <Comment key={`comment_${key}`} comment={comment} />
        ))}

    </div>
);