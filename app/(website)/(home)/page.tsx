import { getConfig } from "@/lib/http-helpers";
import HomePage from "./";
import { Home_Config, THome } from "../config";

const Home = async () => {
  const homeConfig = (await getConfig("Home_Config")) as THome;
  // const homeConfig = Home_Config;

  return <HomePage config={homeConfig} />;
};

export default Home;
