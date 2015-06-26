Items.controller('loginController', function PostController($scope, $window, LoginFactory) {

    $scope.items = [];
    $scope.items2 = [];
    $scope.item = null;
    $scope.editMode = false;

    //get item
    $scope.get = function () {
        $scope.item = this.item;
        $window.location.href = "/Login.html";
    };

    //get all items
    $scope.getAll = function () {
        LoginFactory.getitemsList().success(function (data) {
            $scope.items = data;
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    };
   
    // add item
    $scope.add = function () {
        var currentitem = this.item;
        //if (currentitem != null && currentitem.Name != null && currentitem.SurName != null && currentitem.NicSurName != null && currentitem.Email != null && currentitem.Country != null && currentitem.City != null && currentitem.Street != null) {
        LoginFactory.additem(currentitem).success(function (data, result) {
          
            $scope.addMode = false;
            currentitem.itemId = data;
            $scope.items.push(currentitem);

            //reset form
            $scope.item = null;
            // $scope.additemform.$setPristine(); //for form reset
       
            //$window.location.href = "/Index.html";
            //$('#itemModel').modal('hide');
            console.log(result);
            if (result == 200)
            {
                alert(error);
            }
            else
            {
                $window.location.href = "/#/login";
               
            }
        }).error(function (data) {
            console.log("error");
            $scope.error = "An Error has occured while Adding item! " + data.ExceptionMessage;
        });
        //}

    };
    //$scope.login = function () {
    //    var currentitem = this.item;
    //    //if (currentitem != null && currentitem.Name != null && currentitem.SurName != null && currentitem.NicSurName != null && currentitem.Email != null && currentitem.Country != null && currentitem.City != null && currentitem.Street != null) {
    //    LoginFactory.additem(currentitem).success(function (data) {
    //        $scope.addMode = false;
    //        currentitem.itemId = data;
    //        $scope.items.push(currentitem);

    //        //reset form
    //        $scope.item = null;
    //        // $scope.additemform.$setPristine(); //for form reset
          

    //    }).error(function (data) {
    //        $scope.error = "An Error has occured while Adding item! " + data.ExceptionMessage;
    //    });
    //    //}

    //};


    //$scope.edit = function () {
    //    $scope.item = this.item;
    //    $scope.editMode = true;
    //    $('#itemModel').modal('show');
    //};

    ////update item
    //$scope.update = function () {
    //    var currentitem = this.item;
    //    itemFactory.updateitem(currentitem).success(function (data) {
    //        currentitem.editMode = false;

    //        $('#itemModel').modal('hide');
    //    }).error(function (data) {
    //        $scope.error = "An Error has occured while Updating item! " + data.ExceptionMessage;
    //    });
    //};

    //// delete item
    //$scope.delete = function () {
    //    currentitem = $scope.item;
    //    itemFactory.deleteitem(currentitem).success(function (data) {
    //        $('#confirmModal').modal('hide');
    //        $scope.items.pop(currentitem);

    //    }).error(function (data) {
    //        $scope.error = "An Error has occured while Deleting item! " + data.ExceptionMessage;

    //        $('#confirmModal').modal('hide');
    //    });
    //};

    //Model popup events
    $scope.showadd = function () {
        $scope.item = null;
        $scope.editMode = false;

    };

    //$scope.showedit = function () {
    //    $('#itemModel').modal('show');
    //};

    //$scope.showconfirm = function (data) {
    //    $scope.item = data;
    //    $('#confirmModal').modal('show');
    //};

    //$scope.cancel = function () {
    //    $scope.item = null;
    //    $('#itemModel').modal('hide');
    //}

    //// initialize your items data
    $scope.getAll();


    //$scope.Autorization = function (name) {
    //    LoginFactory.postt2().success(function (name) {
    //        $scope.items2 = name;
    //        console.log(name);
    //    }).error(function (name) {
    //        $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
    //        console.log(name);
    //    });
       

    //}
   
    $scope.Autorization = function () {
        var currentitem = this.item;
        LoginFactory.postt2(currentitem).success(function (result) {

            console.log(result);
            alert("Привет " + result.Name + " ты уёбок");
        }).error(function () {

            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
            console.log($scope.items2);

        });
    };

    $scope.getAll();
});
