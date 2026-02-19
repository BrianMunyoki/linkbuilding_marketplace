import React from 'react';

function InputField({ label, type, placeholder, icon }) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all placeholder:text-gray-400"
        />
        {/* This displays the icon on the right side of the input */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
          {icon}
        </span>
      </div>
    </div>
  );
}

export default InputField;