function inputData(){
    var email = document.forms['daftarin']['email']
    var nama = document.forms['daftarin']['name']
    var sandi = document.forms['daftarin']['password']
    var x = document.getElementById("hasil").rows.length;

    for(no=0; no < x; no++){
        
    }
    var tabel = document.getElementById('hasil');
    var baris = tabel.insertRow(no);
    var kolom5 = baris.insertCell(0);
    var kolom1 = baris.insertCell(1);
    var kolom2 = baris.insertCell(2);
    var kolom3 = baris.insertCell(3);
    var kolom4 = baris.insertCell(4);

    kolom5.innerHTML = no;
    kolom1.innerHTML = email.value;
    kolom2.innerHTML = nama.value;
    kolom3.innerHTML = sandi.value;
    kolom4.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)'>  <input type='button' value='Edit' onclick='ubah(this)'>"

    document.getElementById('email').value=""
    document.getElementById('name').value=""
    document.getElementById('password').value=""
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("hasil").deleteRow(i);
}

function ubah(u){
    var b = u.parentNode.parentNode.rowIndex;
    var data = document.getElementById('hasil').rows[b].cells[0]
    var data1 = document.getElementById('hasil').rows[b].cells[1]
    var data2= document.getElementById('hasil').rows[b].cells[2]
    var data3 = document.getElementById('hasil').rows[b].cells[3]

    var email1 = document.forms['daftarin']['email']
    var nama1 = document.forms['daftarin']['name']
    var sandi1 = document.forms['daftarin']['password']
    var ini = document.forms['daftarin']['ini']

    ini.value = data.innerHTML
    email1.value = data1.innerHTML
    nama1.value = data2.innerHTML
    sandi1.value = data3.innerHTML  
}

function saveEdit(){
    var email = document.forms['daftarin']['email']
    var nama = document.forms['daftarin']['name']
    var sandi = document.forms['daftarin']['password']
    var ini = document.forms['daftarin']['ini']

    var parame = ini.value;
    document.getElementById("hasil").deleteRow(parame);

    var tabel = document.getElementById('hasil');
    var baris = tabel.insertRow(parame);
    var kolom5 = baris.insertCell(0);
    var kolom1 = baris.insertCell(1);   
    var kolom2 = baris.insertCell(2);
    var kolom3 = baris.insertCell(3);
    var kolom4 = baris.insertCell(4);
    
    kolom1.innerHTML = email.value;
    kolom2.innerHTML = nama.value;
    kolom3.innerHTML = sandi.value;
    kolom4.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)'> <input type='button' value='Edit' onclick='ubah(this)'>"
    kolom5.innerHTML = parame;
    
    
    document.getElementById('email').value=""
    document.getElementById('name').value=""
    document.getElementById('password').value=""
}