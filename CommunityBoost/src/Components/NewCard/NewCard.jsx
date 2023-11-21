import { useState } from "react";
import "./style.css";
import PostFrom from "../PostFrom/PostFrom";

const NewCard = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="newCard">
      {clicked && <PostFrom setClicked={setClicked} />}
      <div className="newCard__container">
        <input
          type="text"
          name="newPost"
          id="newCard__input"
          className="newCard__input"
          placeholder="Boost your projects.."
          onClick={() => {
            handleClick();
          }}
        />
        <div className="newCard__button">
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
