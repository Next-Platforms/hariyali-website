const API = process.env.NEXT_PUBLIC_BACKEND_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;

export const RE_VALIDATE_IN_MINS = 30;

export const apis = {
  getContent: (name: string) => {
    return `${API}/content?app_id=${APP_ID}&content=${name}&tenant_id=${TENANT_ID}`;
  },
};

export const getConfig = async (name: string) => {
  const response = await fetch(apis.getContent(name), {
    // next: { revalidate`: RE_VALIDATE_IN_MINS * 60 },
    cache: "no-cache",
  });
  const res = await response.json();
  return res?.data[0]?.content;
};
