import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { uri } from "@/lib/mongodb";

export const authOptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'credencials',
            credentials: {
                email: { label: "Correo", placeholder: "Escriba su correo", type: "text" },
                password: { label: "Contraseña", placeholder: "******", type: "password" }
            },
            async authorize(credencials, req) {
                const client = new MongoClient(uri);
                await client.connect();
                const db = client.db(process.env.NEXT_PUBLIC_MONTODB_DB);
                const userFound = await db
                    .collection("users")
                    .findOne({ email: credencials.email })

                if (!userFound) throw new Error("Credenciales inválidas");
                const passwordMatch = credencials.password === userFound.password;
                if (!passwordMatch) throw new Error("Credenciales inválidas");

                await client.close();
                delete userFound.password;
                return userFound;
            }
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ account, token, user, profile, session }) {
            if (user) token.user = user;
            return token;
        },
        session({ session, token, user }) {
            if (token.user) session.user = token.user;
            return session
        }
    }
})
export default authOptions