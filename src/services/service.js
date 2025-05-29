import PalabrasModel from "../models/model.js";
class PalabrasService {
    constructor() {
        this.palabrasModel = new PalabrasModel();
    }

    async getPalabras() {
        return await this.palabrasModel.getPalabras();
    }
}
export default PalabrasService;
