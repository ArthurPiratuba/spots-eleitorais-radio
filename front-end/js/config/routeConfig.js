angular.module("radioEleicoesApp").config(function($routeProvider){
    $routeProvider.when("/cadastroSpot", {
        templateUrl: "views/cadastro_spot.html",
        controller: "spotCadastroCtrl"         
    });
    $routeProvider.when("/cadastroGrupoSpot", {
        templateUrl: "views/cadastro_grupo_spot.html",
        controller: "spotCadastroGrupoCtrl"         
    });
    $routeProvider.when("/listagemSpot", {
        templateUrl: "views/listagem_spot.html",
        controller: "spotListagemCtrl"        
    });  
    $routeProvider.when("/alterarSpot/:cod", {
        templateUrl: "views/cadastro_spot.html",
        controller: "spotAlterarCtrl",
        resolve:{
            cod_spot: function($route){
                return $route.current.params.cod;   
            }         
        }
    });

    $routeProvider.when("/relatorioSpotCount",{
        templateUrl: "views/relatorio_spot_count.html",
        controller: "spotRelatorioSpotCountCtrl"
    });
    $routeProvider.when("/relatorioSpotCandidatoData/:cod_candidato/:data",{
        templateUrl: "views/relatorio_spot_candidato_data.html",
        controller: "spotRelatorioSpotCandidatoDataCtrl",
        resolve:{
            cod_candidato: function($route){
                return $route.current.params.cod_candidato;   
            },
            data: function($route){
                return $route.current.params.data;   
            }          
        }
    });

    $routeProvider.when("/cadastroCandidato", {
        templateUrl: "views/cadastro_candidato.html",
        controller: "candidatoCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/cadastroSpot"});
});