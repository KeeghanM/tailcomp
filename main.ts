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

export default function tc(classes: TailcompStyles) {
    let classString = ''
    /* ... Do stuff ... */
    return classString.trim()
}

tc({
    base: {
        static: "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow",
        hover: "bg-gray-100",
        dark: {
            static: "border-gray-700 bg-gray-800",
            hover: "bg-gray-700"
        }
    },
    md: {
        static: "flex-row max-w-xl"
    },
})