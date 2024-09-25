const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const Agendamentos = require("./models/post");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("primeira_pagina");
});

app.post("/cadastrar", function (req, res) {
  Agendamentos.create({
    nome: req.body.nome,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado,
    telefone: req.body.telefone,
    celular: req.body.celular,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Erro: " + erro);
    });
});

app.get("/consulta", function (req, res) {
  Agendamentos.findAll()
    .then(function (posts) {
      res.render("consulta", { posts: posts });
      console.log(posts);
    })
    .catch(function (erro) {
      console.log("Erro ao carregar dados do banco: " + erro);
    });
});

app.get("/editar/:id", function(req, res) {
  Agendamentos.findAll({ where: { id: req.params.id } })
    .then(function(posts) {
      res.render("editar", { posts: posts });
    })
    .catch(function(error) {
      console.log("Erro ao carregar dados do banco: " + error);
    });
});

app.post("/atualizar", function(req, res) {
    post.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefone: req.body.telefone,
        celular: req.body.celular
    }, {where: {id: req.body.id}}).then(function() {
        res.redirect("/consulta")
    }).catch(function(error) {
        res.send("Erro ao atualizar: " + error)
    })
})

app.post("/editar-usuario/:id", (req, res) => {
  Agendamentos.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      res.redirect("/consulta");
    });
});

app.get("/excluir/:id", function(req, res) {
  Agendamentos.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.redirect("/consulta");
    })
    .catch(function(error) {
      res.send("Erro ao deletar: " + error);
    });
});

app.listen(8081, function () {
  console.log("Servidor Ativo!");
});
