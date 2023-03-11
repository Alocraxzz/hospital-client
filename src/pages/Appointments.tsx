import { useEffect, useState } from "react";
import { AppointmentService } from "../api/AppointmentService";
import { Table, Tbody, Thead } from "../components/table/Table";
import { IAppointment } from "../types/IAppointment";

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
            <h1 className="text-xl mb-2">Appointments</h1>

            <Table>
                <Thead>
                    <tr>
                        <th className="p-3 text-lg tracking-wider text-left">ID</th>
                        <th className="p-3 text-lg tracking-wider text-left">Patient id</th>
                        <th className="p-3 text-lg tracking-wider text-left">Doctor id</th>
                        <th className="p-3 text-lg tracking-wider text-left">Date</th>
                        <th className="p-3 text-lg tracking-wider text-left">Reason</th>
                        <th className="p-3 text-lg tracking-wider text-left">Actions</th>
                    </tr>
                </Thead>
                <Tbody>
                    {appointments.map((appointment) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800" key={appointment.id}>
                            <td className="p-3 text-lg">{appointment.id}</td>
                            <td className="p-3 text-lg">{appointment.patientId}</td>
                            <td className="p-3 text-lg">{appointment.doctorId}</td>
                            <td className="p-3 text-lg">{appointment.date?.toLocaleString()}</td>
                            <td className="p-3 text-lg">{appointment.reason}</td>
                            <td>
                                <div className="inline-flex">
                                    <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                        View
                                    </button>
                                    <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                        Edit
                                    </button>
                                    <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};