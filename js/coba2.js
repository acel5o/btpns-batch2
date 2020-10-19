var SessionUser =[]
var navigasi = document.getElementsByClassName("navigasi")[0]
var thisNav = navigasi.children.outerHTML
var tampung =[]

function nav() {
    if (SessionUser.length==1) {
        thisNav = `<li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page1','Page2','Page3','Page4','Page5');">Beranda
              <span class="sr-only">(current)</span>
            </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page2','Page1','Page3','Page4','Page5');">Tentang</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page3','Page1','Page2','Page4','Page5');">Hubungi Kami</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page4','Page1','Page2','Page3','Page5');">Masuk</a>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page5','Page1','Page2','Page3','Page4');">Daftar</a>
      </li>
        `
    }
    else {
        thisNav =`<li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page1','Page2','Page3','Page4','Page5');">Beranda
              <span class="sr-only">(current)</span>
            </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page2','Page1','Page3','Page4','Page5');">Tentang</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page3','Page1','Page2','Page4','Page5');">Hubungi Kami</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page4','Page1','Page2','Page3','Page5');">Masuk</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="return show('Page5','Page1','Page2','Page3','Page4');">Daftar</a>
      </li>`
    }
    navigasi.innerHTML = thisNav
}

function show(shown,hidden,hidden1,hidden2,hidden3) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
}


function inputData(){
    var mail = document.daftarin.email
    var nama = document.daftarin.name
    var sandi = document.daftarin.password

        var obj = {
            "email" : mail.value,
            "name" : nama.value,
            "password" : sandi.value,
        }

        tampung.push(obj)
        document.daftarin.email.value =""
        document.daftarin.name.value  =""
        document.daftarin.password.value =""
        showData()    
        show('Page4','Page1','Page2','Page3','Page5');
    }

function Login(){
    var email = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for (i= 0; i<tampung.length; i++){
        if((tampung[i].email==email) && (tampung[i].password==password)){
            SessionUser.unshift(tampung[i])
            nav()
            show('Page5','Page4','Page2','Page3','Page1');
        } 
    }
}

function Logout(index){
    SessionUser.shift(tampung[index])
    show('Page5','Page1','Page2','Page3','Page4');
}


function editData(index){
  var mail = prompt("Email", tampung[index].email);
  var nama = prompt("Nama", tampung[index].name);
  var sandi = prompt("Password", tampung[index].password);
  var setuju = confirm("Edit Data?");
  if (setuju == true) {
      tampung[index].email=mail
      tampung[index].name=namag
      tampung[index].password=sandi
      showData()
  } 
}

function deleteRow(index){
        tampung.splice(index,1)
        document.daftarin.email.value =""
        document.daftarin.name.value  =""
        document.daftarin.password.value =""
        showData()
}

function showData() {
    
    var tableData = document.getElementById("hasil")
    
    var tr = tableData.children[0].children[0].outerHTML
    for (index = 0; index < tampung.length; index++) {
        var diti = tampung[index]
     
        tr += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${diti.email}</td>
                    <td>${diti.name}</td>
                    <td>${diti.password}</td>
                    <td>
                        <button  onclick='editData(${index})'>Edit</button>
                        <button  onclick='deleteRow(${index})'>Delete</button>
                        </td>
                </tr>`
    }
    // DOM manipulation
    tableData.innerHTML = tr
}