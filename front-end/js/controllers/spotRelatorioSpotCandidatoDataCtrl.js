angular.module("radioEleicoesApp").controller("spotRelatorioSpotCandidatoDataCtrl", function($scope, relatorioAPI, cod_candidato, data){

    $scope.consultarSpotsCandidatoData = function(cod_candidato, data){
        relatorioAPI.getSpotsCandidatoData(cod_candidato, data).success(function(retorno){        
            $scope.resultado = retorno;
        });
    };   
    $scope.consultarSpotsCandidatoData(cod_candidato, data);    
});
