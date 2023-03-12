import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { CustomModal } from "../../../CustomModal";
import Modal from "../../../Modal";
import { IPatient } from "../../../types/IPatient";
import { Table, Tbody, Thead } from "../Table";

interface IPatientsTableProps {
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

export const PatientsTable: FC<IPatientsTableProps> = ({ patients }) => {

    const handleModalConfirm = (id: number | undefined) => {
        id && alert('Delete patient with id: ' + id);
    }

    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field) =>
                        <th key={field.key} className="p-3 text-md tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={patient.id}>
                            <td className="p-3 text-md">{patient.id}</td>
                            <td className="p-3 text-md">{patient.name}</td>
                            <td className="p-3 text-md">{patient.surname}</td>
                            <td className="p-3 text-md">{patient.dateOfBirth?.toLocaleString()}</td>
                            <td className="p-3 text-md">{patient.phoneNumber}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/patients/${patient.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/patients/${patient.id}/edit`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to={`/patients/${patient.id}/delete`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r">
                                            Delete
                                        </button>
                                    </Link>
                                    <CustomModal
                                        title="Delete patient?"
                                        content={`Are you sure you want to delete the patient with ID: ${patient.id}?`}
                                        onConfirm={() => handleModalConfirm(patient.id)}
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