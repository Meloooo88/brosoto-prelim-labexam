function Home() {
    return (
      <div 
        className="page"
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px 60px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
            Student Info App
          </h1>
  
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            Welcome to the Student Info App.  
            Use the navigation above to view student details.
          </p>
        </div>
      </div>
    )
  }
  
  export default Home
  