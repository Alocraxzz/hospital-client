import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppointmentService } from "../../api/AppointmentService";
import { AppointmentInfoCard } from "../../components/card/appointment/AppointmentInfoCard";
import { IAppointment } from "../../types/IAppointment";

export const Appointment = () => {
    const { id } = useParams<{ id: string }>();
    const [appointment, setAppointment] = useState<IAppointment | null>(null);

    useEffect(() => {
        const fetchAppointment = async () => {
            const appointment = await AppointmentService.getOne(Number(id));

            appointment && setAppointment(appointment);
        }
        fetchAppointment();
    }, []);

    return (
        <div>
            {appointment ? (
                <AppointmentInfoCard appointment={appointment} />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};