import React, { useEffect, useState } from "react";
import { Header } from "../../components/ui/Header";
import { DoctorsTable } from "../../components/table/doctorsTable/DoctorsTable";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Fade } from "../../components/animations/Fade";
import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";

export const Doctors = () => {
    const [search, setSearch]        = useState<string>("");
    const { data, error, isLoading: isFetching } = doctorApi.useFetchAllDoctorsQuery(-1);

    useEffect(() => {
        error && console.log(error);
    }, [error]);

    return (
        <div>
            <div className="flex justify-between">
                <Header>Doctors</Header>
                <Link to="/doctors/create">
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
                    <DoctorsTable doctors={data}/>
                </Fade>
            )}
        </div>
    );
};