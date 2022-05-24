document.getElementById('formulario-01').addEventListener('submit', function( evento ){
   
    evento.preventDefault();

    evento.stopPropagation();

    if( this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)) {

            notas.push(numero);
        }

    }

    console.log(notas);

    texto = aprovado(notas)

    document.getElementById('resultado').innerHTML = texto;

});

function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();
    
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifica o preenchimento de todos os campos em vermelho"; 
            
            this.classList.add('erro');
            
            this.parentNode.classList.add('erro');

            return false;
        }else {
            document.querySelector('.mensagem').innerHTML = "";

            this.classList.remove('erro');

            this.parentNode.classList.remove('erro');
        }
    
    });
}


function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if(numero != "" && numero.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){ // verificar numero

            document.querySelector('.mensagem').innerHTML = "";

            this.classList.remove('erro');

            this.parentNode.classList.remove('erro');
        }else {
            document.querySelector('.mensagem').innerHTML = "Verifica o preenchimento dos campos em destaque"; 

            this.classList.add('erro');

            this.parentNode.classList.add('erro');

            return false;
        }
    
    });
}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        const emailvalido =/^[a-z0-9.]+@[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(emailvalido)){    // verificando email no javaScript

            document.querySelector('.mensagem').innerHTML = "";

            this.classList.remove('erro');

            this.parentNode.classList.remove('erro');
        }else {
            document.querySelector('.mensagem').innerHTML = "Verifica o preenchimento dos campos em destaque"; 

            this.classList.add('erro');

            this.parentNode.classList.add('erro');

            return false;
        }
    
    });
}

function validaUf(elemento){

    elemento.addEventListener('focusout', function(event) {
  
        event.preventDefault();
  
  
  
        const ufValido = [a-z];
  
        if(this.value.match(ufValido)) {
  
            document.querySelector('.mensagem').innerHTML = "";
  
            this.classList.remove('erro');
  
            this.parentNode.classList.remove('erro');
  
        } else {
  
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
  
            this.classList.add('erro');
  
            this.parentNode.classList.add('erro');

            return false;
  
        }
  
    });
  
  }


let camposobrigatorios = document.querySelectorAll('input.obrigatorio');

let camposNumericos = document.querySelectorAll('input.numero');

let camposEmail = document.querySelectorAll('input.email');

let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposobrigatorios) {

    validaCampo(emFoco);
}


for( let emFoco of camposNumericos) {

    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {

    validaCampoEmail(emFoco);
}

for( let emFoco of camposUf) {

    validaUf(emFoco);
  
}
  