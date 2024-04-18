import { useContext, useState } from "react";
import { SidebarContext } from "../../context/SidebarContext";

function MenuBar() {
    const [active, setActive] = useState(false);
    const { currNav, handleNav } = useContext(SidebarContext);

    return (
        <div className={`art-menu-bar ${active ? "art-active" : ""}`}>
            <div className="art-menu-bar-frame">
                <div className="art-menu-bar-header">
                    <div
                        onClick={() => setActive((prev) => !prev)}
                        className={`art-menu-bar-btn ${
                            active ? "art-active" : ""
                        }`}
                    >
                        <span></span>
                    </div>
                </div>

                <div className="art-current-page"></div>

                <div className="art-scroll-frame">
                    <nav id="swupMenu">
                        <ul className="main-menu">
                            <li
                                onClick={() => handleNav(0)}
                                className="menu-item current-menu-item"
                            >
                                <span>Home</span>
                            </li>
                            <li
                                onClick={() => handleNav(1)}
                                className="menu-item current-menu-item"
                            >
                                <span>Formations</span>
                            </li>
                            <li
                                onClick={() => handleNav(2)}
                                className="menu-item current-menu-item"
                            >
                                <span>Projects</span>
                            </li>
                        </ul>
                    </nav>

                    <ul className="art-language-change">
                        <li>
                            <a href="#.">FR</a>
                        </li>
                        <li className="art-active-lang">
                            <a href="#.">EN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
