import i18n from "i18next";

type Language = "zh" | "en";

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

export default (state = defaultState, action) => {
  console.log("languageReducer state action", state, action);
  switch (action.type) {
    case "change_language":
      console.log("step4: change state create new state");
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };

    case "add_language":
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };

    default:
      return state;
  }
};
