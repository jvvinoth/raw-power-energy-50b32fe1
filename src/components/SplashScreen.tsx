import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete and unmount after fade animation finishes (2s + 0.5s fade)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/917550291783/2026-06/6e73d6ee-b475-4efc-939a-5ebef10b4460.jpg"
          alt="Raw Power & Energy"
          className="max-w-xs md:max-w-md w-full h-auto"
        />
      </div>
    </div>
  );
}
