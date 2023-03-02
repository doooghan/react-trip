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
  if (action.type === "change_language") {
    const newState = { ...state, language: action.payload };
    return newState;
  }
  return state;
};
