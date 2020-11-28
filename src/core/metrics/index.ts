import analytics from '@react-native-firebase/analytics';
interface IMetricsLog {
    onLogEvent: (event: string, properties?: any) => Promise<void>
}
class MetricsProvider implements IMetricsLog {
    private static instance: MetricsProvider
    private constructor() { }
    static getInstance(): MetricsProvider {
        if (!MetricsProvider.instance) {
            MetricsProvider.instance = new MetricsProvider();
        }
        return MetricsProvider.instance;
    }
    onLogEvent(event: string, properties: any = {}): Promise<void> {
        return analytics().logEvent(event, properties)
    }

}
export const MetricsManager = MetricsProvider.getInstance();