// Sample database of students categorized by section
const resultsDatabase = {
    "A": [
        { roll: 101, name: "Aarav Kumar", marks: { Math: 85, Science: 90, English: 78 }, total: 253, status: "PASS" },
        { roll: 102, name: "Neha Sharma", marks: { Math: 92, Science: 88, English: 95 }, total: 275, status: "PASS" }
    ],
    "B": [
        { roll: 101, name: "Rahul Verma", marks: { Math: 45, Science: 50, English: 60 }, total: 155, status: "PASS" },
        { roll: 102, name: "Priya Singh", marks: { Math: 30, Science: 40, English: 50 }, total: 120, status: "FAIL" }
    ],
    "C": [
        { roll: 101, name: "Amit Das", marks: { Math: 70, Science: 75, English: 80 }, total: 225, status: "PASS" }
    ]
};

function checkResult() {
    const section = document.getElementById("sectionSelect").value;
    const rollNo = parseInt(document.getElementById("rollInput").value);
    const displayBox = document.getElementById("resultDisplay");

    if (!rollNo) {
        displayBox.style.display = "block";
        displayBox.innerHTML = "<p style='color: red;'>Please enter a valid Roll Number.</p>";
        return;
    }

    // Find student in the selected section
    const sectionStudents = resultsDatabase[section] || [];
    const student = sectionStudents.find(s => s.roll === rollNo);

    displayBox.style.display = "block";

    if (student) {
        displayBox.innerHTML = `
            <h3>Result Details</h3>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Section:</strong> ${section}</p>
            <p><strong>Roll No:</strong> ${student.roll}</p>
            <p><strong>Marks:</strong> Math: ${student.marks.Math}, Science: ${student.marks.Science}, English: ${student.marks.English}</p>
            <p><strong>Total Marks:</strong> ${student.total}</p>
            <p><strong>Status:</strong> <span style="color: ${student.status === 'PASS' ? 'green' : 'red'};">${student.status}</span></p>
        `;
    } else {
        displayBox.innerHTML = `<p style='color: red;'>No record found for Roll Number ${rollNo} in Section ${section}.</p>`;
    }
}
