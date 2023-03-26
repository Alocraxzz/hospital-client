import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppointmentsTable } from "../../components/table/appointmentsTable/AppointmentsTable";
import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";
import { Fade } from "../../components/animations/Fade";

export const Appointments = () => {
    const [search, setSearch] = useState<string>("");
    const { data: appointments, isLoading: isFetching } = appointmentApi.useFetchAllAppointmentsQuery(-1);

    return (
        <div>
            <div className="flex justify-between">
                <Header>Appointments</Header>
                <Link to="/appointments/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isFetching ? (
                <Fade>
                    <div className="border border-slate-700 shadow rounded-md p-4 pb-auto w-full">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-400 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            ) : (
                <Fade>
                    <AppointmentsTable appointments={appointments}/>
                </Fade>
            )}
        </div>
    );
};