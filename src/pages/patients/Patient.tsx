import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatientService } from "../../api/PatientService";
import { PatientInfoCard } from "../../components/card/patient/PatientInfoCard";
import { IPatient } from "../../types/IPatient";

export const Patient = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<IPatient | null>(null);

    useEffect(() => {
        const fetchPatient = async () => {
            const patient = await PatientService.getOne(Number(id));

            patient && setPatient(patient);
        }
        fetchPatient();
    }, []);

    return (
        <div>
            {patient ? (
                <PatientInfoCard patient={patient} printAdditionalTables={true} />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};