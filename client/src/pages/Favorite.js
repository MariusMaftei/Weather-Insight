import React, { useEffect, useState } from "react";
import classes from "./Favorite.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Favorite() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching favorite locations:", error);
      }
    };

    fetchPosts();
  }, [setPosts]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {posts.map((post) => (
          <div className={classes.favoriteList} key={post._id}>
            <div className={classes.locationInfo}>
              <img
                src="https://flagsofallnations.com.au/cdn/shop/files/png-transparent-european-union-flag-of-europe-flags-graphics-blue-flag-computer-wallpaper.png?v=1684384397"
                alt=""
              />
              <span>{post.region}</span>
            </div>
            <div className={classes.locationInfo}>
              <img
                src={`https://flagsapi.com/${post.countryID}/flat/64.png`}
                alt=""
              />
              <span>{post.country}</span>
            </div>
            <div className={classes.locationInfo}>
              <span>{post.city}</span>
            </div>
            <Link to={`/favorite/${post._id}`}>
              <button>Select Location</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
