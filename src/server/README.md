
### ** NOTE: Dependency **
_____________________________________

This frontend has its Backend service at location [https://github.com/Pushp1992/web-scrapper-backend](https://github.com/Pushp1992/web-scrapper-backend)

- Please checkout the Backend repository.
- Run them locally in your machine.
- And then try running the frontend application for seamless user journey.

- Note: Even if you don't run this backend service, your frontend application will not break the UI.

### Getting Started with Create React App
__________________________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Teach-stack used
__________________________________________

- React
- Hook
- Material ui
- styled component
- node
- express

### Available Scripts
_____________________________________

In the project directory, you can run:
### `npm run dev`
_____________________________________

Runs the app in the development mode.\
Open [http://localhost:8086](http://localhost:8086) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- Please checkout master branch for stable feature
- Client PORT: 8085
- Proxy server PORT: 5000

### Diretory structure
_____________________________________

    -- public
    -- src
        -- component
            -- button
            -- card
            -- create-modal-box
            -- header
            -- snackbar
        -- mock-data
        -- server
            -- config
            -- proxy
            -- routes
            -- index.js
        -- template
            -- listing-page
        -- utils
            -- constraints.js
            -- data-transformation.js
            -- input-validation.js
            -- scrapper-service.js
    -- .env
    -- .gitignore
    -- package.json
    -- README.md
### Docker Commands

- check any docker process running

```
docker ps
```

- build your image

```
docker build -t pushp1992/web-scrapper-frontend:ui .
```

- Run your image locally

```
docker run -d -p 8085:8085 pushp1992/web-scrapper-frontend:ui
```

- Push your image to remote

```
 docker push pushp1992/web-scrapper-frontend:ui
```