interface Matchable {
    matchPath: (patterns: string[], path: string) => boolean;
}

export class RouterMatcher implements Matchable {
    private _staticPatterns: string[] | [];
    private _whitePatterns: string[] | [];
    private SUFFIX_CHARACTER: string = '/**';
    private SUFFIX_PATTERN: string = '/\\*\\*';

    constructor(staticList: string[], whiteList: string[]) {
        this._staticPatterns = staticList;
        this._whitePatterns = whiteList;
    }


    get staticPatterns(): string[] | [] {
        return this._staticPatterns;
    }

    set staticPatterns(value: string[] | []) {
        this._staticPatterns = value;
    }

    get whitePatterns(): string[] {
        return this._whitePatterns;
    }

    set whitePatterns(value: string[]) {
        this._whitePatterns = value;
    }

    matchWhiteList(path: string): boolean {
        return this.matchPath(this.whitePatterns, path);
    }

    matchStaticList(path: string): boolean {
        return this.matchPath(this.staticPatterns, path);
    }

    matchPath(patterns: string[], path: string): boolean {
        if (patterns.indexOf(path) !== -1) {
            // console.log('find perfect match > ', path, patterns.indexOf(path));
            return true;
        }
        for (let i = 0; i < patterns.length; i++) {
            if (patterns[i].endWith(this.SUFFIX_PATTERN)) {
                let _start_with = patterns[i].substring(0, patterns[i].indexOf(this.SUFFIX_CHARACTER));
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