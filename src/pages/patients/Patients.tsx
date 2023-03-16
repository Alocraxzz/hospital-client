import React, { useEffect, useState } from "react";
import { PatientService } from "../../api/PatientService";
import { PatientsTable } from "../../components/table/patientsTable/PatientsTable";
import { Header } from "../../components/ui/Header";
import { IPatient } from "../../types/IPatient";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const Patients = () => {
    const [patients, setPatients]             = useState<IPatient[]>([]);
    const [search, setSearch]                 = useState<string>("");
    const [updateRequired, setUpdateRequired] = useState<boolean>(false);

    useEffect(() => {
        const fetchPatients = async () => {
            const patients = await PatientService.getAll();

            patients && setPatients(patients);
        };
        fetchPatients();
    }, [updateRequired]);

    const handleUpdate = () => {
        setUpdateRequired(!updateRequired);
    };

    return (
        <div>
            <div className="flex justify-between">
                <Header>Patients</Header>
                <Link to="/patients/create">
                    <Button>Create</Button>
                </Link>
            </div>

            <PatientsTable patients={patients} handleUpdate={handleUpdate}/>
        </div>
    );
};