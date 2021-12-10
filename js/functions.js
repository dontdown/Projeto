// $(function() {
//     function geraBoleto(){
//     var nome = $('#nome').val();
//     var cpfCnpj = $('#cpfCnpj').val();
//     var valor = $('#valor').val();

//     $.post('boleto/geraBoleto.php',{nome:nome,cpfCnpj:cpfCnpj,valor:valor},function(data){
//         alert(data);
//     })
//     }
// })

$(function() {
    window.geraBoleto = function (){
        var nome = $('#nome').val();
        var cpfCnpj = $('#cpfCnpj').val();
        var valor = $('#valor').val();

    $.post('boleto/geraBoleto.php',{nome:nome,cpfCnpj:cpfCnpj,valor:valor},function(data){
    alert(data);
     })
    }
})