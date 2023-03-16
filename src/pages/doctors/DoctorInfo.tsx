import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DoctorService } from "../../api/DoctorService";
import { DoctorInfoCard } from "../../components/card/doctor/DoctorInfoCard";
import { IDoctor } from "../../types/IDoctor";

export const DoctorInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [doctor, setDoctor] = useState<IDoctor | null>(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            const doctor = await DoctorService.getOne(Number(id));

            doctor && setDoctor(doctor);
        }
        fetchDoctor();
    }, []);

    return (
        <div>
            {doctor ? (
                <DoctorInfoCard doctor={doctor} printAdditionalTables={true} />
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};