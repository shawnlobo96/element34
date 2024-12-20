
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
% git clone https://github.com/shawnlobo96/element34.git
% cd element34
% npm i
```


### Supported (optional) environment variables

`HUB_HOST` - Hostname/IP of the Selenium hub. Default: `localhost`

`CAPABILITIES` - JSON string of capabilities.

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
- Create a new scripted pipeline from `pipeline.Jenkinsfile`
- Set the relevant configurations (optional)
- Trigger the build

## Sample Execution Video

#### CLI

https://github.com/user-attachments/assets/aee5b3d6-a5ea-4f02-a415-0c20b9f500a7

#### Docker

https://github.com/user-attachments/assets/79130d8a-9d40-4695-882e-cf40daff99da

#### Jenkins

https://github.com/user-attachments/assets/a42a4978-041a-42e9-b987-c8edac994587
