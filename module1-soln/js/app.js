(function(){
  'use strict';

  angular.module('lunchApp',[])
  .controller('lunchController',['$scope',lunchController]);

  function lunchController($scope){
    $scope.dishes="";
    $scope.lunchMsg = "";

    $scope.checkMuch = function () {
      var dishArr = $scope.dishes.split(',');
      var msg = "";
      var cnt = 0;
      // Iterate split array to check for empty
      for (var i=0;i<dishArr.length;i++) {
        // Check if string is not empty
        if (dishArr[i]!=="") {
            cnt++;
        }
      }
      if(cnt==0){
        msg="Please enter data first";
      }
      else if (cnt>=1 && cnt<=3) {
        msg="Enjoy!";
      }
      else if (cnt>=4) {
        msg="Too much!";
      }
      $scope.lunchMsg = msg;
    };
  }
})();
