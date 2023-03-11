import { useEffect, useState } from "react";
import { AppointmentService } from "../../api/AppointmentService";
import { AppointmentsTable } from "../../components/table/appointmentsTable/AppointmentsTable";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { Header } from "../../components/ui/Header";
import { IAppointment } from "../../types/IAppointment";

export const Appointments = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const appointments = await AppointmentService.getAll();

            appointments && setAppointments(appointments);
        }
        fetchAppointments();
    }, []);

    return (
        <div>
            <Header>Appointments</Header>

            <AppointmentsTable appointments={appointments}/>
        </div>
    );
};