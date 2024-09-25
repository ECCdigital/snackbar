import AudioItemManager from "../data-managers/AudioItemManager";

class AudioItemController {

  static async getAudioItems(req, res) {
    try {
      const audioItems = await AudioItemManager.getAudioItems();
      return res.success({ audioItems });
    } catch (err) {
      console.error("AudioItemController - getAudioItems: ", err);
      return res.error(err.code);
    }
  }

  static async getAudioItem(req, res) {
    try {
      const { params: { id: requestedAudioItemId } } = req;
      const audioItem = await AudioItemManager.getAudioItemById(requestedAudioItemId);
      return res.success(audioItem);
    } catch (err) {
      console.error("AudioItemController - getAudioItem: ", err);
      return res.error(err.code);
    }
  }

  static async getFavorites(req, res) {
    try {
      const userId = req.user.id;
      const favorites = await AudioItemManager.getFavoritesForUser(userId);
      return res.success(favorites);
    } catch (err) {
      console.error("AudioItemController - getFavorites: ", err);
      return res.error(err.code);
    }
  }
}

export default AudioItemController;
