const BASE_URL = "https://geo.ipify.org/api/v1";
const API_KEY = "at_zegUH1LWkYdxBpmle1nS8BfTLI7gU";

export const getIpData = async ({ ip } = {}) => {
  const url = ip
    ? `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ip}`
    : `${BASE_URL}?apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = response.json();
  if (data.code === 422) return { error: data.message };
  return data;
};
