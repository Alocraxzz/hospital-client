import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ErrorPage from './components/error/ErrorPage';
import { Layout } from './components/layout/Layout';
import './index.css'
import { Appointments } from './pages/Appointments';
import { Doctors } from './pages/Doctors';
import { MedicalRecords } from './pages/MedicalRecords';
import { Patient } from './pages/patient/Patient';
import { Patients } from './pages/patient/Patients';

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <App /> },
            { path: "/patients", element: <Patients /> },
            { path: "/patients/:id", element: <Patient /> },
            { path: "/doctors", element: <Doctors /> },
            { path: "/appointments", element: <Appointments /> },
            { path: "/medical-records", element: <MedicalRecords /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
);