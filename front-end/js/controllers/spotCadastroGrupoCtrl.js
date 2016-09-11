angular.module("radioEleicoesApp").controller("spotCadastroGrupoCtrl", function($scope, candidatoAPI, spotAPI){
    $scope.titulo = "Cadastro de Spots em Grupo"
    candidatoAPI.getCandidatos().success(function(data){
        $scope.candidatos = data;
    });
    $scope.spot = {
        candidatos_spot: []
    };  
    $scope.cadastrarSpots = function(spot, horarios){
        var spots = [];
         // GAMBIARRA
        var data = spot.data.split('/');     
        spot.data = new Date(
            data[2],
            (data[1]-1),
            data[0]
        );      
        // GAMBIARRA
        for(var i = 0 ; i < horarios.length;i++){
            spots.push(angular.copy(spot));
            spots[i].hora = horarios[i];            
        }
        spotAPI.postSpots(spots).success(function(){
            $scope.spot = {
                candidatos_spot: []
            };  
            $scope.horarios = [];
            swal({
                title: "Cadastro",
                text: "Todos os spots foram cadastrados na base de dados com êxito!",
                type: "success"
            }); 
        });       
    };
    $scope.horarios = [];   
    $scope.adicionarHorario = function(horario){
        $scope.horarios.push(horario);
        delete $scope.horario;
    };
    $scope.excluirHorario = function(index){
        $scope.horarios.splice(index, 1);
    };
    $scope.options = {
      format: 'dd/mm/yyyy'
    };
    $scope.adicionarCandidato = function(candidato){
        $scope.spot.candidatos_spot.push({
            candidato : angular.copy(candidato)
        });
    };
    $scope.deletarCandidato = function(index){
        $scope.spot.candidatos_spot.splice(index,1);
    };
    $("#horario").on("input",function(){  
        $("#horario").val(_formatTime($("#horario").val()));       
    });   
    var _formatTime = function(time){                           
        time = time.replace(/[^0-9]+/g, "");              
        if(time.length > 2){      
            if(time.substring(0,2) > 23){
                time = "23" + ":" + time.substring(2);
            }    
            else{         
                time = time.substring(0,2) + ":" + time.substring(2);
            }                                     
        }
        if(time.length >= 5){                  
            if(time.substring(3,5) > 59){
                time = time.substring(0,2) + ":" + 59; 
            }
            time = time.substring(0,5);                                          
        }
        return time;
    };    
});