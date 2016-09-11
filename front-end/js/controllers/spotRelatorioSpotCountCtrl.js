angular.module("radioEleicoesApp").controller("spotRelatorioSpotCountCtrl", function($scope, relatorioAPI, $location){
    $scope.options = {
      format: 'dd/mm/yyyy'
    };  
    $scope.consultarSpotsCount = function(data){
        relatorioAPI.getSpotsCount(data).success(function(retorno){        
            $scope.resultado = retorno;
        });
    };
    var dataAgora = new Date(); 
    $scope.curDate = dataAgora;  
    var dia = dataAgora.getDate();
    var mes = dataAgora.getMonth() + 1;
    var ano = dataAgora.getUTCFullYear();
    if(dia < 10) dia = "0" + dia;
    if(mes < 10) mes = "0" + mes;    
    $scope.data_consulta = dia + "/";
    $scope.data_consulta += mes + "/";
    $scope.data_consulta += ano;  

    $scope.consultarSpotsCount($scope.data_consulta);    

    $scope.spotCandidatoData = function(cod_candidato, data){
        var dataTratada = data;
        dataTratada = data.substring(8, 10);
        dataTratada += data.substring(5, 7);
        dataTratada += data.substring(0, 4);
        $location.path("/relatorioSpotCandidatoData/" + cod_candidato + "/" + dataTratada);
    };
});
