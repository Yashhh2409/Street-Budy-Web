"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-300 text-white py-8 shadow-md rounded-b-2xl">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">
            Street<span className="text-gray-900">Buddy</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h1>
          <p className="italic text-sm opacity-90 mt-2">
            Last Updated: October 28, 2023
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            1. Introduction
          </h2>
          <p className="mb-4">
            StreetBuddy ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our food delivery
            application.
          </p>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            2. Information We Collect
          </h2>
          <p className="font-semibold">Personal Information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Name and contact details</li>
            <li>Delivery addresses</li>
            <li>Payment information</li>
            <li>Phone number and email address</li>
          </ul>

          <p className="font-semibold">Location Data:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Precise location for delivery services</li>
            <li>Approximate location for restaurant discovery</li>
          </ul>

          <p className="font-semibold">Device Information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Device type and operating system</li>
            <li>IP address and mobile network</li>
            <li>App usage and interaction data</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>To process and deliver your food orders</li>
            <li>To provide real-time order tracking</li>
            <li>To process payments and prevent fraud</li>
            <li>To communicate order updates and promotions</li>
            <li>To improve our services and user experience</li>
            <li>To provide customer support</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            4. Data Sharing
          </h2>
          <p className="mb-2">We may share your information with:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Restaurants to fulfill your orders</li>
            <li>Delivery partners for order delivery</li>
            <li>Payment processors for transaction handling</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            5. Data Security
          </h2>
          <p className="mb-2">We implement security measures including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Encryption of sensitive data</li>
            <li>Secure payment processing</li>
            <li>Regular security assessments</li>
            <li>Access controls to personal information</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            6. Your Rights
          </h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            7. Data Retention
          </h2>
          <p className="mb-2">We retain your information only as long as necessary for:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Order fulfillment and service provision</li>
            <li>Legal and regulatory requirements</li>
            <li>Business operations and improvements</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            8. Third-Party Services
          </h2>
          <p className="mb-2">Our app uses third-party services including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Google Maps for location services</li>
            <li>Payment gateways for transactions</li>
            <li>Analytics tools for service improvement</li>
          </ul>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            9. Children's Privacy
          </h2>
          <p className="mb-4">
            Our services are not directed to children under 13. We do not knowingly
            collect information from children.
          </p>

          <h2 className="text-orange-500 text-xl font-bold border-b pb-2 mb-4">
            10. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this policy periodically. Continued use of our services
            constitutes acceptance of changes.
          </p>

          <div className="bg-gray-100 border-l-4 border-orange-400 rounded-lg p-4 mt-6">
            <h3 className="text-orange-500 text-lg font-bold mb-2">
              11. Contact Us
            </h3>
            <p className="mb-2">For privacy concerns or questions:</p>
            <ul className="list-disc list-inside">
              <li>Email: privacy@streetbuddy.com</li>
              <li>Address: 123 Food Street, Culinary City, CC 10101</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.print()}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-orange-600 hover:shadow-lg transition"
          >
            Download Privacy Policy
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8 pb-6">
        <p>&copy; 2023 StreetBuddy. All rights reserved.</p>
        <p>This document is effective as of the last updated date.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
