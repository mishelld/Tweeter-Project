const Renderer = function () {
  function renderPosts(posts) {
    const posts_elem = document.querySelector("#posts");
    posts_elem.innerHTML = "";
    posts.forEach((p) => {
      const post = document.createElement("div");

      post.classList.add("post");

      const post_text = document.createElement("div");
      post_text.classList.add("post-text");
      post_text.innerText = p.text;

      const delete_post = document.createElement("button");
      delete_post.classList.add("delete-post");
      delete_post.id = p.id;
      delete_post.innerText = "Delete Post";
      const comments = document.createElement("div");
      comments.classList.add("comments");
      renderComments(p.id, comments, p.comments);
      const div = document.createElement("div");
      div.classList.add("row");

      const comment_input = document.createElement("input");
      comment_input.classList.add("comment-input");
      comment_input.id = p.id;
      comment_input.placeholder = "Got something to say?";
      const comment_btn = document.createElement("button");
      comment_btn.classList.add("comment-button");
      comment_btn.innerText = "Comment";
      comment_btn.id = p.id;
      div.append(comment_input, comment_btn);
      post.append(post_text, comments, div, delete_post);

      posts_elem.appendChild(post);
    });

    function renderComments(post_id, comments_elem, comments) {
      comments.forEach((c) => {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.id = c.id;
        comment.innerText = c.text;
        const delete_comment = document.createElement("div");
        delete_comment.classList.add("delete-comment");
        delete_comment.dataset.id1 = c.id;
        delete_comment.dataset.id2 = post_id;

        delete_comment.innerText = "X";
        const div = document.createElement("div");
        div.classList.add("row");
        div.append(delete_comment, comment);
        comments_elem.append(div);
      });
    }
  }
  return { renderPosts };
};
export default Renderer;
