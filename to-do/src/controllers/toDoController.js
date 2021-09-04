const response = require("express");
const request = require("../app");
const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson);
};

const getById = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    const novaTarefa = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)

    response.status(200).send(novaTarefa)

}

const deleteTask = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)


    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])

}

const replacePost = (request, response) =>{
    const idRequirido = req.params.id;
    const postFromBody = req.body; 
    
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido);

    let updatedTask = {
        "id": filteredTask.id,
        "dataInclusao": TaskFromBody.dataInclusao,
        "concluido": TaskFromBody.concluido,
        "descricao": TaskFromBody.descricao,
        "nomeColaborador": TaskFromBody.nomeColaborador
    }

    const indice = tarefasJson.indexOf(tarefaFiltrada);

    tarefasJson.splice(indice, 1, updatedTask)

    response.status(200).send({
        "mensagem": "Post substituído com sucesso",
        updatedTask
    })

}

const atualizacao = (request, response) => {
    let idRequirido = req.params.id;
    let novoTitulo = req.body.titulo;

    let tituloFiltrado = tarefasJson.find(post => post.id == idRequirido);

    tituloFiltrado.titulo = novoTitulo;

    response.status(200).send({
        "mensagem": "Titulo atualizado",
        tituloFiltrado
    })
}


module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replacePost,
    atualizacao
}