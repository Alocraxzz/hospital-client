import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../components/ui/Header";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import React from "react";
import { Fade } from "../../components/animations/Fade";
import { PatientsTable } from "../../components/table/patientsTable/PatientsTable";

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

            {isFetching ? (
                <Fade>
                    <div className="border border-slate-700 shadow rounded-md p-4 pb-auto w-full">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-400 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            ) : (
                <Fade>
                    <MedicalRecordsTable medicalRecords={medicalRecords}/>
                </Fade>
            )}
        </div>
    );
};