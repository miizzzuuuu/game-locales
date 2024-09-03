## Shuffle The Card

### get the `gameNewSet` state:

```ts
const gameNewSet = useAppSelector(selectGameNewSet);
```

`true`: shuffling cards
`false`: not shuffling cards

### Perform actions when a new shoe/set occurs

edit in the `src/common/Game/index.tsx` file:

```ts
useNewSet({
    handleNewSet: () => {
        // callback when new set
    },
});
```

Example, reset the history result when a new shoe/set occurs:

```ts
useNewSet({
    handleNewSet: () => {
        // callback when new set
        dispatch(resetHistory());
    },
});
```
