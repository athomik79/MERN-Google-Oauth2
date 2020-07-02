# mern-google-login

Authentication flow for MERN stack application using google OAuth 2.0. 

This oauth flow is more secure and you don't have to reload your react app and go through multiple redirections to authenticate client.

## App flow

Google Docs Sign-In for server side apps [google docs](https://developers.google.com/identity/sign-in/web/server-side-flow)

## Installation

### 1. Clone the repository & install dependencies
#### Make sure to run the npm install on the root directory as well as the client directory

cd project-3

npm install

cd client & npm install


### 2. Obtain OAuth 2.0 credentials from the Google API Console. (You will need these credentials for the app to run. If you do not want to set them up, just let me knwo and I'll send you the .env files and let you know where to put them SEE STEP 4-5)

Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application. 
Don't store your client secret in your React app. You only need the client id in your react app to get the authorization grant code. 
And you should store the client secret in the node app. 


### 3. Add Authorized JavaScript Origins

Go to [Google API Console](https://console.developers.google.com/). And select your project & then add JavaScript Origins Url

![Capture](https://user-images.githubusercontent.com/29760858/65677289-c3582600-e06a-11e9-8a69-564a89dbe522.PNG)

**This is a url of client side react app**
 
 
**You'll notice in the code that the `redirect_uri` is set to `postmessage`, it's because we need the authorization grant code without any redirection**

### 4. Client Side Setup

1. execute these commands


cd client
touch .env.local

2. open `.env.local` file & enter
   `REACT_APP_GOOGLE_CLIENT_ID=your client id provided by google`

### 5. Server Side Environment Variables Setup

From the root directory of the project, type:

mkdir config

cd config

touch dev.env

**Note: These commands are for Mac/Linux users only. Windows users should type these commands in git bash**

Now open the dev.env file and add `GOOGLE_CLIENT_ID=value from google apis`, `GOOGLE_CLIENT_SECRET=value from google apis`

### 6. Run 'dev' script

npm run dev

### More information

if you want more information, then please read the [one-time-code flow implementation](https://developers.google.com/identity/sign-in/web/server-side-flow)

## License

[MIT](https://choosealicense.com/licenses/mit/)
