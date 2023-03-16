import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientService } from '../../api/PatientService';
import { PatientCreateForm } from '../../components/forms/PatientForm';
import { IPatient } from '../../types/IPatient';

export const PatientCreatePage: React.FC = () => {
    const navigate = useNavigate();
    
    const handleFormSubmit = (patient: IPatient) => {
        const createPatient = async () => {
            if (patient) {
                await PatientService.create(patient);
            }
        }
        createPatient();

        return navigate("/patients");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Patient</h1>
            <PatientCreateForm onSubmit={handleFormSubmit} />
        </div>
    );
};
