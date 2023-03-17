import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../components/ui/Header";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";

export const MedicalRecords = () => {
    const { data: medicalRecords, isLoading: isFetching } = medicalRecordApi.useFetchAllMedicalRecordsQuery(-1);

    return (
        <div>
            <Header>Medical records</Header>

            <MedicalRecordsTable medicalRecords={medicalRecords}/>
        </div>
    );
};