import { drawMap } from "./services/drawData";
import { getIpData } from "./services/getData";
import { validIpAddress } from "./utils/validIpAddress";

const ipAddressElement = document.querySelector(".ipAddress");
const locationElement = document.querySelector(".location");
const timezoneElement = document.querySelector(".timezone");
const ispElement = document.querySelector(".isp");

const updateDataFromUI = ({ data } = {}) => {
  if (!data) return;
  const { ip, location } = data;
  const { city, country, region, lat, lng, timezone } = location;
  drawMap({ idElement: "map", lat, lng });

  ipAddressElement.textContent = ip;
  locationElement.textContent = `${city}, ${region}, ${country}`;
  timezoneElement.textContent = timezone;
  ispElement.textContent = data.isp;
};

/* show the current data */
window.addEventListener("load", () => {
  getIpData().then((data) => {
    if (data.error) return;
    updateDataFromUI({ data });
  });
});

/* Search more IPs */
const form = document.querySelector(".Form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const ip = event.target.elements.searchIp.value;

  if (!validIpAddress(ip)) return alert("Invalid IP address");

  getIpData({ ip }).then((data) => {
    if (data.error) return;
    updateDataFromUI({ data });
  });
});
