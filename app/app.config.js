export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/');
}
routing.$inject = ['$urlRouterProvider', '$locationProvider'];