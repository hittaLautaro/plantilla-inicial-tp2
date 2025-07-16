import Model from "./DAO/vuelos.model.js";

class VuelosFactory {
  static create(persistence) {
    switch (persistence) {
      case "memory":
        return new Model();

      default:
        return new Model();
    }
  }
}

export default VuelosFactory;
