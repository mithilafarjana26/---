import PriceUps from "../components/PriceUps";
import Allproducts from "../components/Allproducts";
import Banner from "../components/Banner";
import Navlinks from "../components/Navlinks";
import LowProducts from "../components/LowProducts";

export default function Home() {
  return (
    <div>
      <Navlinks></Navlinks>
      <Banner></Banner>
      <PriceUps></PriceUps>
      <LowProducts/>
      <Allproducts></Allproducts>
    </div>
  );
}
