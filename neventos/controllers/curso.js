module.exports = function (app) {
    var Curso = app.models.curso;
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
        novoCurso: function (request, response) {
            var codigo = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;
            var categoria = request.body.curso.categoria;

            if (codigo.trim().length == 0 || descricao.trim().length == 0 || ch == 0 || categoria.trim().length == 0) {
                response.redirect('/cadCurso');
            }
            else {
                var curso = request.body.curso;
                Curso.create(curso);
                response.redirect('/listaCursos');
            }
            response.redirect('/menu');
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('cursos/listaCursos', params);
                }
            });
        }
    };
    return CursosController;
};