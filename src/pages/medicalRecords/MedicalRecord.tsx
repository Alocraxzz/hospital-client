import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MedicalRecordService } from "../../api/MedicalRecordService";
import { MedicalRecordInfoCard } from "../../components/card/medicalRecord/MedicalRecordsInfoCard";
import { IMedicalRecord } from "../../types/IMedicalRecord";

export const MedicalRecord = () => {
    const { id } = useParams<{ id: string }>();
    const [medicalRecord, setMedicalRecord] = useState<IMedicalRecord | null>(null);

    useEffect(() => {
        const fetchMedicalRecord = async () => {
            const medicalRecord = await MedicalRecordService.getOne(Number(id));

            medicalRecord && setMedicalRecord(medicalRecord);
        }
        fetchMedicalRecord();
    }, []);

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