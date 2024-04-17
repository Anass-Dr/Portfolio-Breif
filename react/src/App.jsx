import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const FormationsPage = lazy(() => import("./pages/FormationsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}

export default App;
