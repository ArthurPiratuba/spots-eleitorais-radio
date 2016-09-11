angular.module("radioEleicoesApp").controller("spotAlterarCtrl", function($scope, cod_spot, $location, spotAPI, candidatoAPI){       
    $scope.alterar = true;
    $scope.titulo = "Alteração de Spot";
    $scope.spot = {
        candidatos_spot:[]
    }
    $scope.options = {
      format: 'dd/mm/yyyy'
    };

    spotAPI.getSpot(cod_spot).success(function(data){
        $scope.spot = data;
        //0001-01-01T09:20:00
        var hora = $scope.spot.hora;
        $scope.spot.hora = hora.substring(11,13);
        $scope.spot.hora += ":" + hora.substring(14,16);

        var data = $scope.spot.data;
        $scope.spot.data = data.substring(8, 10) + "/";
        $scope.spot.data += data.substring(5, 7) + "/";
        $scope.spot.data += data.substring(0, 4);

    });    

    $scope.alterarSpot = function(spot){
        var data = spot.data.split('/');     
        spot.data = new Date(
            data[2],
            (data[1]-1),
            data[0]
        );  
        spotAPI.putSpot(spot).success(function(){
            $scope.alterar = false;
            delete $scope.spot;
            $scope.spot = {
                candidatos_spot: []
            };
            swal({
                title: "Alteração",
                text: "O spot foi atualizado na base de dados com êxito!",
                type: "success"
            }); 
            $location.path("/listagemSpot");         
        })
    };


    candidatoAPI.getCandidatos().success(function(data){
            $scope.candidatos = data;
        });  

    $scope.adicionarCandidato = function(candidato){
        $scope.spot.candidatos_spot.push({

            candidato : angular.copy(candidato)
        });
    };

    $scope.deletarCandidato = function(index){
        $scope.spot.candidatos_spot.splice(index,1);
    };
    
    $("#hora").on("input",function(){  
        $("#hora").val(_formatTime($("#hora").val()));       
    });   

    $scope.calcelarAlteracao = function(){        
        delete $scope.spot;
        $location.path("/listagemSpot");        
    };

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