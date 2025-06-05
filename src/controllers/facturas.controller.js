import FacturasService from "../services/facturas.service.js";
import facturasValidation from "../utils/facturas.validation.js";

class FacturasController {
  constructor() {
    this.facturasService = new FacturasService();
  }

  getFacturas = async (req, res) => {
    try {
      const facturas = await this.facturasService.getFacturas();
      res.status(200).json(facturas);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas" });
    }
  };
  getFacturasPorTipo = async (req, res) => {
    try {
      const { tipo } = req.params;

      console.log(tipo);

      const facturas = await this.facturasService.getFacturasPorTipo(tipo);
      res.status(200).json(facturas);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas by type" });
    }
  };
  getFacturasPorEstado = async (req, res) => {
    const { estado } = req.params;

    try {
      const facturas = await this.facturasService.getFacturasPorEstado(estado);
      res.status(200).json(facturas);
    } catch (error) {
      res.status(500).json({ error: "Error fetching facturas by state" });
    }
  };

  postFactura = async (req, res) => {
    try {
      const newFactura = req.body;

      if (!newFactura) {
        return res.status(400).json({ error: "Factura is required" });
      }

      const validateFactura = facturasValidation.schema.validate(newFactura);

      if (validateFactura.error) {
        return res.status(400).json({ error: "Facturas has wrong fields" });
      }

      const createdFactura = await this.facturasService.postFactura(newFactura);
      res.status(201).json(createdFactura);
    } catch (error) {
      res.status(500).json({ error: "There was an error creating Factura" });
    }
  };

  patchFactura = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedFactura = req.body;
      if (!updatedFactura) {
        return res.status(400).json({ error: "Factura is required" });
      }

      const validateFactura =
        facturasValidation.optionalSchema.validate(updatedFactura);

      if (validateFactura.error) {
        return res.status(400).json({ error: "Factura has wrong fields" });
      }
      const result = await this.facturasService.patchFactura(
        id,
        updatedFactura
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "There was an error updating Factura" });
    }
  };
}
export default FacturasController;
