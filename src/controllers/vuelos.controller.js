import VuelosService from "../services/vuelos.service.js";
import vuelosValidation from "../utils/vuelos.validation.js";

class VuelosController {
  constructor() {
    this.vuelosService = new VuelosService();
  }

  getVuelos = async (req, res) => {
    try {
      const vuelos = await this.vuelosService.getVuelos();
      res.status(200).json(vuelos);
    } catch (error) {
      res.status(500).json({ errorMsg: "Hubo un error al pedir los vuelos" });
    }
  };

  postVuelo = async (req, res) => {
    try {
      const newVuelo = req.body;

      if (!newVuelo) {
        return res.status(400).json({ errorMsg: "No se ingreso ningun vuelo" });
      }

      const validateVuelo = vuelosValidation.schema.validate(newVuelo);

      if (validateVuelo.error) {
        return res
          .status(400)
          .json({ errorMsg: "El vuelo tiene campos invalidos" });
      }

      const vueloGuardado = await this.vuelosService.postVuelo(newVuelo);
      res.status(201).json(vueloGuardado);
    } catch (error) {
      res.status(500).json({ errorMsg: "Hubo un error al guardar el vuelo" });
    }
  };
}

export default VuelosController;
