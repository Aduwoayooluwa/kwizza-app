"use client"
import Navbar from '@/Layout/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedPage = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAuth');
    if (!isAuthenticated) {
        // User is not authorized, redirect to login or unauthorized page
        router.replace('/auth'); // Replace with your login or unauthorized page
    }
    }, [router]);
    

    return (
        <>
            <Navbar />
            { children }

        </>
    )
    };

export default ProtectedPage;
