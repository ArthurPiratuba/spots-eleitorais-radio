angular.module("radioEleicoesApp").controller("spotCadastroCtrl", function($scope, $http, candidatoAPI, spotAPI, $location){   
   $scope.titulo = "Cadastro de Spot";
    $scope.spot = {
        candidatos_spot: []
    };     
   
    candidatoAPI.getCandidatos().success(function(data){
        $scope.candidatos = data;
    });

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

    $scope.cadastrarSpot = function(spot){
        // GAMBIARRA
        var data = spot.data.split('/');     
        spot.data = new Date(
            data[2],
            (data[1]-1),
            data[0]
        );      
        // GAMBIARRA
       spotAPI.postSpot(spot).success(function(data){
            delete $scope.spot;
            $scope.spot = {};
            $scope.spot.candidatos_spot = [];
            $scope.candidato = {};
            swal({
                title: "Cadastro",
                text: "O spot foi cadastrado na base de dados com êxito!",
                type: "success"
            }); 
       });
    };    

    $("#hora").on("input",function(){  
        $("#hora").val(_formatTime($("#hora").val()));       
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