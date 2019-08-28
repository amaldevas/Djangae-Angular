var mainApp = angular.module("mainApp", []);
var url="http://0.0.0.0:8080/";
mainApp.controller('AddStudentController', function($scope, $http) {
    $http.get(url+"name/").then(
      function successCallback(response) {
        $scope.response= JSON.parse(JSON.stringify(response.data));
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
    $scope.message = "For Students";
});
mainApp.controller('ViewStudentController', function($scope) {
    $scope.message = "For Employee";
});
mainApp.controller('RegisterStudentController', function($scope) {
    $scope.message = "For Employee";
    this.regForm.get('name').value;
});
mainApp.controller('ShowStudentController', function($scope, $http) {
    $scope.message = "For Employee";
    $scope.submit = function() {
        user = {
            name:this.name,
            email_id:this.email,
            id:this.id
        };
        $http.post(url+"get-details/", JSON.stringify(user)).then(
            function successCallback(response) {
                console.log("Successfully POST-ed data");
            },
            function errorCallback(response) {
                console.log("POST-ing of data failed");
            }
        );
        console.log(user);
    }
});