import { useNavigate } from "react-router-dom";

export default function OnElearning() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex-1 bg-[#1B263B]">
                <img src="/Images/ElearningCourseCards.png" className="w-full"/>
                <div className="px-6">
                    <p className="mt-8 inline-block text-white bg-[#309D5E] font-semibold px-4 py-1 text-xs rounded-3xl">Portal Detected</p>
                    <p className="text-white mt-3 font-bold text-xl">Start Adding Classes</p>
                    <p className="text-white mt-2 text-sm">Get Started by loading all your classes for this current semester and then let BlackBoard Companion do its magic and gather all your tasks</p>
                    <button onClick={() => navigate("/ScrapeItems")} className="self-start bg-[#415A77] hover:bg-[#415A77]/80 transition-colors px-4 py-2 mt-8 rounded-2xl font-medium cursor-pointer text-white text-sm">Detect Classes</button>
                </div>
            </div>
        </>
    )
}