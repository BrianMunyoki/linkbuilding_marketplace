import React, { useState } from 'react';
import Button from './Button'; // Importing your component

function LoginForm() {
  // 1. State to hold user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email Address</label>
        <input 
          type="email" 
          placeholder="name@company.com"
          className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          placeholder="••••••••"
          className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Using YOUR Button Component */}
      <Button 
        label="Sign In →" 
        type="submit" 
        variant="primary" 
        className="mt-2" 
      />

      {/* Separator */}
      <div className="text-center text-xs text-gray-400 uppercase my-4">
        Or continue with
      </div>

      {/* Using YOUR Button Component again for Google */}
      <Button 
        label="Google" 
        variant="outline" 
        onClick={() => console.log("Google Login")}
      />
    </form>
  );
}

export default LoginForm;