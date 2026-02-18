import React ,{useState} from 'react';
import Button from './Button';

function Form({onSubmit}){
//states for inputs
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
//handle input changes
const handleEmailChange=(e)=>setEmail(e.target.value);
const handlePasswordChange=(e)=>setPassword(e.target.value);
//handle form submission
const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit({email,password});
};
    return(
        <>
        <button label= "user" className="rolechanger"/> <button label= "publisher" className="rolechanger"/>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address:</label><br />
        <input type="text" name="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" /><br />
        <label htmlFor="password">password:</label><br />
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" /><br />
        <button label="sign in" onclick={handleSubmit} className="primary-btn"/>
        </form>
        </>
    );
}

export default Form;