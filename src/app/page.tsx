import BestOffer from "@/components/BestOffer/Bestoffer";
import ClientsSay from "@/components/Clients/ClientsSay";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/Landingpage/landingpage";
import NavigationBar from "@/components/Navigationbar/Navigation";
import PopularFoods from "@/components/PopularFoods/PopularFoods";
import Services from "@/components/Services/Services";
import SpecialOffer from "@/components/SpecialOffer/Specialoffer";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <main>
      <NavigationBar/>
      <LandingPage/>
      <PopularFoods/>
      <SpecialOffer/>
      <BestOffer/>
      <Services/>
      <ClientsSay/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}
