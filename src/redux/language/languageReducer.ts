import i18n from "i18next";
import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  LanguageActionTypes,
} from "./languageActions";

export type Language = "zh" | "en";

export interface LanguageState {
  language: Language;
  languageList: { name: string; code: Language }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

export default (state = defaultState, action: LanguageActionTypes) => {
  console.log("languageReducer state action", state, action);

  switch (action.type) {
    case CHANGE_LANGUAGE:
      console.log("step4: change state create new state");
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };

    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };

    default:
      console.log("step1: defaultState");
      return state;
  }
};
