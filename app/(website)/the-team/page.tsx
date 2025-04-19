import { getConfig } from "@/lib/http-helpers";
import TheTeamPage from ".";
import { TheTeam_Config, TTheTeam } from "../config";

const TheTeam = async () => {
  const config = (await getConfig("TheTeam_Config")) as TTheTeam; // --> Fetching page config object from API
  // const config = TheTeam_Config; // --> Using page config object from local file

  return <TheTeamPage config={config} />;
};

export default TheTeam;
