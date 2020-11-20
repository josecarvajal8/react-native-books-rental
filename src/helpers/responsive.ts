import { Platform, Dimensions } from 'react-native';
import utilities from './utilities';
const { width, height } = Dimensions.get('window');
import util from './utilities';
const BaseSize = { height: (Platform.OS === 'ios' ? 896 : 592), width: (Platform.OS === 'ios' ? 414 : 384) }
const RealWidth = width;
const RealHeight = height;
const WResize: Array<string> = ['borderRadius', 'paddingHorizontal', 'marginHorizontal', 'borderWidth', 'borderBottomWidth',
    'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'maxLength', 'marginLeft', 'marginRight', 'paddingLeft',
    'paddingRight', 'left', 'right', 'maxWidth', 'minWidth', 'width', 'border', 'radius', 'x', 'fontSize'];
const HResize: Array<string> = ['paddingVertical', 'marginVertical', 'letterSpacing', 'lineHeight', 'marginBottom',
    'marginTop', 'paddingBottom', 'paddingTop', 'bottom', 'top', 'maxHeight', 'minHeight', 'height', 'y'];
const CrossProperty: Array<string> = ['margin', 'padding'];
const WFactor: number = (RealWidth / BaseSize.width);
const HFactor: number = (RealHeight / BaseSize.height);

const ConversionFactor = { WFactor, HFactor }
const getComponentStyle = (component: any) => {
    let styles: any = extractPlatformStyle(component)
    let isCircle: boolean = utilities.has(component, 'height') && utilities.has(component, 'width')
        && utilities.has(component, 'borderRadius') && component.heigth === component.width
        && component.heigth === (component.borderRadius / 2)
    const circleWidth: number = Number(component.width) * WFactor
    const styleHasItems = utilities.arrayHasItems(Object.keys(styles))
    styleHasItems && Object.entries(styles).forEach(([key, val]: any) => {
        if (util.isObject(val)) {
            styles[key] = getComponentStyle(val)
        } else if (util.isNumber(val)) {
            if (CrossProperty.includes(key)) {
                styles[`${key}Horizontal`] = (WFactor * val)
                styles[`${key}Vertical`] = (HFactor * val)
            } else {
                styles[key] = WResize.includes(key) ? (WFactor * val) :
                    HResize.includes(key) ? (HFactor * val) : val
            }
        } else {
            styles[key] = val
        }
    })
    if (isCircle) {
        styles.width = circleWidth
        styles.borderRadius = (circleWidth / 2)
        styles.height = circleWidth
    }
    return styles
}

const extractPlatformStyle = (component: any) => {
    let platformStyle = { ...component, ...(component[Platform.OS]) }
    if (util.has(platformStyle, 'ios') || util.has(platformStyle, 'android')) {
        delete platformStyle.ios
        delete platformStyle.android
    }
    return platformStyle
}

export default getComponentStyle;