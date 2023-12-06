import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListStore } from "../store/PostsListStore";
import EmptyPost from "./EmptyPost";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ setSelectedTab }) => {
  const { postList, fetchPost } = useContext(PostListStore);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        fetchPost(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <div className="postPage">
          {" "}
          <EmptyPost setSelectedTab={setSelectedTab} />{" "}
        </div>
      )}

      {!fetching &&
        postList.map((postData) => {
          return <Post postData={postData} key={postData.id} />;
        })}
    </>
  );
};

export default PostList;
