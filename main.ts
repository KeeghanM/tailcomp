type StateStyles = {
    static: string;
    hover?: string;
    active?: string;
    focus?: string;
};

type ColourStyles = {
    dark?: StateStyles;
};

type MediaStyles = StateStyles & ColourStyles;

type TailcompStyles = {
    base: MediaStyles;
    sm?: MediaStyles;
    md?: MediaStyles;
    lg?: MediaStyles;
};

function getMediaStyles(classes: TailcompStyles) {
    return Object.keys(classes) as (keyof TailcompStyles)[]
}

function getStateStyles(styles: MediaStyles) {
    return Object.keys(styles) as (keyof MediaStyles)[]
}

export default function tc(classes: TailcompStyles): string {
    let classString = '';

    for(const mediaStyle of getMediaStyles(classes)) {
        let prefix = mediaStyle === 'base' ? '' : `${mediaStyle}:`
        for(const stateStyle of getStateStyles(classes[mediaStyle]!)) {
            prefix += stateStyle === 'static' ? '' : `${stateStyle}:`
            classString += stateStyle.split(' ').map(c => `${prefix}${c}`).join(' ')
        }
    }

    return classString.trim();
}