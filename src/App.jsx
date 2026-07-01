function App() {
  const students = [
    { id: 1, name: "Ali", marks: 95 },
    { id: 2, name: "Ahmed", marks: 82 },
    { id: 3, name: "Sara", marks: 76 },
    { id: 4, name: "Ayesha", marks: 68 },
    { id: 5, name: "Usman", marks: 57 },
    { id: 6, name: "Hassan", marks: 43 },
  ];

  const Pass = ({ student }) => (
    <div>
      <h3>{student.name}</h3>
      <p>Marks: {student.marks}</p>
    </div>
  );

  const Fail = ({ student }) => (
    <div>
      <h3>{student.name}</h3>
      <p>Marks: {student.marks}</p>
      <p>Status: Fail ❌</p>
    </div>
  );

  const Grade = (marks) => {
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else if (marks >= 50) return "E";
    return "F";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Result Assignment</h1>

      {students.map((student) => (
        <div key={student.id}>
          {student.marks >= 50 ? (
            <Pass student={student} />
          ) : (
            <Fail student={student} />
          )}

          <p>
            <strong>Grade:</strong> {Grade(student.marks)}
          </p>

          {/* 1- hr after each result */}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;






