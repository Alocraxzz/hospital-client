import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorService } from "../../api/DoctorService";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { Header } from "../../components/ui/Header";
import { IDoctor } from "../../types/IDoctor";

export const Doctors = () => {
    const [doctors, setDoctors] = useState<IDoctor[]>([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const doctors = await DoctorService.getAll();

            doctors && setDoctors(doctors);
        }
        fetchDoctors();
    }, []);

    return (
        <div>
            <Header>Doctors</Header>

            <Table>
                <Thead>
                    <tr className="whitespace-nowrap">
                        <th className="p-3 text-lg tracking-wider text-left">ID</th>
                        <th className="p-3 text-lg tracking-wider text-left">Name</th>
                        <th className="p-3 text-lg tracking-wider text-left">Surname</th>
                        <th className="p-3 text-lg tracking-wider text-left">Speciality</th>
                        <th className="p-3 text-lg tracking-wider text-left">Phone number</th>
                        <th className="p-3 text-lg tracking-wider text-left">Actions</th>
                    </tr>
                </Thead>
                <Tbody>
                    {doctors.map((doctor) => (
                        <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap" key={doctor.id}>
                            <td className="p-3 text-lg">{doctor.id}</td>
                            <td className="p-3 text-lg">{doctor.name}</td>
                            <td className="p-3 text-lg">{doctor.surname}</td>
                            <td className="p-3 text-lg">{doctor.speciality}</td>
                            <td className="p-3 text-lg">{doctor.phoneNumber}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/doctors/${doctor.id}`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/doctors/${doctor.id}/edit`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to={`/doctors/${doctor.id}/delete`}>
                                        <button className="bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded-r">
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};