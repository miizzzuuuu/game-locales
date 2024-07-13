# Customizing Loading Screen

## Location of Loading Screen Files

-   `public/loading`
    -   `scripts/loading.js`: JavaScript script
    -   `styles/loading.css`: CSS styles
    -   `img/`: Folder for loading screen image assets

## Updating Background of Loading Screen

1. Add the image to `public/loading/img/`.

2. Change the `background-image` path in `public/loading/styles/loading.css`.

    ```css
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);
        background-image: url('../img/flashscreen.png');
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center;
        background-color: black;
        z-index: 999999;
    }
    ```

## Updating Game Logo

1. Change the path in `public/loading/scripts/loading.js`.

    ```js
    // Create the loading logo image
    const loadingLogo = document.createElement('img');
    loadingLogo.className = 'loading-logo';
    loadingLogo.src = 'loading/img/game-logo.webp';
    loadingLogo.alt = '';
    ```
