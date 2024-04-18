import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { SidebarContextProvider } from "../context/SidebarContext";
import Home from "../components/portfolio/Home";
import InfoBar from "../components/portfolio/InfoBar";
import MenuBar from "../components/portfolio/MenuBar";
import Formations from "../components/portfolio/Formations";
import Projects from "../components/portfolio/Projects";
import "./Portfolio.css";

function Portfolio() {
    return (
        <>
            <div className="art-app">
                <div className="art-mobile-top-bar"></div>
                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <SidebarContextProvider>
                            <Wrapper />
                        </SidebarContextProvider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;

function Wrapper() {
    const { currNav } = useContext(SidebarContext);

    return (
        <>
            <InfoBar />
            {currNav === 0 && <Home />}
            {currNav === 1 && <Formations />}
            {currNav === 2 && <Projects />}
            <MenuBar />
        </>
    );
}
