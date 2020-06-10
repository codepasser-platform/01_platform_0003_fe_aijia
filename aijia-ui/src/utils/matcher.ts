console.log('[Loading] <Utils> --> {matcher}');

interface Matchable {
    matchPath: (path: string) => boolean;
}

export class RouterMatcher implements Matchable {
    private _whitePatterns: string[] | [];
    private SUFFIX_CHARACTER: string = '/**';
    private SUFFIX_PATTERN: string = '/\\*\\*';

    constructor(whiteList: string[]) {
        this._whitePatterns = whiteList;
    }

    get whitePatterns(): string[] {
        return this._whitePatterns;
    }

    set whitePatterns(value: string[]) {
        this._whitePatterns = value;
    }

    matchPath(path: string): boolean {
        if (this.whitePatterns.indexOf(path) !== -1) {
            // console.log('find perfect match > ', path, patterns.indexOf(path));
            return true;
        }
        for (let i = 0; i < this.whitePatterns.length; i++) {
            if (this.whitePatterns[i].endWith(this.SUFFIX_PATTERN)) {
                let _start_with = this.whitePatterns[i].substring(0, this.whitePatterns[i].indexOf(this.SUFFIX_CHARACTER));
                // console.log('find pattern end with /** > ', path, patterns[i], _start_with,
                if (path.startWith(_start_with)) {
                    return true;
                }
            }
        }
        return false;
    }
}


export default RouterMatcher;