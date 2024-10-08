# Betting Panel

I suggest it's better to create a new component for the new game's betting panel, for example, `TableBetDomino`, to avoid conflicts when merging from general modules

## Placing a Chip on the Betting Panel

Use the custom hook `usePlaceBet()` to place a chip on the betting panel.

```tsx
const betIsOpen = useAppSelector(selectBetIsOpen);
const { placeBetHandler } = usePlaceBet({ betIsOpen });
```

Then attach it to the `onClick` event of the bet button.

**Example:**

```tsx
<ButtonBet
    key={key}
    button={bet.button}
    group={bet.group}
    className={className}
    isWin={isWin}
    onClick={placeBetHandler}
>
    {/* children */}
</ButtonBet>
```

### Bet Parameter Format

```ts
{
    button: string;
    group: string;
}
```

## Displaying Chips

Inside the bet button, get the chip and color using the custom hook `useGetChipBet`.

```tsx
const { chip } = useGetChipBet(bet);
```

Then render the chip with the component:

```tsx
<ChipBet value={chip} />
```
