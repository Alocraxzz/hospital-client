import { useParams } from "react-router-dom";
import { PatientInfoCard } from "../../components/card/patient/PatientInfoCard";
import { patientApi } from "../../features/rtk-query/services/PatientService";

export const PatientInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: patient, isLoading, isError } = patientApi.useFetchPatientByIdQuery(Number(id));

    return (
        <div>
            {patient ? (
                <PatientInfoCard
                    patient={patient}
                    printAdditionalTables={true}
                />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};