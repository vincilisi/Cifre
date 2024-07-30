function contaCifre(numero) {
    if (numero <= 0 || numero > 9999) {
        return "Numero troppo grande";
    }

    const numeroStringa = numero.toString();
    const numeroCifre = numeroStringa.length;
    
    return `Il numero ${numero} ha ${numeroCifre} cifre.`;
}



console.log(contaCifre(15000));