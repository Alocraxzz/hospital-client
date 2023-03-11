import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MedicalRecordService } from "../api/MedicalRecordService";
import { MedicalRecordsTable } from "../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Table, Tbody, Thead } from "../components/table/Table";
import { IMedicalRecord } from "../types/IMedicalRecord";

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
            <h1 className="text-4xl mb-5">Medical records</h1>

            <MedicalRecordsTable medicalRecords={medicalRecords} />
        </div>
    );
};