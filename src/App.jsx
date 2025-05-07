import "./App.css";
import Home from "./components/Home.jsx";
function App() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-300 py-10 px-6 shadow-lg rounded-2xl max-w-3xl mx-auto mt-10">
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 drop-shadow-md">
          Image Enhancer
        </h1>
      </div>

      <Home />

      <div className="text-center mt-6 text-gray-600 text-base">
        <p>Upload your image and let the magic happen ✨</p>
        <p className="mt-1 text-sm text-gray-400 italic">
          Powered by <span className="font-semibold text-gray-500">KavanK</span>
        </p>
      </div>
    </div>
  );
}

export default App;
