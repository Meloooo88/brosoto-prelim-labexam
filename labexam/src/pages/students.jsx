import { useEffect, useState } from "react"
import axios from "axios"
import StudentComponent from "../components/StudentComponent.jsx"

function Students() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
      } catch (err) {
        console.error(err)
        setError("Failed to load students. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  // Filter students based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <p>Loading students...</p>
  if (error) return <p style={{ color: "red" }}>{error}</p>

  return (
    <div>
      <h1>Students Page</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <StudentComponent
            key={user.id}
            name={user.name}
            course="BSIT"
            year="4th Year"
          />
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
  )
}

export default Students
