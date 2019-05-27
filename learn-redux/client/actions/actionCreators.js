// Increment Likes
function incrementLikes(postId) {
  return {
    type: 'INCREMENT_LIKES',
    id: postId
  }
}

// Decrement Likes
function decrementLikes(postId) {
  return {
    type: 'DECREMENT_LIKES',
    postId
  }
}

// Add Comment
function addComment(postId, author, Comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    Comment
  }
}

// Remove Comment
function removeComment(postId, commentId) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentId
  }
}

// Change Location (React Router)
export { incrementLikes, decrementLikes, addComment, removeComment }