import React, { useEffect, useState } from "react";
import { Header } from "../../components/ui/Header";
import { DoctorsTable } from "../../components/table/doctorsTable/DoctorsTable";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const Doctors = () => {
    const [search, setSearch]        = useState<string>("");
    const { data, error, isLoading } = doctorApi.useFetchAllDoctorsQuery(-1);

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

            <DoctorsTable doctors={data}/>
        </div>
    );
};