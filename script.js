// 1.文字列の表示
console.log("Hello, JavaScript");
// →Hello, JavaScript
console.log("10 - 6");
// →10 - 6


// 2.文字列の連結
var firstName = "太郎";
var lastName = "山田";
console.log("こんにちは、" + lastName + firstName);
// →こんにちは、山田太郎


// 3.円の面積を求めよう
var radius = 5;
console.log(radius * radius * 3); 
// →75


// 4.少数の計算
console.log(7 + 3.1);
// →10.1
console.log(25 * 1.4);
// →35
var height = 1.7;
console.log("身長は" + height + "メートルです");
// →身長は1.7メートルです


// 5.BMIを求めよう
// 身長の変数
var height = 1.7;
// 体重の変数
var weight = 60;

// BMIの変数(体重 ÷ 身長 ÷ 身長)
var BMI = weight / height / height;
console.log("BMIは" + BMI + "です");
// →BMIは20.76124です

// 適正体重の変数(身長 × 身長 × 22)
var body = height * height * 22;
console.log("適正体重は" + body + "kgです");
// →適正体重は63.57999kgです


// 6.BMIを求めよう2
// 身長の変数
var height = 1.7;
// 体重の変数
var weight = 60;

// BMIの変数(体重 ÷ 身長 ÷ 身長)
var BMI = weight / height / height;
console.log("BMIは" + BMI + "です");
// →BMIは20.76124です

// 適正体重の変数(身長 × 身長 × 22)
var body = height * height * 22;
console.log("適正体重は" + body + "kgです");
// →適正体重は63.57999kgです

if (BMI < 18.5) {
  console.log("痩せ気味です");
} else if (BMI >= 18.5 && BMI < 25) {
  console.log("普通です");
} else {
  console.log("肥満気味です");
}
// →普通です