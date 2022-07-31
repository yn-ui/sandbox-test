// var vas1 = "変数";
// console.log(vas1);

// // 上書き
// vas1 = "変数の上書き";
// console.log(vas1);

// // 再宣言
// var vas1 = "変数の再宣言";
// console.log(vas1);

// let 上書き可、再宣言不可

// let name = "あすみ";
// console.log(name);

// name = "あすか";
// console.log(name);

// const 上書き不可、再宣言不可

// const age ="27";
// console.log(age);

// const age ="90";
// console.log(age);

// テンプレート文字列
// const name ="あすみ";
// const age = 27;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);

// const message2 = `私の名前は${name}ですyonn。年齢は${age}です。`
// console.log(message2);

// アロー関数 無名関数を簡潔に書くための記法
// 足し算をやってみよう〜！！
// const tashizan = (num1,num2) => {
//   return num1+num2;
// }
// console.log(tashizan(1,2));

// 半径✖️半径✖️3.14
const circle = (han) => {
  return han * han * 3;
};
console.log(circle(2));
