const EmptyPost = ({ setSelectedTab }) => {
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
    </div>
  );
};

export default EmptyPost;
