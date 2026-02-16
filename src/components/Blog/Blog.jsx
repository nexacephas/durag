import React, { useEffect, useState } from "react";
import "./Blog.css";

const BLOG_JSON_URL =
  "https://nextdoor1234.blogspot.com/feeds/posts/default?alt=json";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(BLOG_JSON_URL);
        const data = await res.json();

        const formattedPosts = data.feed.entry.map((item) => ({
          id: item.id.$t,
          title: item.title.$t,
          content: item.content.$t,
          link: item.link.find((l) => l.rel === "alternate").href,
        }));

        setPosts(formattedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="loading">Loading posts...</p>;

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="post-card"
          >
            <h3>{post.title}</h3>
            <p
              className="snippet"
              dangerouslySetInnerHTML={{
                __html: post.content.substring(0, 120) + "...",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
