import PalabrasService from "../services/service.js";
class PalabrasController {
    constructor() {
        this.palabrasService = new PalabrasService();
    }

    async getPalabras(req, res) {
        const palabras = await this.palabrasService.getPalabras();
            //console.log("Palabras:", palabras);
            //res.status(200).json(palabras);
            res.send("ok")
    }
}
export default PalabrasController;