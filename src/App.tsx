import React from "react";
import { patientApi } from "./features/rtk-query/services/PatientService";
import { IPatient } from "./types/IPatient";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/Button";
import { PatientInfoCard } from "./components/card/patient/PatientInfoCard";

const App: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);

    const { data, error, isLoading } = patientApi.useFetchAllPatientsQuery(-1);
    const [storePatient] = patientApi.useStorePatientMutation();


    const handleStorePatient = () => {
        storePatient({
            "name": "Added",
            "surname": "Last name",
            "dateOfBirth": new Date("2021-05-18"),
            "phoneNumber": "+380639874565",
        })
    }

    return (
        <>
            {isLoading ? (
                <>Loading</>
            ) : (
                data?.map((elem: IPatient) => (
                    <div key={elem?.id}>
                        <PatientInfoCard patient={elem} />
                    </div>
                ))
            )}
            <br/>
            <Button onClick={handleStorePatient}>Add patient</Button>
        </>
    );
};

export default App;
