import Model from "./DAO/model.js";

class Factory {
  static create(persistence) {
    switch (persistence) {
      case "memory":
        console.log("memory persistence");
        return new Model();

      default:
        console.log("default persistence");
        return new Model();
    }
  }
}

export default Factory;
