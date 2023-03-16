import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatientService } from "../../api/PatientService";
import { PatientInfoCard } from "../../components/card/patient/PatientInfoCard";
import { IPatient } from "../../types/IPatient";

export const PatientInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<IPatient | null>(null);
    const [search, setSearch]                 = useState<string>("");
    const [updateRequired, setUpdateRequired] = useState<boolean>(false);

    useEffect(() => {
        const fetchPatient = async () => {
            const patient = await PatientService.getOne(Number(id));

            patient && setPatient(patient);
        }
        fetchPatient();
    }, [updateRequired]);

    return (
        <div>
            {patient ? (
                <PatientInfoCard
                    patient={patient}
                    printAdditionalTables={true}
                    handleUpdate={() => setUpdateRequired(!updateRequired)}
                />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};