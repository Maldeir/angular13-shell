// import {environment as env} from './environment';
// env.production = true;
//
// export const environment: any = env;
export const environment = {
  production: true,
  app: {
    domain: 'http://remote',
    port: '80'
  },
  header: {
    url: 'http://localhost:82/remoteEntry.js',
  },
  component: {
    url: 'http://localhost:82/remoteEntry.js',
  }
};
