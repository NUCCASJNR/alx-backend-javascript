var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    var headerCell1 = document.createElement("th");
    var headerCell2 = document.createElement("th");
    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
renderTable(studentsList);
