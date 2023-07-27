const CommentRepository = require("../domain/comment/comment_repository");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async createComment(comment, videoId) {
    try {
      return await this.commentRepository.createComment({
        videoId: videoId,
        comment: comment.comment,
        username: comment.username,
      });
    } catch (error) {
      throw error;
    }
  }

  async getListComment(videoId) {
    try {
      return await this.commentRepository.getListComment(videoId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CommentService;
