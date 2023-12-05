import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetchPost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type == "DELETE_POST") {
    const newPost = currPostList.filter((post) => post.id != action.payload);
    return newPost;
  } else if (action.type == "ADD_POST") {
    const newPost = [...action.payload, ...currPostList];
    return newPost;
  } else if (action.type == "FETCH_POST") {
    const newPost = [...action.payload, ...currPostList];
    return newPost;
  } else {
    return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (fetchedPostData) => {
    const ADD = {
      type: "ADD_POST",
      payload: fetchedPostData,
    };
    dispatchPostList(ADD);
  };
  const deletePost = (postId) => {
    const DEL = {
      type: "DELETE_POST",
      payload: postId,
    };
    dispatchPostList(DEL);
  };
  const fetchPost = (fetchedPosts) => {
    const ADD = {
      type: "FETCH_POST",
      payload: fetchedPosts,
    };
    dispatchPostList(ADD);
  };

  return (
    <>
      <PostListStore.Provider
        value={{ postList, addPost, deletePost, fetchPost }}
      >
        {children}
      </PostListStore.Provider>
    </>
  );
};

export default PostListProvider;
