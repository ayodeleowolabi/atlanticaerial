import "./globals.css";

export const metadata = {
  title: "Atlantic Aerials",
  description: "Professional aerial drone services worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}