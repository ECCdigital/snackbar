class AudioItem {
  constructor(
    id,
    title,
    description,
    url,
    duration,
    categories,
    speaker,
    isFavorite,) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.duration = duration;
    this.categories = categories;
    this.speaker = speaker;
    this.isFavorite = isFavorite;
  }

  static schema() {
    return {
      title: { type: String, required: true },
      description: { type: String, required: true },
      url: { type: String, required: true },
      duration: { type: Number, required: true },
      categories: { type: [String], required: true },
      speaker: { type: String, required: true },
      isFavorite: { type: Boolean, required: true },
    };
  }
}

export default AudioItem;
