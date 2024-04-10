import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import Home from "../components/portfolio/Home";
import InfoBar from "../components/portfolio/InfoBar";
import MenuBar from "../components/portfolio/MenuBar";
import Formations from "../components/portfolio/Formations";
import Projects from "../components/portfolio/Projects";
import "./Portfolio.css";

function Portfolio() {
    const { currNav } = useContext(SidebarContext);
    console.log(currNav);

    return (
        <>
            <div className="art-app">
                <div className="art-mobile-top-bar"></div>
                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <InfoBar />
                        {currNav === 0 && <Home />}
                        {currNav === 1 && <Formations />}
                        {currNav === 2 && <Projects />}
                        <MenuBar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
