import { PORTFOLIO_BUTTONS_CAT } from "../components/util/Const";

const INITIAL_STATE = {
  path: window.location.pathname,
  filter: PORTFOLIO_BUTTONS_CAT[0].text,
  scrollContacts: false,
  mapVisible: false,
  servicos_viewed: window.location.pathname === "/portfolio" ? true : false,
};

const pathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PATH_ROUTE":
      return {
        ...state,
        path: action.payload,
      };
    case "PATH_ROUTE_FILTER":
      return {
        ...state,
        path: action.payload.path,
        filter: action.payload.filter,
      };
    case "CHANGE_FILTER":
      return { ...state, filter: action.payload };
    case "SCROLL_CONTACTS":
      const bool = state.scrollContacts ? false : true;
      return { ...state, scrollContacts: bool };
    case "MAP_VISIBLE":
      if (state.mapVisible) {
        return state;
      }
      return { ...state, mapVisible: action.payload };
    case "SERV_ACTION":
      return { ...state, servicos_viewed: action.payload };
    default:
      return state;
  }
};

export default pathReducer;
