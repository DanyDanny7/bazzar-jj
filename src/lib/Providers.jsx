'use client'
import React from 'react';
import { SessionProvider } from "next-auth/react";
import ShoppingCartProvider from "@/components/layout/ShoppingCard/ContextShoppingCart"

const Providers = ({ children }) => {
    return (
        <SessionProvider>
            <ShoppingCartProvider>
                {children}
            </ShoppingCartProvider>
        </SessionProvider>
    )
}

export default Providers;