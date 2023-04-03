import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../components/ui/Header";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import React, { useEffect, useState } from "react";
import { Fade } from "../../components/animations/Fade";
import { TableLoad } from "../../components/animations/TableLoad";

export const MedicalRecords = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");
    const { data: medicalRecords, error, isLoading } = medicalRecordApi.useFetchAllMedicalRecordsQuery(-1);
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderComponent(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    if (error) {
        navigate('/error', {
            state: {
                error: 'Fail to load medical records info'
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between">
                <Header>Medical records</Header>
                <Link to="/medical-records/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading || !renderComponent ? (
                <Fade>
                    <TableLoad/>
                </Fade>
            ) : (
                <Fade>
                    <MedicalRecordsTable medicalRecords={medicalRecords}/>
                </Fade>
            )}
        </div>
    );
};