let students=JSON.parse(localStorage.getItem('students'))||[];
function login(){if(user.value==='admin'&&pass.value==='admin123'){dashboard.style.display='block';msg.innerText='Login Successful';}else{msg.innerText='Invalid Login';}}
function addStudent() {
    const studentName = document.getElementById("name").value;
    const studentCourse = document.getElementById("course").value;
    const studentAttendance = document.getElementById("attendance").value;
    const studentMarks = document.getElementById("marks").value;

    if (!studentName || !studentCourse) {
        alert("Please fill all required fields");
        return;
    }

    students.push({
        name: studentName,
        course: studentCourse,
        attendance: studentAttendance,
        marks: studentMarks
    });

    localStorage.setItem("students", JSON.stringify(students));
    render();
}
function del(i){students.splice(i,1);localStorage.setItem('students',JSON.stringify(students));render();}
function render(){let q=(search.value||'').toLowerCase();table.innerHTML='';students.filter(s=>s.name.toLowerCase().includes(q)).forEach((s,i)=>{table.innerHTML+=`<tr><td>${s.name}</td><td>${s.course}</td><td>${s.attendance}</td><td>${s.marks}</td><td><button onclick="del(${i})">Delete</button></td></tr>`})}render();
