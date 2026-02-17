'use client'

import { cn } from '@/lib/utils'
import NextImage from 'next/image'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'

type MdxPreviewImageProps = {
  src?: string
  alt?: string
  className?: string
  style?: CSSProperties
  width?: number
  height?: number
  priority?: boolean
  title?: string
}

export function MdxPreviewImage({
  src,
  alt,
  className,
  style,
  width,
  height,
  priority,
  title,
}: MdxPreviewImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  const imageSrc = typeof src === 'string' ? src : ''
  const imageAlt = alt?.trim() || 'Image preview'
  const canRender = imageSrc.length > 0

  const shouldUseNextImage = useMemo(
    () => Number.isFinite(width) && Number.isFinite(height),
    [width, height],
  )

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!canRender) {
    return null
  }

  const nextImageProps = {
    src: imageSrc,
    alt: imageAlt,
    width,
    height,
    priority,
    title,
    className: cn(className),
    ...(style ? { style } : {}),
  }

  const nativeImageProps = {
    src: imageSrc,
    alt: imageAlt,
    title,
    className: cn(className),
    loading: 'lazy' as const,
    ...(style ? { style } : {}),
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex max-w-full cursor-zoom-in border-0 bg-transparent p-0"
      >
        {shouldUseNextImage ? (
          <NextImage {...nextImageProps} />
        ) : (
          <img {...nativeImageProps} />
        )}
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-2xl leading-none text-white transition hover:border-white/70 hover:bg-black/60"
          >
            ×
          </button>

          <div
            className="max-h-[92vh] max-w-[96vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[92vh] w-auto max-w-[96vw] rounded-lg object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
