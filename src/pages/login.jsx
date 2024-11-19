import React from 'react';
import Layout from "@/components/layout";
import LoginComponent from "@/components/auth/LoginComponent";
import CEO from "@/components/util/CEO";

const Login = () => {
    return (
        <Layout>
            <CEO
                title="Iniciar Sessión"
                description={""}
                image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
            />
            <LoginComponent />
        </Layout>
    )
}

export default Login