import VuelosFactory from "../models/VuelosFactory.js";

class VuelosService {
  constructor() {
    this.vuelosModel = VuelosFactory.create(process.env.PERSISTENCE);
  }

  getVuelos = async () => {
    return await this.vuelosModel.getVuelos();
  };

  postVuelo = async (nuevoVuelo) => {
    await this.vuelosModel.postVuelo(nuevoVuelo);
    const vuelos = await this.vuelosModel.getVuelos();

    const alertas = vuelos
      .filter((v) => v.id !== nuevoVuelo.id)
      .filter((v) => {
        const dx = v.xa - nuevoVuelo.xa;
        const dy = v.ya - nuevoVuelo.ya;
        const dz = v.za - nuevoVuelo.za;
        const distancia = Math.sqrt(dx * dx + dy * dy + dz * dz);
        return distancia < 500;
      })
      .map((v) => v.id);

    return { ...nuevoVuelo, alertas };
  };
}

export default VuelosService;
