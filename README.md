# Rainbow Web SDK - Hello World

Welcome to Rainbow Web SDK Hello World starter kit. The goal of this project is to set up the most basic project allowing you to quickly get your JavaScript application up and running - with all the Rainbow functionalities right here for the taking.

## Basic configuration

Clone this repository and navigate to the folder that contains the file. Once there, run the following commands:

```shell
npm install
npm run build
npm run serve
```
Once done, you can navigate to http://localhost:8887 with your browser and continue developing your Rainbow Application. For more information, please visit [Rainbow Hub](www.hub.openrainbow.com).

## In-depth guide

This tutorial will explain how to start a basic Rainbow Web application and use the Rainbow SDK as ES Module. You can learn more about modules from [this article](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/).

If you wonder how to set up the development environment and basic application structure, you are in the right place. If you have already built an app, this article will reiterate through the fundamental app structure in case you got lost on the way.

At the end of this tutorial you will have a working application that could be considered as a starting point for developing an app using **Rainbow Web SDK**. You will also get the basic notion of the key Rainbow Web SDK concepts.

The goal is to keep it simple, therefore we will be using the basic folder structure and vanilla JavaScript. This will be less disturbing for the new developers and expose the Rainbow Web SDK features to the veterans.


### Set up your development environment

Before you start using Rainbow Web SDK, you need to make sure you have installed the required software tools.

##### Install Node.js and NPM

Make sure you have installed Node.js and NPM on your computer by running the following commands:

```shell
$ node --version
> v12.14.1
$ npm --version
> 6.14.1
```

If any of those commands does not return a version number, follow the installation guides ([Node](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

##### Browser

We will be using Chrome or Firefox to develop, but you can use any of the browsers supported by Rainbow Web SDK.

##### Text editor

Rainbow Web SDK is a JavaScript library, therefore you can use any text editor or IDE to develop your first project.

### Create your web application

As mentioned above, the project is going to use a basic structure of a simple JavaScript application. We will need a basic HTML structure that would load all the necessary libraries.

Go on and create a new folder. We recommend using command line tools.

Open a shell console and execute the following commands:

```shell
$ mkdir myFirstRainbowProject
$ cd myFirstRainbowProject
$ npm init -y
```

Once finished, you should have your JSON file `package.json` filled with the information. This step is required to install the required NPM libraries.

#### Install Rainbow Web SDK

Now, it's time to install the Rainbow Web SDK library.

The SDK for Web is available as an NPM package to make the installation and updates easier.

To install it, execute the following command (make sure you navigate to your project folder first):

```shell
npm i -S rainbow-web-sdk
```

Once Rainbow Web SDK has been installed, your project directory should look like this:

```shell
.
├── node_modules
│   └── rainbow-web-sdk
│       ├── dist
│       │   └── lib
│       │       ├── loader-sdk.min.js
│       │       ├── rainbow-sdk.min.js
│       │       └── vendors-sdk.min.js
│       ├── LICENSE
│       └── package.json
└── package.json

```
The Rainbow Web SDK has been added to your folder `node_modules`. This folder contains all the packages installed from NPM

#### Installing a local Web server


To test the basics of your application, you will need an HTTP Web server. However, please note that to use some functions you would need HTTPS server running on your machine.

You can install an NPM library HTTP-Server by executing the following command:

```shell
npm i -D http-server
```

#### Create a /public folder

If you're building a Web application without using tools like `Grunt`, `Gulp`, `Brunch` or `Webpack` or without using JavaScript framework like `React`, you need to manually create `public` directory.

You can execute the following command:

```shell
mkdir public
```

#### Create your first HTML file

We have installed all the basic libraries necessary to create a simple project. We can now focus on creating a HTML skeleton file that would hold our app intact.

Open a shell console and execute the following commands:

```shell
cd public
touch index.html
cp ../node_modules/rainbow-web-sdk/dist/lib/* .
```

#### Loading the Rainbow Web SDK library

Open the file `public/index.html` with your text editor of choice and add the following lines to load the Rainbow Web SDK library:

```html
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>My First Rainbow Application</title>
		<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.0.5/es6-promise.min.js"></script>
        <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
		<script src="//cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>
        <script src="./vendors-sdk.min.js"></script>
	</head>
	<body>
		<h1>Rainbow Hello World Application</h1>
    </body>
</html>
```

Rainbow Web SDK depends on some libraries that have to be loaded first like `jQuery`, `moment` and `AngularJS`. To have a complete compatibility with all browsers, the libraries `es5-shim` and `es6-shim` are loaded too.

Be careful to use the correct version of `jQuery`, `moment` and `AngularJS` specified here to avoid compatibility issues.

To simplify this sample, these libraries are loaded from a CDN.

#### Run your local HTTP server

```shell
$ cd ..
$ ./node_modules/http-server/bin/http-server public/ -p 8887
```

This command will start your web server on port `8887` and serve files in directory `dist`.

Open your browser and go to `localhost:8887`. You should see a white screen with a title.

#### Starting the Rainbow Web SDK library

Once everything is ready and going, let's use Rainbow Web SDK and try out its possibilities.

Open a shell console and execute the following commands:

```shell
$ cd public/
$ touch index.js
```

Then, load that file from your `index.html` file like in the following code. IMPORTANT: do not forget to add `type="module"` to the script tag. 

```html
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>My First Rainbow Application</title>
		<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.0.5/es6-promise.min.js"></script>
        <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
		<script src="//cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>
        <script src="./vendors-sdk.min.js"></script>
	</head>
	<body>
		<h1>My First Rainbow Application</h1>
		<script type="module" src="./index.js"></script>
    </body>
</html>
```

Finally, you have to add the following lines of code to your `index.js` file. Please note the two types of import statements- chose only one of them depending on the situation. 

```javascript
/* Chose one of the import statement below */
import { rainbowSDK } from './rainbow-sdk.min.js'; // If you do not use the bundler

var onReady = function onReady() {
    console.log('[Hello World] :: On SDK Ready !');
};

var onLoaded = function onLoaded() {
    console.log('[Hello World] :: On SDK Loaded !');

    rainbowSDK
        .initialize('APPID', 'APPSECRET')
        .then(() => {
            console.log('[Hello World] :: Rainbow SDK is initialized!');
        })
        .catch(err => {
            console.log('[Hello World] :: Something went wrong with the SDK.', err);
        });
};
document.addEventListener(rainbowSDK.RAINBOW_ONREADY, onReady);

document.addEventListener(rainbowSDK.RAINBOW_ONLOADED, onLoaded);
rainbowSDK.start();
rainbowSDK.load();
```

Go back to your browser and refresh the page.

Open your browser console (F12). You should see the following logs:

```shell
[Hello World] :: Rainbow Application started!
...
[Hello World] :: On SDK Loaded !
...
[Hello World] :: On SDK Ready !
...
[Hello World] :: Rainbow SDK is initialized!
```

The previous sample code does several things:

-   First, it **subscribes** to listeners for handling, starting and initializing events.

-   Second, it **loads** and **initializes** Rainbow Web SDK.

The following paragraphs will give you more details on these steps.

#### Subscribing to events

The Rainbow Web SDK fires events each time something happens in Rainbow.

To handle them, you need to add listeners somewhere in your code.

Here is the basic thing for subscribing to Rainbow events: you need to know the name of the event to subscribe and to define a callback that will be called when the Rainbow event will be caught by the SDK.

```javascript
document.addEventListener(rainbowSDK.<EVENT_NAME>, <my-callback>)
```

Here is the list of the events you need to listen in order to know if you SDK has been correctly initialized

| **Class** | **Event**          | **Value (String)** | **Description**                        |
| :-------- | :----------------- | :----------------- | :------------------------------------- |
| **sdk**   | `RAINBOW_ONLOADED` | "loaded"           | The SDK has been loaded by the browser |
| **sdk**   | `RAINBOW_ONREADY`  | "ready"            | The SDK has been initialized           |

**RAINBOW_ONLOADED**

This event is fired when the files of the SDK have been successfully loaded. If some dependencies are missing, this step will fail.

Once you receive this event, you can initialize the SDK by calling the method `initialize()`.

The initializing is done automatically if you are using the SDK Loader (for AngularJS) application.

**RAINBOW_ONREADY**

This event is fired when the initialization step has been done successfully.

The SDK is now ready to be used. You can call the `login()` method.

#### Loading the SDK

---

Before using the SDK, you need to load it by calling the method `load()` and listen to the event `RAINBOW_ONLOADED` to know when it is done.

You need to subscribe to it because when the SDK Web has been loaded successfully, you will need to initialize it.

#### Initializing the SDK

---

Once loaded, you need to initialize the SDK by calling the method `initialize()`.

This method is important because you need to provide an **Application ID** and a **Application secret key**. This is mandatory to connect your application to Rainbow.

You will need to listen to the event `RAINBOW_ONREADY` to know if the SDK is ready to be used (initialization step is complete).

At this stage, you can activate or not the full SDK and Rainbow logs by calling the method `setVerboseLog()`.

