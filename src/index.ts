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
  sm?: MediaStyles
  md?: MediaStyles
  lg?: MediaStyles
}

export default function tc(classes: TailcompStyles): string {
  let classString = ""

  const getStyleTypes = (classes: TailcompStyles) => {
    return Object.keys(classes) as (keyof TailcompStyles)[]
  }

  const getMediaTypes = (styles: MediaStyles) => {
    return Object.keys(styles) as (keyof MediaStyles)[]
  }

  const getStateTypes = (styles: StateStyles) => {
    return Object.keys(styles) as (keyof StateStyles)[]
  }

  const genString = (prefix: string, styles: string) => {
    return styles
      .split(" ")
      .map((c) => `${prefix}${c}`)
      .join(" ")
  }

  const statePrefix = (stateType: keyof StateStyles) =>
    stateType === "static" ? "" : `${stateType}:`

  for (const mediaType of getStyleTypes(classes)) {
    const mediaPrefix = mediaType === "base" ? "" : `${mediaType}:`
    const mediaStyles = classes[mediaType]!
    for (const stateType of getMediaTypes(mediaStyles)) {
      classString += " "
      if (stateType === "dark") {
        const darkStyles = mediaStyles[stateType]!
        for (const stateType of getStateTypes(darkStyles)) {
          classString += " "
          const prefix = statePrefix(stateType)
          const styles = darkStyles[stateType]!
          classString += genString(`${mediaPrefix}dark:${prefix}`, styles)
        }
      } else {
        const prefix = statePrefix(stateType)
        const styles = mediaStyles[stateType]!
        classString += genString(`${mediaPrefix}${prefix}`, styles)
      }
    }
  }

  return classString.trim()
}
