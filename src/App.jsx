import "./App.css";
import Home from "./components/Home.jsx";
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-sceen bg-gray-100  py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">Ai image enhacer</h1>
        <p>Powered by KavanK</p>
      </div>
      <Home />

      <div className="text-lh text-gray-500">
        Upload your image and Ai enhance it
      </div>
    </div>
  );
}

export default App;
