
# Element34 WebdriverIO Script

A sample webdriver IO script that automates the website

## Setup

#### Selenium grid (Pre-requisite for running this test)

- Follow this *[tutorial](https://www.selenium.dev/documentation/grid/getting_started/)* to setup the selenium server locally with the browser drivers.
- Once set up, start the server in standalone mode

```bash
% java -jar selenium-server-<version>.jar standalone
```

#### WebdriverIO Script

```bash
% git clone 
% cd element34
% npm i
```


### Supported (optional) environment variables

`HUB_HOST` - Hostname/IP of the Selenium hub. Default: `localhost`

`CAPABILITIES` - JSON string of capabilities. Default: `null`

`MAX_INSTANCES` - number of workers. Default: `1`

---
## Running the test

The tests can be executed via the CLI, Docker or via Jenkins

#### Through the CLI

```bash
% npm run test
```
---
#### Docker
Build the Image
```bash
% docker build -t element34 .
```
Start a container
```bash
% docker run -d  -e HUB_HOST=<selenium-hub-address> element34
```
Note: replace `<selenium-hub-address>` with the IP/Hostname of the selenium server

---
#### Jenkins
- Create a new scripted pipeline from the pipeline.Jenkinsfile
- Set the relevant configurations (optional)
- Trigger the build

## Sample Execution Video

#### CLI

#### Docker

#### Jenkins


