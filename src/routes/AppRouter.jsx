import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../routes/Layout';
import LoginPage from '../page/LoginPage';
import DashboardPage from '../page/DashboardPage';
import WelcomePage from '../page/WelcomePage';
import RegisterPage from '../page/RegisterPage';
import NotFoundPage from '../page/NotFoundPage';
import TaskFormPage from '../page/TaskFormPage';
import ProjectFormPage from '../page/ProjectFormPage';
import AuthGuard from './AuthGuard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<WelcomePage></WelcomePage>} />
                    {/* LOGGIN */}
                    <Route
                        path="/login"
                        element={<AuthGuard requireAuth={false}><LoginPage /></AuthGuard>}
                    />
                    {/* REGISTER */}
                    <Route
                        path="/register"
                        element={<RegisterPage />}
                    />
                    {/* DASHBOARD */}
                    <Route
                        path="/dashboard"
                        element={<AuthGuard requireAuth={true}><DashboardPage /></AuthGuard>}
                    />
                    {/* PROJECT */}
                    <Route
                        path="/project"
                        element={<AuthGuard requireAuth={true}><ProjectFormPage /></AuthGuard>}
                    />
                    {/* TASK */}
                    <Route
                        path="/task"
                        element={<AuthGuard requireAuth={true}><TaskFormPage /></AuthGuard>}
                    />
                    {/* NOT FOUND */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;