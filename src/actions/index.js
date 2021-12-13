export const changePath = (path) => {
  return {
    type: "PATH_ROUTE",
    payload: path,
  };
};

export const changePathFilter = (path, filter) => {
  return {
    type: "PATH_ROUTE_FILTER",
    payload: { path, filter },
  };
};

export const mapVisible = () => {
  return {
    type: "MAP_VISIBLE",
    payload: true,
  };
};

export const scrollContacts = () => {
  return {
    type: "SCROLL_CONTACTS",
  };
};

export const filterApplied = (filter) => {
  return {
    type: "CHANGE_FILTER",
    payload: filter,
  };
};

export const servicosViewed = () => {
  return {
    type: "SERV_ACTION",
    payload: true,
  };
};
