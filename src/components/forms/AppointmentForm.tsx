import React, { useState } from "react";
import { IAppointment } from "../../types/IAppointment";
import { IDoctor } from "../../types/IDoctor";
import { IPatient } from "../../types/IPatient";

interface IAppointmentFormProps {
    patients: IPatient[];
    doctors: IDoctor[];
    onSubmit: (appointment: IAppointment) => void;
}

interface IAppointmentFormAttrs {
    patientId?: number;
    doctorId?: number;
    date?: string;
    reason?: string;
}

export const AppointmentForm: React.FC<IAppointmentFormProps> = ({ patients, doctors, onSubmit }) => {
    const [appointment, setAppointment] = useState({} as IAppointmentFormAttrs);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit({
            patientId: appointment.patientId || 0,
            doctorId: appointment.doctorId || 0,
            date: new Date(appointment.date || ""),
            reason: appointment.reason || "",
        });
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="patient" className="block text-gray-700 font-bold mb-2">
                        Patient
                    </label>
                    <select
                        id="patient"
                        value={appointment.patientId}
                        onChange={(event) => setAppointment({ ...appointment, patientId: Number(event.target.value)})}
                        className="block appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select a patient</option>
                        {patients.map((patient: IPatient) => (
                            <option key={patient.id} value={patient.id}>
                                {`${patient.name} ${patient.surname}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="doctor" className="block text-gray-700 font-bold mb-2">
                        Doctor
                    </label>
                    <select
                        id="doctor"
                        value={appointment.doctorId}
                        onChange={(event) => setAppointment({ ...appointment, doctorId: Number(event.target.value)})}
                        className="block appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select a doctor</option>
                        {doctors.map((doctor: IDoctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {`${doctor.name} ${doctor.surname}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={appointment.date}
                        onChange={(event) => setAppointment({ ...appointment, date: event.target.value })}
                        className="block appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="reason" className="block text-gray-700 font-bold mb-2">
                        Reason
                    </label>
                    <textarea
                        id="reason"
                        value={appointment.reason}
                        onChange={(event) => setAppointment({ ...appointment, reason: event.target.value })}
                        className="block appearance-none w-full border border-gray-400 py-2 px-3 rounded leading-tight focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};