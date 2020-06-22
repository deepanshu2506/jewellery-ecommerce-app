const GENDER = "gender";
const MATERIAL = "material";
const PRICE = "price";

export const applyFilters = (filters = {}, data = []) => {
  return data.filter((item) => {
    let isValid = filterByGender(filters[GENDER], item);
    isValid = isValid && filterByMaterial(filters[MATERIAL], item);
    isValid = isValid && filterByPrice(filters[PRICE], item);
    return isValid;
  });
};

const filterByGender = (filters = [], item) => {
  let isAnyFilterApplied = false;
  for (let filter of filters) {
    const [filterName, isApplied] = Object.entries(filter)[0];

    if (isApplied) {
      isAnyFilterApplied = true;
      switch (filterName) {
        case "male":
          if (item.sex == "M") return true;
          break;
        case "female":
          if (item.sex == "F") return true;
          break;
        case "unisex":
          if (item.sex == "U") return true;
          break;
      }
    }
  }
  return !isAnyFilterApplied;
};
const filterByMaterial = (filters = [], item) => {
  let isAnyFilterApplied = false;
  for (let filter of filters) {
    const [filterName, isApplied] = Object.entries(filter)[0];

    if (isApplied) {
      isAnyFilterApplied = true;
      switch (filterName) {
        case "gold":
          if (item.material == "gold") return true;
          break;
        case "diamond":
          if (item.material == "diamond") return true;
          break;
        case "white gold":
          if (item.material == "white gold") return true;
          break;
      }
    }
  }
  return !isAnyFilterApplied;
};

const filterByPrice = (filters = [], item) => {
  let isAnyFilterApplied = false;
  for (let filter of filters) {
    const [filterName, isApplied] = Object.entries(filter)[0];

    if (isApplied) {
      isAnyFilterApplied = true;
      switch (filterName) {
        case "less than 10000":
          if (item.price <= 10000) return true;
          break;
        case "10000 to 20000":
          if (item.price >= 10000 && item.price <= 20000) return true;
          break;
        case "20000-300000":
          if (item.price >= 20000 && item.price <= 30000) return true;
          break;
        case "more than 30000":
          if (item.price >= 30000) return true;
          break;
      }
    }
  }
  return !isAnyFilterApplied;
};
