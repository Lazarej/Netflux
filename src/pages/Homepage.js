import ContentSection from "../components/homepage/contentSection/ContentSection";
import PosterSection from "../components/homepage/posterSection/PosterSection";



export default function Homepage (){
    return(
        <main className="main">
           <PosterSection/>
           <ContentSection/>
        </main>
    )
}