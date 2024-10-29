export const convertGameCodeToGameName = (input: string): string => {
    const fixedPart = import.meta.env.VITE_GAME_NAME;
    if (input.length === 3) {
        return fixedPart
            .split(' ')
            .map((letter: string) => capitalizeFirstLetter(letter))
            .join('');
    }
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const lastChar = input.charAt(input.length - 1).toUpperCase();
    return (
        fixedPart
            .split(' ')
            .map((letter: string) => capitalizeFirstLetter(letter))
            .join('') + lastChar
    );
};

export const splitCharStringToArray = (input: string): string[] => {
    if (input == undefined) return [];
    if (input == '') return [];

    return input.split('');
};
