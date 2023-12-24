const api_token = import.meta.env.VITE_API_TOKEN;
const url_endpoint = "https://oprec-betis-be.up.railway.app/";

export const getBoats = async () => {
  const response = await fetch(`${url_endpoint}perahu`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getBoat = async (boatId) => {
  const response = await fetch(`${url_endpoint}perahu/${boatId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const moveBoat = async (boatId) => {
  const response = await fetch(url_endpoint + `perahu/${boatId}/berlayar`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
  });

  return response.ok;
};

export const addBoat = async (data) => {
  const payload = {
    name: data.name,
    description: data.description,
    capacity: Number(data.capacity),
    color: data.color,
  };

  const response = await fetch(url_endpoint + "perahu", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
};

export const deleteBoat = async (boatId) => {
  const response = await fetch(`${url_endpoint}perahu/${boatId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
  });

  return response.ok;
};

export const updateBoat = async (data) => {
  const payload = {
    name: data.name,
    description: data.description,
    capacity: Number(data.capacity),
    color: data.color,
  };

  const response = await fetch(`${url_endpoint}perahu/${data.id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${api_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
}
