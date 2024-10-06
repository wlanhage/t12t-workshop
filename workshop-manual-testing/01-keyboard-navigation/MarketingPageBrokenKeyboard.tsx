import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "@/components/a11y-errors/keyboard/AppAppBar";
import Hero from "@/components/a11y-errors/keyboard/Hero";
import LogoCollection from "@/components/LogoCollection";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function MarketingPageBrokenKeyboard() {
  const defaultTheme = createTheme({ palette: { mode: "light" } });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
