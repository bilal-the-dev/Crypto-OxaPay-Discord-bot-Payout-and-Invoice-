declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      BOT_OWNER_ID: string;
      EMBEDS_CHANNEL_ID: string;

      RESELLER_API_BASE_URL: string;
      RESELLER_API_KEY: string;
    }
  }
}

// // If this file has no import/export statements (i.e. is a script)
// // convert it into a module by adding an empty export statement.
export {};
