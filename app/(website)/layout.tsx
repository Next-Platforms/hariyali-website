import { getConfig } from "@/lib/http-helpers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Header_Config, Footer_Config, THeader, TFooter } from "./config";

const NextPlatformsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const headerConfig = (await getConfig("Header_Config")) as THeader;
  const footerConfig = (await getConfig("Footer_Config")) as TFooter;
  // const headerConfig = Header_Config;
  // const footerConfig = Footer_Config;

  return (
    <>
      <Header config={headerConfig?.header} />
      {children}
      <Footer config={footerConfig?.footer} />
    </>
  );
};

export default NextPlatformsLayout;
