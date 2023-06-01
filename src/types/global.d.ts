declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

type EmptyObject = Record<string, never>;
type AnyObject = Record<string, unknown>;
