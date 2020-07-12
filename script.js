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
} else if (BMI >= 18.5 && BMI <= 25) {
  console.log("普通です");
} else {
  console.log("肥満気味です");
}
// →普通です


// 7.FizzBuzz
for (var number = 1; number <= 100; number += 1) {
  // 3でも5でも割り切れる条件(number % 15 === 0)でも可
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
// →1.2.Fizz.4.Buzz.Fizz...89.FizzBuzz.91.92.Fizz...98.Fizz.Buzz


// 8.平均点の算出
var scores = [88, 62, 65, 21, 47, 92, 57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

// 合計値の定義(足す前は0)
var sum = 0;

// インデント番号の繰り返し処理　.lengthで配列内の要素数を定義
for (var i = 0; i < scores.length; i += 1) {
  // scores[i]の各点数を上から下まで繰り返しsumに足していく
  sum += scores[i];
}

// 平均点の定義(総数 / 要素数(数字の数))
var ave = sum / scores.length;
console.log("平均点は" + ave + "点です");
// →平均点は71点です


// 9.最高点の算出
var scores = [88, 62, 65, 21, 47, 92, 57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

// 合計値の定義(足す前は0)
var sum = 0;
// 最高点の定義(求める前の状態は0)
var max = 0;

// インデント番号の繰り返し処理　.lengthで配列内の要素数を定義
for (var i = 0; i < scores.length; i += 1) {
  // scores[i]の各点数を上から下まで繰り返しsumに足していく
  sum += scores[i];
  
  // maxに入っている変数の値よりscores[i]の数値が大きい場合、その数値でmaxの変数の値を上書きする
  // ※配列内の最も大きい数値で比較
  if (max < scores[i]) {
    max = scores[i];
  }
}

// 平均点の定義(総数 / 要素数(数字の数))
var avg = sum / scores.length;
console.log("平均点は" + avg + "点です");
// →平均点は71点です

// 最高点
console.log("最高点は" + max + "点です");
// →最高点は98点です


// 10.オブジェクトの値の表示
var user = {
  name: '太郎',
  age: 21,
  nationality: '日本',
};

console.log("名前：" + user.name);
console.log("年齢：" + user.age);
console.log("国籍：" + user.nationality);
// →名前：太郎
// →年齢：21
// →国籍：日本


// 11.配列内にあるオブジェクト
var users = [
  {
    name: '太郎',
    age: 21,
    nationality: '日本',
  },
  {
    name: 'リリー',
    age: 37,
    nationality: 'イギリス',
  },
  {
    name: 'ジョン',
    age: 16,
    nationality: 'アメリカ',
  },
];

console.log("2人目の名前：" + users[1].name);
console.log("3人目の国籍：" + users[2].nationality);
// →2人目の名前：リリー
// →3人目の国籍：アメリカ


// 12.配列内にあるオブジェクト2
var users = [
  {
    name: '太郎',
    age: 21,
    nationality: '日本',
  },
  {
    name: 'リリー',
    age: 37,
    nationality: 'イギリス',
  },
  {
    name: 'ジョン',
    age: 16,
    nationality: 'アメリカ',
  },
];

// 人数：⚪︎人目の定義
var number = 0;

// インデント番号の繰り返し処理　.lengthで配列内の要素数を定義
for (var i = 0; i < users.length; i += 1) {
  // インデント番号に繰り返し１を足した数字が人数
  number = i + 1;
  console.log(number + "人目");
  console.log("名前：" + users[i].name);
  console.log("年齢：" + users[i].age);
  console.log("国籍：" + users[i].nationality);
}
// →1人目
// →名前：太郎
// →年齢：21
// →国籍：日本
// 以下繰り返し