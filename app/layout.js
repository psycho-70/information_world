import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWarapper"; // Fixed typo

// Metadata for static site generation or other use
export const metadata = {

  title: "Information World - Home",
  description: "Welcome to Information World, your one-stop destination for insightful articles, notes, and blogs. Explore a world of knowledge and stay informed.",

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-background text-white">

<link rel="icon" href="/logo.png" sizes="any" />

      <body>
        <div>
          <SessionWrapper>
            <Navbar />
            {children}
            <Footer />
          </SessionWrapper>
        </div>
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
      </body>
    </html>
  );
}
