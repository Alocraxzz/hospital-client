import { useEffect, useState } from "react";
import { AppointmentService } from "../api/AppointmentService";
import { AppointmentsTable } from "../components/table/appointmentsTable/AppointmentsTable";
import { Table, Tbody, Thead } from "../components/table/Table";
import { IAppointment } from "../types/IAppointment";

export const Appointments = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const appointments = await AppointmentService.getAll();

            // appointments && setAppointments(appointments);
        }
        fetchAppointments();
    }, []);

    return (
        <div>
            <h1 className="text-4xl mb-5">Appointments</h1>

            <AppointmentsTable appointments={appointments}/>
        </div>
    );
};