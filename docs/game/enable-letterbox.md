## Enable Letter Box

Edit file `src/common/utils/Features.ts`

Change this line of code:

```ts
...

export const Features: FeaturesType = {
    ...
    LETTER_BOX: false,
};
```

to:

```ts
...

export const Features: FeaturesType = {
    ...
    LETTER_BOX: true,
};
```
