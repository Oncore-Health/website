import "./globals.css";

export const metadata = {
  title: "Oncare",
  description: "AI for Cancer Clinical Operations",
  icons: {
    icon: '/favicon.ico', // Standard favicon path
    shortcut: '/favicon.ico', // Shortcut icon (for browsers that support it)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
