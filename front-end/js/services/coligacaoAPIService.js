angular.module("radioEleicoesApp").factory("coligacaoAPI", function($http, valueConfig){
    var _getColigacoes = function(){      
        return $http.get(valueConfig.baseUrl + "/api/coligacao/get");
    };      
    return {
        getColigacoes: _getColigacoes 
    };
});