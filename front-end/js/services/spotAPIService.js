angular.module("radioEleicoesApp").factory("spotAPI", function($http, valueConfig){
    var _getSpotsPorDia = function(data, bloco, cargo){      
        var data_formatada = data.substring(0,2);
        data_formatada += data.substring(3, 5);
        data_formatada += data.substring(6);
        return $http.get(valueConfig.baseUrl + "/api/spot/Consultar/" + data_formatada + "/" + bloco + "/" + cargo);
    };
    var _getSpot = function(cod_spot){    
        return $http.get(valueConfig.baseUrl + "/api/spot/get/" + cod_spot);
    };
    var _postSpot = function(spot){
        return $http.post(valueConfig.baseUrl + "/api/spot/post", spot);
    };
    var _postSpots = function(spots){
        return $http.post(valueConfig.baseUrl + "/api/spot/postGrupo", spots);
    };
    var _putSpot = function(spot){
        return $http.put(valueConfig.baseUrl + "/api/spot/put", spot);
    };    
    return {
        getSpotsPorDia: _getSpotsPorDia,
        getSpot: _getSpot,       
        postSpot: _postSpot,
        postSpots: _postSpots,
        putSpot: _putSpot         
    };
});