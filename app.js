(function () {
'use strict';

angular.module("LunchCheck", [])

.controller("LunchCheckController", function ($scope) {
  $scope.lunchList = "";
  $scope.message = "";
  $scope.clearMessage = function() {
    $scope.message = "";
  }
  $scope.check = function() {
    var m = checkIfTooMuch($scope.lunchList);
    $scope.message = m;
  };

  function checkIfTooMuch(string) {
    var total = 0;
    var message = "Enjoy!";
    var lunchItems = string.split(',');
    if (string === "") {
      message = "Please enter data first";
      return message;
    }

    for (var i = 0; i < lunchItems.length; i++) {
      if (lunchItems[i] !== "") {
        total += 1;
      }
    }

    if (total > 3) {
      message = "Too much!";
    }

    return message;
  }

});

})();
