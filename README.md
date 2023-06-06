# ex-ts

The minimal expressjs and typescript project starter from scratch. It can be used for learning api development from beggining, making tutorials, R&D or practices.
Also, junior developers can get started to build APIs easily without the hasle for setup project first.

> For @typescript/eslint, typescript version should not be later than 5.1.0 right now. I have chosen v5.0.4

**This repository is for all OS users. We are using `LF` for all.**

```yaml
Node: v18.16.0 (LTS) or later
TypeScript: v5.0.4 [for @typescript/eslint compatibility]
```

### Clone this or use Template

To clone this repository,

```bash
$ git clone git@github.com:mahabubx7/ex-ts.git
```

To use this ready-mate template, you need click on the `Use this template` green button.

### Start Developing

- First, you need to install packages.
  ```bash
  $ npm install
  ```
  or
  ```bash
  $ yarn install
  ```
- Copy the `.sample.env` file to `.env`.
  ```bash
  $ cp .sample.env .env
  ```
- To start the development server
  ```bash
  $ npm run dev
  ```
  or
  ```bash
  $ yarn dev
  ```
- To build this application
  ```bash
  $ npm run build
  ```
  or
  ```bash
  $ yarn build
  ```
- To run the production mode or build server
  ```bash
  $ npm run start
  ```
  or
  ```bash
  $ yarn start
  ```

> Make your entire application is wrapped inside the `src` directory. Because, this project will build from that folder only.
