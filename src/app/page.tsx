'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [filter, setFilter] = useState<string>('none');

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    getCamera();
  }, []);

  const filters = [
    { name: 'None', value: 'none' },
    { name: 'Grayscale', value: 'grayscale(100%)' },
    { name: 'Sepia', value: 'sepia(100%)' },
    { name: 'Blur', value: 'blur(5px)' },
    { name: 'Invert', value: 'invert(100%)' },
    { name: 'Brightness+', value: 'brightness(1.5)' },
    { name: 'Brightness-', value: 'brightness(0.5)' },
    { name: 'Contrast+', value: 'contrast(200%)' },
    { name: 'Contrast-', value: 'contrast(50%)' },
    { name: 'Saturate+', value: 'saturate(200%)' },
    { name: 'Saturate-', value: 'saturate(50%)' },
    { name: 'Hue Rotate 90°', value: 'hue-rotate(90deg)' },
    { name: 'Hue Rotate 180°', value: 'hue-rotate(180deg)' },
    { name: 'Opacity 50%', value: 'opacity(0.5)' },
    { name: 'Glow Mode', value: 'brightness(1.5) contrast(150%) saturate(200%)' },
    { name: 'Retro', value: 'sepia(0.6) contrast(1.2) brightness(0.9)' },
    { name: 'Dreamy', value: 'blur(3px) brightness(1.3) saturate(150%)' },
    { name: 'Cyberpunk', value: 'hue-rotate(290deg) saturate(300%) contrast(200%)' },
    { name: 'Flip Horizontal', value: 'mirror' },
    { name: 'Flip Vertical', value: 'flip-vertical' },
    { name: 'X-Ray', value: 'invert(100%) hue-rotate(180deg)' },
    { name: 'Pixelate', value: 'pixelate' },
    { name: 'RGB Split', value: 'rgb-split' },
    { name: 'Dreamy Glow', value: 'blur(4px) brightness(1.5) saturate(180%)' },
    { name: 'VHS Glitch', value: 'glitch' },
    { name: 'Neon Glow', value: 'glow' },
    { name: 'Ghost', value: 'ghost' },
    { name: 'Shaky Cam', value: 'shake' },
    { name: 'Old TV', value: 'tv' },
    { name: 'Color Flash', value: 'flash' },
    { name: 'Trippy', value: 'trippy' },
    { name: 'Thermal Vision', value: 'thermal' },
    { name: 'Outline Edge', value: 'outline' },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 gap-10">
      <h1 className="text-3xl font-bold mb-6">Camera Filters</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={`rounded-lg shadow-lg w-full max-w-md mb-6 transition-all duration-300 ${filter === 'mirror'
          ? 'scale-x-[-1]'
          : filter === 'flip-vertical'
            ? 'scale-y-[-1]'
            : filter === 'pixelate'
              ? 'pixelate'
              : filter === 'rgb-split'
                ? 'rgb-split'
                : filter === 'glitch'
                  ? 'glitch'
                  : filter === 'glow'
                    ? 'glow'
                    : filter === 'shake'
                      ? 'shake'
                      : filter === 'ghost'
                        ? 'ghost'
                        : filter === 'tv'
                          ? 'tv'
                          : filter === 'flash'
                            ? 'flash'
                            : filter === 'trippy'
                              ? 'trippy'
                              : filter === 'thermal'
                                ? 'thermal'
                                : filter === 'outline'
                                  ? 'outline'
                                  : ''
          }`}

        style={{
          filter: ![
            'mirror',
            'flip-vertical',
            'pixelate',
            'rgb-split',
            'glitch',
            'glow',
            'shake',
            'ghost',
            'tv',
            'flash',
            'trippy',
            'thermal',
            'outline',
          ].includes(filter)
            ? filter
            : undefined,
        }}

      />
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
        {filters.map(({ name, value }) => (
          <button
            key={name}
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === value ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
              }`}
          >
            {name}
          </button>
        ))}
      </div>
    </main>
  );
} 