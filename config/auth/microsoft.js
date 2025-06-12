export const heinekenAuthConfig = (location) => ( {
    // auth: {
    //     clientId: "0a063be0-6628-4855-ad73-1d47d015cc80",
    //     authority: "https://login.microsoftonline.com/cc771845-fdf5-4bac-af9b-92ce5f82ea7a",
    //     redirectUri: location,
    // },
    // cache: {
    //     cacheLocation: "sessionStorage",
    //     storeAuthStateInCookie: false,
    // },
    auth: {
        clientId: "9ad15f9e-9578-4aeb-be85-995a98781ed6",
        authority: "https://login.microsoftonline.com/66e853de-ece3-44dd-9d66-ee6bdf4159d4/saml2",
        redirectUri: location,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
})
