function passwordValitation(password){
  var validWord=/^[a-zA-Z0-9]*$/;
  var Validation = validWord.test(password); 
  if(password.length === 0){
      return "the password can not be empty"
  }else if (password.length > 0  && <=4){
   
    return "very weak password";
  }else if(Validation==false){
    return "they can only be numbers or letters";
  }else{
    return true;
  };
};
Parse.initialize("o738tDIjX7Oq1jSB1PtSG6LfVeZqOgpaKH0pK3dt", "p7JfKdqPlYwWoenFcH1pnxR73YDzNaHAjz6iAwhq");

var app = angular.module('newApp', ["ngRoute"]).config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'login.html'
  })
  .when('/listsongs', {
    controller: 'jsonData',
    templateUrl: 'songs.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(['$rootScope', "$location", function($scope, $location) {
  $scope.currentUser = Parse.User.current();
  $scope.passCheck = "Weak";
  $scope.signUp = function(form) {
    if (passwordValitaion(form.password)==true) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });
  }else{
      $scope.passCheck = passwordValitation(form.password);
  };
 }; 
  
  $scope.logIn = function(form, newPath) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $scope.currentUser = user;
        $location.path(newPath);
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
  };
}]);


app.filter("soloUrl", function(){
  return function(item){
    return (JSON.stringify(item)).slice(10,-18);
  };
});


app.controller('jsonData', function ($scope, $http) {
  
    $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json').success(function(data) {
      $scope.track = data.tracks.track;
    });
    $scope.ordenarPor = function(orden) {
      $scope.ordenSeleccionado = orden;
    };
});
