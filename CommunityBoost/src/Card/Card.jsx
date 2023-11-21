import React from "react";
import "./style.css";

const Card = ({ data }) => {
  const contentImage = data.contentImage;
  console.log(contentImage);
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__profile">
          <div className="card__profile-pic">
            <img src={data.profilePic} alt="profile" />
          </div>
          <h2 className="card__profile-text">{data.user}</h2>
        </div>
        <div className="card__content">
          <p className="card__description">{data.description}</p>
          <div className="card__content-img">
            <img src={data.contentImage} alt="content" />
          </div>
        </div>
        <div className="card__button">
          <button className="button__share">Share</button>
          <button className="button__volunteer">Volunteer</button>
          <button className="button__boost">Boost</button>
        </div>
        <div className="card__comment">
          <input
            type="text"
            name="comment"
            id="card__comment-input"
            className="card__comment-input"
            placeholder="Share your thought..."
          />
          <div className="card__comment-button"></div>
          <button className="card__button">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
