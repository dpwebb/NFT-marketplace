// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    isTokenEnabled: true,
    isResellAllowed: false,
    wallet: 'http://uol.com.br',
    whitepaper: 'https://woolongs.com/whitepaper.pdf',
    youtube: '#',
    instagram: 'https://www.instagram.com/woolongcorp/',
    facebook: 'https://www.facebook.com/WoolongC',
    twitter: 'https://twitter.com/WoolongsC',
    cancellation: '#',
    deliveries: '#',
    account: '#',
    exchanges: '#',
    about: '#',
    policy: '#',
    work: '#',
    contact: '#',
    social: '#',
    scripts: {
        paypal: 'https://www.paypalobjects.com/api/checkout.js',
        pagseguro: 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
