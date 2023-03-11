import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PatientService } from "../../api/PatientService";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { IPatient } from "../../types/IPatient";

export const Patients = () => {
    const [patients, setPatients] = useState<IPatient[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const patients = await PatientService.getAll();

            patients && setPatients(patients);
        }
        fetchPatients();
    }, []);

    return (
        <div>
            <h1 className="text-xl mb-2">Patients</h1>

            <Table className="md:hidden">
                <Thead>
                    <tr className="whitespace-nowrap">
                        <th className="p-3 text-lg tracking-wider text-left">ID</th>
                        <th className="p-3 text-lg tracking-wider text-left">Name</th>
                        <th className="p-3 text-lg tracking-wider text-left">Surname</th>
                        <th className="p-3 text-lg tracking-wider text-left">Date of birth</th>
                        <th className="p-3 text-lg tracking-wider text-left">Phone number</th>
                        <th className="p-3 text-lg tracking-wider text-left">Actions</th>
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
        </div>
    );
};