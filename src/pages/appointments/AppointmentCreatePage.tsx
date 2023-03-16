import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentService } from '../../api/AppointmentService';
import { DoctorService } from '../../api/DoctorService';
import { PatientService } from '../../api/PatientService';
import { AppointmentForm } from '../../components/forms/AppointmentForm';
import { IAppointment } from '../../types/IAppointment';
import { IDoctor } from '../../types/IDoctor';
import { IPatient } from '../../types/IPatient';

export const AppointmentCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState<IPatient[]>([]);
    const [doctors, setDoctors] = useState<IDoctor[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await PatientService.getAll().then((patients) => {
                patients && setPatients(patients);
            });
            await DoctorService.getAll().then((doctors) => {
                doctors && setDoctors(doctors);
            });
        }
        fetchData();
    }, []);

    const handleFormSubmit = (appointment: IAppointment) => {
        const createAppointment = async () => {
            if (appointment) {
                await AppointmentService.create(appointment);
            }
        }
        createAppointment();

        return navigate("/appointments");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Appointment</h1>
            <AppointmentForm patients={patients} doctors={doctors} onSubmit={handleFormSubmit} />
        </div>
    );
};
