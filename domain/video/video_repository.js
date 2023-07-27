const video = require("./video_entity");
const uuid = require("uuid");

class VideoRepository {
  async createVideo(payload) {
    try {
      const newVideo = new video({
        id: uuid.v4(),
        thumbnail: payload.thumbnail,
        title: payload.title,
      });

      return newVideo.save();
    } catch (error) {
      throw error;
    }
  }

  async getListVideo() {
    try {
      const videos = video.find({}, "id thumbnail").lean();
      return videos;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoRepository;
