/// <reference path="jquery.d.ts" />

interface Browser {
    mozilla: boolean;
    webkit: boolean;
    opera: boolean;
    safari: boolean;
    chrome: boolean;
    msie: boolean;
    mobile: boolean;
    name: string;
    fullVersion: string;
    majorVersion: number;
    version: string;
}

interface JQueryStatic {
    browser: Browser;
}

