import mongoose from "mongoose";
import AudioItem from "../entities/AudioItem";

const Schema = mongoose.Schema;

const AudioItemSchema = new Schema(AudioItem.schema());
AudioItemSchema.pre("save", async function(next) {
  const audioItem = this;
  next();
});

AudioItemSchema.index({title: 1}, {unique: true});

const AudioItemModel = mongoose.model("AudioItem", AudioItemSchema);

module.exports = AudioItemModel;
