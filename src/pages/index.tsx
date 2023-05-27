import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Slider from "@/components/Slider/Slider";
import CardSlider from "@/components/CardSlider/CardSlider";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Slider />
      <CardSlider />
      <CardSlider />
      <Footer />
    </main>
  );
}
