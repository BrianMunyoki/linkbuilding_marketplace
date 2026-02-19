import React, { useState } from 'react';

function RoleSelector() {
  // 1. Initialize state. 'owner' is selected by default.
  const [activeRole, setActiveRole] = useState('owner');

  // Common styles for both buttons
  const baseTabStyle = "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-200 text-sm font-semibold";

  return (
    <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
      
      {/* Site Owner Button */}
      <button
        onClick={() => setActiveRole('owner')}
        className={`${baseTabStyle} ${
          activeRole === 'owner' 
            ? "bg-white shadow-sm text-[#2563eb]" // Active styles
            : "text-gray-500 hover:text-gray-700"  // Inactive styles
        }`}
      >
        <span>🏢</span> Site Owner
      </button>

      {/* SEO Marketer Button */}
      <button
        onClick={() => setActiveRole('marketer')}
        className={`${baseTabStyle} ${
          activeRole === 'marketer' 
            ? "bg-white shadow-sm text-[#2563eb]" // Active styles
            : "text-gray-500 hover:text-gray-700"  // Inactive styles
        }`}
      >
        <span>📈</span> SEO Marketer
      </button>
      
    </div>
  );
}

export default RoleSelector;