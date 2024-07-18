class User {
  constructor(
    id,
    email,
    password = "",
    isVerified = false,
  ) {
    if (!email) throw new Error("Email is required");

    this.id = id;
    this.email = email;
    this.password = password;
    this.isVerified = isVerified;
  }

  static schema () {
    return {
      id: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      isVerified: { type: Boolean, default: false },
    };
  }

  removeSensitiveData() {
    delete this.password;
  }
}

module.exports = User;
