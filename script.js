let students=[];

function addStudent(){
 const name=document.getElementById('name').value;
 const course=document.getElementById('course').value;
 if(!name||!course) return;
 students.push({name,course});
 render();
}

function deleteStudent(i){
 students.splice(i,1);
 render();
}

function render(){
 const table=document.getElementById('studentTable');
 table.innerHTML='';
 students.forEach((s,i)=>{
 table.innerHTML += `<tr><td>${s.name}</td><td>${s.course}</td><td><button onclick="deleteStudent(${i})">Delete</button></td></tr>`;
 });
}
