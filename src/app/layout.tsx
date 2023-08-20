import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registery";
import { Allura, Raleway } from "next/font/google";
import localFont from "next/font/local";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const VestaScript = localFont({
  src: "../../public/fonts/ Vesta-Script.ttf",
  display: "swap",
  variable: "--font-vesta",
});

const SolarVestaSerif = localFont({
  src: "../../public/fonts/Solar-Vesta-Serif.ttf",
  display: "swap",
  variable: "--font-solar",
});

export const metadata: Metadata = {
  title: "Groove Studios",
  description: "Capturing love's rythm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${allura.variable} ${raleway.variable} ${VestaScript.variable} ${SolarVestaSerif.variable}`}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
