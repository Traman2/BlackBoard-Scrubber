import NotElearning from "./Pages/Onboarding/NotElearning";
import OnElearning from "./Pages/Onboarding/OnElearning";
import ScrapeItems from "./Pages/Onboarding/ScrapeItems";
import Welcome from "./Pages/Onboarding/Setup";

interface Props {
    pages: string;
}

export default function Overlay({pages} : Props) {

    const renderContent = () => {
        switch(pages) {
            case "Welcome":
                return <Welcome/>;
            case "OnElearning":
                return <OnElearning/>;
            case "NotElearning":
                return <NotElearning/>;
            case "ScrapeItems":
                return <ScrapeItems/>
            default:
                return <Welcome/>;
        }
    }

    return (
        <>
            <div className="bg-[#0D1B2A] w-90 h-150 flex">
                {renderContent()}
            </div>
        </>
    )
}