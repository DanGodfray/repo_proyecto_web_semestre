$(document).ready(function(){
    $("#enviar").click(function(){
        $.get("https://huachitos.cl/api/animales/comuna/127",
            function(raiz){
                $("#razas").empty();
                $.each(raiz.data,function(i, item){
                    

                    //$("#razas").append("<tr><td>"+data+"</tr><td>")
                    $("#razas").append("<tr>" +
                    "<td>" + item.nombre + "</td>" +
                    "<td>" + item.tipo + "</td>" +
                    "<td>" + item.color + "</td>" +
                    "<td>" + item.edad + "</td>" +
                    "<td>" + item.estado + "</td>" +
                    "<td>" + item.genero + "</td>" +
                    "<td>" + item.desc_fisica + "</td>" +
                    "<td>" + item.desc_personalidad + "</td>" +
                    "<td>" + (item.esterilizado ? 'Sí' : 'No') + "</td>" +
                    "<td>" + (item.vacunas ? 'Sí' : 'No') + "</td>" +
                    "<td><img src='" + item.imagen + "' alt='" + item.nombre + "' /></td>" +
                    "<td><a href='" + item.url + "' target='_blank'>Enlace</a></td>" +
                    "</tr>")
                })
            });
    });
});