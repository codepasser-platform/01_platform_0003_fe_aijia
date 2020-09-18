const money: Function = (value: number): string => {
    console.debug('[Filter] <Money> --> {function}', value);
    if (!value) {
        return '';
    }
    return value.thousandsSeparator();
}

export default money;