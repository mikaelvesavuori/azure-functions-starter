# Azure Functions starter with Typescript, Webpack, Serverless Framework and Jest

Azure Functions can be a real hassle to get going with—I know the feeling!

This should help you on your way to run serverless workloads on Azure, with everything you need to get going with bundling, writing Typescript, running tests and so on.

Based on the standard boilerplate generated from the VS Code extension and [How to Create a REST API with Azure Functions and the Serverless Framework - Part 2](https://www.serverless.com/blog/serverless-azure-functions-v1-part2/).

Please see the final section for warning, issues and things to know when dealing with Azure Functions through Serverless Framework.

_This repo will most likely require Node 14+ if you want to just start with no changes on your part!_

**Stack**:

- [Serverless Framework](https://www.serverless.com)
- [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) + [API Management](https://azure.microsoft.com/en-us/services/api-management/) + [Azure Pipelines/DevOps](https://azure.microsoft.com/en-us/services/devops/pipelines/) + [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
- [Webpack](https://webpack.js.org) for bundling and optimizing
- [Babel](https://babeljs.io) for transpiling files
- [Typescript](https://www.typescriptlang.org) so we can write better code
- [Jest](https://jestjs.io) for unit testing
- [Superagent](https://www.npmjs.com/package/superagent) for API integration testing

Plus: It also uses `.mjs` or modern, modular Javascript files to allow support for import/export and lots more.

## Structure

- **`__tests__`**: Tests, sorted under either `integration` or `unit`
- **`pipelines`**: Azure DevOps configuration
- **`jest-coverage`**: Generated coverage reports from Jest
- **`src`**: Source code as per the below:
- **`src/[FUNCTION NAME]`**: Functions, methods, classes, what have you. Should be regular JS and dissociated from the Azure function handler (so they can remain free-standing and testable)
- **`src/handlers`**: The base-level handlers that you will supply inside of `serverless.yml`; these should point to code in the function-named subfolders
- **`src/shared`**: Utilities or other shared/common code
- **`testdata`**: Test data

Configuration can be set in `config.mjs` in the root.

## RECOMMENDED: Manual tasks to do

- Turn on Application Insights in API Management view
- Set timeout to something reasonable like 20 seconds max (possible?)

## Log in to Azure

- `az account clear`
- `az login`

Then set credentials as per instructions at [https://github.com/serverless/serverless-azure-functions#advanced-authentication](https://github.com/serverless/serverless-azure-functions#advanced-authentication).

## Development

Run `sls offline`. After a bit of building files and doing its magic, you get a prompt looking like:

```
Http Functions:

demoFunction: [GET] http://localhost:7071/api/demoFunction
```

Hit that URL and you're ready! It doesn't do auto-reloads though.

**NOTE!**
_Your Node version will need to be 12_ (or whatever version is used on Azure). One way of handling multiple Node versions is with [`nvm`](https://github.com/nvm-sh/nvm). If you are set on using it, these instructions should get you up and ready for development:

1. `nvm install 12`, to install Node 12
2. `nvm use 12`, to use Node 12
3. When you are done, run `nvm unload` but this will also eject the environment variables so `nvm` will be an unknown command from that point on (just run the commands again from `~/.zshrc` or where ever those got put in the first place)

## Testing

Run `npm test` or `yarn test`.

Unit tests are stored in `__tests__/unit/` and are run with Jest.

Integration tests are stored in `__tests__/integration/` and are run with Superagent. Make sure to set your API endpoint configuration in `config.mjs` in the root.

You'll find test data stored under `testdata/`.

## Deploying

Run `sls deploy` to do a regular "dev" stage deployment.

Always commit and push code, and let the CI do deployment for any other stages.

## CI/CD

Description coming.

- Search for "devops" and go to Azure DevOps inside of the Azure GUI
- Go to your DevOps Organizations and create one if needed; create a new project
- Once you have a project, click on Pipelines and point to where your repo is (Bitbucket, GitHub...)
- Once you've done any credential setup or such, select an existing pipeline

See steps 7 and 8 at [https://www.serverless.com/blog/serverless-azure-functions-v1-part2](https://www.serverless.com/blog/serverless-azure-functions-v1-part2) for more details.

See [https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml) for how to set up your variable group.

## Logging

According to the Azure docs, "Structured logging isn't enabled" for Node currently. Nevertheless, you should be able to get logs working just fine with `console.log`. I've included a simple Logger that you can use to get some kind of structured logging working.

Logs are available in [Azure Monitor Logs](https://portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/logs) and xxxx.

**References**:

- [https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitor-log-analytics?tabs=javascript](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitor-log-analytics?tabs=javascript)
- [https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring?tabs=cmd#write-logs-in-javascript-functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring?tabs=cmd#write-logs-in-javascript-functions)
- [https://github.com/BrianRosamilia/azure-function-log-intercept](https://github.com/BrianRosamilia/azure-function-log-intercept)

## References

- [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Azure Functions JavaScript developer guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#typescript)
- [About function.json](https://github.com/Azure/azure-functions-host/wiki/function.json)
- [Work with Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash)
- [Serverless Framework Azure reference](https://www.serverless.com/framework/docs/providers/azure/guide/serverless.yml/)
- [az functionapp](https://docs.microsoft.com/en-us/cli/azure/functionapp?view=azure-cli-latest)

## Warnings, problems, troubleshooting...

- It's not uncommon to get a 400 error (`Error creating APIM Property`) when deploying with `sls deploy`. Just wait a few seconds and try again, and it should normally work on the second attempt.
- You cannot set currently (July 2020) set timeout, memory size, or OS type for functions through `serverless.yml`.
- There is supposedly support to configure `apim` (API Management) in `serverless.yml` but somehow you will start getting deployment errors (`-> Function App not ready. Retry 0 of 30...` and continuing) if you mess about with that stuff. To the best of my abilities, I think I've located the error to be on the `backends` section. Maybe it's not mapping correctly? Following a slightly modified version of the config in the [Serverless Framework provider reference](https://www.serverless.com/framework/docs/providers/azure/guide/serverless.yml/) does not work, at least.
- Serverless Framework and Azure together seem to have—at best—a fragile friendship. Expect that deployments stop working every now and then. Resolution is unclear; removing and redeploying (while a useless option that cannot be done safely in production) does not always seem to work either. Moving the region (also unsafe) seems to work better, but only ever do that _during_ development and not after.

## TODO

- Failed integration tests do not currently break the pipeline
- Logger is not yet implemented
