import React from 'react';

// I added 'variant' so we can switch colors easily
function Button({ label, onClick, className, type = 'button', variant = 'primary' }) {
    
    // 1. Define the "Base" styles (Padding, Rounded corners, Font)
    const baseStyles = "w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all";
    
    // 2. Define the "Variants" (Colors) from your image
    const variants = {
        primary: "bg-[#2563eb] text-white hover:bg-blue-700", // The LinkMarket Blue
        outline: "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50", // The Google Button
    };

    return (
        <button
            type={type}
            onClick={onClick}
            // We combine the base, the variant, and any extra classes you pass in
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {label}
        </button>
    );
}

export default Button;