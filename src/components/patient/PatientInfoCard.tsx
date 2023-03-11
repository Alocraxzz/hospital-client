import React, { useEffect } from "react";
import { IPatient } from "../../types/IPatient";
import { AppointmentsTable } from "../table/appointmentsTable/AppointmentsTable";
import { MedicalRecordsTable } from "../table/medicalRecordsTable/MedicalRecordsTable";

interface PatientInfoCardProps {
    patient: IPatient;
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({ patient }) => {
    const { id, name, surname, dateOfBirth, phoneNumber } = patient;

    useEffect(() => {
        console.log(patient);
    }, []);

    return (
        <div className="flex flex-col">
            <div className="text-lg bg-gray-800 shadow-md rounded-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    {name} {surname}
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-400">
                            Name: <span className="font-semibold text-white">{name}</span>
                        </p>
                        <p className="text-gray-400">
                            Surname: <span className="font-semibold text-white">{surname}</span>
                        </p>
                        <p className="text-gray-400">
                            Date of birth:{" "}
                            <span className="font-semibold text-white">
                                {dateOfBirth?.toLocaleString()}
                            </span>
                        </p>
                        <p className="text-gray-400">
                            Phone: <span className="font-semibold text-white">{phoneNumber}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-4xl mb-5">Patient appointments</h2>
                {patient.appointments ? (
                    <AppointmentsTable appointments={patient.appointments} />
                ) : (
                    <>Nothing was found</>
                )}
            </div>
            <div className="my-5">
                <h2 className="text-4xl mb-5">Patient medical records</h2>
                {patient.medicalRecords ? (
                    <MedicalRecordsTable medicalRecords={patient.medicalRecords} />
                ) : (
                    <>Nothing was found</>
                )}
            </div>
        </div>
    );
};

export default PatientInfoCard;
