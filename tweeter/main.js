import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

// This should render the initial dummy data
renderer.renderPosts(tweeter.getPosts());

const twit_button = document.querySelector("#twit-btn");
const twit_input = document.querySelector("#twit-input");
twit_button.addEventListener("click", () => {
  const text = twit_input.value;
  tweeter.addPost(text);
  renderer.renderPosts(tweeter.getPosts());
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-post")) {
    const delete_post = e.target;
    const post_id = delete_post.id;
    tweeter.removePost(post_id);
    renderer.renderPosts(tweeter.getPosts());
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("comment-button")) {
    const comment_btn = e.target;
    const post_id = comment_btn.id;
    const input = document.querySelector(`#${post_id}.comment-input`);
    tweeter.addComment(post_id, input.value);
    renderer.renderPosts(tweeter.getPosts());
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-comment")) {
    const delete_comment = e.target;
    const comment_id = delete_comment.dataset.id1;
    const post_id = delete_comment.dataset.id2;
    tweeter.removeComment(post_id, comment_id);
    renderer.renderPosts(tweeter.getPosts());
  }
});
