import WebEditor from "./components/WebEditor";
import MarkdownToHTML from "./components/MarkdownToHTML";
import './App.css'

function App() {

  return (
    <div className="flex h-screen w-screen max-w-full">
      {/* Left Panel */}
      <div className="w-2/5 overflow-y-auto bg-gray-100 p-4">
      <MarkdownToHTML filePath="/markdown/README.md" />
      </div>

      {/* Right Panel */}
      <div className="flex flex-col w-3/5">
        {/* Top Right (75%) */}
        <div className="h-3/4 bg-white p-4 border-b border-gray-300">
          <WebEditor />
        </div>

        {/* Bottom Right (25%) */}
        <div className="h-1/4 bg-gray-200 p-4">
          Terminal
        </div>
      </div>
    </div>
  );
}

export default App
