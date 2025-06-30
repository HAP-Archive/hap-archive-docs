const U200D = String.fromCharCode(8205)
const UFE0Fg = /\uFE0F/g

export function getIconCode(char: string) {
  return toCodePoint(char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char)
}

function toCodePoint(unicodeSurrogates: string) {
  const r = []
  let c = 0,
    p = 0,
    i = 0

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((65536 + ((p - 55296) << 10) + (c - 56320)).toString(16))
      p = 0
    } else if (55296 <= c && c <= 56319) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join("-")
}

type EmojiMap = {
  codePointToName: Record<string, string>
  nameToBase64: Record<string, string>
}

let emojimap: EmojiMap | undefined = undefined
export async function loadEmoji(code: string) {
  if (!emojimap) {
    const data = await import("./emojimap.json")
    emojimap = data
  }

  const name = emojimap.codePointToName[`U+${code.toUpperCase()}`]
  if (!name) {
    console.warn(`codepoint ${code} not found in map, using fallback`)
    const fallbackCode = "1f464" // 👤 bust in silhouette
    const fallbackName = emojimap.codePointToName[`U+${fallbackCode.toUpperCase()}`]
    if (fallbackName) {
      const fallbackB64 = emojimap.nameToBase64[fallbackName]
      if (fallbackB64) return fallbackB64
    }
    return ""
  }

  const b64 = emojimap.nameToBase64[name]
  if (!b64) {
    console.warn(`name ${name} not found in map, using fallback`)
    return ""
  }

  return b64
}
