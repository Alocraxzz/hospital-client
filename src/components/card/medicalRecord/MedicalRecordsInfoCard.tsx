import React, { useEffect } from "react";
import { IMedicalRecord } from "../../../types/IMedicalRecord";
import { DoctorInfoCard } from "../doctor/DoctorInfoCard";
import { PatientInfoCard } from "../patient/PatientInfoCard";

interface MedicalRecordInfoCardProps {
    medicalRecord: IMedicalRecord;
}

export const MedicalRecordInfoCard: React.FC<MedicalRecordInfoCardProps> = ({ medicalRecord }) => {
    const { patient, doctor, date, diagnosis, prescription } = medicalRecord;

    return (
        <div className="flex flex-col">
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Record patient
                </h2>
                {patient && <PatientInfoCard patient={patient} />}
            </div>
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Record doctor
                </h2>
                {doctor && <DoctorInfoCard doctor={doctor} />}
            </div>
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Medical record
                </h2>
                <div className="text-md bg-gray-800 shadow-md rounded-md p-6">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2">
                            <p className="text-gray-400">
                                Date: <span className="font-semibold text-white">{date?.toLocaleString()}</span>
                            </p>
                            <p className="text-gray-400">
                                Diagnosis: <span className="font-semibold text-white">{diagnosis}</span>
                            </p>
                            <p className="text-gray-400">
                                Prescription: <span className="font-semibold text-white">{prescription}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
