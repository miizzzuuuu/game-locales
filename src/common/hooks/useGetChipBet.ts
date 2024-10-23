import { useAppSelector } from '../../store/hooks';
import { selectChip } from '../../store/slice/bets';

function useGetChipBet({ button, group }: { button: string; group: string }) {
    const chip = useAppSelector((state) => selectChip(state, `${button}@${group}`));
    return chip;
}

export { useGetChipBet };
