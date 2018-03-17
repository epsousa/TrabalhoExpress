module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var Cursos = app.controllers.curso;
    app.get('/menu', valida, Cursos.menu);    
    app.get('/cadCurso', valida, Cursos.cadastroCurso);
    app.get('/listaCursos', valida, Cursos.listaCursos);
    app.post('/novoCurso', Cursos.novoCurso);
   }; 
   