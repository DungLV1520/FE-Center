export abstract class Environment {
  abstract readonly hubBackendApiEndpoint: string;
  abstract readonly hubBackendApiEndpointFile: string;
  abstract readonly hubBackendApiEndpointOrigin: string;
}
