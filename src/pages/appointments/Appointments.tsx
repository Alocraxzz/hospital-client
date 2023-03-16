import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppointmentService } from "../../api/AppointmentService";
import { AppointmentsTable } from "../../components/table/appointmentsTable/AppointmentsTable";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";
import { IAppointment } from "../../types/IAppointment";

export const Appointments = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    const [search, setSearch] = useState<string>("");
    const [updateRequired, setUpdateRequired] = useState<boolean>(false);

    useEffect(() => {
        const fetchAppointments = async () => {
            const appointments = await AppointmentService.getAll();

            appointments && setAppointments(appointments);
        }
        fetchAppointments();
    }, [updateRequired]);

    const handleUpdate = () => {
        setUpdateRequired(!updateRequired);
    };

    return (
        <div>
            <div className="flex justify-between">
                <Header>Appointments</Header>
                <Link to="/appointments/create">
                    <Button>Create</Button>
                </Link>
            </div>


            <AppointmentsTable appointments={appointments} handleUpdate={handleUpdate} />
        </div>
    );
};