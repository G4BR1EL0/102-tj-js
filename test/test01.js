function clasificaElementos(index) {
    let numerosPositivos = 0;
    let numerosNegativos = 0;
    let numerosCero = 0;
    index.forEach(num => {
        if (num>0) numerosPositivos++;
        if (num<0) numerosNegativos++;
        if (num === 0) numerosCero++;
    });
    let cantidad = index.length
    let positivos = (numerosPositivos/cantidad).toFixed(4);
    let negativos = (numerosNegativos/cantidad).toFixed(4);
    let ceros = (numerosCero/cantidad).toFixed(4);
    return [positivos,negativos,ceros];
}
module.exports = clasificaElementos;
