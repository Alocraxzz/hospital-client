import React, { useEffect, useState } from "react";
import { PatientsTable } from "../../components/table/patientsTable/PatientsTable";
import { Header } from "../../components/ui/Header";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { Fade } from "../../components/animations/Fade";

export const Patients = () => {
    const [search, setSearch] = useState<string>("");
    const { data, error, isLoading } = patientApi.useFetchAllPatientsQuery(-1);

    useEffect(() => {
        error && console.log(error);
    }, [error])

    return (
        <div>
            <div className="flex justify-between">
                <Header>Patients</Header>
                <Link to="/patients/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading ? (
                <Fade>
                    <div className="border border-slate-700 shadow rounded-md p-4 pb-auto w-full">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            ) : (
                <Fade>
                    <PatientsTable patients={data}/>
                </Fade>
            )}
        </div>
    );
};