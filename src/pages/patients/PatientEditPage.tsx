import React, { useEffect, useState } from "react";
import { PatientCreateForm } from '../../components/forms/PatientForm';
import { useNavigate, useParams } from "react-router-dom";
import { PatientService } from "../../api/PatientService";
import { IPatient } from "../../types/IPatient";

export const PatientEditPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState({});
    
    const handleFormSubmit = (patient: IPatient) => {
        const createPatient = async () => {
            if (patient) {
                await PatientService.update(Number(id), patient);
            }
        }
        createPatient();

        return navigate("/patients");
    };

    useEffect(() => {
        const getPatient = async () => {
            const patient = await PatientService.getOne(Number(id));
            patient && setPatient(patient);
        }
        getPatient();
    }, []);

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Patient</h1>
            <PatientCreateForm initialValue={patient} onSubmit={handleFormSubmit} />
        </div>
    );
};
