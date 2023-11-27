import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const FeedCard = ({ refreshFeed }) => {
  const [posts, setPosts] = useState([]); // Renamed 'post' to 'posts' for clarity

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3500/posts"); // Added 'http://' to the URL
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [refreshFeed]); // Empty dependency array to fetch data only on initial component mount

  return (
    <div className="feed">
      {posts.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default FeedCard;
