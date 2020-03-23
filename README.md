## Project title
Star Wars

## Installation and Setup Instructions
You will need node and npm installed globally on your machine to run the app.
- First, clone the project repo from Github. Then, change directories into the cloned repository. To accomplish this, execute these command:

   $ git clone `https://github.com/Vad96/starWars.git`

- Open the project in its directory: 

  $ `cd starWars`

- Now now that you have cloned your repo and changed directories into the project, install the package dependencies, run: 

  $ `npm install`

- You are now ready to run the program on your local machine.To Start Server run that it will open project in your browser:

  $ `npm start`
   
- Login email: user@gmail.com
- Password: 123456
- You may also sign up by creating your own email and password

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.It's smart enough to know which NODE_ENV you're in<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### A list of libs used
- node-sass: 4.13.1,
- react-loader-spinner: 3.1.5
- react-sky: 1.1.0

###
### 

Потрібно доробити ще правильний пошук на головній сторінці, аби фільтрувався увесь запит, а не тільки на одній сторінці, виправити мигання при загрузці сторінки з логіном. Також можна ще змінити структуру папок, так як best practice - компоненти і стилі мають бути в одній папці, "роздробити" деякі компоненти на більш малі, в стилях зробити окремі файли для елементів кнопок, та інших елементів, які ще зустрічатимуться на багатьох сторінках.
