import { useContext } from "react";
import Post from "./Post";
import { PostListStore } from "../store/PostsListStore";

const PostList = () => {
  const { postList } = useContext(PostListStore);
  return (
    <>
      <div className="postPage">
        <h1>Posts:</h1>
      </div>
      {postList.map((postData) => {
        return <Post postData={postData} key={postData.id} />;
      })}
    </>
  );
};

export default PostList;
