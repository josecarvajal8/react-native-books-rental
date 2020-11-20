const has = (value: Object, key: string) => Object.prototype.hasOwnProperty.call(value, key);
const arrayHasItems = (arr: Array<any> = []) => {
    if (Array.isArray(arr)) {
        return arr.length > 0
    }
    return false
};
const isObject = (obj: { [key: string]: any }) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
const isNumber = (value: any) => Object.prototype.toString.call(value) === '[object Number]';
export default {
    has,
    arrayHasItems,
    isNumber,
    isObject
}