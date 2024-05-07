const firstQuestion = document.getElementById("primeiraPergunta");
const secondQuestion = document.getElementById("segundaPergunta");
const thirdQuestion = document.getElementById("terceiraPergunta")
const firstResult = document.getElementById("primeiroResultado");
const secondResult = document.getElementById("segundoResultado");
const thirdResult = document.getElementById("terceiroResultado");
const fourthResult = document.getElementById("quartoResultado");
const fifthResult = document.getElementById("quintoResultado");
const sixthResult = document.getElementById("sextoResultado");
const bem = document.getElementById("bem");
const mal = document.getElementById("mal");
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const vamos = document.getElementById("vamos");
const calma = document.getElementById("calma");
const surprise = document.getElementById("surpresa");
const birthday = document.getElementById("felizAniversario");
const corpo = document.querySelector("body");
const fotosUm = document.querySelectorAll(".foto1");
const fotosDois = document.querySelectorAll(".foto2");
const fotosTres = document.querySelectorAll(".foto3");
const fotosQuatro = document.querySelectorAll(".foto4");
const fotosCinco = document.querySelectorAll(".foto5");
const fotosSeis = document.querySelectorAll(".foto6");

function addClass(n){
    if (n === 1 || n === 2){
        if (n === 1){
            bem.classList.add("checked");
            mal.classList.remove("checked");
        } else{
            mal.classList.add("checked");
            bem.classList.remove("checked");
        }
    } if (n === 3 || n === 4){
        if (n === 3){
            sim.classList.add("checked");
            nao.classList.remove("checked");
        } else{
            nao.classList.add("checked");
            sim.classList.remove("checked");
        }
    } if (n === 5 || n === 6){
        if (n === 5){
            vamos.classList.add("checked");
            calma.classList.remove("checked");
        } else{
            calma.classList.add("checked");
            vamos.classList.remove("checked");
        }
    }
}

function enviarResposta(n){
    if (n === 1){
        firstQuestion.style.display = "none"
        if (bem.classList.contains("checked")){
            firstResult.style.display = "flex";
        } else if (mal.classList.contains("checked")){
            secondResult.style.display = "flex";
        } else{
            firstQuestion.style.display = "flex";
        }
    } else if (n === 2){
        secondQuestion.style.display = "none";
        if (sim.classList.contains("checked")){
            thirdResult.style.display = "flex";
        } else if (nao.classList.contains("checked")){
            fourthResult.style.display = "flex";
        } else{
            secondQuestion.style.display = "flex"
        }
    } else{
        thirdQuestion.style.display = "none";
        if (vamos.classList.contains("checked")){
            fifthResult.style.display = "flex";
        } else if (calma.classList.contains("checked")){
            sixthResult.style.display = "flex"
        } else{
            thirdQuestion.style.display = "flex"
        }
    }
}

function proximaPergunta(n) {
    if (n === 1){
        firstResult.style.display = "none";
        secondResult.style.display = "none";
        secondQuestion.style.display = "flex";
    } else if (n === 2){
        thirdResult.style.display = "none";
        fourthResult.style.display = "none";
        thirdQuestion.style.display = "flex";
    } else if (n === 3){
        fifthResult.style.display = "none";
        sixthResult.style.display = "none";
        surprise.style.display = "flex";
        birthday.style.display = "flex";
        corpo.style.height = "700vh";
    }
}

let posicao1 = 0;
let posicao2 = 0;
let posicao3 = 0;
let posicao4 = 0;
let posicao5 = 0;
let posicao6 = 0;
function mudarImagem(n){
    if (n === 1 || n === 2){
        if (n===1 && posicao1 > 0){
            posicao1--;
        } else if (n===2 && posicao1 < fotosUm.length){
            posicao1++;
        } else{
            posicao1 = posicao1;
        }
        fotosUm.forEach(f => {
            let translate1 = f.style.transform;
            let translateN1 = parseInt(translate1.slice(11,15));

            if (n === 1 && posicao1 > 0){ //voltar imagem
                if (translate1 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN1+100) + "%)";
                } 
            } else if (n === 2 && posicao1 < fotosUm.length){ //avançar imagem
                if (translate1 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN1-100) + "%)";
                } 
            } else{
                posicao1 = posicao1;
            }
        });
    } else if (n===3 || n===4){
        if (n===3 && posicao2 > 0){
            posicao2--;
        } else if (n===4 && posicao2 < fotosDois.length){
            posicao2++;
        } else{
            posicao2 = posicao2;
        }
        fotosDois.forEach(f => {
            let translate2 = f.style.transform;
            let translateN2 = parseInt(translate2.slice(11,15));

            if (n === 3 && posicao2 > 0){ //voltar imagem
                if (translate2 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN2+100) + "%)";
                } 
            } else if (n === 4 && posicao2 < fotosDois.length){ //avançar imagem
                if (translate2 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN2-100) + "%)";
                } 
            } else{
                posicao2 = posicao2;
            }
        });
    } else if(n===5||n===6){
        if (n===5 && posicao3 > 0){
            posicao3--;
        } else if (n===6 && posicao3 < fotosTres.length){
            posicao3++;
        } else{
            posicao3 = posicao3;
        }
        fotosTres.forEach(f => {
            let translate3 = f.style.transform;
            let translateN3 = parseInt(translate3.slice(11,15));

            if (n === 5 && posicao3 > 0){ //voltar imagem
                if (translate3 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN3+100) + "%)";
                } 
            } else if (n === 6 && posicao3 < fotosTres.length){ //avançar imagem
                if (translate3 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN3-100) + "%)";
                } 
            } else{
                posicao3 = posicao3;
            }
        });
    } else if(n===7 || n===8){
        if (n===7 && posicao4 > 0){
            posicao4--;
        } else if (n===8 && posicao4 < fotosQuatro.length){
            posicao4++;
        } else{
            posicao4 = posicao4;
        }
        fotosQuatro.forEach(f => {
            let translate4 = f.style.transform;
            let translateN4 = parseInt(translate4.slice(11,15));

            if (n === 7 && posicao4 > 0){ //voltar imagem
                if (translate4 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN4+100) + "%)";
                } 
            } else if (n === 8 && posicao4 < fotosQuatro.length){ //avançar imagem
                if (translate4 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN4-100) + "%)";
                } 
            } else{
                posicao4 = posicao4;
            }
        });
    } else if(n===9||n===10){
        if (n===9 && posicao5 > 0){
            posicao5--;
        } else if (n===10 && posicao5 < fotosCinco.length){
            posicao5++;
        } else{
            posicao5 = posicao5;
        }
        fotosCinco.forEach(f => {
            let translate5 = f.style.transform;
            let translateN5 = parseInt(translate5.slice(11,16));

            if (n === 9 && posicao5 > 0){ //voltar imagem
                if (translate5 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN5+100) + "%)";
                } 
            } else if (n === 10 && posicao5 < fotosCinco.length){ //avançar imagem
                if (translate5 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN5-100) + "%)";
                } 
            } else{
                posicao5 = posicao5;
            }
        });
    } else if(n===11||n===12){
        if (n===11 && posicao6 > 0){
            posicao6--;
        } else if (n===12 && posicao6 < fotosSeis.length){
            posicao6++;
        } else{
            posicao6 = posicao6;
        }
        fotosSeis.forEach(f => {
            let translate6 = f.style.transform;
            let translateN6 = parseInt(translate6.slice(11,16));

            if (n === 11 && posicao6 > 0){ //voltar imagem
                if (translate6 === ""){
                    f.style.transform = "translateX(100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN6+100) + "%)";
                } 
            } else if (n === 12 && posicao6 < fotosSeis.length){ //avançar imagem
                if (translate6 === ""){
                    f.style.transform = "translateX(-100%)";
                } else {
                    f.style.transform = "translateX(" + (translateN6-100) + "%)";
                } 
            } else{
                posicao6 = posicao6;
            }
        });
    } else{
        console.log()
    }
}

function euTeAmo(){
    let textoAmor = document.createElement("p");
    let coracao = document.createElement("img");
    let coracao2 = document.createElement("img");
    textoAmor.innerText = "Eu também te amo";
    textoAmor.classList.add("teAmo");
    coracao.src = "./Imagens/coracao.png";
    coracao2.src = "./Imagens/coracao.png";
    coracao.classList.add("coracaoAmor1");
    coracao2.classList.add("coracaoAmor2");
    document.getElementById("sessaoTres").appendChild(textoAmor);
    document.getElementById("sessaoTres").appendChild(coracao);
    document.getElementById("sessaoTres").appendChild(coracao2);
}