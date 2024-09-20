import AudioItem from "../entities/AudioItem";
const AudioItemModel = require("../models/AudioItemModel");
const UserModel = require("../models/UserModel");

class AudioItemManager {

  static async getAudioItems() {
    console.log("AudioItemManager - getAudioItems");
    try {
      console.log("AudioItemModel: ", AudioItemModel);
      const audioItemModels = await AudioItemModel.find();
      console.log("audioItemModels: ", audioItemModels);
      if (!audioItemModels) return null;
      return audioItemModels.map((audioItemModel) => createAudioItemFromModel(audioItemModel));
    }
    catch (err) {
      console.error("AudioItemManager - getAudioItems: ", err);
    }
  }

  static async getAudioItemById(audioItemId) {
    console.log("audioItemId: ", audioItemId);
    const audioItemModel = await AudioItemModel.findById(audioItemId);
    if (!audioItemModel) return null;
    console.log("audioItemModel: ", audioItemModel);
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
    audioItemModel.categories,
    audioItemModel.speaker,
    audioItemModel.isFavorite,
  );
  return audioItem;
}

export default AudioItemManager;
