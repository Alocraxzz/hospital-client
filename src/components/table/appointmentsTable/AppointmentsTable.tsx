import { FC } from "react";
import { Link } from "react-router-dom";
import { IAppointment } from "../../../types/IAppointment";
import { Table, Tbody, Thead } from "../Table";

interface IAppointmentProps {
    appointments: IAppointment[];
}

const fields = [
    { name: "ID" },
    { name: "Patient id" },
    { name: "Doctor id" },
    { name: "Date" },
    { name: "Reason" },
    { name: "Actions" },
];

export const AppointmentsTable: FC<IAppointmentProps> = ({ appointments }) => {
    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field, index) =>
                        <th key={index} className="p-3 text-md tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={appointment.id}>
                            <td className="p-3 text-md">{appointment.id}</td>
                            <td className="p-3 text-md">{appointment.patientId}</td>
                            <td className="p-3 text-md">{appointment.doctorId}</td>
                            <td className="p-3 text-md">{appointment.date?.toLocaleString()}</td>
                            <td className="p-3 text-md whitespace-pre">{appointment.reason}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/appointments/${appointment.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/appointments/${appointment.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to={`/appointments/${appointment.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r">
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap">
                        <td className="text-center p-3 text-md" colSpan={fields.length}>
                            Nothing was found
                        </td>
                    </tr>
                )}
            </Tbody>
        </Table>
    );
};