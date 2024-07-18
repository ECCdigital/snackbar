class AudioItem {
  constructor(id, description, url, duration, categories, speaker) {
    this.id = id;
    this.description = description;
    this.url = url;
    this.duration = duration;
    this.categories = categories;
    this.speaker = speaker;
  }

  static schema() {
    return {
      description: { type: String, required: true },
      url: { type: String, required: true },
      duration: { type: Number, required: true },
      categories: { type: [String], required: true },
      speaker: { type: String, required: true },
    };
  }
}

module.exports = {AudioItem};
