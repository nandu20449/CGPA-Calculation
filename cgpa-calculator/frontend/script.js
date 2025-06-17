function generateInputs() {
  const count = document.getElementById('subjectCount').value;
  const container = document.getElementById('gradeInputs');
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const select = document.createElement('select');
    select.innerHTML = '<option value="10">A+</option><option value="9">A</option><option value="8">B</option><option value="7">C</option><option value="6">D</option><option value="5">E</option><option value="0">F</option>';
    container.appendChild(document.createTextNode(`Subject ${i+1}: `));
    container.appendChild(select);
    container.appendChild(document.createElement('br'));
  }
}

function calculateSGPA() {
  const selects = document.querySelectorAll('#gradeInputs select');
  let total = 0;
  selects.forEach(s => total += parseInt(s.value));
  const sgpa = (total / selects.length).toFixed(2);
  document.getElementById('result').textContent = `SGPA: ${sgpa}`;
}

function calculateCGPA() {
  const cgpa = prompt("Enter your previous CGPA:");
  const currentSGPA = document.getElementById('result').textContent.split(': ')[1];
  if (cgpa && currentSGPA) {
    const result = ((parseFloat(cgpa) + parseFloat(currentSGPA)) / 2).toFixed(2);
    document.getElementById('result').textContent = `CGPA: ${result}`;
  } else {
    alert("Calculate SGPA first or provide valid input.");
  }
}