import { useEffect, useState } from "react";

export default function ScrapeItems() {
    const [courses, setCourses] = useState<string[]>([]);

    // const courses = [
    //     "CS 101 - Introduction to Computer Science",
    //     "MATH 201 - Calculus II",
    //     "ENG 102 - English Composition",
    //     "PHYS 151 - General Physics",
    //     "HIST 110 - World History",
    //     "CHEM 121 - General Chemistry",
    //     "CS 250 - Data Structures and Algorithms",
    // ];

    chrome.runtime.sendMessage({ type: "START_SCRAPE" });
    
    useEffect(() => {
        chrome.runtime.onMessage.addListener((msg) => {
            if (msg.type === "SCRAPED_COURSES") {
                setCourses(msg.data);
            }
        });
    }, []);
    return (
        <>
            <div className="flex-1 flex flex-col px-6 py-4">
                <h1 className="text-white font-bold text-xl">Classes Found</h1>
                <p className=" text-white mt-1">We found <span className="font-black">{courses.length}</span> classes for this semester</p>

                <p className="text-sm text-white mt-4">Select which classes to add</p>
                <div className="overflow-y-auto scrollbar-items pr-1 flex flex-col gap-2 mt-2">
                    {courses.length !== 0 &&
                        courses.map((course, idx) => (
                            <div key={idx} className="bg-[#1B263B] px-4 py-2 rounded-md">
                                <p className="text-white">Fall 2025</p>
                                <p className="text-lg text-white font-bold mt-2">{course}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}