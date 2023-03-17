import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppointmentService } from "../../api/AppointmentService";
import { AppointmentsTable } from "../../components/table/appointmentsTable/AppointmentsTable";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";
import { IAppointment } from "../../types/IAppointment";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";

export const Appointments = () => {
    const [search, setSearch] = useState<string>("");
    const { data: appointments, isLoading } = appointmentApi.useFetchAllAppointmentsQuery(-1);

    return (
        <div>
            <div className="flex justify-between">
                <Header>Appointments</Header>
                <Link to="/appointments/create">
                    <Button>Create</Button>
                </Link>
            </div>

            <AppointmentsTable appointments={appointments}  />
        </div>
    );
};