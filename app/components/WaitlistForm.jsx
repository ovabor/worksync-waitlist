"use client";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous errors
    setEmailError("");

    // Validation
    if (!company.trim()) {
      setEmailError("Please enter a company name");
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "waitlist"), {
        email: email.trim(),
        company: company.trim(),
        joinedAt: serverTimestamp(),
      });
      
      // Success - show modal and clear form
      setIsSubmitted(true);
      setEmail("");
      setCompany("");
      
    } catch (err) {
      console.error("Error adding to waitlist:", err);
      
      // More specific error handling
      if (err.code === 'permission-denied') {
        setEmailError("Unable to submit. Please check your connection and try again.");
      } else if (err.code === 'unavailable') {
        setEmailError("Service temporarily unavailable. Please try again later.");
      } else {
        setEmailError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear error when user starts typing
  const handleEmailChange = (value) => {
    setEmail(value);
    if (emailError) setEmailError("");
  };

  const handleCompanyChange = (value) => {
    setCompany(value);
    if (emailError) setEmailError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full px-6 py-4 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 ${
                emailError
                  ? "border-red-300"
                  : "border-gray-200 dark:border-gray-600"
              }`}
              disabled={isSubmitting}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-2">{emailError}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Company name"
              value={company}
              onChange={(e) => handleCompanyChange(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="w-full bg-[#3AC282] hover:bg-[#1c6141] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Joining...</span>
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle className="h-5 w-5" />
              <span>You're on the list!</span>
            </>
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>
      </form>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full text-center">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              You're on the list!
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6">
              Welcome to WorkSync's exclusive early access program. We'll notify
              you as soon as we're ready to launch.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#3AC282] hover:bg-[#1c6141] text-white px-6 py-3 rounded-lg transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistForm;