class PalabrasModel {
    constructor() {
        this.palabras = [
            { id: 1, palabra: 'hola'},
            { id: 2, palabra: 'que'},
            { id: 3, palabra: 'tal'},
        ]
    }

        getPalabras = async () => {
            return this.palabras;
        };

        postPalabra = async (newPalabra) => {
            newPalabra.id = this.palabras.length ? this.palabras[this.palabras.length - 1].id + 1 : 1;
            this.palabras.push(newPalabra);
            return newPalabra;
        }

        patchPalabra = async (id, updatedPalabra) => {
            const index = this.palabras.findIndex(p => p.id == id);
            if (index != -1) {
                this.palabras[index] = { ...this.palabras[index], ...updatedPalabra };
                return this.palabras[index];
            }
            return "Error: el indice no existe";
        }
}

export default PalabrasModel;