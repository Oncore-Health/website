import "./globals.css";

export const metadata = {
  title: "Oncare AI",
  description: "AI for Cancer Clinical Operations",
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
