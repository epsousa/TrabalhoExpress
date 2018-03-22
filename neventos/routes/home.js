module.exports = function (app) {
    var home = app.controllers.home;
    app.get('/', home.index);
    app.get('/cadUsuario', home.cadUsuario)
    app.post('/novoUsuario', home.novoUsuario)
    app.post('/login', home.login);
    app.get('/logout', home.logout);
}; 