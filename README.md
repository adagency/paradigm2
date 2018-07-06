## gatsby-boilerplate

Uses [GatsbyJS V1](https://www.gatsbyjs.org/) using a [custom boilerplate](https://github.com/Kalcode/gatsby-boilerplate)

## Setup

Installing
```sh
npm install
```

To use the form that ajaxes to wufoo and the prismic cms you need the following files in the root of the project
```
.env.development
.env.production
```

with the following variables
```sh
GATSBY_API_URL=https://wufoo.adnorml.com
GATSBY_API_TOKEN=
GATSBY_PRISMIC_URL=https://paradigmconstruction-tx.prismic.io/api/v2
```

#### Getting a token
Go to https://wufoo.adnorml.com and sign-in using your adnorml email account. Add a new entry using the projects name and copied the newly generated token into GATSBY_API_TOKEN

## structure 
React v16 with ES7

This projects uses [prismic.io](https://prismic.io/) for a CMS. Login for developers is:

```
User: dev@adnorml.com
Pass: adnorml00
```

Redux/Saga is used to pull the data from the prismic.io and store it into the application state. There is a HOC (under 'src/components/Prismic/withType.js') that can be used to subscribe to the store and filter the data based on type.

The component Prismic is responsible for pulling in the data and if there are multiple pages will request each page. It fetches the data using redux-saga under 'reducers/prismic/saga'. 

This project can be used as the foundation for future prismic.io cms projects.

Uses Redux for Nav and keep track of Forms. [React Redux](https://redux.js.org/basics/usage-with-react) and also [Redux Saga](https://redux-saga.js.org/) for side-effects like fetch request.

Redux should be used when needing to track a global store/state.

Uses SCSS and Foudnation 6 for css handling. Settings are in src/*.scss files 

src/ houses the react application, inside we create routes automatically based on the folder name of 'pages'

```sh
src/pages # folder name turn into routes (ie: about = /about)
src/components # all components for react houses here
src/layouts # layout for the application itself (header, footer etc)
src/reducers # Redux actions, types and reducers
src/store.js & saga.js # redux store and saga connections
src/components/App # Application based components like Helmet or connecting context to app

config/shims/assetInserter # where (body/head) and which(ie:Google Analytics) scripts are inserted
scripts/index.js # auto ran on post build
```

The rest should be pretty straightforward following GatsbyJS Documentation.

### develop
```sh
npm start
```

### build
```sh
make build
```

### serve
*(requires http-server installed via "npm i -g http-server")*
```sh
make serve
```

### deploy
```sh
make deploy
```

#### Problems?
```sh
rm -rf public .cache
```
