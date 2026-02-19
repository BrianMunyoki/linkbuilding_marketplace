import React from 'react';
import AuthHero from '../components/AuthHero'; // The blue side
import RoleSelector from '../components/RoleSelector';
import Form from '../components/Form';

function LoginPage() {
    return (
        /* This 'flex' div is the secret sauce. It puts Hero on left and Form on right */
        <div className="flex min-h-screen w-full bg-white font-sans">
            
            {/* 1. LEFT SIDE (The Blue Section) */}
            <AuthHero />

            {/* 2. RIGHT SIDE (The Form Section) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
                <div className="w-full max-w-md">
                    
                    {/* Your Header content from the image */}
                    <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-500 mt-2 mb-8">Please select your role to continue.</p>
                    
                    {/* The Toggle Component */}
                    <RoleSelector />

                    {/* The main Form (which contains your Button) */}
                    <Form />

                    {/* Footer link */}
                    <p className="text-center mt-8 text-gray-600">
                        New to the marketplace? <a href="#" className="text-[#2563eb] font-bold hover:underline">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;