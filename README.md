# Anime APIs

A collection of apis related to anime characters, ranging from recommendation engine to avatars.

# Active Routes

BASE URL ---> [animeapis.herokuapp.com](https://animeapis.herokuapp.com/)

`GET` /v1/info

- for server state information

`GET` /v1/avatar?seed={{value}}

- for getting a new anime avatar png with provided seed

`POST` /v1/yourAvatar

'multipart-formdata': <IMAGE_DATA>

- for creating a synthesized anime image using GAN ML model with provided image.

# Getting Started

### Prerequisites

- node v16.\*
- npm or yarn
- .env file

### Development

1. clone repo and create feature branch

```bash
    git clone https://github.com/joshidipesh12/your-anime-apis.git -b {{branch-name}}
```

2. install node_modules

```bash
    npm install
    // or yarn install
```

3. place .env file in project root

4. run project in dev environment

```bash
    npm run dev
    // or yarn run dev
```
