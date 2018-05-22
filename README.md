# MeritMoney

## React Native Environment Setup

### Universal Setup - required for both iOS and Android

At the beginning you need to install some basic packages

* `brew install node`
* `brew install watchman`
* `brew install yarn`
* `npm install -g react-native-cli`

**If you'll get an error like Cannot find module 'npmlog', try installing npm directly:**

`curl -0 -L https://npmjs.org/install.sh | sudo sh.`

### iOS Development Environment Setup

**Install XCODE**

* The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.
* **`If you have already installed Xcode on your system, make sure it is version 8 or higher.`**
* After installing Xcode you need to accept `xcode developer agreement` in your console (bash or zsh)
  Next step is running one of the Xcode example projects to be sure that all missing dependencies are already installed.

### Android Development Environment Setup

* Follow the instruction from the official Facebook documentation - https://facebook.github.io/react-native/docs/getting-started.html (`Building Projects with Native Code -> macOS -> android`)
* You need to get through the `Java Development Kit` section and `Android development environment`

`TIP: After installing all of the Android Studio packages and SDKs - create some TestProject and allow the IDE to check if all of the needed packages are installed - especially when you do not see the ANDROID menu item in the Android Studio “Tools”`

### Creating a new application

* Initializing empty project -> `react-native init AwesomeProject`
* Installing dependencies -> `yarn install`
* Running `Metro Bundler` and start watching changes in JS files -> `yarn start`
* Running iOS simulator `react-native run-ios` (use different terminal tab or split the existing one)
* Running Android simulator `react-native run-android` (use different terminal tab or split the existing one)

### Enable Live Reloading

* Use COMMAND + D to open iPhone simulator debugger menu and click `Enable Live Reload`
* Use COMMAND + M to open Android simulator debugger menu and click `Enable Live Reload`
