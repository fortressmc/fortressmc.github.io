document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forum-form');
    const titleInput = document.getElementById('post-title');
    const contentInput = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts-container');

    // Load posts from localStorage
    let posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
    posts.forEach(post => addPostToDOM(post.title, post.content));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        if (!title || !content) return;

        const post = { title, content };
        posts.unshift(post); // newest first
        localStorage.setItem('forumPosts', JSON.stringify(posts));
        addPostToDOM(title, content);

        // Reset form
        titleInput.value = '';
        contentInput.value = '';
    });

    function addPostToDOM(title, content) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        postsContainer.prepend(div);
    }
});
fetch('https://royvivek123.repl.co/api/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Cool Forum Post",
        content: "This is what I wrote"
    })
})
    .then(res => res.text())
    .then(alert);
