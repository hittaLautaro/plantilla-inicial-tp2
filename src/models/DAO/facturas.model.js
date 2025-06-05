class FacturasModel {
  constructor() {
    this.facturas = [
      {
        id: 1,
        numero: "02134",
        tipo: "A",
        estado: "pendiente de pago",
        monto: 1000,
      },
      {
        id: 2,
        numero: "12312",
        tipo: "B",
        estado: "proximo a vencer",
        monto: 2000,
      },
      {
        id: 3,
        numero: "42112",
        tipo: "C",
        estado: "pagado",
        monto: 3000,
      },
    ];
  }

  getFacturas = async () => {
    return this.facturas;
  };

  getFacturasPorTipo = async (tipo) => {
    const facturasPorTipo = this.facturas.filter((x) => x.tipo === tipo);
    return facturasPorTipo;
  };

  getFacturasPorEstado = async (estado) => {
    const facturasPorEstado = this.facturas.filter((x) => x.estado === estado);
    return facturasPorEstado;
  };

  postFactura = async (newFactura) => {
    newFactura.id = this.facturas.length
      ? this.facturas[this.facturas.length - 1].id + 1
      : 1;
    this.facturas.push(newFactura);
    return newFactura;
  };

  patchFactura = async (id, updatedFactura) => {
    const index = this.facturas.findIndex((p) => p.id == id);
    if (index != -1) {
      this.facturas[index] = { ...this.facturas[index], ...updatedFactura };
      return this.facturas[index];
    }
    return "The index doesn't exist";
  };
}

export default FacturasModel;
