import { ConnectorType } from "../../snapshot/options";
import Connector from "./connector";

export default class Lock {
  public connectors: Record<string, any> = {};
  public options: Record<string, any> = {};

  constructor(connectorsArr?: any[]) {
    if (connectorsArr) {
      connectorsArr.forEach((connector) => this.addConnector(connector));
    }
  }

  addConnector(connector: any) {
    this.connectors[connector.key] = connector.connector;
    this.options[connector.key] = connector.options;
  }

  getConnector(key: ConnectorType): Connector {
    const options = this.options[key];
    return new this.connectors[key](options);
  }
}
