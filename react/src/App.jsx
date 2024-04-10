import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import FormationsPage from "./pages/FormationsPage";
import ProfilePage from "./pages/ProfilePage";
import { SidebarContextProvider } from "./context/SidebarContext";

function App() {
    return (
        <SidebarContextProvider>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Portfolio />} />
                    <Route path="/admin/projects" element={<ProjectsPage />} />
                    <Route path="/admin/skills" element={<SkillsPage />} />
                    <Route
                        path="/admin/formations"
                        element={<FormationsPage />}
                    />
                    <Route path="/admin/profile" element={<ProfilePage />} />
                </Routes>
            </Router>
        </SidebarContextProvider>
    );
}

export default App;
