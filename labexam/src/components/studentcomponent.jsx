import { useState } from "react"

function StudentComponent({ name, course, year, highlight = "" }) {
  const [show, setShow] = useState(true)

  // Highlight the search term in the name
  const getHighlightedName = () => {
    if (!highlight) return name
    const regex = new RegExp(`(${highlight})`, "gi")
    const parts = name.split(regex)
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span>
      ) : (
        part
      )
    )
  }

  return (
    <div className="student-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
      {/* TOP ROW: Name + Button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>{getHighlightedName()}</h3>
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
