// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

import type { UniAppGlobalComponents } from './uni-app/runtime-uni-app-global-components';

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends UniAppGlobalComponents {}
}
export {};
