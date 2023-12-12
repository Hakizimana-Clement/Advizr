const filters = {
  searchText: "",
  hideChecked: false,
};

const getFilters = () => filters;

const setFilters = (updates) => {
  if (typeof updates.searchText === "string") {
    filters.searchText = updates.searchText;
  }
  if (typeof updates.hideChecked === "boolean") {
    filters.hideChecked = updates.hideChecked;
  }
};

export { getFilters, setFilters };
