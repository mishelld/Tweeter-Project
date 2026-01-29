const Renderer = function () {
  function renderPosts(posts) {
    const posts_elem = document.querySelector("#posts");
    posts.innerHTML = "";
    posts.forEach((p) => {
      const post = document.createElement("div");

      post.classList.add("post");

      const post_text = document.createElement("div");
      post_text.classList.add("post-text");
      post_text.innerText = p.text;

      const delete_post = document.createElement("div");
      delete_post.classList.add("delete-post");
      delete_post.id = p.id;
      delete_post.innerText = "Delete Post";
      const comments = document.createElement("div");
      comments.classList.add("comments");
      renderComments(comments, p.comments);
      post.append(post_text, delete_post, comments);

      posts_elem.appendChild(post);
    });
    function renderComments(comments_elem, comments) {
      comments.forEach((c) => {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.id = c.id;
        comment.innerText = c.text;
        const delete_comment = document.createElement("div");
        delete_comment.classList.add("delete-comment");
        delete_comment.id = c.id;
        comments_elem.append(comment, delete_comment);
      });
    }
  }
  return { renderPosts };
};
export default Renderer;
