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
    console.log("step4: change state create new state");

    const newState = { ...state, language: action.payload };
    return newState;
  }
  console.log("step1: redux create");
  return state;
};
