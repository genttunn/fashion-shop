const url = "https://bad-api-assignment.reaktor.com/";
export const PRODUCT_TYPE = {
  JACKETS: "jackets",
  SHIRT: "shirts",
  ACCESSORIES: "accessories",
};
export class requests {
  static async getProductsByCategory(category) {
    try {
      let response = await fetch(url + "products/" + category, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      let data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async getAvailabilityByManafacturer(manufacturer) {
    try {
      let response = await fetch(url + "availability/" + manufacturer, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
}
