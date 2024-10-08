## Shuffle The Card

### get the `gameNewSet` state:

```ts
const gameNewSet = useAppSelector(selectGameNewSet);
```

`true`: shuffling cards
`false`: not shuffling cards

### Perform actions when a new shoe/set occurs

edit in the `src/game/hooks/useNewSet.ts` file:

```ts
...

function useNewSet() {
    const newSet = useAppSelector(selectGameNewSet);

    useEffect(() => {
        if (newSet) {
            {/* place callback in here */}
            console.log('new set callback');
        }
    }, [newSet]);
}

...
```

Example, reset the history result when a new shoe/set occurs:

```ts
useEffect(() => {
    if (newSet) {
        dispatch(resetHistory());
    }
}, [newSet]);
```
