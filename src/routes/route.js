import PalabrasController from "../controllers/controller.js";
import express from "express";

class Router {
  constructor() {
    this.router = express.Router();
    this.palabrasController = new PalabrasController();
  }

  startRoutes() {
    this.router.get("/palabras", this.palabrasController.getPalabras);
    this.router.post("/palabras", this.palabrasController.postPalabra);
    this.router.patch("/palabras/:id", this.palabrasController.patchPalabra);
    return this.router;
  }
}
export default Router;
