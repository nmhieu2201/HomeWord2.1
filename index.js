
//Bài 1:
/**
 * Input: Nhập num1,num2,num3
 * Process: 1.Lấy input
 *          2.Tạo ra 1 biến tạm. Lập biểu thức điều kiện so sánh 3TH: num1 vs num2, num1 vs num3, num2 vs num3; 
 *          nếu  num1 > num2 thì ta đổi giá trị của num1 vs num2 bằng cách : tạm = num1; num1 = num2; num2=tạm
 *          vs 2 TH còn lại thì làm tuong tự
 *          .Log ra màn hình
 * Output: In ra 3 số theo thứ tự tăng dần
 */
var num1 = 323;
var num2= 600;
var num3 = 2;
var temp;
if(num1>num2){
    temp=num1;
    num1=num2;
    num2=temp;
}

if(num1>num3){
    temp=num1;
    num1=num3;
    num3=temp;
}


if(num2>num3){
    temp=num2;
    num2=num3;
    num3=temp;
}
//Bài 2: 
/**
 * Input: Nhập thuộc tính của Ba, Mẹ, Anh Chị
 * Process.1Lấy input.
 *         2. Tạo ra biến isLogin. Lập biểu thức điều kiện kiểm tra giá trị của isLogin.
 *          3.Log ra màn hình kết quả
 * Output. Hiển thị kết quả
 */

var father="father";
var mother="mother";
var sister="sister";
var brother = "brother";
var isLogin=sister ;
if (isLogin===mother){
    console.log("Hello Mother");
}
else
if (isLogin===father){
    console.log("Hello Father ");
}
else
if (isLogin===brother){
    console.log("Hello Brother");
}
else
if (isLogin===sister){
    console.log("Hello Sister");
}

console.log("3 số sau khi sắp xếp là: ",num1,num2,num3);
//Bài 3:
/**
 * Input: Nhập vào 3 số 
 * Process: 
 *      1.Lấy 3 số num1,num2,num3
 *      2.Tạo ra 1 biến đếm = 0,Lập biểu thức điều kiện kiểm tra từng số nếu nums %2 ===0 dem++;
 *      3.Log ra màn hình kết quả : số số chẵn là dem, số số lẻ 3-dem;
 * Ouput. SỐ số chẵn và số sổ lẻ
 */

var number1 = 3;
var number2 = 4;
var number3 = 3;
var countEven=0 ;
if (number1 % 2 === 0){
    countEven++;
}
if (number2 % 2 === 0){
    countEven++;
}
if (number3 % 2 === 0){
    countEven++;
}
console.log ("Số số chẵn và Số số lẻ lần lượt là: ", countEven , 3-countEven);
//Bài 4:
/**
 * Input: Nhập vào 3 cạnh a,b,c của tam giác.
 * Process: 1.Lấy Input
 *          2.Lập biểu thức điều kiện kiểm tra các trường hợp có thể xảy ra 
 *              Tam giác cân: 2 cạnh bất kì bằng nhau và khác vs cạnh còn lại
 *              Tam giác đềuL: 3 cạnh bằng nhau
 *              Tam giác vuông: Tổng bình phuognw của 2 cạnh bằng bình phương cạnh còn lại
 *              Tam giác thương: 3 cạnh khác nhau
 *              Tam giác không tồn tại nếu 2 cạnh bất kì nhỏ hơn cạnh còn lại.
 *          3. Xuất ra màn hình kết quả
 * Output:Xuất ra kết quả tam giác gì 
 */
var a = 3;
var b = 2;
var c =4 ;
if (a+b>c && a+c >b && b+c>a){
    if ( (a===b && a!==c) || (c===b && c!==a)) {
        console.log ("Tam giác cân");
    }
    else
    if ( a===b && a===c) {
        console.log ("Tam giác đều");
    }
    else
    if (((a*a+b*b)==c*c) || ((c*c+b*b)==a*a)){
        console.log("Tam giác vuông")
    }
    else {
        console.log("Tam giác thường");
    }
}
else {
    console.log("Tam giác không tồn tại");
}
