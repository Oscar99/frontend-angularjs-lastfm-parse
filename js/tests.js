/*describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
});
*/
describe('$scope.grade', function() {
  it('should return false because pass is too short', function() {
    expect( passValider("asd")).toBe("Password is too weak");
  });
  it("should return invalid message", function(){
    expect( passValider("$#$%&")).toBe("you can only enter numbers or letters");
  });
   it("should return true", function(){
    expect( passValider("ufhaas12120")).toBe(true);
  });
});

