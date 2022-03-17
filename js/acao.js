let concatenador = "";
let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let especiais = ['!','@','#','$','%','&','*','(',')','-','+',':',';','.',','];
let numeros = [];
let maiusculas = [];
let minusculas = [];
let caracEspeciais = [];
let senhaFinal = "";

//gera números aleatórios baseano no número passado como parâmetro
function numAleatorios(tam){
    return Math.floor(Math.random() * tam)
}

function gerarSenha(){
    
    concatenador = "";
    let inComprimento = document.getElementById('inComprimento');
    let comp = inComprimento.value;
    let caracteresAtivos = document.getElementsByName('chkTipoCaractere');
   
    let flag = 0;
    for(let i = 0; i < 4; i++){
        if(caracteresAtivos[i].checked == false){
            flag++;
        }
    }
    if(flag == 4){
        window.alert("Selecione pelo menos um tipo de caracter!");
        caracteresAtivos[2].checked = true;
        return;
    }

    if(comp < 4 || comp == 0 || comp > 15){
        window.alert("Tamanho: Entre 4 e 15 caracteres!");
        inComprimento.value = 4;
        inComprimento.focus();
        document.getElementById('outSenha').textContent = "*************";
        return;
    }
    
    //Etapa Letras Maiúsculas
    if(caracteresAtivos[0].checked){
        for(let i = 0; i < comp; i++){
            maiusculas[i] = alfabeto[numAleatorios(25)];
        }
    }
    
    //Etapa Letras Minúsculas
    if(caracteresAtivos[1].checked){
        for(let i = 0; i < comp; i++){
            minusculas[i] = alfabeto[numAleatorios(25)].toLowerCase();
        }
    }
    //Etapa Números
    if(caracteresAtivos[2].checked){
        for(let i = 0; i < comp; i++){
            numeros[i] = numAleatorios(10);
            
        }
    }
    //Etapa Caracteres Especiais
    if(caracteresAtivos[3].checked){
        for(let i = 0; i < comp; i++){
            caracEspeciais[i] = especiais[numAleatorios(14)];
        }
    }

    //Concatenar e Exibir
    
   let contador = 0;
   let i = 0;
   while(contador < comp){
    if(caracteresAtivos[0].checked){
        concatenador += maiusculas[i];
        contador++;
        if(contador == comp){
            break;
        }
    }
    if(caracteresAtivos[1].checked){
        concatenador += minusculas[i];
        contador++;
        if(contador == comp){
            break;
        }
    }
    if(caracteresAtivos[2].checked){
        concatenador += numeros[i];
        contador++;
        if(contador == comp){
            break;
        }
    }
    if(caracteresAtivos[3].checked){
        concatenador += caracEspeciais[i];
        contador++;
        if(contador == comp){
            break;
        }
    }
    i++;
   }
   
        
    



   senhaFinal = concatenador;
    document.getElementById('outSenha').textContent = concatenador;
    
}


let btGerar = document.getElementById('btGerar');
btGerar.addEventListener('click',gerarSenha);

