const VideoService = require("../service/video_service");

exports.createVideo = async (req, res) => {
  try {
    const { thumbnail, title, link } = req.body;

    const videoService = new VideoService();
    const video = await videoService.createVideo({
      thumbnail,
      title,
      link,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListVideo = async (req, res) => {
  try {
    const videoService = new VideoService();
    const videos = await videoService.getListVideo();

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
