class Validator {
    constructor() {
        this.validations = [
            'data-min-length',

        ]
    }
    // iniciar a validação de todos os campos
    validate(form) {

        // pegar os inputs 
        let inputs = form.getElementByTagName('input');

        //trasformo uma HtmlCollection -> array
        let inputsArrays = [...inputs];

        // loop nos inputs e validação mediante ao que for encontrado
        inputsArrays.forEach(function (input) {

            //loop em todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {
                //verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i]) != null) {
                    //limpando uma string para virar um metodo 
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    // valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // invoca um metodo 
                    this[method](input, value);

                }

            }
        }, this);

    }
    // verifica se um input tem um número minino de caracteres 
    minlength(input, minValue) {

        let inputLength = input.value.length

        let errorMessge = 'O campo precisa ter pe menos ${minValue} caracteres';

        if (inputLength < minValue) {
            this.printMenssage(input, errorMessage);

        }

    }
    // metodo para imprimir mensagens de erro na tela
    printMenssage(input, msg) {

        let template = document.querySelector('.error-validation').cloneNode(true);


        templatem.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent = appendChild(template);



    }
}

let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let Validator = new Validator();

// evento que dispara as validações 
submit.addEventListener('click', function (e) {

    e.preventDefault();

    Validator.validate(form);

    console.log('funcinou');

})