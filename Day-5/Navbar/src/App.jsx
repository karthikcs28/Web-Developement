import Navbar from "./Navbar";

function App() {
  console.log("🟢 App rendered");

  return (
    <>
      <Navbar />
      <main style={{ padding: 40 }}>
        <h2>Responsive Navbar Page</h2>
      </main>
    </>
  );
}

export default App;
