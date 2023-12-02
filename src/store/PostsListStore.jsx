import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type == "DELETE_POST") {
    const newPost = currPostList.filter((post) => post.id != action.payload);
    return newPost;
  } else if (action.type == "ADD_POST") {
    const newPost = [...action.payload, ...currPostList];
    return newPost;
  } else {
    return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
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

  return (
    <>
      <PostListStore.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostListStore.Provider>
    </>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 2,
    title: "Going to Mumbai",
    body: "Hi friends i'm going to mumbai to enjoy my holidays and build up my new office.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 1,
    title: "Passed my exams",
    body: "Finaly passed my exams now its time for my internship and finally i'm a doctor now",
    reactions: 15,
    userId: "user-12",
    tags: ["exams", "doctor", "joy"],
  },
];

export default PostListProvider;
