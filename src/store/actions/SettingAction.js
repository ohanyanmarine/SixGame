import {SettingTypes} from '../types';

export const getSettingsAction = () => {
  return {
    type: SettingTypes.GET_SETTINGS,
  };
};

export const setSettingsAction = payload => {
  return {
    type: SettingTypes.SET_SETTINGS,
    payload,
  };
};


