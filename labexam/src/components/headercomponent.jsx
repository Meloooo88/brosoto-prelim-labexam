import { Link } from "react-router-dom"

function HeaderComponent() {
  return (
    <header style={{ borderBottom: "1px solid black", padding: "10px" }}>
      <h2>Student Info App</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link>
      </nav>
    </header>
  )
}

export default HeaderComponent
