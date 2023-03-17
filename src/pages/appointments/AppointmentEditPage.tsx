import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppointmentForm } from "../../components/forms/AppointmentForm";
import { IAppointment } from "../../types/IAppointment";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";

export const AppointmentEditPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateAppointment, { isLoading: isAppointmentStoring }] = appointmentApi.useUpdateAppointmentMutation();
    const { data: patients, isLoading: isPatientsFetching } = patientApi.useFetchAllPatientsQuery(-1);
    const { data: doctors, isLoading: isDoctorsFetching } = doctorApi.useFetchAllDoctorsQuery(-1);
    const { data: appointment, isLoading: isFetching } = appointmentApi.useFetchAppointmentByIdQuery(Number(id));

    const handleFormSubmit = (appointment: IAppointment) => {
        updateAppointment({
            id: Number(id),
            body: appointment,
        });

        return navigate("/appointments");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Appointment</h1>
            <AppointmentForm initialValue={appointment} patients={patients} doctors={doctors} onSubmit={handleFormSubmit}/>
        </div>
    );
};
