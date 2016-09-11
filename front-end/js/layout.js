$(document).ready(function() {
    $('#side-menu').metisMenu();       
});

trocarCalendario = function(){
    //Altera os arquivos css do PickaDate (calendário) conforme o tamanho da tela
    if(window.innerWidth < 600){        
        //pequena
        document.getElementById("css_pickadate").href="bower_components/pickadate/lib/themes/default.css";
        document.getElementById("css_pickadate_date").href="bower_components/pickadate/lib/themes/default.date.css";
    }
    else{
        //grande       
        document.getElementById("css_pickadate").href="bower_components/pickadate/lib/themes/classic.css";
        document.getElementById("css_pickadate_date").href="bower_components/pickadate/lib/themes/classic.date.css";
    }
}

trocarCalendario();

window.addEventListener("resize", function(){    
    trocarCalendario();
});



sobre = function(){
    swal({
        title: "Sobre",
        text: "Sistema desenvolvido por Arthur Samuel Hack - Tecnologias utilizadas: PostgreSQL, Asp.NET Web API, AngularJS",
        type: "success"
    }); 
}
