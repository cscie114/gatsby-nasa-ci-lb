![CI workflow](https://github.com/cscie114/gatsby-nasa-ci/actions/workflows/ci.yml/badge.svg?branch=main)

# Gatsby Nasa Example

This is an example using [Gatsby](https://www.gatsbyjs.com/) with sample JSON data from [NASA's Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/).

Key features:
- Uses [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) and [gatsby-transformer-json](https://www.gatsbyjs.com/plugins/gatsby-transformer-json/) to parse local JSON data.
- Creates pages programmatically using Gatsby's [createPage()](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage) function in `gatsby-node.js`.
- Implements basic pagination in `gatsby-node.js`.
- Demonstrates React hydration on the search page.
- Uses GitHub actions for CI and CD to netlify (see `.github/workflows`).
- Uses [eslint](https://eslint.org/) and [jest](https://jestjs.io/) as part of CI.

## Quickstart

```sh
npm install
npm run develop
open http://localhost:8000/
```

## Testing

To run lint checks and unit tests:

```sh
npm run lint
npm run test
```

To run cypress e2e tests:

```sh
npm run build
npm run serve
npm run cy:run  # use CLI to run tests and report results
npm run cy:open # ... or open the GUI and run tests there
```

Note that cypress is not part of the CI workflow, but can be dispatched manually through its own Github Actions workflow.

## Github Actions

This project implements a basic CI/CD workflow using [Github Actions](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs). Any push to `main` or pull request to `main` will trigger this workflow. It will run linting checks and unit tests concurrently, and then proceed to deploy to netlify if both checks pass. Netlify will deploy a preview for PRs, otherwise it will deploy to production if the push is to `main`.

See details in `.github/workflows/ci.yml`.

## Refreshing NASA data

A snapshot of the data is stored locally and sourced by Gatsby. 

To refresh the data:

```sh
export NASA_API_KEY="your_api_key"
export START_DATE=2023-01-01
export END_DATE=$(date +%Y-%m-%d)

curl -s "https://api.nasa.gov/planetary/apod?api_key=$NASA_API_KEY&start_date=$START_DATE&end_date=$END_DATE" | python3 -m json.tool >data/nasa.json
```

