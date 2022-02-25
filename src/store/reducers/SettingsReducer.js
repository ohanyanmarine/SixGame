import { SettingTypes } from "../types";

const INIT_STATE = {
  settings: null,
  
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SettingTypes.SET_SETTINGS:
      return { ...state, settings: payload };
   default:
        return state;
  }
  
};
