import { useContext } from "react";
import Post from "./Post";
import { PostListStore } from "../store/PostsListStore";
import EmptyPost from "./EmptyPost";

const PostList = ({ setSelectedTab }) => {
  const { postList } = useContext(PostListStore);
  return (
    <>
      {postList.length === 0 ? (
        <div className="postPage">
          <EmptyPost setSelectedTab={setSelectedTab} />
        </div>
      ) : (
        <>
          <div className="postPage">
            <h1>Posts:</h1>
          </div>
          {postList.map((postData) => {
            return <Post postData={postData} key={postData.id} />;
          })}
        </>
      )}
    </>
  );
};

export default PostList;
