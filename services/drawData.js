let map;

const getMap = (id) => {
  if (!map) map = L.map(id);
  return map;
};

export const drawMap = ({ lat = 51.5, lng = 0.09, idElement = null } = {}) => {
  if (!idElement) return;

  getMap(idElement).setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const message = "you are near here";

  L.marker([lat, lng]).addTo(map).bindPopup(message).openPopup();
};
