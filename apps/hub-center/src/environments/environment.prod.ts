import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'https://cms.advtv.vn/api/';
  hubBackendApiEndpointFile = 'https://cms.advtv.vn/api/';
  hubBackendApiEndpointOrigin = 'https://cms.advtv.vn/';
}

export const environment = new EnvironmentImpl();
