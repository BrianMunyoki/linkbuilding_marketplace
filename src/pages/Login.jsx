import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

function LoginPage(){
    return(
        <div className="login page">
            <Header />
            <h2>Login to your account</h2>
            <Form />
            
        </div>
    )
}

export default LoginPage;