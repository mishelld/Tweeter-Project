const Renderer = function () {
  function renderPosts(posts) {
    const posts_elem = document.querySelector("#posts");
    posts_elem.innerHTML = "";
    posts.forEach((p) => {
      const [post, post_text, delete_post] = postEL(p);

      const comments = createEl("div", "comments");
      renderComments(p.id, comments, p.comments);
      const div = createEl("div", "row");
      const [comment_input, comment_btn] = commentEl(p);

      div.append(comment_input, comment_btn);
      post.append(post_text, comments, div, delete_post);
      posts_elem.appendChild(post);
    });
  }
  function createEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (text) el.innerText = text;
    return el;
  }
  function postEL(p) {
    const post = createEl("div", "post");
    const post_text = createEl("div", "post-text", p.text);
    const delete_post = createEl("button", "delete-post", "Delete Post");
    delete_post.id = p.id;
    return [post, post_text, delete_post];
  }
  function commentEl(p) {
    const comment_input = createEl("input", "comment-input");
    comment_input.id = p.id;
    comment_input.placeholder = "Got something to say?";
    const comment_btn = createEl("button", "comment-button", "Comment");
    comment_btn.id = p.id;
    return [comment_input, comment_btn];
  }
  function renderComments(post_id, comments_elem, comments) {
    comments.forEach((c) => {
      const comment = createEl("div", "comment", c.text);
      comment.id = c.id;

      const delete_comment = createEl("div", "delete-comment", "X");
      delete_comment.dataset.id1 = c.id;
      delete_comment.dataset.id2 = post_id;

      const div = createEl("div", "row");
      div.append(delete_comment, comment);
      comments_elem.append(div);
    });
  }

  return { renderPosts };
};
export default Renderer;
