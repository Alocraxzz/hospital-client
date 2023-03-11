import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ErrorPage from './components/error/ErrorPage';
import { Layout } from './components/layout/Layout';
import './index.css'
import { Appointment } from './pages/appointments/Appointment';
import { Appointments } from './pages/appointments/Appointments';
import { Doctor } from './pages/doctors/Doctor';
import { Doctors } from './pages/doctors/Doctors';
import { MedicalRecord } from './pages/medicalRecords/MedicalRecord';
import { MedicalRecords } from './pages/medicalRecords/MedicalRecords';
import { Patient } from './pages/patients/Patient';
import { Patients } from './pages/patients/Patients';

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <App /> },
            { path: "/patients", element: <Patients /> },
            { path: "/patients/:id", element: <Patient /> },
            { path: "/doctors", element: <Doctors /> },
            { path: "/doctors/:id", element: <Doctor /> },
            { path: "/appointments", element: <Appointments /> },
            { path: "/appointments/:id", element: <Appointment /> },
            { path: "/medical-records", element: <MedicalRecords /> },
            { path: "/medical-records/:id", element: <MedicalRecord /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
);