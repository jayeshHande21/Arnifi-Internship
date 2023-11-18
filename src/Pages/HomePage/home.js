import { useState } from "react";
import { data } from "../database";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import { NavLink } from "react-router-dom";
import { SignIn } from "../SignInPage/SignIn";

export const Home = () => {
  const [likeInfo, setLikeInfo] = useState(
    data.Users.map((user) =>
      user.posts.map((post) => ({
        postId: post.id,
        count: post.likeCount,
        liked: false
      }))
    ).flat()
  );

  const [commentInfo, setCommentInfo] = useState(
    data.Users.map((user) =>
      user.posts.map((post) => ({
        postId: post.id,
        comments: [],
        newComment: ""
      }))
    ).flat()
  );

  const handleLikeClick = (postId) => {
    setLikeInfo((prevInfo) =>
      prevInfo.map((info) =>
        info.postId === postId
          ? {
              ...info,
              count: info.liked ? info.count - 1 : info.count + 1,
              liked: !info.liked
            }
          : info
      )
    );
  };

  const handleCommentChange = (postId, event) => {
    setCommentInfo((prevInfo) =>
      prevInfo.map((info) =>
        info.postId === postId
          ? { ...info, newComment: event.target.value }
          : info
      )
    );
  };

  const handleCommentSubmit = (postId) => {
    toast.success("comment added successfully!");
    const newComment = commentInfo.find((info) => info.postId === postId)
      ?.newComment;

    if (newComment) {
      setCommentInfo((prevInfo) =>
        prevInfo.map((info) =>
          info.postId === postId
            ? {
                ...info,
                comments: [...info.comments, newComment],
                newComment: ""
              }
            : info
        )
      );
    }
  };

  const handleSaveClick = () => {
    toast.success("Post saved successfully!");
  };

  const handleShareClick = () => {
    toast.success("URL coppied successfully!");
  };

  return (
    <div className="container">
      {data.Users.map((user) => (
        <div key={user.id} className="userContainer">
          <h3 style={{ color: "#e74c3c" }}>{user.username}</h3>
          <div>
            {user.posts.map((post) => (
              <div key={post.id} className="postContainer">
                <img
                  src={post.image_url}
                  alt={post.description}
                  className="postImage"
                />
                <div className="postContent">
                  <p style={{ color: "#333" }}>{post.description}</p>
                  <div className="postButtons">
                    <div>
                      {likeInfo.find((info) => info.postId === post.id)
                        ?.count || 0}
                    </div>
                    <button onClick={() => handleLikeClick(post.id)}>
                      {likeInfo.find((info) => info.postId === post.id)?.liked
                        ? "Unlike"
                        : "Like"}
                    </button>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={
                        commentInfo.find((info) => info.postId === post.id)
                          ?.newComment || ""
                      }
                      onChange={(event) => handleCommentChange(post.id, event)}
                    />
                    <button onClick={() => handleCommentSubmit(post.id)}>
                      Comment
                    </button>
                    <button onClick={handleShareClick}>Share</button>
                    <button onClick={handleSaveClick}>Save</button>
                  </div>
                  <div className="commentContainer">
                    {commentInfo
                      .find((info) => info.postId === post.id)
                      ?.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          <span>{comment}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};
