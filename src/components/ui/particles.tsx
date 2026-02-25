'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Particle = {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

const PARTICLE_COUNT = 30;

export function ParticlesBackground({ className }: { className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const created = Array.from({ length: PARTICLE_COUNT }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setParticles(created);
  }, []);

  if (!particles.length) return null;

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.16),transparent)]" />
      {particles.map((p, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-primary/70 blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

