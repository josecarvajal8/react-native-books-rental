interface ILanguage {
    getCurrentLanguageCode: () => string;
    setCurrentLanguageCode: (languageCode: string) => void;
}
class Language implements ILanguage {
    private languageCode: string;
    private static instance: Language
    private constructor() {
        this.languageCode = 'en'
    }
    static getInstance(): Language {
        if (!Language.instance) {
            Language.instance = new Language();
        }
        return Language.instance;
    }
    getCurrentLanguageCode(): string {
        return this.languageCode;
    }
    setCurrentLanguageCode(languageCode: string): void {
        this.languageCode = languageCode;
    }
}
export const LanguageManager = Language.getInstance();