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
            <h1 className="text-4xl mb-5">Patients</h1>

            
        </div>
    );
};