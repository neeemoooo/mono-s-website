import HTMLFlipBook from "react-pageflip";
import pagesData from "../assets/data.json";
import Page from "./page";

function MainSection() {
    return (
            <main className="main-bg min-h-[100vh] flex items-center justify-center overflow-hidden">
                    <HTMLFlipBook width={400} height={500} showCover={true}>
                        {pagesData.map(page => <Page key={page.page} pageCover={page.pageCover} pageText={page.pageText} />)}
                    </HTMLFlipBook> 
            </main>
    );
}

export default MainSection;