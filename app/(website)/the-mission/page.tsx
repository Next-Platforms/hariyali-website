import { getConfig } from "@/lib/http-helpers";
import TheMissionPage from "./";
import { TheMission_Config, TTheMission } from "../config";

const TheMission = async () => {
  // const config = (await getConfig("TheMission_Config")) as TTheMission; // --> Fetching page config object from API
  const config = TheMission_Config; // --> Using page config object from local file

  return <TheMissionPage config={config} />;
};

export default TheMission;
