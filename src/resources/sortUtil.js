export const sortTypes = { ASC: "ASC", DESC: "DESC" };
const compare = (type, property) => (item1, item2) => {
  switch (type) {
    case sortTypes.ASC:
      return item1[property] > item2[property] ? 1 : -1;

    case sortTypes.DESC: {
      return item2[property] > item1[property] ? 1 : -1;
    }
  }
};

export default (items, property, type) => {
  const sortedItems = [...items].sort(compare(type, property));
  //   console.log(sortedItems);
  return sortedItems;
};
