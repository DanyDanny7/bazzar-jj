import React from 'react';
import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

import AdminComponent from "@/components/admin"

const Admin = () => {
    const { data: session, status } = useSession();

    console.log(session, status)

    return (
        <Layout>
            <AdminComponent />
        </Layout>
    )
}

export default Admin