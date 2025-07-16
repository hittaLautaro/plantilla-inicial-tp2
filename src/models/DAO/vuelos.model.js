class VuelosModel {
  constructor() {
    this.vuelos = [];
  }

  getVuelos = async () => {
    return this.vuelos;
  };

  postVuelo = async (vuelo) => {
    const index = this.vuelos.findIndex((v) => v.id === vuelo.id);

    if (index !== -1) {
      this.vuelos[index] = { ...this.vuelos[index], ...vuelo };
    } else {
      this.vuelos.push(vuelo);
    }

    return vuelo;
  };
}

export default VuelosModel;
