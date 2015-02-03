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
  it(' It should  return a message of empty password', function() {
    expect(passwordValitation("")).toBe("the password can not be empty");
  });
  it('should  to return false because the password is very weak', function() {
    expect(passwordValitation("123")).toBe("very weak password");
  });
  it("should return invalid message because only accept letter and numbers", function(){
    expect(passwordValitation("#$%@")).toBe("");
  });
  it("should return true and register", function(){
    expect(passwordValitation("Imajedy1000")).toBe(true);
  });
});
