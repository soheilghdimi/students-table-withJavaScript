let table = document.getElementsByClassName("container")[0];
let students = [
    {
        id: 1,
        name: "soheil",
        family: "ghdimi"
    },
    {
        id: 2,
        name: "hamid",
        family: "ghdimi"
    },
    {
        id: 3,
        name: "vahid",
        family: "ghdimi"
    }
]

function render(arr) {
    table.innerHTML = "";
    arr.map(std => {
        table.innerHTML += `
            <td>${std.id}</td>
            <td>${std.name}</td>
            <td>${std.family}</td>
            <button onclick="deleteAfterClick(${std.id})">delete</button>    
            <button onclick="updateTable()">update</button>
        `
    })
}

function deleteAfterClick(id) {
    students = students.filter(std => std.id !== id)
    render(students);
}

function addTable() {
    let input = document.getElementsByClassName("input");
    if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
        alert("please fill the inputs");
    } else {
        students = [...students, {id: Number(input[0].value), name: input[1].value, family: input[2].value}]
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
    }
    render(students)
}

// function updateTable(id, newStudent) {
//     students = students.map(std => std.id === id ? newStudent : std)
//     newStudent = [...students, {id: Number(newStudent.id), name: newStudent.name, family: newStudent.family}]
//     render(students)
// }

render(students)