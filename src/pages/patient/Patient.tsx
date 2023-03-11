import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatientService } from "../../api/PatientService";
import PatientInfoCard from "../../components/patient/PatientInfoCard";
import { IPatient } from "../../types/IPatient";

export const Patient = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<IPatient | null>(null);
    
    useEffect(() => {
        const fetchPatient = async () => {
            const patient = await PatientService.getOne(Number(id));
            console.log(patient);
            patient && setPatient(patient);
        }
        fetchPatient();
    }, []);

    return (
        <>
            {patient ? (
                <PatientInfoCard patient={patient}/>
            ) : (
                <>Nothing was found</>
            )}
        </>
    );
};