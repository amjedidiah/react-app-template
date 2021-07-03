#!/bin/bash

#  Add global dependencies
npm i -g yarn prettier eslint cross-env netlify gh-pages

# Add dependencies
yarn add @popperjs/core @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bootstrap node-sass objectify-array react react-dom react-helmet react-icons react-redux react-redux-loading react-router-dom react-scripts react-scroll-to-top react-select react-toastify redux redux-persist redux-thunk serve web-vitals workbox-background-sync workbox-broadcast-update workbox-cacheable-response workbox-core workbox-expiration workbox-google-analytics workbox-navigation-preload workbox-precaching workbox-range-requests workbox-routing workbox-strategies workbox-streams

# Add dev dependencies
yarn add -D @wojtekmaj/enzyme-adapter-react-17 babel-eslint enzyme eslint eslint-config-google eslint-plugin-babel eslint-plugin-import eslint-plugin-react pre-commit

# Start dev
yarn dev
