import { useState } from "react"

function StudentComponent({ name, course, year }) {
  const [show, setShow] = useState(true)

  return (
    <div className="student-card">
      {/* TOP ROW: Name + Button */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        <h3 style={{ margin: 0 }}>{name}</h3>

        <button onClick={() => setShow(!show)}>
          {show ? "Hide Info" : "Show Info"}
        </button>
      </div>

      {/* EXTRA INFO (toggle) */}
      {show && (
        <div style={{ marginTop: "10px" }}>
          <p><strong>Course:</strong> {course}</p>
          <p><strong>Year:</strong> {year}</p>
        </div>
      )}
    </div>
  )
}

export default StudentComponent
