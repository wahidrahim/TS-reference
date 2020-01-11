class Singleton {
  /**
   * Private class variable holds the singleton instance
   */
  private static instance: Singleton

  /**
   * Singleton's constructor should always be private to prevent
   * direct instance creation with the `new` operator
   */
  private constructor() {}

  /**
   * Static method that controls the access of the singleton instance
   */
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}
