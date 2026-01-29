const Tweeter = function () {
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = posts.length;
  let commentIdCounter = posts.reduce((sum, post) => {
    return sum + post.comments.length;
  }, 0);
  function getPosts() {
    const copy_posts = [...posts];
    return copy_posts;
  }
  function addPost(text) {
    postIdCounter++;
    const new_post = { text: text, id: `p${postIdCounter}`, comments: [] };
    posts.push(new_post);
  }
  function removePost(postID) {
    const index = posts.findIndex((post) => post.id === postID);
    if (index != -1) {
      posts.splice(index, 1);
    }
  }
  function addComment(postID, text) {
    commentIdCounter++;
    posts.map((post) => {
      if (post.id === postID) {
        const new_comment = { id: `c${commentIdCounter}`, text: text };
        post.comments.push(new_comment);
      }
    });
  }
  function removeComment(postID, commentID) {
    const post = posts.find((post) => post.id === postID);
    const index = post.comments.findIndex(
      (comment) => comment.id === commentID,
    );
    if (index != -1) {
      post.comments.splice(index, 1);
    }
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
export default Tweeter;
