// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://erpautopecas.herokuapp.com/api",
  getInventoryDownUrl: "https://erpautopecas.herokuapp.com/api/reports/pdf/get-inventory-down-products",
  downloadInventoryDownUrl: "https://erpautopecas.herokuapp.com/api/reports/pdf/download-inventory-down-products"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
