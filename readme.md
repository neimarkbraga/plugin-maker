# Plugin Maker Template
Implementing a small app in a static website like wordpress is painful especially without framework, everything needs to be coded with vanilla javascript.
This project aims to solve the inconvenience by inserting a react app to a web page.

## Getting started
The output of this template is a javascript file (`my-plugin.js`) that can be simply imported to web pages.

This template supports a development server to test the rendering of your app in a dummy webpage. The file path of dummy webpage is `/dev/index.html`, you can modify it like making it look like a page where your app will be rendered.

#### Changing output filename
To change the output filename (`my-plugin.js`), open `webpack.config.js` and change the value of variable `OUTPUT_FILENAME` on line 5.

If you changed the output filename, you need to change the filename imported in development server's dummy webpage (`/dev/index.html`) too, find `<script src="/my-plugin.js"></script>` and change the filename accordingly.

#### Mount/Init function name
The entry file of this template is `/src/index.jsx`, in this file there's a function named `initPlugin` and assigned on window instance, it serves as the initializer of your app, when you call it, it will render your react app to the given dom element. You can change the function name to anything like `mountPlugin`, but you have to update the development server's dummy webpage too, find the `initPlugin` code and change it accordingly.

Technically, you can add multiple function names to call, they serve as the interface of your plugin.

## Development
To start developing, run `npm run dev:start`, this will serve the dummy webpage to render the output of your app.

## Build
run `npm run build` to build the output file in `/dist`.
