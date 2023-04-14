# Pointify

An app that allows you to view the points obtained for products purchased. Each purchase gives you a certain number of points and you can view the detail of the products as well as how many points it gave you.

## Facility

To install the app, follow the steps below:

1. Clone the repository:
```
git clone git@github.com:EdgardoV/pointify.git
```
2. Install the dependencies:
```
cd pointify
yarn install
```
3. To run the app on Android, make sure you have an Android emulator running on your machine. Then run:
```
yarn android
```
4. To run the app on iOS, make sure you have an iOS simulator running on your machine. Then run:
```
npx pod-install
yarn ios
```
5. If you want to run the tests
```
yarn test
```

## Folder structure

```
pointify/
├── __tests__/
├──android/
├── ios/
├── src/
| |── Api/
│ ├── assets/
│ ├── components/
| |── config/
| |── hooks/
| |── i18n/
| |── reactRedux/
| |── routes/
│ ├── screens/
│ ├── services/
│ ├── theme/
│ └── utils/
```

## Description of the folders

- __tests__/: Contains unit and integration test files for the application.
- android/: contains the files needed to build the application on Android.
- ios/: contains the files needed to build the application on iOS.
- src/: it is the main folder that contains the source code of the application.
   - Api/: contains the functions to make calls to the API.
   - assets/: contains static assets such as images, fonts, and audio files.
   - components/ : Contains the reusable React components that are used throughout the application.
   - config/: contains the application configuration such as environment variables, paths, themes, etc.
   - hooks/ : Contains custom React hooks that are used throughout the application.
   - i18n/: contains the files necessary for the internationalization of the application.
   - reactRedux/: contains the definition of the actions, reducers and types for Redux.
   - routes/: contains the definition of the navigation routes of the application.
   - screens/: contains the main screens of the application.
   - services/: Contains the services that are used to perform actions in the application such as authentication or API calls.
   - theme/: contains the styles and themes of the application.
   - utils/: Contains utility functions that are used throughout the application.



_Ready! With these steps and the folder structure, you will be able to install and run the Pointify application. Enjoy it!_



## Screenshots
![Screenshot_1681493666](https://user-images.githubusercontent.com/39603708/232122307-304f6f56-5943-4256-951d-e01bdfd8890f.png)
![Screenshot_1681493670](https://user-images.githubusercontent.com/39603708/232122314-7493736d-c44c-4cd7-b636-f9d9964460c4.png)
![Simulator Screenshot - iPhone 14 Pro - 2023-04-14 at 09 37 03](https://user-images.githubusercontent.com/39603708/232122317-0ebe249f-38b3-4058-8d21-0a9af7a23d1c.png)
![Simulator Screenshot - iPhone 14 Pro - 2023-04-14 at 09 37 08](https://user-images.githubusercontent.com/39603708/232122318-9a9f8305-a36a-4877-95af-8028c7432d9d.png)
