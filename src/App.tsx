import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState<string[]>([]);
  const [error, setError] = useState<string | null>();

  const handleScrape = () => {
    chrome.runtime.sendMessage({ type: "START_SCRAPE" });
  };

  useEffect(() => {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === "SCRAPED_COURSES") {
        setCourses(msg.data);
        setError(null);
      } else if (msg.type === "DOMAIN_ERROR") {
        setError(msg.message);
      }
    });
  }, []);

  return (
    <>
      <div className="w-80 h-96 px-6 py-4 bg-gray-200 backdrop-blur-2xl flex flex-col">
        <h1>BlackBoard Crawler</h1>
        <button
          onClick={handleScrape}
          className="bg-blue-500 text-white px-3 py-2 mt-3 rounded-lg cursor-pointer"
        >
          Get My Courses
        </button>
        
        {error && (
          <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}
        {courses.length > 0 && (
          <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
          <strong>Web Scraping complete: </strong>Results down below 
        </div>
        )}
        <div className="mt-3 flex-1 overflow-y-auto">
          <ul className="text-sm space-y-1">
            {courses.map((c, i) => (
              <li key={i} className="py-1">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
