import { useEffect, useState } from "react"
import axios from "axios"
import StudentComponent from "../components/StudentComponent.jsx"

function Students() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Failed to load students.")
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading students...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Students Page</h1>

      {users.map((user) => (
        <StudentComponent
          key={user.id}
          name={user.name}
          course="BSIT"
          year="4th Year"
        />
      ))}
    </div>
  )
}

export default Students
