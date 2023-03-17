import React, { useEffect, useState } from "react";
import { PatientService } from "../../api/PatientService";
import { PatientsTable } from "../../components/table/patientsTable/PatientsTable";
import { Header } from "../../components/ui/Header";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { patientApi } from "../../features/rtk-query/services/PatientService";

export const Patients = () => {
    const [search, setSearch] = useState<string>("");
    const { data, error, isLoading } = patientApi.useFetchAllPatientsQuery(-1);

    useEffect(() => {
        error && console.log(error);
    }, [error])

    return (
        <div>
            <div className="flex justify-between">
                <Header>Patients</Header>
                <Link to="/patients/create">
                    <Button>Create</Button>
                </Link>
            </div>

            <PatientsTable patients={data} />
        </div>
    );
};