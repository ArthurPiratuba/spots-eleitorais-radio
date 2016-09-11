angular.module("radioEleicoesApp").controller("spotListagemCtrl", function($scope, spotAPI, $location){
    $scope.options = {
      format: 'dd/mm/yyyy'
    };

    $scope.consultarSpots = function(date, bloco, cargo){
        spotAPI.getSpotsPorDia(date, bloco, cargo).success(function(data){          
            $scope.spots = data;
        });
    };
    
    $scope.alteracao = function(cod_spot){  
        $location.path("/alterarSpot/" + cod_spot);        
    };
});