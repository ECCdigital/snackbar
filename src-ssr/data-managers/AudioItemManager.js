import AudioItem from "../entities/AudioItem";
const AudioItemModel = require("../models/AudioItemModel");
const UserModel = require("../models/UserModel");

class AudioItemManager {

  static async getAudioItems() {
    try {
      const audioItemModels = await AudioItemModel.find();
      if (!audioItemModels) return null;
      return audioItemModels.map((audioItemModel) => createAudioItemFromModel(audioItemModel));
    }
    catch (err) {
      console.error("AudioItemManager - getAudioItems: ", err);
    }
  }

  static async getAudioItemById(audioItemId) {
    const audioItemModel = await AudioItemModel.findById(audioItemId);
    if (!audioItemModel) return null;
    return createAudioItemFromModel(audioItemModel);
  }

  static async getFavoritesForUser(userId) {
    const user = await UserModel.findById(userId);
    if(!user) {
      throw new Error("User nicht gefunden");
    }
    const audioItemModels = await AudioItemModel.find({ id: { $in: user.favorites } });
    if (!audioItemModels) return null;
    return audioItemModels.map((audioItemModel) => createAudioItemFromModel(audioItemModel));
  }
}

function createAudioItemFromModel(audioItemModel) {
  const audioItem = new AudioItem(
    audioItemModel._id.valueOf(),
    audioItemModel.title,
    audioItemModel.description,
    audioItemModel.url,
    audioItemModel.duration,
    audioItemModel.category,
    audioItemModel.tags,
    audioItemModel.speaker,
    audioItemModel.isFavorite,
  );
  return audioItem;
}

export default AudioItemManager;
