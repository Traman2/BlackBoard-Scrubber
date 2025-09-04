import { useEffect, useState } from "react";

export default function ScrapTasks() {
    const [courses, setCourses] = useState<string[]>([]);
    const [error, setError] = useState<string | null>();
    const [scrapeButtonClick, setScrapeButtonClick] = useState(false);

    const handleScrape = () => {
        // Fake data for testing the extension styling
        const fakeCourses = [
            "CS 101 - Introduction to Computer Science",
            "MATH 201 - Calculus II",
            "ENG 102 - English Composition",
            "PHYS 151 - General Physics I",
            "HIST 110 - World History",
            "CHEM 121 - General Chemistry",
            "CS 250 - Data Structures and Algorithms",
        ];

        // Simulate a delay like real scraping would have
        setTimeout(() => {
            setCourses(fakeCourses);
            setError(null);
        }, 1000);
    };

    
    // const handleScrape = () => {
    //   chrome.runtime.sendMessage({ type: "START_SCRAPE" });
    // };

    // useEffect(() => {
    //   chrome.runtime.onMessage.addListener((msg) => {
    //     if (msg.type === "SCRAPED_COURSES") {
    //       setCourses(msg.data);
    //       setError(null);
    //     } else if (msg.type === "DOMAIN_ERROR") {
    //       setError(msg.message);
    //     }
    //   });
    // }, []);

    if (error) {
        return (
            <>
                <div className={`h-90 flex items-center mx-5 mt-5`}>
                    <div className="flex-1 flex flex-col items-center py-10 px-10 bg-[#F31515]/12 rounded-2xl border-2 border-dashed border-[#F31515]">
                        <img src="HomeIcons/notAllowed.svg" className="w-22" />
                        <p className="text-[#F31515] font-semibold mt-8 text-lg text-center">BlackBoard portal not detected</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`h-90 flex ${courses.length === 0 && "items-center"} mx-5 mt-5`}>
                {courses.length === 0 && (
                    <>
                        <div className="flex-1 flex flex-col items-center justify-center py-10 bg-[#155DFC]/12 rounded-2xl border-2 border-dashed border-[#155DFC]">
                            <img src="HomeIcons/bot.svg" className="w-22" />
                            <button onClick={() => {handleScrape(); setScrapeButtonClick(true)}} disabled={scrapeButtonClick} className={`${scrapeButtonClick ? "cursor-not-allowed bg-gray-300" : "bg-white cursor-pointer hover:bg-white/50"} transition-colors px-4 py-1 rounded-xl shadow-md mt-7 font-family-para text-sm font-semibold `}>{scrapeButtonClick ? "Scraping in Progress..." : "Scrape Classes"}</button>
                        </div>
                    </>
                )}
                {courses.length > 0 && (
                    <>
                        <div className="flex-1">
                            <p className="font-family-para ">Detected <span className="font-bold">{courses.length}</span> classes in your account</p>
                            <div className="rounded-lg shadow-md bg-[#FFE8E8] space-y-5 overflow-y-auto h-76 py-6 px-4 mt-2">
                                {
                                    courses.map((course, index) => (
                                        <div className="flex items-start gap-4">
                                            <div className="px-4 py-2 rounded-4xl bg-[#FFFFFF]">{index + 1}</div>
                                            <div className="bg-white py-4 px-4 rounded-xl shadow-md">{course}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="px-4 py-2 bg-white shadow-md rounded-2xl font-family-para font-medium text-sm hover:bg-black/10 transition-colors cursor-pointer">Add to Sync Store</button>
                            </div>

                        </div>

                    </>
                )}

            </div>
        </>
    )
}