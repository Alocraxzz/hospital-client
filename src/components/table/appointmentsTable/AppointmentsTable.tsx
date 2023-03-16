import { FC } from "react";
import { Link } from "react-router-dom";
import { AppointmentService } from "../../../api/AppointmentService";
import { IAppointment } from "../../../types/IAppointment";
import { CustomModal } from "../../customModal/CustomModal";
import { Table, Tbody, Thead } from "../Table";

interface IAppointmentProps {
    appointments: IAppointment[];
    handleUpdate: (() => void) | undefined;
}

const fields = [
    { name: "ID" },
    { name: "Patient id" },
    { name: "Doctor id" },
    { name: "Date" },
    { name: "Reason" },
    { name: "Actions" },
];

export const AppointmentsTable: FC<IAppointmentProps> = ({ appointments, handleUpdate }) => {
    const handleModalConfirm = (id: number | undefined) => {
        const deletePatient = async () => {
            id && await AppointmentService.delete(id);
        };
        deletePatient();
        // handleUpdate();
    };

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
                                    <CustomModal
                                        title="Delete appointment?"
                                        content={`Are you sure you want to delete the appointment with ID: ${appointment.id}?`}
                                        openButtonTitle="Delete"
                                        openButtonStyles="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r"
                                        onConfirm={() => handleModalConfirm(appointment.id)}
                                    />
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