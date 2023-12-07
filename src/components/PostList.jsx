import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListStore } from "../store/PostsListStore";
import EmptyPost from "./EmptyPost";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ setSelectedTab }) => {
  const { postList, fetchPost } = useContext(PostListStore);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("fetching started ");
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        fetchPost(data.posts);
        setFetching(false);
        console.log("fetching over ");
      });

    return () => {
      controller.abort();
      console.log("aborted ");
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <div className="postPage">
          <EmptyPost setSelectedTab={setSelectedTab} />
        </div>
      )}

      {!fetching &&
        postList.map((postData) => {
          return (
            <Post postData={postData} key={Math.random() * Math.random()} />
          );
        })}
    </>
  );
};

export default PostList;
