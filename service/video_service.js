const VideoRepository = require("../domain/video/video_repository");
const uuid = require("uuid");

class VideoService {
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async createVideo(video) {
    try {
      return await this.videoRepository.createVideo({
        id: uuid.v4(),
        thumbnail: video.thumbnail,
        title: video.title,
      });
    } catch (error) {
      throw error;
    }
  }

  async getListVideo() {
    try {
      return await this.videoRepository.getListVideo();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoService;
