import { useParams } from "react-router-dom";
import { PatientInfoCard } from "../../components/card/patient/PatientInfoCard";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { useEffect } from "react";

export const PatientInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: patient, isLoading, isError, refetch } = patientApi.useFetchPatientByIdQuery(Number(id));

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error!</div>
            ) : patient ? (
                <PatientInfoCard patient={patient} printAdditionalTables={true}/>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};
