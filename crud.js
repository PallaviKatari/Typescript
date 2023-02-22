var el = document.getElementById('result');
var names = [];
var designation = [];

function Create() {
    var el = document.getElementById('name')
    var name = el.value;
    if (name) {
        names.push(name.trim());
        el.value = '';
        displayData();
    }
    var e2 = document.getElementById('des')
    var des = e2.value;
    if (des) {
        designation.push(des.trim());
        e2.value = '';
        displayData();
    }
    displayData();
};

function Delete(item) {
    names.splice(item, 1);
    designation.splice(item, 1);
    displayData();

};

function Edit(item) {
    var el = document.getElementById('update_name');
    el.value = names[item];
    var e2 = document.getElementById('update_des');
    e2.value = designation[item];
    document.getElementById('edit').style.display = 'inline';
    document.getElementById('create').style.display = 'none';
    self = this;

    document.getElementById('update').onsubmit = function () {
        var name = el.value;
        var des = e2.value;
        if (name && des) {
            self.names.splice(item, 1, name.trim());
            self.designation.splice(item, 1, des.trim());
            self.displayData();
            buttonToggle();
            document.getElementById('create').style.display = 'inline';
        }
    }
};


function buttonToggle() {
    document.getElementById('edit').style.display = 'none';
    document.getElementById('create').style.display = 'inline';
}


function displayData() {
    var data = '';
    if (names.length > 0) {
        for (i = 0; i < names.length; i++) {
            data += '<tr>';
            data += '<td>' + names[i] + '</td>';
            data += '<td>' + designation[i] + '</td>';
            data += '<td colspan="2"><button class="btn btn-warning" onclick="Edit(' + i + ')"><i class="fa-regular fa-pen-to-square"></i></button> | <button class="btn btn-danger" onclick="Delete(' + i + ')"><i class="fa-regular fa-trash-can"></i></button></td>';
            data += '</tr>';
        }
    }
    el.innerHTML = data;
};


displayData();
buttonToggle();