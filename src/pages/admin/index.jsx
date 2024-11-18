import React, { useEffect } from 'react';
import Layout from "@/components/layout";
import { useSession } from "next-auth/react";
import AdminComponent from "@/components/admin";
import { useRouter } from "next/router";

const Admin = () => {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (!(status === "authenticated" || status === "loading")) router.push("/login");
    }, [status])

    return (
        <Layout>
            <AdminComponent />
        </Layout>
    )
}

export default Admin;