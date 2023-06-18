const URL= "https://data.covid19india.org/csv/latest/case_time_series.csv";

let app= angular.module("Mycovidwebapp", []);
app.controller("MyCtrl",($scope, $http)=>{
    //this is controller 
    $scope.title = "stay home stay safe";

   console.log("App loaded");
   //calling api
   $http.get(URL).then(
    (response)=>{
//success

console.log(response.data);
$scope.all_data = response.data;

   }, 
   (error)=>{
    //error
    console.log(error);

   })
})