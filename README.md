M0_ReactNative_TS3

K6B.
React Native TypeScript empty project for OS setup test (type M0).

According to https://reactnative.dev/docs/environment-setup.

NOTE:
npx react-native init AwesomeTSProject --template react-native-template-typescript
installs with some errors.

Here was used next steps:

npx react-native init AwesomeJSProject;
cd AwesomeJSProject;
npx react-native init AwesomeTSProject --template react-native-template-typescript;
(React Native logo displays while install);
And move folder AwesomeTSProject from AwesomeJSProject;

UPDATED on K8A.
For update npm packages:
- delete node_modules
- delete yarn.lock
- run 'ncu -u' (npm-check-updates)
- run 'yarn'
That all.
- run 'react-native start'
- another terminal, 
  run 'react-native run-android'
Note: if something is broken, so set packages version according to nl-K8A.txt

UPDATED on K8H.
Cleaned test packages (Jest, eslint, etc...)
apk files became smaller

Result files sizes (J - JavaScript compiler, H - Hermes engine):

app-arm64-v8a-release-H.apk    5 145 633

app-arm64-v8a-release-J.apk    6 980 638

app-armeabi-v7a-release-H.apk  4 813 897

app-armeabi-v7a-release-J.apk  6 624 326

app-x86_64-release-H.apk       5 420 005

app-x86_64-release-J.apk       7 459 810

app-x86-release-H.apk          5 530 537

app-x86-release-J.apk          6 935 462
