# Betting Panel

## Placing a Chip on the Betting Panel

Use the custom hook `usePlaceBet()` to place a chip on the betting panel.

```tsx
const { placeBetHandler } = usePlaceBet();
```

Then attach it to the `onClick` event of the bet button.

**Example:**

```tsx
<ButtonBet
    key={key}
    bet={bet}
    className={className}
    isWin={isWin}
    onClick={() => placeBetHandler(bet)}
>
    <BetColRow label={<LabelTranslate value={bet.button} keyLang="p6.bet" />} />
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
const { chip, color } = useGetChipBet(bet);
```

Then render the chip with the component:

```tsx
<ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
```
