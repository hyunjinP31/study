let tuple1: [string, number] = ["green", 20]
let users: [number, string, boolean][]
users = [[1,'Neo',true],[2, 'Evan', false],[3,'Lewis',false]]

// enum 타입은 역방향 매핑을 지원 넣어진 값에 자동으로 0번부터 숫자가 할당되고
enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Week);
//콘솔에 찍힌 값
// {
//     '0': 'Sun',
//     '1': 'Mon',
//     '2': 'Tue',
//     '3': 'Wed',
//     '4': 'Thu',
//     '5': 'Fri',
//     '6': 'Sat',
//     Sun: 0,
//     Mon: 1,
//     Tue: 2,
//     Wed: 3,
//     Thu: 4,
//     Fri: 5,
//     Sat: 6
//   }
console.log(Week.Sun); //0
console.log(Week[0]); //'Sun'

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color)
console.log(Color['Red'])
console.log(Color.Green)
