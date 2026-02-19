import React from 'react';
import growthImage from '../assets/growth.png';

function AuthHero() {
  return (
    <div className="hidden lg:flex flex-col w-1/2 bg-[#f0f7ff] p-16 justify-between min-h-screen">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#2563eb] font-bold text-xl">
          <div className="bg-[#2563eb] p-1.5 rounded-lg text-white">🔗</div>
          LinkMarket
        </div>

        {/* Hero Content */}
        <div className="mt-20 max-w-md">
          <img 
            src={growthImage} // Replace with your image from Stitch
            alt="Growth Chart" 
            className="w-full rounded-2xl"
          />
          <h1 className="text-4xl font-extrabold text-gray-900 mt-12 leading-tight">
            Connect with premium publishers and grow your rankings.
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Join the leading marketplace for high-quality link building relationships. Secure spots on top-tier domains instantly.
          </p>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-gray-400 text-sm">
        © 2023 LinkMarket Inc. All rights reserved.
      </div>
    </div>
  );
}

export default AuthHero;