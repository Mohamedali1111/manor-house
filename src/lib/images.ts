/** Unsplash query tuning — keep widths modest; Next Image still generates responsive srcset. */
export function unsplashPhoto(photoPath: string, w: number, q = 72) {
  return `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&w=${w}&q=${q}`
}

/** Home hero — single source for Hero + optional preload (same URL Next/Image requests upstream). */
export const HERO_INTERIOR_PHOTO = 'photo-1618221195710-dd6b41faaea6'
export const heroImageSrc = unsplashPhoto(HERO_INTERIOR_PHOTO, 1400, 68)

/**
 * Tiny JPEG — instant blurred shell while the hero fetch completes (better perceived performance).
 */
export const blurPlaceholderTiny =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkwyJ//Z'
