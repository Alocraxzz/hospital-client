import { useParams } from "react-router-dom";

export const Patient = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            Patient with id: {id}
        </>
    );
};