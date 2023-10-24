import Footer from "./component/footer";
import { Heading } from "./component/heading";
import Heroes from "./component/heroes";

function LandingPage () {
    return(
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                <Heading />
                <Heroes />
                <Footer />
            </div>
            <div ></div>

        </div>
    )
}
export default LandingPage;