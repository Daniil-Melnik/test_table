var personData = [
  '{"name":"Сергей", "secname" : "Рокотов", "age" : 37}',
  '{"name":"Иван", "secname" : "Арбенин", "age" : 45}',
  '{"name":"Игорь", "secname" : "Платонов", "age" : 23}',
  '{"name":"Владислав", "secname" : "Сергеев", "age" : 65}',
  '{"name":"Яна", "secname" : "Оранова", "age" : 12}',

  '{"name":"Юлия", "secname" : "Казанцева", "age" : 17}',
  '{"name":"Олег", "secname" : "Ильин", "age" : 25}',
  '{"name":"Фёдор", "secname" : "Букин", "age" : 55}',
  '{"name":"Иван", "secname" : "Рокотов", "age" : 75}',
  '{"name":"Пётр", "secname" : "Григорьев", "age" : 54}',

  '{"name":"Сергей", "secname" : "Иванов", "age" : 6}',
  '{"name":"Алёна", "secname" : "Варежкина", "age" : 5}',
  '{"name":"Алексей", "secname" : "Пельмешов", "age" : 58}',
  '{"name":"Аида", "secname" : "Лемешева", "age" : 99}',
  '{"name":"Иннокентий", "secname" : "Дукалис", "age" : 52}',

  '{"name":"Владимир", "secname" : "Терентьев", "age" : 38}',
  '{"name":"Игорь", "secname" : "Дементьев", "age" : 21}',
  '{"name":"Анастасия", "secname" : "Королёва", "age" : 42}',
  '{"name":"Кирилл", "secname" : "Максимов", "age" : 5}',
  '{"name":"Сергей", "secname" : "Миронов", "age" : 12}',

  '{"name":"Ольга", "secname" : "Соловьёва", "age" : 35}',
  '{"name":"Александр", "secname" : "Кондатоков", "age" : -1}',
];
var is_change = true;

var usname, ussecname, usage;
usname = true;
ussecname = true;
usage = true;

var num = 0;

var mg = 0;
n = personData.length;
n1 = personData.length;
n2 = 0;

var mg = 1;

console.log(n1);

//вывести первые 10 строк таблицы

if (n1 >= 10) {
  print(n1);
  n1 -= 10;
  n2 += 10;
  num++;
}

//переключить страницу вперёд

function fu1() {
  //console.log(n1);
  if (n1 != 0) {
    if (n1 < 10) {
      print(n1);
      n1 = 0;
      n2 = personData.length;
      num += 1;
    }

    if (n1 >= 10) {
      print(n1);
      num += 1;
      n1 -= 10;
      n2 += 10;
      //console.log(n1);
    }
    document.getElementById("num").innerHTML = num;
  }
}

//переключить страницу назад

function fu2() {
  if (num > 1) {
    for (i = 0; i < 10; i++) {
      var el1 = document.getElementById(i);
      if (el1.innerHTML != `<td></td><td></td><td></td>`) n1 += 1;
    }

    //console.log("num=" + num);
    num -= 2;

    //console.log("n1 = " + n1);

    print(n2);
    n2 -= 10;
    num++;

    document.getElementById("num").innerHTML = num;
  }
}

//сортировать таблицу

function sort() {
  n1 = personData.length;
  n2 = 0;
  //console.log("nn1 = " + n1);
  num = 0;
  var val = document.getElementById("main-form");
  var stat = val.state.value;
  for (let j = personData.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (
        (JSON.parse(personData[i]).age < JSON.parse(personData[i + 1]).age &&
          stat == "1") ||
        (JSON.parse(personData[i]).age > JSON.parse(personData[i + 1]).age &&
          stat == "2")
      ) {
        let temp1 = personData[i];
        personData[i] = personData[i + 1];
        personData[i + 1] = temp1;
      }
    }
  }
  print(n1);
  n1 -= 10;
  n2 += 10;
  num++;
  var txtel = document.getElementById("num");
  txtel.innerHTML = num;
}

//редактировать графу таблицы

function fu() {
  var el = document.getElementById("ifi");
  var txtname = document.getElementById("txtname").value;
  var txtsecname = document.getElementById("txtsecname").value;
  var txtage = document.getElementById("txtage").value;
  if (isvalid(txtage)) {
    //console.log(isvalid(txtage));
    var jsob = {
      age: txtage,
      name: txtname,
      secname: txtsecname,
    };
    //console.log(JSON.stringify(jsob));
    personData.push(JSON.stringify(jsob));

    num = personData.length / 10 - (personData.length % 10) / 10;
    n1 = personData.length % 10;
    for (i = num * 10; i < num * 10 + (personData.length % 10); i++) {
      for (i = num * 10; i < num * 10 + n1; i++) {
        //console.log(personData[i]);
        jsel = JSON.parse(personData[i]);
        var el1 = document.getElementById(i - num * 10);
        el1.innerHTML = `<td>${jsel.name}</td><td>${jsel.secname}</td><td>${jsel.age}</td>`;
      }
      while (i - num * 10 < 10) {
        var el1 = document.getElementById(i - num * 10);
        el1.innerHTML = `<td></td><td></td><td></td>`;
        i++;
      }
    }
    num++;
    var txtel = document.getElementById("num");
    txtel.innerHTML = num;
    n1 = 0;
    n2 = personData;
  } else alert("Возраст это число");
}

function isvalid(str) {
  strarr = str.split("");
  count = 0;
  strarr.forEach((el) => {
    if (el in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) count++;
  });
  if (count == str.length) return true;
  else return false;
}

//скрыть\открыть столбец таблицы

var usname, ussecname, usage;
usname = true;
ussecname = true;
usage = true;

function pryat1() {
  num = 0;
  usname = !usname;
  n1 = personData.length;
  n2 = 0;
  print(n1);
  n1 -= 10;
  n2 += 10;
  num++;
}

function pryat2() {
  num = 0;
  ussecname = !ussecname;
  n1 = personData.length;
  n2 = 0;
  print(n1);
  n1 -= 10;
  n2 += 10;
  num++;
}

function pryat3() {
  num = 0;
  usage = !usage;
  n1 = personData.length;
  n2 = 0;
  print(n1);
  n1 -= 10;
  n2 += 10;
  num++;
}

//функция вывода таблицы на экран

function print(n3) {
  if (n3 >= 10) {
    for (i = 0; i < 10; i++) {
      var el1 = document.getElementById(i);
      var jsel = JSON.parse(personData[num * 10 + i]);
      if (usname && ussecname && usage == true)
        el1.innerHTML = `<td class="a">${jsel.name}</td><td class="b">${jsel.secname}</td><td class="c">${jsel.age}</td>`;
      if (usname == true && ussecname == true && usage == false)
        el1.innerHTML = `<td class="a">${jsel.name}</td><td class="b">${jsel.secname}</td><td class="c"></td>`;
      if (usname == true && ussecname == false && usage == false)
        el1.innerHTML = `<td class="a">${jsel.name}</td><td class="b"></td><td class="c"></td>`;
      if (usname == false && ussecname == false && usage == false)
        el1.innerHTML = `<td class="a"></td><td class="b"></td><td class="c"></td>`;
      if (usname == true && ussecname == false && usage == true)
        el1.innerHTML = `<td class="a">${jsel.name}</td><td class="b"></td><td class="c">${jsel.age}</td>`;
      if (usname == false && ussecname == true && usage == true)
        el1.innerHTML = `<td class="a"></td><td class="b">${jsel.secname}</td><td class="c">${jsel.age}</td>`;
      if (usname == false && ussecname == false && usage == true)
        el1.innerHTML = `<td class="a"></td><td class="b"></td><td class="c">${jsel.age}</td>`;
      if (usname == false && ussecname == true && usage == false)
        el1.innerHTML = `<td class="a"></td><td class="b">${jsel.secname}</td><td class="c"></td>`;
    }
  }
  if (n3 < 10) {
    for (i = 0; i < n3; i++) {
      var el1 = document.getElementById(i);
      var jsel = JSON.parse(personData[num * 10 + i]);
      if (usname && ussecname && usage == true)
        el1.innerHTML = `<td>${jsel.name}</td><td>${jsel.secname}</td><td>${jsel.age}</td>`;
      if (usname == true && ussecname == true && usage == false)
        el1.innerHTML = `<td>${jsel.name}</td><td>${jsel.secname}</td><td></td>`;
      if (usname == true && ussecname == false && usage == false)
        el1.innerHTML = `<td>${jsel.name}</td><td></td><td></td>`;
      if (usname == false && ussecname == false && usage == false)
        el1.innerHTML = `<td></td><td></td><td></td>`;
      if (usname == true && ussecname == false && usage == true)
        el1.innerHTML = `<td>${jsel.name}</td><td></td><td>${jsel.age}</td>`;
      if (usname == false && ussecname == true && usage == true)
        el1.innerHTML = `<td></td><td>${jsel.secname}</td><td>${jsel.age}</td>`;
      if (usname == false && ussecname == false && usage == true)
        el1.innerHTML = `<td></td><td></td><td>${jsel.age}</td>`;
      if (usname == false && ussecname == true && usage == false)
        el1.innerHTML = `<td></td><td>${jsel.secname}</td><td></td>`;
    }
    while (i < 10) {
      var el1 = document.getElementById(i);
      el1.innerHTML = `<td></td><td></td><td></td>`;
      i++;
    }
  }
  document.querySelectorAll("tr").forEach((ell) => {
    ell.querySelectorAll("td").forEach((eLL) => {
      eLL.onclick = function () {
        if (is_change) {
          if (usname && ussecname && usage) {
            eLL.outerHTML = `<input type="text" placeholder="Замена" id="txtchange" />`;
            is_change = false;
            var but = document.createElement("input");
            var idel = ell.id;
            but.type = "button";
            but.value = "сохранить";
            but.id = "chng";
            var buttn = document.getElementById("buttn");
            buttn.append(but);
            but.onclick = function () {
              var newtxt = document.getElementById("txtchange").value;
              if (eLL.class == "a" || eLL.class == "b") {
                document.getElementById(
                  "txtchange"
                ).outerHTML = `<td>${newtxt}</td>`;
                but.remove();
                eLL.style = `background: navy; border-radius: 25px; height: 70px;`;
                console.log(ell.outerText);
                var str = ell.outerText.split("\t");
                console.log(str);
                var el = JSON.parse(personData[parseInt(idel)]);
                el.name = str[0];
                el.secname = str[1];
                el.age = str[2];
                personData[(num - 1) * 10 + parseInt(idel)] =
                  JSON.stringify(el);
                console.log(JSON.stringify(el));
                console.log((num - 1) * 10 + parseInt(idel));
                personData.forEach((elem) => {
                  console.log(elem);
                });
              }
              if (eLL.class == "c") {
                if (isvalid(newtxt)) {
                  document.getElementById(
                    "txtchange"
                  ).outerHTML = `<td>${newtxt}</td>`;
                  but.remove();
                  eLL.style = `background: navy; border-radius: 25px; height: 70px;`;
                  console.log(ell.outerText);
                  var str = ell.outerText.split("\t");
                  console.log(str);
                  var el = JSON.parse(personData[parseInt(idel)]);
                  el.name = str[0];
                  el.secname = str[1];
                  el.age = str[2];
                  personData[(num - 1) * 10 + parseInt(idel)] =
                    JSON.stringify(el);
                  console.log(JSON.stringify(el));
                  console.log((num - 1) * 10 + parseInt(idel));
                  personData.forEach((elem) => {
                    console.log(elem);
                  });
                } else alert("Возраст только числом");
              }
              update();
              is_change = true;
            };
          }
        }
      };
    });
  });

  var td_arr = document.querySelectorAll("td");
  for (i = 0; i < td_arr.length; i += 3) {
    td_arr[i].class = "a";
    td_arr[i + 1].class = "b";
    td_arr[i + 2].class = "c";
  }

  var usname_arr = document.querySelectorAll(".a");
  if (usname == false) {
    usname_arr.forEach((usar) => {
      usar.style = `background: #4169e1; border-radius: 25px; height: 70px;`;
    });
  } else {
    usname_arr.forEach((usar) => {
      usar.style = `background: navy; border-radius: 25px; height: 70px;`;
    });
  }

  var ussecname_arr = document.querySelectorAll(".b");
  if (ussecname == false) {
    ussecname_arr.forEach((usar) => {
      usar.style = `background: #4169e1; border-radius: 25px; height: 70px;`;
    });
  } else {
    ussecname_arr.forEach((usar) => {
      usar.style = `background: navy; border-radius: 25px; height: 70px;`;
    });
  }

  var usage_arr = document.querySelectorAll(".c");
  if (usage == false) {
    usage_arr.forEach((usar) => {
      usar.style = `background: #4169e1; border-radius: 25px; height: 70px;`;
    });
  } else {
    usage_arr.forEach((usar) => {
      usar.style = `background: navy; border-radius: 25px; height: 70px;`;
    });
  }
}

//доработать на последнюю страницу
function update() {
  if (n1 > 0) {
    console.log("NO");
    n1 += 10;
    n2 -= 10;
    num--;
    print(n1);
    n1 -= 10;
    n2 += 10;
    num++;
  } else {
    console.log("YES");
    n1 += personData.length % 10;
    n2 -= personData.length % 10;
    num--;
    console.log(n1);
    print(n1);
    n1 -= personData.length % 10;
    n2 += personData.length % 10;
    num++;
  }
}
