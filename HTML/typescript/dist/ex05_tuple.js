let tuple1 = ["green", 20];
let users;
users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', false]];
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week);
console.log(Week.Sun);
console.log(Week[0]);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color['Red']);
console.log(Color.Green);
