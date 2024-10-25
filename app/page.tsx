import Navbar from "./components/navbar/NavbarPage";
import { FeatureSection } from "./components/section/FeatureSection";
import { HomeSection } from "./components/section/HomeSection";
import PreviousWorks from "./components/previous works/Previous";
import { MakingProses } from "./components/making/MakingProses";
import ContactForm from "./components/contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <FeatureSection />
      <PreviousWorks />
      <MakingProses />
      <ContactForm />
    </>
  );
}
