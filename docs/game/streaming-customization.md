# Streaming Customization

## Changing Streaming Background Color

Update the background color for streaming to match the design in Figma.

### File Location

`src/styles/base/variables.scss`

### Portrait Mode

-   **Streaming Background:**

    ```css
    --streaming-color-1: linear-gradient(180deg, #854c07 0%, #533909 40.22%, #0e0901 100%);
    ```

-   **Blur Below Streaming 1:**

    ```css
    --streaming-color-2: linear-gradient(
        180deg,
        rgba(133, 76, 7, 0) 0%,
        rgba(133, 76, 7, 0.5) 100%
    );
    ```

-   **Blur Below Streaming 2:**

    ```css
    --streaming-color-3: linear-gradient(180deg, rgba(133, 76, 7, 0) 0%, #854c07 100%);
    ```

### Landscape Mode

-   **Left Side:**

    ```css
    --streaming-color-4: linear-gradient(to right, #1c1303 0%, #1c1303 28%, transparent 100%);
    ```

-   **Right Side:**

    ```css
    --streaming-color-5: linear-gradient(to left, #1c1303 0%, #1c1303 28%, transparent 100%);
    ```

-   **Right Side with Additional Gradient:**

    ```css
    --streaming-color-6: linear-gradient(
            180deg,
            rgba(28, 19, 3, 0) 0%,
            rgba(28, 19, 3, 0.83) 47.34%,
            #0d0800 100%
        ),
        linear-gradient(180deg, rgba(28, 19, 3, 0) 0%, rgba(28, 19, 3, 0.83) 47.34%, #0d0800 100%);
    ```

### Set Streaming Scale in Portrait Mode

```css
--streaming-scale-portrait: 1.1;
```

## Custom Height Overlay Streaming Portrait

### File Location

`src/styles/base/variables.scss`

```css
--height-overlay-streaming-portrait: {value}
```

example:

```css
--height-overlay-streaming-portrait: 5.3rem;
```
