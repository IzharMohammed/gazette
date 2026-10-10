import type { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment-form";
export const metadata:Metadata={title:"Book an appointment",description:"Request an appointment for Gazette publication and documentation assistance."};
export default function AppointmentsPage(){return <main className="bg-slate-50 py-16"><div className="container-shell"><p className="eyebrow">Consultation</p><h1 className="display mt-2 text-4xl font-bold text-[var(--navy)]">Book an appointment</h1><p className="mb-8 mt-4 max-w-2xl text-slate-600">Choose a preferred date and time. The office will confirm availability by your selected contact method.</p><AppointmentForm/></div></main>}
