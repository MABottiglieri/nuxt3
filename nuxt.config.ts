// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side

    // APP
    APP_SECRET: process.env.APP_SECRET,

    // AUTODESK FORGE
    FORGE_CALLBACK_URL: process.env.FORGE_CALLBACK_URL,
    FORGE_CLIENT_ID: process.env.FORGE_CLIENT_ID,
    FORGE_CLIENT_SECRET: process.env.FORGE_CLIENT_SECRET,

    // MONGODB
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_URI_CLONE: process.env.MONGODB_URI_CLONE,
    MONGODB_LICENCE_URI: process.env.MONGODB_LICENCE_URI,
    MONGODB_TESTING_URI: process.env.MONGODB_TESTING_URI,
    MONGODB_URI_EVALUATIONS: process.env.MONGODB_URI_EVALUATIONS,

    // SENDGRID
    SEND_GRID_API_KEY: process.env.SEND_GRID_API_KEY,
    SEND_GRID_VERIFIED_SENDER: process.env.SEND_GRID_VERIFIED_SENDER,
    SEND_GRID_DEVELOPMENT_RECIPIENT:
      process.env.SEND_GRID_DEVELOPMENT_RECIPIENT,

    // LOGTAIL
    LOGTAIL_API_KEY: process.env.LOGTAIL_API_KEY,

    // Keys within public are also exposed client-side
    public: {
      // APP
      BASE_URL: process.env.BASE_URL,
      API_PATH: process.env.API_PATH,
      COMPANY_NAME: process.env.COMPANY_NAME,
      VERSION_RELEASE: process.env.VERSION_RELEASE,

      // AUTODESK FORGE
      FORGE_HUB_ID: process.env.FORGE_HUB_ID,
      // MICROSOFT
      MICROSOFT_AUTH_AUTHORITY: process.env.MICROSOFT_AUTH_AUTHORITY,
      MICROSOFT_AUTH_REDIRECT_URI: process.env.MICROSOFT_AUTH_REDIRECT_URI,
      MICROSOFT_LOGOUT_REDIRECT_URI: process.env.MICROSOFT_LOGOUT_REDIRECT_URI,
      MICROSOFT_CLIENTID: process.env.MICROSOFT_CLIENTID,
      MICROSOFT_TENANTID: process.env.MICROSOFT_TENANTID,

      // LOGTAIL
      LOGTAIL_API_KEY: process.env.LOGTAIL_API_KEY,
    },
  },
});
