import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../components/ui/Header";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import React from "react";

export const MedicalRecords = () => {
    const { data: medicalRecords, isLoading: isFetching } = medicalRecordApi.useFetchAllMedicalRecordsQuery(-1);

    return (
        <div>
            <div className="flex justify-between">
                <Header>Medical records</Header>
                <Link to="/medical-records/create">
                    <Button>Create</Button>
                </Link>
            </div>

            <MedicalRecordsTable medicalRecords={medicalRecords}/>
        </div>
    );
};