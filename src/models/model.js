class PalabrasModel {
    constructor() {
        this.palabras = [
            { id: 1, palabra: 'hola'},
            { id: 2, palabra: 'que'},
            { id: 3, palabra: 'tal'},
        ]
    }

    async getPalabras() {
        console.log(this.palabras)
        return await this.palabras;
    }
}

export default PalabrasModel;