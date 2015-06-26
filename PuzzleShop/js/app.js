var Items = angular.module('ItemsModule', ["ngRoute", "ngCart"]);

var itemAddress = '/api/ItemsTables/';
var loginAddress = '/api/Logins/';

var url = "";

Items.config(function ($routeProvider) {
    $routeProvider
        .when('/table',
    {
        templateUrl: 'Views/table.html',
        controller: 'itemController'
    });
    $routeProvider
    .when('/table/:category',
    {
        templateUrl: 'Views/table.html',
        controller: 'itemController'
    });
    $routeProvider
        .when('/cart',
    {
        templateUrl: 'Views/cart.html',
        controller: 'itemController'
    });
    $routeProvider
      .when('/registration',
  {
      templateUrl: 'Views/registration.html',
      controller: 'loginController'
  });
    $routeProvider
     .when('/login',
 {
     templateUrl: 'Views/login.html',
     controller: 'loginController'
 });
    $routeProvider
    .when('/detail',
    {
        templateUrl: 'Views/detail.html',
        controller: 'itemController'
    });
    $routeProvider
   .when('/Category',
   {
       templateUrl: 'Views/CategoryTable.html',
       controller: 'categoryController'
   });
    $routeProvider
     .when('/table/:category/:subcategory',
     {
         templateUrl: 'Views/SubCategoryTable.html',
         controller: 'subCategoryController'
     });
    $routeProvider
    .when('/table/:detailId',
    {
        templateUrl: 'Views/detail.html',
        controller: 'itemController'
    });

    $routeProvider.otherwise({ redirectTo: '/table' });
});


Items.factory('itemTableFactory', function ($http) {
    return {
        getitemsList: function () {
            url = itemAddress + "GetItemsTable";
            return $http.get(url);
        },
        getcategorylist: function () {
            url = itemAddress + "GetCategoryTable";
            return $http.get(url);
        },
        getsubcategorylist: function (id) {
            url = itemAddress + "GetSubCategoryTable" + "/" + id;
            return $http.get(url);
        },

        getsubItems: function (subItem) {
            
            url = itemAddress + "PostSubItems";
            return $http.post(url, subItem);
        },
        getitem: function (id) {
            url = itemAddress + "GetItemsTable" + "/" + id;
            return $http.get(url);
        },
        additem: function (item) {
            url = itemAddress + "PostItem";
            return $http.post(url, item);
        },
        deleteitem: function (item) {
            url = itemAddress + "DeleteItem/" + item.Id;
            return $http.delete(url);
        },
        updateitem: function (item) {
            url = itemAddress + "PutItem/" + item.Id;
            return $http.put(url, item);
        },
        postt: function (data) {
            url = itemAddress + "PostItemsTable/";
            return $http.post(url, data);
        }
    };
});
Items.factory('LoginFactory', function ($http) {
    return {
        getitemsList: function () {
            url = loginAddress + "GetLogins";
            return $http.get(url);
        },
        getitem: function (item) {
            url = loginAddress + "GetLogin" + item.Id;
            return $http.get(url);
        },
        additem: function (item) {
            url = loginAddress + "PostRegistration";
            return $http.post(url, item);
        },
        deleteitem: function (item) {
            url = loginAddress + "DeleteLogin/" + item.Id;
            return $http.delete(url);
        },
        updateitem: function (item) {
            url = loginAddress + "PutLogin/" + item.Id;
            return $http.put(url, item);
        },
        postt2: function (item) {
            url = loginAddress + "PostLogin";
        return $http.post(url, item);
    }

    };
});
