import { useState } from "react";
import ScrapTasks from "./pages/ScrapTasks";
import Sync from "./pages/Sync";

function App() {
  const [navTab, setNavTab] = useState("scrape");

  return (
    <>
      <div className="w-110 h-160 bg-[#FDFAF6] overflow-clip border-1 border-black/30">
        <div className="flex items-center gap-3 bg-white px-5 py-4 shadow-md">
          <img src="BlackBoardCrawlerLogo.svg" className="w-5" />
          <h1 className="font-semibold font-family-head text-md">BlackBoard Scrubber</h1>
        </div>
        <nav className="inline-flex gap-2 bg-[#FFE8E8] px-2 py-1 mx-5 rounded-xl mt-4">
          <button onClick={() => setNavTab("scrape")} className={`px-4 py-1 rounded-xl ${navTab === "scrape" ? "bg-white shadow-md" : "hover:bg-white/60"} transition-colors font-semibold cursor-pointer font-family-para text-sm`}>Scrape Tasks</button>
          <button onClick={() => setNavTab("sync")} className={`px-4 py-1 rounded-xl ${navTab === "sync" ? "bg-white shadow-md" : "hover:bg-white/60"} transition-colors font-semibold cursor-pointer font-family-para text-sm`}>Sync</button>
        </nav>
        {
          navTab === "scrape" && <ScrapTasks />
        }
        {
          navTab === "sync" && <Sync/>
        }

      </div>
    </>
  )
}

export default App
