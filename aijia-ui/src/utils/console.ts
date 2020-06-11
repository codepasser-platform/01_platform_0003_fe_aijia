console.log('[Environment] <Process> --> {env}', process.env);
// Extends window console
class ConsoleOverride implements Console {
    memory: any;

    assert(condition?: boolean, ...data: any[]): void {
    }

    clear(): void {
    }

    count(label?: string): void {
    }

    countReset(label?: string): void {
    }

    debug(...data: any[]): void {
    }

    dir(item?: any, options?: any): void {
    }

    dirxml(...data: any[]): void {
    }

    error(...data: any[]): void {
    }

    exception(message?: string, ...optionalParams: any[]): void {
    }

    group(...data: any[]): void {
    }

    groupCollapsed(...data: any[]): void {
    }

    groupEnd(): void {
    }

    info(...data: any[]): void {
    }

    log(...data: any[]): void {
    }

    table(tabularData?: any, properties?: string[]): void {
    }

    time(label?: string): void {
    }

    timeEnd(label?: string): void {
    }

    timeLog(label?: string, ...data: any[]): void {
    }

    timeStamp(label?: string): void {
    }

    trace(...data: any[]): void {
    }

    warn(...data: any[]): void {
    }

}

let consoleOverride = new ConsoleOverride();
if (typeof console == 'undefined' || process.env.NODE_ENV == 'production') {
    const names = ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'timeStamp', 'trace', 'warn'];
    for (let _index = 0; _index < names.length; _index++) {
        // @ts-ignore
        console[names[_index]] = consoleOverride[names[_index]];
    }
}