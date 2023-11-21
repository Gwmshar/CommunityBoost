import "./style.css";
const PostFrom = ({ setClicked }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  return (
    <div className="postFrom">
      <div className="postFrom__container">
        <form action="">
          <textarea
            type="text"
            name="description"
            id="postFrom__description"
            className="postFrom__description"
            placeholder="Describe your project"
          />
          <div className="postFrom__button">
            <button>Upload photo</button>
            <button onClick={(e) => handleClick(e)}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFrom;
