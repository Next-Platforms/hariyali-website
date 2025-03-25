import { getConfig } from "@/lib/http-helpers";
import HomePage from "./";
import { Home_Config, THome } from "../config";

const Home = async () => {
  const homeConfig = (await getConfig("Home_Config")) as THome; // --> Fetching page config object from API
  // const homeConfig = Home_Config; // --> Using page config object from local file

  return <HomePage config={homeConfig} />;
};

export default Home;
