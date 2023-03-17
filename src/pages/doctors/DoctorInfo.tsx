import { useParams } from "react-router-dom";
import { DoctorInfoCard } from "../../components/card/doctor/DoctorInfoCard";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";

export const DoctorInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: doctor, isLoading, isError } = doctorApi.useFetchDoctorByIdQuery(Number(id));

    return (
        <div>
            {doctor ? (
                <DoctorInfoCard doctor={doctor} printAdditionalTables={true}/>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};