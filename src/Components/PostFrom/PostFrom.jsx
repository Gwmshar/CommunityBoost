import { useState } from "react";
import axios from "axios";
import "./style.css";
import { toast } from "react-toastify";


const PostFrom = ({ setClicked, setRefreshFeed }) => {
  const [description, setDescripton] = useState("");
  // const [image, setImage] = useState(null);

  const fileChangedhandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


   const handleClick = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      toast.error("User not logged in");
      return;
    }

    const data = {
      userid: userData.id,
      user: userData.name,
      profilePic: "https://images.unsplash.com/photo-1700344207586-7374ef84638a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: description,
      profile: "profile",
      contentImage: "https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1226.jpg",
    };

    axios
      .post("http://localhost:3500/posts", data)
      .then((response) => {
        toast.success("Post created");
        setRefreshFeed((prev) => !prev); // Trigger the refresh
        setClicked(false);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
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
            value={description}
            onChange={(e) => {
              setDescripton(e.target.value);
            }}
          />
          <div className="postFrom__button">
            <input
              type="file"
              name="image"
              id="postFrom__image"
              className="postFrom__image"
              onChange={(e) => {
                fileChangedhandler(e);
              }}
            />
            <button onClick={(e) => handleClick(e)}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFrom;
