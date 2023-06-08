'use client'

import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { ContentHeader } from "@/components/content-header";

import '../add/styles.css'
import { ApplicantForm } from "../ApplicantForm";
import { useEffect } from "react";

export default function EditApplicant({ params }: { params: { id: string } }) {
    useEffect(() => {
        console.log(params.id);
        
    }, [params.id])
    return <div className="people">
        <ContentHeader label="Edit User">
            <Breadcrumb with_bg={false} />
        </ContentHeader>

        <ApplicantForm/>
    </div>
}
