import PriceUps from "../components/PriceUps";
import Allproducts from "../components/Allproducts";
import Banner from "../components/Banner";
import Navlinks from "../components/Navlinks";

export default function Home() {
  return (
    <div>
      <Navlinks></Navlinks>
      <Banner></Banner>
      <PriceUps></PriceUps>
      <Allproducts></Allproducts>
    </div>
  );
}
