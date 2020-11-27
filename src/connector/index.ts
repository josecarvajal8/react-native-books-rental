interface IRequest {
    headers: { [key: string]: any };
    url: string;
    method: string;
    body?: { [key: string]: any }

}
interface IConnector {
    generateRequest: (payload: IRequest) => Promise<any>
}
class ConnectorProvider implements IConnector {
    private static instance: ConnectorProvider
    private constructor() { }
    static getInstance(): ConnectorProvider {
        if (!ConnectorProvider.instance) {
            ConnectorProvider.instance = new ConnectorProvider();
        }
        return ConnectorProvider.instance;
    }
    generateRequest(payload: IRequest): Promise<any> {
        const { url } = payload;
        return new Promise(async (resolve, reject) => {
            try {
                const res: any = await fetch(url, {
                    ...payload
                });
                const data: any = await res.json();
                resolve(data);
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const ConnectorManager = ConnectorProvider.getInstance();