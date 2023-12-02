import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";

import { PostListStore } from "../store/PostsListStore";
const Post = ({ postData }) => {
  const { deletePost } = useContext(PostListStore);
  return (
    <>
      <div className="card postCard" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {postData.title}
            <span
              onClick={() => {
                deletePost(postData.id);
              }}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              <MdDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{postData.body}</p>
          {postData.tags.map((tag) => {
            return (
              <span key={tag} className="badge text-bg-info hashtag">
                {"#" + tag}
              </span>
            );
          })}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {postData.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
