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
import { ROUTE } from '../util/environment'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE.WELCOME} element={<Layout></Layout>}>
                    <Route index element={<WelcomePage></WelcomePage>} />
                    {/* LOGGIN */}
                    <Route
                        path={ROUTE.LOGIN}
                        element={<AuthGuard requireAuth={false}><LoginPage /></AuthGuard>}
                    />
                    {/* REGISTER */}
                    <Route
                        path={ROUTE.REGISTER}
                        element={<RegisterPage />}
                    />
                    {/* DASHBOARD */}
                    <Route
                        path={ROUTE.DASHBOARD}
                        element={<AuthGuard requireAuth={true}><DashboardPage /></AuthGuard>}
                    />
                    {/* PROJECT */}
                    <Route
                        path={ROUTE.PROJECTFORM}
                        element={<AuthGuard requireAuth={true}><ProjectFormPage /></AuthGuard>}
                    />
                    {/* TASK */}
                    <Route
                        path={ROUTE.TASKFORM}
                        element={<AuthGuard requireAuth={true}><TaskFormPage /></AuthGuard>}
                    />
                    {/* NOT FOUND */}
                    <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;