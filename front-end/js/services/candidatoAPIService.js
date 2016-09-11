angular.module("radioEleicoesApp").factory("candidatoAPI", function($http, valueConfig){
    var _getCandidatos = function(){
        return $http.get(valueConfig.baseUrl + "/api/candidato/get");
    };
    var _getCandidato = function(cod){
        return $http.get(valueConfig.baseUrl + "/api/candidato/get/" + cod);
    };
    var _postCandidato = function(candidato){
        return $http.post(valueConfig.baseUrl + "/api/candidato/post", candidato);
    };
    var _putCandidato = function(candidato){
        return $http.put(valueConfig.baseUrl + "/api/candidato/put", candidato);
    };    
    return {
        getCandidatos: _getCandidatos,       
        getCandidato: _getCandidato,
        postCandidato: _postCandidato,
        putCandidato: _putCandidato
    };
});