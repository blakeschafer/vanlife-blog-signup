// src/app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'Signup Form',
  description: 'A simple signup form with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
