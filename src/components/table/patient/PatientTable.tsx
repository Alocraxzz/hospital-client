import { FC } from "react";
import { Link } from "react-router-dom";
import { IPatient } from "../../../types/IPatient";
import { Table, Tbody, Thead } from "../Table";

interface IPatientTableProps {
    patients: IPatient[];
}

const fields = [
    { name: "ID", key: "id" },
    { name: "Name", key: "name" },
    { name: "Surname", key: "surname" },
    { name: "Date of birth", key: "dateOfBirth" },
    { name: "Phone number", key: "phoneNumber" },
    { name: "Actions", key: "actions" },
]

export const PatientTable: FC<IPatientTableProps> = ({ patients }) => {
    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field) =>
                        <th key={field.key} className="p-3 text-lg tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {patients.map((patient) => (
                    <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={patient.id}>
                        <td className="p-3 text-lg">{patient.id}</td>
                        <td className="p-3 text-lg">{patient.name}</td>
                        <td className="p-3 text-lg">{patient.surname}</td>
                        <td className="p-3 text-lg">{patient.dateOfBirth?.toLocaleString()}</td>
                        <td className="p-3 text-lg">{patient.phoneNumber}</td>
                        <td className="p-3">
                            <div className="inline-flex">
                                <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                    <Link to={`/patients/${patient.id}`}>View</Link>
                                </button>
                                <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                    <Link to={`/patients/${patient.id}/edit`}>Edit</Link>
                                </button>
                                <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r">
                                    <Link to={`/patients/${patient.id}/delete`}>Delete</Link>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </Tbody>
        </Table>
    );
};