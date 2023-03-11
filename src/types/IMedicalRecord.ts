export interface IMedicalRecord {
    id?: number;
    patientId?: number;
    doctorId?: number;
    date?: Date;
    diagnosis?: string;
    prescription?: string;
}