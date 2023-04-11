![CI workflow](https://github.com/cscie114/gatsby-nasa-ci/actions/workflows/ci.yml/badge.svg?branch=main)

# Gatsby Nasa Example

This is an example using [Gatsby](https://www.gatsbyjs.com/) with sample JSON data from [NASA's Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/).

Key features:
- Uses [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) and [gatsby-transformer-json](https://www.gatsbyjs.com/plugins/gatsby-transformer-json/) to parse local JSON data.
- Creates pages programmatically using Gatsby's [createPage()](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage) function in `gatsby-node.js`.
- Implements basic pagination in `gatsby-node.js`.
- Demonstrates hydration functionality on the search page.
- Uses GitHub actions for CI and CD (see `.github/workflows`)

## Quickstart

```sh
npm install
npm run develop
```

Then visit http://localhost:8000/

## Testing

```sh
npm run lint
npm run test
```

## Refreshing the data

A snapshot of the data is stored locally and sourced by Gatsby.

To refresh the data:

```sh
export NASA_API_KEY="your_api_key"
export START_DATE=2023-01-01
export END_DATE=$(date +%Y-%m-%d)

curl -s "https://api.nasa.gov/planetary/apod?api_key=$NASA_API_KEY&start_date=$START_DATE&end_date=$END_DATE" | python3 -m json.tool >data/nasa.json
```

## Github Actions

This project implements a basic CI/CD workflow using [Github Actions](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs). Any push to `main` or pull request to `main` will trigger this workflow. It will run linting checks and unit tests concurrently, and then proceed to deploy to netlify if both checks pass. Netlify will deploy a preview for PRs, otherwise it will deploy to production if the push is to `main`.

For details, see `.github/workflows/ci.yml`.
