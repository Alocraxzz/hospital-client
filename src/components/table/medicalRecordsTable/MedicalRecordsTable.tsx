import { FC } from "react";
import { Link } from "react-router-dom";
import { IMedicalRecord } from "../../../types/IMedicalRecord";
import { Table, Tbody, Thead } from "../Table";

interface MedicalRecordsProps {
    medicalRecords: IMedicalRecord[];
}

const fields = [
    { name: "Id", key: "id" },
    { name: "Patient id", key: "patientId" },
    { name: "Doctor id", key: "doctorId" },
    { name: "Date", key: "date" },
    { name: "Diagnosis", key: "diagnosis" },
    { name: "Prescription", key: "prescription" },
    { name: "Actions", key: "actions" },
]

export const MedicalRecordsTable: FC<MedicalRecordsProps> = ({ medicalRecords }) => {
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
                {medicalRecords.length > 0 ? (
                    medicalRecords.map((medicalRecord) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={medicalRecord.id}>
                            <td className="p-3 text-md">{medicalRecord.id}</td>
                            <td className="p-3 text-md">{medicalRecord.patientId}</td>
                            <td className="p-3 text-md">{medicalRecord.doctorId}</td>
                            <td className="p-3 text-md">{medicalRecord.date?.toLocaleString()}</td>
                            <td className="p-3 text-md whitespace-pre">{medicalRecord.diagnosis}</td>
                            <td className="p-3 text-md whitespace-pre">{medicalRecord.prescription}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/medical-records/${medicalRecord.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/medical-records/${medicalRecord.id}/edit`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to={`/medical-records/${medicalRecord.id}/delete`}>
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