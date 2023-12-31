import "./globals.css";

export const metadata = {
  title: "Pure React Slider",
  description: "Slider/Carousel With Pure React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
