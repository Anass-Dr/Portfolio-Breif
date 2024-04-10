import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export function SidebarContextProvider({ children }) {
    const [currNav, setCurrNav] = useState(0);

    const handleNav = (indx) => setCurrNav(indx);

    <SidebarContext.Provider value={{ currNav, handleNav }}>
        {children}
    </SidebarContext.Provider>;
}
