import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MedicalRecordService } from "../api/MedicalRecordService";
import { Table, Tbody, Thead } from "../components/table/Table";
import { IMedicalRecord } from "../types/IMedicalRecord";

export const MedicalRecords = () => {
    const [medicalRecords, setMedicalRecords] = useState<IMedicalRecord[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const medicalRecords = await MedicalRecordService.getAll();

            medicalRecords && setMedicalRecords(medicalRecords);
        }
        fetchPatients();
    }, []);

    return (
        <div>
            <h1 className="text-xl mb-2">Patients</h1>

            <Table>
                <Thead>
                    <tr>
                        <th className="p-3 text-lg tracking-wider text-left">ID</th>
                        <th className="p-3 text-lg tracking-wider text-left">Patient id</th>
                        <th className="p-3 text-lg tracking-wider text-left">Doctor id</th>
                        <th className="p-3 text-lg tracking-wider text-left">Date</th>
                        <th className="p-3 text-lg tracking-wider text-left">Diagnosis</th>
                        <th className="p-3 text-lg tracking-wider text-left">Prescription</th>
                        <th className="p-3 text-lg tracking-wider text-left">Actions</th>
                    </tr>
                </Thead>
                <Tbody>
                    {medicalRecords.map((medicalRecord) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800" key={medicalRecord.id}>
                            <td className="p-3 text-lg">{medicalRecord.id}</td>
                            <td className="p-3 text-lg">{medicalRecord.patientId}</td>
                            <td className="p-3 text-lg">{medicalRecord.doctorId}</td>
                            <td className="p-3 text-lg">{medicalRecord.date?.toLocaleString()}</td>
                            <td className="p-3 text-lg">{medicalRecord.diagnosis}</td>
                            <td className="p-3 text-lg">{medicalRecord.prescription}</td>
                            <td>
                                <div className="inline-flex">
                                    <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                        <Link to="patients">View</Link>
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