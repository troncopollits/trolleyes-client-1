trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl:'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/tipousuario/plist', {templateUrl:'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController'});
        $routeProvider.when('/tipousuario/edit/:id?', {templateUrl:'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController'});
        $routeProvider.when('/usuario/plist/:rpp?/:page?', {templateUrl:'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.otherwise({redirectTo: '/'});
        
        //PRODUCTO
        $routeProvider.when('/producto/plist/:rpp?/:page?', {templateUrl: 'js/app/producto/plist.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/view/:id?', {templateUrl: 'js/app/producto/view.html', controller: 'productoViewController'});
        $routeProvider.when('/producto/edit/:id?', {templateUrl: 'js/app/producto/edit.html', controller: 'productoEditController'});
    }]);