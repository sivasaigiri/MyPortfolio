import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, margin: "0", padding: "0" }}>
      <header
        style={{
          backgroundColor: "#282c34",
          color: "white",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section style={{ padding: "20px", textAlign: "center" }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Hello! I am [Your Name], a passionate [Your Profession] with expertise in
          [Your Skills/Technologies]. I love creating innovative solutions to complex
          problems.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>Projects</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li style={{ marginBottom: "10px" }}>
            <h3>Project 1</h3>
            <p>Description of your project and technologies used.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <h3>Project 2</h3>
            <p>Description of your project and technologies used.</p>
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        </ul>
      </section>

      <section style={{ padding: "20px", textAlign: "center" }}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">your-profile</a></p>
      </section>

      <footer
        style={{
          backgroundColor: "#282c34",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
          marginTop: "20px",
        }}
      >
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
