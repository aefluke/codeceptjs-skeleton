exports.config = {
  name: 'codeceptjs-skeleton',
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://sut.com',
      show: true,
      chrome: {
        args: ['--no-sandbox', '--window-size=1440,900']
      },
      windowSize: '1440x900',
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForTimeout: 10000,
      waitForAction: 500,
      restart: false,
    }
  },
  include: {
    I: './steps_file.js',
    xPage: './pages/x.js',
  },
  bootstrap: './hooks/bootstrap.js',
  mocha: {},
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'login',
      users: {
        user: {
          login: (I) => I.login('user', 'pass'),
          check: (I) => I.amSignedIn('user')
        }
      }
    },
    'screenshotOnFail': {
      'enabled': true,
      'fullPageScreenshots': true
    },
    'allure': {
      'enabled': true
    },
    'autoDelay': {
      'enabled': true
    },
    'retryFailedStep': {
      'enabled': true
    },
    'stepByStepReport': {
      'enabled': true,
      'screenshotsForAllureReport': true
    }
  }
}