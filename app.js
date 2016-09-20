(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.message = "";

  $scope.clearMessage = function() {
    $scope.message = "";
  }

  $scope.check = function() {
    var m = checkIfTooMuch($scope.lunchList);
    $scope.message = m;
  };

  function checkIfTooMuch(food) {
    var total = 0;
    var message = "Enjoy!";
    var lunchItems = food.split(',');
    if (food === "" || food === undefined) {
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

};

})();
