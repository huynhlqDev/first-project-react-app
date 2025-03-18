import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../routes/Layout';
import LoginPage from '../page/LoginPage';
import DashboardPage from '../page/DashboardPage';
import WelcomePage from '../page/WelcomePage';
import RegisterPage from '../page/RegisterPage';
import NotFoundPage from '../page/NotFoundPage';
import TaskFormPage from '../page/TaskFormPage';
import ProjectFormPage from '../page/ProjectFormPage';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<WelcomePage />} />
                    {/* index page for "/" */}
                    <Route index element={<WelcomePage></WelcomePage>} />

                    <Route path="/login" element={<LoginPage></LoginPage>} />
                    <Route path="/register" element={<RegisterPage></RegisterPage>} />
                    <Route path="/dashboard" element={<DashboardPage></DashboardPage>} />
                    <Route path="/project" element={<ProjectFormPage></ProjectFormPage>} />
                    <Route path="/task" element={<TaskFormPage></TaskFormPage>} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;