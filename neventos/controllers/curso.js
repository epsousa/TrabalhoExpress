module.exports = function (app) {

    var CursosController = {
        //chamadas a páginas via get
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('Cursos/menu', params);
        },
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('Cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('Cursos/listaCursos', params);
        },
        novoCurso: function (request, response) {
            var descricao = request.body.Curso.descricao;
            var data = request.body.Curso.data.split('/');
            //formato dd/MM/yyyy
            var objDate = new Date(data[2], data[1] - 1, data[0]);
            var responsavel = request.body.Curso.responsavel;
            //código a ser implementado
            response.redirect('/menu');
        }
    };
    return CursosController;
};