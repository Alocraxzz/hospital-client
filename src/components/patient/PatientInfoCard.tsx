import React, { useEffect } from "react";
import { IPatient } from "../../types/IPatient";

interface PatientInfoCardProps {
    patient: IPatient;
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({ patient }) => {
    const { id, name, surname, dateOfBirth, phoneNumber } = patient;

    return (
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

    );
};

export default PatientInfoCard;
