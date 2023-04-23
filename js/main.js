$(document).ready(function() {
   $(`#carousel-imagens`).slick({
         autoplay: true,
    });

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
       messages: {
           nome: 'Por favor, preencha todos os campos.'
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

     $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
        
        })
   
