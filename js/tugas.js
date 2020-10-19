var tampung = [];

function add() {
    let emaiil = document.querySelector("#email").value;
    let nama = document.querySelector("#name").value;
    let nami = document.querySelector("#password").value;

   document.getElementById('email').value = ''
   document.getElementById('name').value = ''
   document.getElementById('password').value = ''
   for (var urut = 0; urut < tampung.length; urut++) {
    var jumlah = urut+1
   }
  
    var tampung1 = {
        "nomor" : jumlah,
        "email" : emaiil,
        "nama" : nama,
        "nami" : nami,
        }
   
   tampung.push(tampung1);
   show();
}

function show() {
    var tableData = document.querySelector("#hasil");
    var tr = tableData.children[0].children[0].outerHTML
    for (var index = 0; index < tampung.length; index++) {
        
        tr  += `
            <tr>
                <td id=urutan>${index+1}</td>
                <td>${tampung[index].email}</td>
                <td>${tampung[index].nama}</td>
                <td>${tampung[index].nami}</td>
                <td><input type="button" name="delete" value="Delete" onclick="hapus()">
                <input type="button" name="delete" value="Edit" ></td>
            </tr>
        `   
    }
    tableData.innerHTML = tr;

}

function hapus(x){
    tampung.splice(x,1)
    show();
}
   