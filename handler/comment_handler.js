const CommentService = require("../service/comment_service");

exports.createComment = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const commentService = new CommentService();

    const comment = await commentService.createComment(req.body, videoId);

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListComment = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const commentService = new CommentService();

    const comments = await commentService.getListComment(videoId);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
