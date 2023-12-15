window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'BJvy13lUGY0JnpNRuC8nzta6HklYfOSC',
    redirectUri: 'https://superb-proven-redbird.ngrok-free.app',
    logoutRedirectUri: 'https://superb-proven-redbird.ngrok-free.app',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

