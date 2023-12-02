import { useContext, useRef } from "react";
import { PostListStore } from "../store/PostsListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostListStore);
  const { postList } = useContext(PostListStore);
  const userID = useRef("");
  const postTitle = useRef("");
  const postBody = useRef("");
  const hashTags = useRef([]);
  const reactions = useRef();
  const handlePostButton = (event) => {
    event.preventDefault();
    const fetchedPostData = [
      {
        id: postList.length + 1,
        title: postTitle.current.value,
        body: postBody.current.value,
        reactions: parseInt(reactions.current.value),
        userId: userID.current.value,
        tags: hashTags.current.value.split(" "),
      },
    ];
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    hashTags.current.value = "";
    userID.current.value = "";
    addPost(fetchedPostData);
  };
  return (
    <>
      <form className="createPost">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            ref={userID}
            type="text"
            className="form-control formInput"
            id="userId"
            placeholder="Enter your User ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control formInput"
            id="title"
            placeholder="How are you feeling today....."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBody}
            rows="4"
            type="text"
            className="form-control formInput"
            id="body"
            placeholder="Tell us more about it."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Hashtags
          </label>
          <input
            ref={hashTags}
            type="text"
            className="form-control formInput"
            id="tags"
            placeholder="Please enter tags seprated by space"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactions}
            type="number"
            className="form-control formInput"
            id="reactions"
            placeholder="No. of reactions"
          />
        </div>

        <button
          onClick={(event) => {
            handlePostButton(event);
          }}
          className="btn btn-primary"
        >
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
