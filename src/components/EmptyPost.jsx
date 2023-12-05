import { useContext } from "react";
import { PostListStore } from "../store/PostsListStore";

const EmptyPost = ({ setSelectedTab }) => {
  const { fetchPost } = useContext(PostListStore);
  const fetchAll = async () => {
    let dataFetcher = [];
    await fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => (dataFetcher = data.posts));
    fetchPost(dataFetcher);
  };
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <h1>No Posts found, Go create a new post now.</h1>
      <button
        style={{ margin: "auto", display: "flex", alignItems: "center" }}
        className="btn btn-success"
        onClick={() => {
          setSelectedTab("Create Post");
        }}
      >
        Create Post
      </button>
      <br />
      <button
        style={{ margin: "auto", display: "flex", alignItems: "center" }}
        className="btn btn-danger"
        onClick={fetchAll}
      >
        Fetch Post
      </button>
    </div>
  );
};

export default EmptyPost;
