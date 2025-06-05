import FacturasController from "../controllers/facturas.controller.js";
import express from "express";

class Router {
  constructor() {
    this.router = express.Router();
    this.facturasController = new FacturasController();
  }

  startRoutes() {
    this.router.get("/facturas", this.facturasController.getFacturas);
    this.router.get(
      "/facturas/tipo/:tipo",
      this.facturasController.getFacturasPorTipo
    );
    this.router.get(
      "/facturas/estado/:estado",
      this.facturasController.getFacturasPorEstado
    );
    this.router.post("/facturas", this.facturasController.postFactura);
    this.router.patch("/facturas/:id", this.facturasController.patchFactura);
    return this.router;
  }
}
export default Router;
