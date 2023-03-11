import { useEffect, useState } from "react";
import { PatientService } from "../../api/PatientService";
import { PatientsTable } from "../../components/table/patient/PatientsTable";
import { Header } from "../../components/ui/Header";
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
            <Header>Patients</Header>

            <PatientsTable patients={patients} />
        </div>
    );
};