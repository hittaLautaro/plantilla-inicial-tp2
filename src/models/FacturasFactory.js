import Model from "./DAO/facturas.model.js";

class FacturasFactory {
  static create(persistence) {
    switch (persistence) {
      case "memory":
        return new Model();

      default:
        return new Model();
    }
  }
}

export default FacturasFactory;
