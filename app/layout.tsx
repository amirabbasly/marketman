import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'مارکت من | همراه تحول دیجیتال', description: 'تیم توسعه نرم‌افزار مارکت من؛ از ایده تا تجربه‌ای ماندگار.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="fa" dir="rtl"><body>{children}</body></html>; }
