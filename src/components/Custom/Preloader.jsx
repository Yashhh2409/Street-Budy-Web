'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Only show preloader on hard reloads (not on client-side route changes)
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // adjust duration

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-yellow-300 animate-street">Street</h1>
        <h1 className="text-5xl font-bold text-yellow-300  animate-buddy mt-2">Buddy</h1>
      </div>

      <style jsx>{`
        .animate-street {
          animation: slideTop 1s ease-out forwards;
        }
        .animate-buddy {
          animation: slideBottom 1s ease-out forwards;
        }

        @keyframes slideTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideBottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
