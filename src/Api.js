import { BASE_URL } from "./constants";

class Api {
  static async getMarkers() {
    const response = await fetch(`${BASE_URL}/api/markers/?format=json`);
    const data = await response.json();
    if (response.status >= 400) throw Error(data.message);
    return data;
  }
  // name,adress,shopDomain,oppeningHours,categories,
  static async addStore(name, website, marker, street) {
    const response = await fetch(`${BASE_URL}/api/add_store`, {
      method: "POST",
      body: JSON.stringify({
        name,
        website,
        marker,
        street,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status >= 400) throw Error(data.message);
    return data;
  }
}

export default Api;
