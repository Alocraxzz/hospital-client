import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MedicalRecordService } from "../../api/MedicalRecordService";
import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Table, Tbody, Thead } from "../../components/table/Table";
import { Header } from "../../components/ui/Header";
import { IMedicalRecord } from "../../types/IMedicalRecord";

export const MedicalRecords = () => {
    const [medicalRecords, setMedicalRecords] = useState<IMedicalRecord[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const medicalRecords = await MedicalRecordService.getAll();

            medicalRecords && setMedicalRecords(medicalRecords);
        }
        fetchPatients();
    }, []);

    return (
        <div>
            <Header>Medical records</Header>

            <MedicalRecordsTable medicalRecords={medicalRecords} />
        </div>
    );
};