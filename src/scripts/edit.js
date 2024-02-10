const params = new URLSearchParams(window.location.search);
const studentId = params.get("id");
const storedData = JSON.parse(localStorage.getItem(studentId));

document.getElementById("firstname").value = storedData.student_first_name;
document.getElementById("lastname").value = storedData.student_last_name;
document.getElementById("id").value = storedData.student_id;
document.getElementById("course").value = storedData.student_course;
document.getElementById("note").value = storedData.student_note;

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  localStorage.removeItem(studentId);

  const dataStudents = {
    id: generateUniqueId(),
    student_first_name: document.getElementById("firstname").value,
    student_last_name: document.getElementById("lastname").value,
    student_id: document.getElementById("id").value,
    student_course: document.getElementById("course").value,
    student_note: document.getElementById("note").value,
  };

  const uniqueId = generateUniqueId();
  const JSONStudentsData = JSON.stringify(dataStudents);

  localStorage.setItem(uniqueId, JSONStudentsData);
});

function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
