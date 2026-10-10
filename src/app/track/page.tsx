import type { Metadata } from "next";
import { TrackingForm } from "@/components/tracking-form";
export const metadata:Metadata={title:"Track application",description:"Check the current status of your Gazette assistance application.",robots:{index:false,follow:false}};
export default function TrackPage(){return <main className="bg-slate-50 py-16"><div className="container-shell"><p className="eyebrow">Customer portal</p><h1 className="display mt-2 text-4xl font-bold text-[var(--navy)]">Track your application</h1><p className="mb-8 mt-4 max-w-xl text-slate-600">Use the tracking code you received after submitting your enquiry and the last four digits of your phone number.</p><TrackingForm/></div></main>}
