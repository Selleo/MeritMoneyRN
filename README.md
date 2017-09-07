# Merit Money Native

## Setup

To setup environment for launching app look into [this](https://facebook.github.io/react-native/docs/getting-started.html) tutorial and into tab `Building Projects with Native Code`.

After that setup run `yarn install` to setup dependencies.
For running e2e tests you have to [setup detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md).

Also you had to setup `.env` with environment keys.

## Testing

There is provided unit testing by [jest](http://facebook.github.io/jest/docs/en/getting-started.html) and end2end testing with [detox](https://github.com/wix/detox/blob/master/docs/README.md).

Before running tests run `react-native start` command to setup packager (this is necessary for `detox` testing).

To run whole environment tests just write: `yarn test`.
for unit and e2e specs: `yarn test:unit`, `yarn test:e2e`.

## Development
If you never have written any mobile application just be sure that you have simulators setuped.

To run ios with xcode just run `react-native run-ios`.
To run android just go for `react-native run-android`.
