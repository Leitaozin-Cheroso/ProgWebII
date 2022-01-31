let tamanho = 3;
function atualiza(){
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tamanho}em`;

    const h2 = document.querySelector("h2");
    h2.style.fontSize = `${tamanho}em`;

    const h3 = document.querySelector("h3");
    h3.style.fontSize = `${tamanho}em`;

    const h4 = document.querySelector("h4");
    h4.style.fontSize = `${tamanho}em`;

    const h5 = document.querySelector("h5");
    h5.style.fontSize = `${tamanho}em`;

    const h6 = document.querySelector("h6");
    h6.style.fontSize = `${tamanho}em`;
}
function aumenta(){
    while (tamanho < 9){
        tamanho += 1
        atualiza()
    }
}
function diminui(){
    if (tamanho > 1){
        tamanho -= 1;
        atualiza()
    }
}
