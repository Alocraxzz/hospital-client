import { useEffect, useState } from "react";
import { DoctorService } from "../../api/DoctorService";
import { Header } from "../../components/ui/Header";
import { IDoctor } from "../../types/IDoctor";
import { DoctorsTable } from "../../components/table/doctorsTable/DoctorsTable";

export const Doctors = () => {
    const [doctors, setDoctors] = useState<IDoctor[]>([]);
    const [search, setSearch]                 = useState<string>("");
    const [updateRequired, setUpdateRequired] = useState<boolean>(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            const doctors = await DoctorService.getAll();

            doctors && setDoctors(doctors);
        };
        fetchDoctors();
    }, [updateRequired]);

    const handleUpdate = () => {
        setUpdateRequired(!updateRequired);
    };

    return (
        <div>
            <Header>Doctors</Header>

            <DoctorsTable doctors={doctors} handleUpdate={handleUpdate}/>
        </div>
    );
};