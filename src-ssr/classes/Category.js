class Category {
  constructor (id, name, color) {
    this.id = id
    this.name = name
    this.color = color
  }

  static schema () {
    return {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      color: { type: String, required: true },
    }
  }
}
