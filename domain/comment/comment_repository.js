const comment = require("./comment_entity");

class CommentRepository {
  async createComment(payload) {
    try {
      const newComment = new comment({
        videoId: payload.videoId,
        comment: payload.comment,
        username: payload.username,
        createdAt: Date.now(),
      });

      return await newComment.save();
    } catch (error) {
      throw error;
    }
  }

  async getListComment(videoId) {
    try {
      const comments = comment
        .find({ videoId }, "comment username createdAt")
        .lean();
      return comments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CommentRepository;
