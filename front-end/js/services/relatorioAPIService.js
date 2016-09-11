angular.module("radioEleicoesApp").factory("relatorioAPI", function($http, valueConfig){
    _getSpotsCount = function(data){
        //00/00/0000
        var dataTratada = data.substring(0,2);
        dataTratada += data.substring(3,5);
        dataTratada += data.substring(6);
        return $http.get(valueConfig.baseUrl + "/api/relatorio/spotscount?data=" + dataTratada);
    };
    _getSpotsCandidatoData = function(cod_candidato, data){         
         return $http.get(valueConfig.baseUrl + 
             "/api/relatorio/SpotsCandidatoData?cod_candidato=" + cod_candidato + "&data=" + data);         
    };



    return{
        getSpotsCount: _getSpotsCount,
        getSpotsCandidatoData: _getSpotsCandidatoData
    }
});
