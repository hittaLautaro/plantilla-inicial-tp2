import PalabrasService from "../services/service.js";
class PalabrasController {
  constructor() {
    this.palabrasService = new PalabrasService();
  }

  getPalabras = async (req, res) => {
    try {
      const palabras = await this.palabrasService.getPalabras();
      //console.log("Palabras:", palabras);
      res.status(200).json(palabras);
    } catch (error) {
      res.status(500).json({ error: "Error fetching palabras" });
    }
  };

  postPalabra = async (req, res) => {
    try {
      const newPalabra = req.body;
      if (!newPalabra || !newPalabra.palabra) {
        return res.status(400).json({ error: "Palabra is required" });
      }
      const createdPalabra = await this.palabrasService.postPalabra(newPalabra);
      res.status(201).json(createdPalabra);
    } catch (error) {
      res.status(500).json({ error: "Error creating palabra" });
    }
  };

  patchPalabra = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPalabra = req.body;
      if (!updatedPalabra || !updatedPalabra.palabra) {
        return res.status(400).json({ error: "Palabra is required" });
      }
      const result = await this.palabrasService.patchPalabra(
        id,
        updatedPalabra
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error updating palabra" });
    }
  };
}
export default PalabrasController;
