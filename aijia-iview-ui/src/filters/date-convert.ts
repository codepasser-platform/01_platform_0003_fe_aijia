const dateConvert: Function = (value: string): string => {
    console.debug('[Filter] <DateConvert> --> {function}', value);
    if (!value || value.length != 14) {
        return value;
    }
    let result: string = '';
    result = value.substr(0, 4)
        + '-' + value.substr(4, 2)
        + '-' + value.substr(6, 2)
        + ' ' + value.substr(8, 2)
        + ':' + value.substr(10, 2)
        + ':' + value.substr(12, 2);
    return result;
}

export default dateConvert;