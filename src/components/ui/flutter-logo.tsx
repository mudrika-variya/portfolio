import Image from 'next/image';

export function FlutterLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/flutter-logo.png"
      alt="Flutter logo"
      width={32}
      height={32}
      className={className}
      priority={false}
    />
  );
}
