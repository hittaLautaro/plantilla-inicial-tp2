import FacturasFactory from "../models/FacturasFactory.js";

class FacturasService {
  constructor() {
    this.facturasModel = FacturasFactory.create(process.env.PERSISTENCE);
  }

  getFacturas = async () => {
    return await this.facturasModel.getFacturas();
  };

  getFacturasPorEstado = async (estado) => {
    return await this.facturasModel.getFacturasPorEstado(estado);
  };

  getFacturasPorTipo = async (tipo) => {
    return await this.facturasModel.getFacturasPorTipo(tipo);
  };

  postFactura = async (newFactura) => {
    return await this.facturasModel.postFactura(newFactura);
  };

  patchFactura = async (id, updatedFactura) => {
    return await this.facturasModel.patchFactura(id, updatedFactura);
  };
}
export default FacturasService;
