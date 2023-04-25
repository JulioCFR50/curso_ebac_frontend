$(document).ready(function() {
   $(`.menu-hamburguer`).click(function() {
        $(`nav`).slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#telefone2').mask('(00) 000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');

    $(`form`).validate({
       rules: {
         Nome: {
               required: true
           },
           email: {
               required: true,
               email: true
           },
           telefone: {
               required: true
           },
           cpf: {
               required: true,
           },
           endereco: {
               required: false
           },
           cep: {
            required: false
        },
       },
      
       submitHandler: function(form) {
           console.log(form)
       },
       invalidHandler: function(evento, validador) {
           let camposIncorretos = validador.numberOfInvalids()
           if (camposIncorretos) {
               alert('Existem ${camposIncorretos} campos incorretos')
           }
       }
   })
 })
   
