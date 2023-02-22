//result - <tbody>
var el = document.getElementById('result');
//empty array
var names = [];
var designation = [];

//Add a new record
function Create() {
    //input type - Full Name
    var el = document.getElementById('name')
    var name = el.value;
    if (name) {
        //appends the set of elements(Name column)
        names.push(name.trim());
        el.value = ''; //Once added the input field name becomes empty
        displayData();// Display the added record in the table
    }
    var e2 = document.getElementById('des')
    var des = e2.value;
    if (des) {
        //appends the set of elements(Designation column)
        designation.push(des.trim());
        e2.value = ''; //Once added the input field des becomes empty
        displayData(); // Display the added record in the table
    }
    displayData();
};

//Delete the records from the table
function Delete(item) {
    names.splice(item, 1); //Removes the current item from the array
    designation.splice(item, 1);
    displayData();

};

//Edit the selected record and update the changes in the table
function Edit(item) {
    var el = document.getElementById('update_name');
    el.value = names[item];
    var e2 = document.getElementById('update_des');
    e2.value = designation[item];
    //Shows the edit option
    document.getElementById('edit').style.display = 'inline';
    //Hides the create option 
    document.getElementById('create').style.display = 'none';
    //document.getElementById('create').style.display = 'inline';
    //current function(instead of this.name we will be using self.name)
    self = this; 

    document.getElementById('update').onsubmit = function () {
        var name = el.value;
        var des = e2.value;
        if (name && des) {
            //Removes the current item and replaces with the updated content
            self.names.splice(item, 1, name.trim());
            self.designation.splice(item, 1, des.trim());
            self.displayData();
            //Once updated hides the edit option and shows the Create option
            buttonToggle();
            document.getElementById('create').style.display = 'inline';
        }
    }
};

//Toggle between Create and Edit option
function buttonToggle() {
    document.getElementById('edit').style.display = 'none';
    document.getElementById('create').style.display = 'inline';
}

//Created records are reflected in the table
function displayData() {
    var data = '';
    if (names.length > 0) {
        for (i = 0; i < names.length; i++) {
            //Dynamic column creation
            data += '<tr>';
            data += '<td>' + names[i] + '</td>';
            data += '<td>' + designation[i] + '</td>';
            data += '<td colspan="2"><button class="btn btn-warning" onclick="Edit(' + i + ')"><i class="fa-regular fa-pen-to-square"></i></button> | <button class="btn btn-danger" onclick="Delete(' + i + ')"><i class="fa-regular fa-trash-can"></i></button></td>';
            data += '</tr>';
        }
    }
    el.innerHTML = data;
};

//Invoking the functions on Window.load
displayData();
buttonToggle();