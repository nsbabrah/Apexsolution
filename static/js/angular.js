var app = angular.module('app',['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : '../../static/pages/home.html'
  })
    // route for the home page
    .when('/home', {
      templateUrl : '../../static/pages/home.html'
    })

    // route for the about page
    .when('/about', {
      templateUrl : '../../static/pages/About.html'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : '../../static/pages/contact.html'
    })
  // route for the reviews page
    .when('/reviews', {
      templateUrl : '../../static/pages/reviews.html'
    })

//
    .when('/Jobseekers', {
    templateUrl : '../../static/pages/jobseekers.html'
   })
    // route for the pf page
    .when('/Portfolio', {
      templateUrl : '../../static/pages/Portfolio.html'
    })
    .otherwise({
        redirectTo: '../../static/pages/home.html'
      });
});
