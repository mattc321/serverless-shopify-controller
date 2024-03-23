# PreReq
- install doctl (digital ocean command line utility) https://docs.digitalocean.com/reference/doctl/how-to/install/
- Generate an api token in Digital Ocean admin
- create an auth context and name it ````doctl auth init --context <NAME>````
- few verification commands:
````
  doctl auth list
  doctl auth switch --context <NAME>
  doctl account get
````
- install serverless function support
````
  doctl serverless install
  doctl serverless status
````
- reference: https://docs.digitalocean.com/products/functions/getting-started/quickstart/

# Setup
- clone this repo 

# Serverless Deploy
````
doctl serverless deploy shopify-router --remote-build
````

You can now see the project in your digital ocean account.
You can configure it there or continue using cli.

- List Functions
```
doctl serverless functions list
```

- Get Url
```
doctl sls fn get route/uninstall-extension --url
```

# Project Structure
````
example-project
├── packages
│   ├── example-package-1
│   │   ├── example-function-a.php
│   │   ├── example-function-b
│   │   │   ├── package.json
│   │   │   └── example.js
│   │   └── example-function-c
│   │       └── index.php
│   └── example-package-2
│       └── example-function
│           ├── requirements.txt
│           ├── __main__.py
│           └── example.py
└── project.yml
````
https://docs.digitalocean.com/products/functions/how-to/structure-projects/