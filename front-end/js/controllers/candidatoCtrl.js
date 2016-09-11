angular.module("radioEleicoesApp").controller("candidatoCtrl", function($scope, coligacaoAPI, candidatoAPI){
    coligacaoAPI.getColigacoes().success(function(data){
        $scope.coligacoes = data;
    });
    $scope.titulo = "Cadastro de Candidato";

    $scope.carregarCandidatos = function(){
        candidatoAPI.getCandidatos().success(function(data){
            $scope.candidatos = data;
        });
    };
   

    $scope.cadastrarCandidato = function(candidato){        
        candidatoAPI.postCandidato(candidato).success(function(){
            delete $scope.candidato;
            $scope.carregarCandidatos();
            swal({
                title: "Cadastro",
                text: "Candidato cadastrado!",
                type: "success"
            });
        });     
    };

    $scope.cancelarAlteracao = function(){
        $scope.alterar = false;
        delete $scope.candidato;
        $scope.titulo = "Cadastro de Candidato";
    };

    $scope.alterarCandidato = function(candidato){
        candidatoAPI.putCandidato(candidato).success(function(){
            delete $scope.candidato;
            $scope.carregarCandidatos();
            $scope.alterar = false;
            swal({
                title: "Alteração",
                text: "O candidato foi atualizado na base de dados com êxito!",
                type: "success"
            });
            $scope.titulo = "Cadastro de Candidato";
        })
    };

    $scope.alteracao = function(cod_candidato){
        $scope.alterar = true;
        candidatoAPI.getCandidato(cod_candidato).success(function(data){
            $scope.candidato = data;
        });
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $scope.titulo = "Alteração de Candidato";
    };


    $scope.alterar = false;


    $scope.carregarCandidatos();
});