type StateStyles = {
    static: string
    hover?: string
    active?: string
    focus?: string
}
type ColourStyles = {
    dark?: StateStyles
}
type MediaStyles = StateStyles & ColourStyles

type TailcompStyles = {
    base: MediaStyles
    sm?:MediaStyles
    md?:MediaStyles
    lg?:MediaStyles
}

export default function tc(classes: TailcompStyles): string {
    let classString = ''
    
    // flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700

    // Tailwind order:
    // - all static classes from base
    // - all static clases form sm/md/lg in that order
    // - all state styles
    // - all colour scheme styles

    Object.keys(classes).forEach((mediaKey) => {
        let tag = mediaKey === 'base' ? '' : `${mediaKey}:`
        const mediaStyles = classes[mediaKey] as MediaStyles
        Object.keys(mediaStyles).forEach((stateKey) => {
            tag += stateKey === 'static' ? '' : `${stateKey}:`
            const stateStyles = mediaStyles[stateKey] as StateStyles
            Object.keys(stateStyles).forEach((colourKey) => {
                tag += colourKey === 'dark' ? 'dark:' : ''
                const colourStyles = stateStyles[colourKey] as string
                classString += `${tag}${colourStyles} `
            })
        })
    })

    return classString.trim()
}