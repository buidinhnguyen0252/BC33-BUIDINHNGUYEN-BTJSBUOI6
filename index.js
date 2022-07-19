//Bài 1 : Tìm số nguyên dương nhỏ nhất ( 1+2+..n >10000)
function BT1() {
  var a = 0;
  var b = 0;
  for (var n = 1; n < 1e4; n++)
    if (((a += n), console.log(a), a > 1e4)) {
      console.log(n);
      b = n;
      break;
    }
  var result = (document.getElementById("resultBT1").innerHTML =
    ("Số nguyên dương nhỏ nhất là :", b));
}

//Bài 2 : Tính tổng S(n) = x+x^2 + ...x^n
function BT2() {
  var x = document.getElementById("txtNum1BT2").value;
  var n = document.getElementById("txtNum2BT2").value;
  var i = 0;
  for (j = 1; j <= n; j++) {
    i += Math.pow(x, j);
  }
  var result2 = (document.getElementById("resultBT2").innerHTML = +i);
}

//Bài 3 : tính giai thừa
function BT3() {
  var n = +document.getElementById("txtNumBT3").value;
  var i = 1;
  for (j = 1; j <= n; j++) {
    i *= j;
  }
  var result3 = (document.getElementById("resultBT3").innerHTML =
    "Giai thừa : " + i);
}

//Bài 4 : tạo thẻ div
function BT4() {
  var a = " ";
  for (i = 1; i <= 10; i++)
    if (i % 2 == 0) {
      a += "<div class='bg-danger text-white p-2'>Div chẵn</div>";
    } else {
      a += "<div class='bg-primary text-white p-2'>Div lẻ</div>";
    }
  var result4 = (document.getElementById("resultBT4").innerHTML = a);
}
