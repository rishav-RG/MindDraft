// Update your API call URL
const addComment = async (commentData) => {
    try {
        const response = await axios.post(
            'http://localhost:3000/api/blog/comments',  // ✅ Updated URL
            commentData
        );
        // ...rest of your code
    } catch (error) {
        console.error('Error adding comment:', error);
    }
};