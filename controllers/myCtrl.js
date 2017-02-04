app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('single-item', {
            url: '/item/:id',
            templateUrl: 'single-item.html'
        })
});

app.service('fetch', function($http) {

    this.getData = function(){

        return $http.get("/products");
    },

    this.postData = function(item){

        var data = JSON.stringify({
                name: item
            });

        return $http.post("/products", data);
    }

    this.deleteData = function(id){

        return $http.delete("/products/"+id);
    }

    this.updateData = function(item){

        var data = JSON.stringify({
            name: item.name
        });
        console.log(data);
        return $http.put("/products/"+item.id, data);
    }
});

app.controller("myCtrl", function($scope, $stateParams, fetch) {

    //console.log($stateParams.description);

    $scope.products = [];
    $scope.item = {};
    $scope.singleItem = {};
    $scope.description = "";

    fetch.getData().then(function(response){
        $scope.products = response.data;
        //console.log($scope.products);
    });

    $scope.addItem = function () {

        $scope.errortext = "";

        if (!$scope.addMe) {return;}

        if ($scope.products.indexOf($scope.addMe) == -1) {
            fetch.postData($scope.addMe).then(function(response){
                $scope.products.push(response.data);
                $scope.addMe = "";
            })
        }
        else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }

    $scope.removeItem = function (x, index) {

        $scope.errortext = "";

        fetch.deleteData(x).then(function(response){

            $scope.products.splice(index, 1);
        });
    }

    $scope.editItemModalOpen = function (x) {

        $scope.item = x;
    }

    $scope.editItem = function (item) {

        //console.log(item);
        fetch.updateData(item).then(function(response){

            console.log(response);
        });
    }

    $scope.getSingleItem = function(item){

        $scope.singleItem = item;
    }
});
