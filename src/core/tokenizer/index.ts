import base64 from 'react-native-base64'
interface ITokenizer {
    generateToken: (payload: any) => string;
    decodeToken: (token: string) => string;
}
class Tokenizer implements ITokenizer {
    private static instance: Tokenizer;
    private constructor() { }
    static getInstance(): Tokenizer {
        if (!Tokenizer.instance) {
            Tokenizer.instance = new Tokenizer();
        }
        return Tokenizer.instance;
    }
    generateToken(payload: { [key: string]: any }): string {
        const value = JSON.stringify(payload);
        return base64.encode(value);
    }
    decodeToken(token: string): string {
        return JSON.parse(base64.decode(token));
    }
}
export const TokenizerManager = Tokenizer.getInstance();
