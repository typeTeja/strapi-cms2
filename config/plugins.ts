export default ({ env }) => ({
    graphql: {
      enabled: true,
      config: {
        defaultLimit: 25,
        maxLimit: 100,
        apolloServer: {
          introspection: true,
        },
        // Enable deep filtering throughout
        depthLimit: 15,
        nestedMutations: true,
      },
    },
    i18n: {
      enabled: true,
      config: {
        defaultLocale: env('I18N_DEFAULT_LOCALE', 'en'),
        locales: ['en'], // extend later for multilingual
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        // Supabase upload provider
        provider: 'strapi-upload-supabase-provider',
        providerOptions: {
          apiUrl: env('SUPABASE_API_URL'),
          apiKey: env('SUPABASE_API_KEY'),
          bucket: env('SUPABASE_BUCKET_NAME'),
          directory: env('SUPABASE_BUCKET_DIRECTORY', ''),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });