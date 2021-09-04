const { response } = require("express");
const { request } = require("../../../to-do-server/src/app");
const movies = require("../models/filmes.json") 

const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vindo(a) ao reprogramaflix!"
        }
    )
};

const getAll = (request, response) => {
    response.status(200).send(movies);
};

const getById = (request, response) => {

    const requestedId = request.params.id;


    const filteredId = movies.find(movie => movie.id == requestedId);

 
    response.status(200).send(filteredId);
}

const getByTitle = (request, response) => {

    const requestedTitle = request.query.title.toLowerCase()

    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))


    if (requestedTitle === "" || filteredTitle === undefined) {
        response.status(404).send({
            "message": "Insira um título válido."
        })
    } else {
        response.status(200).send(filteredTitle)
    }
};

const getByGenre = (request, response) => {

    const requestedGenre = request.query.genre;
    let movieList = [];

    movies.forEach(movie => {
        let genreList = movie.genre.split(",")

        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                console.log(movie)
                movieList.push(movie)
            }
        }

    })

    response.status(200).send(movieList)
}

const replacePost = (request, response) => {
    const requestedId = req.params.id;
    const postFromBody = req.body;

    const filteredId = movies.find( movie => movie.id == requestedId);

    const indice = movies.indexOf(filteredId);

    movies.splice(indice, 1, postFromBody)

    response.status(200).send({
        "mensagem": "Post foi substituido com sucesso!",
        postFromBody
    })

}

const updatePost = (request, response) => {
    let requestedId = req.params.id;
    let newTitle = req.body.title;

    let filteredTitle = movies.find(movie => movie.id == requestedId);

    filteredTitle.titulo = newTitle;

    response.status(200).send({
        "mensagem": "Titulo atualizado com sucesso",
        tituloFiltrado
    })

}

module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre,
    replacePost,
    updatePost
}