import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MedicalRecordService } from "../../api/MedicalRecordService";
import { MedicalRecordInfoCard } from "../../components/card/medicalRecord/MedicalRecordsInfoCard";
import { IMedicalRecord } from "../../types/IMedicalRecord";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";

export const MedicalRecordInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: medicalRecord, isLoading: isFetching } = medicalRecordApi.useFetchMedicalRecordByIdQuery(Number(id));

    return (
        <div>
            {medicalRecord ? (
                <MedicalRecordInfoCard medicalRecord={medicalRecord} />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};