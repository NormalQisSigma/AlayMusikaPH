document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment').value;
    if (commentText.trim() !== '') {
        const commentContainer = document.getElementById('comments-container');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const commentContent = document.createElement('p');
        commentContent.textContent = commentText;

        newComment.appendChild(commentContent);
        commentContainer.appendChild(newComment);

        saveComment(commentText);
        document.getElementById('comment').value = '';
    }
});

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const commentContent = document.createElement('p');
        commentContent.textContent = comment;

        commentElement.appendChild(commentContent);
        commentContainer.appendChild(commentElement);
    });
}

// Load comments when the page loads
document.addEventListener('DOMContentLoaded', loadComments);