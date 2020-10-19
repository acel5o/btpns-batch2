var allData = [];

function showData() {
    var tableData = document.getElementsByClassName("table")[0];
    var tr = tableData.children[0].children[0].outerHTML;

    for (i=0; i<allData.length; i++) {
        tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${allData[i][0]}</td>
                <td>${allData[i][1]}</td>
                <td>${allData[i][2]}</td>
                <td>
                    <a onClick="updateData(${i})" href=# >Ubah </a> ||
                    <a onClick="deleteData(${i})" href=# > Hapus</a>
                </td>
            </tr>
        `;
    }
    tableData.innerHTML = tr
    console.log(allData);
}

function addData() {
    var isi = [];
    isi[0]  = document.getElementById("email").value;
    isi[1]  = document.getElementById("name").value;
    isi[2]  = document.getElementById("password").value;

    allData.push(isi);
    showData();
    resetForm();
}

function deleteData(id) {
    allData.splice(id, 1);
    showData();
}

function updateData(id) {
    var email = document.getElementById("mail").value   = allData[id][0];
    var namaa = document.getElementById("nama").value   = allData[id][1];
    var passs = document.getElementById("sandi").value  = allData[id][2];

    allData[id][0] = email;
    allData[id][1] = namaa;
    allData[id][2] = passs;
}

function editedData() {
    var edited = [];
    edited[0]  = document.getElementById("mail").value;
    edited[1]  = document.getElementById("nama").value;
    edited[2]  = document.getElementById("sandi").value;

    var i = allData.length;
    allData[i-1] = edited;

    showData();
}

function resetForm() {
    document.getElementById("mail").value          = "";
    document.getElementById("nama").value           = "";
    document.getElementById("sandi").value       = "";
}