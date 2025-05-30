import Factory from "../models/Factory.js";
class PalabrasService {
    constructor() {
        this.palabrasModel = Factory.create(process.env.PERSISTENCE);
    }

    getPalabras = async () => {
         return await this.palabrasModel.getPalabras();
    };

    postPalabra = async (newPalabra) => {
        return await this.palabrasModel.postPalabra(newPalabra);
    };

    patchPalabra = async (id, updatedPalabra) => {
        return await this.palabrasModel.patchPalabra(id, updatedPalabra);
    };
}
export default PalabrasService;
