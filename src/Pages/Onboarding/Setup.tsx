import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Setup() {
    const navigate = useNavigate();

    const clickHandler = () => {
        chrome.runtime.sendMessage({ type: "VERIFY_URL" });
    }

    useEffect(() => {
        chrome.runtime.onMessage.addListener((msg) => {
            if (msg.type === "DOMAIN_ERROR") {
                navigate("/NotElearning");
            } else if (msg.type === "DOMAIN_TRUE") {
                navigate("/OnElearning")
            }
        });
    }, []);

    // const clickHandler = () => {
    //     navigate("/OnElearning");
    // }

    return (
        <>
            <div className="flex flex-col justify-center pl-6">
                <img src="/BlackBoardCrawlerLogo.svg" className="w-9 h-9" />
                <p className="text-white font-semibold mt-6">v1.0</p>
                <p className="text-[#F7CAC9] text-4xl font-bold">Blackboard Companion</p>
                <button onClick={clickHandler} className="self-start bg-[#FDEBD0] hover:bg-[#FDEBD0]/80 transition-colors px-4 py-2 mt-6 rounded-2xl font-semibold cursor-pointer">Setup</button>
            </div>
        </>
    )
}