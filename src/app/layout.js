
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSocialLinks from "@/components/FloatingSocialLinks";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins" >
        <Header />
        {children}
        <FloatingSocialLinks />
        <Footer />
      </body>
    </html>
  );
}
