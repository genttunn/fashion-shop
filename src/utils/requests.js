const url = "https://bad-api-assignment.reaktor.com/";
export const PRODUCT_TYPE = {
  JACKETS: "jackets",
  SHIRTS: "shirts",
  ACCESSORIES: "accessories",
};
export default class requests {
  static async getProductsByCategory(category) {
    try {
      console.log(url + "products/" + category);
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

  static async getAvailabilityByManafacturer(manufacturer, retry) {
    retry += 1;
    try {
      let response = await fetch(url + "availability/" + manufacturer, {
        method: "GET",
        headers: {
          Accept: "application/json",
          //   "x-force-error-mode": "all",
        },
      });
      let res = await response.json();
      if (res.response === "[]" && retry <= 3) {
        requests.getAvailabilityByManafacturer(manufacturer, retry);
      } else if (res.response === "[]" && retry > 3) {
        return "Fetch error";
      } else {
        return res;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
