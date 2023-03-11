import { FC } from "react";
import { IAppointment } from "../../../types/IAppointment";
import { Table, Tbody, Thead } from "../Table";

interface IAppointmentProps {
    appointments: IAppointment[];
}

const fields = [
    { name: "ID", value: "id" },
    { name: "Patient id", value: "patientId" },
    { name: "Doctor id", value: "doctorId" },
    { name: "Date", value: "date" },
    { name: "Reason", value: "reason" },
];

export const AppointmentsTable: FC<IAppointmentProps> = ({ appointments }) => {
    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field) => 
                        <th className="p-3 text-lg tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={appointment.id}>
                            <td className="p-3 text-lg">{appointment.id}</td>
                            <td className="p-3 text-lg">{appointment.patientId}</td>
                            <td className="p-3 text-lg">{appointment.doctorId}</td>
                            <td className="p-3 text-lg">{appointment.date?.toLocaleString()}</td>
                            <td className="p-3 text-lg">{appointment.reason}</td>
                            <td className="p-3">
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
                    ))
                ) : (
                    <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap">
                        <td className="text-center p-3 text-lg" colSpan={fields.length}>
                            Nothing was found   
                        </td>
                    </tr>
                )}
            </Tbody>
        </Table>
    );
};