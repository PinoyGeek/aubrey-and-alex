"use client"

import type { CSSProperties } from "react"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Car, Navigation, MapPin } from "lucide-react"
import { Cormorant_Garamond } from "next/font/google"
import Image from "next/image"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

/** Comma-separated hex list from site config, e.g. `" #a, #b, #c"` */
function parsePalette(palette: string): string[] {
  return palette
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean)
}

/** Renders one paragraph, or a short list when the source uses newlines. */
function NoteLines({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  const lines = text
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length <= 1) {
    return (
      <p className={`whitespace-pre-line leading-relaxed ${className}`}>
        {lines[0] ?? text}
      </p>
    )
  }
  return (
    <ul className={`list-none space-y-2 ${className}`}>
      {lines.map((line, i) => (
        <li key={`${i}-${line.slice(0, 24)}`} className="flex gap-2.5 text-left">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "var(--gi-accent)" }}
          />
          <span className="leading-relaxed">{line}</span>
        </li>
      ))}
    </ul>
  )
}

export function GuestInformation() {
  const { sponsors, guests } = siteConfig.dressCode
  const weddingPalette = parsePalette(siteConfig.dressCode.colors)
  const bgDeep = weddingPalette[0] ?? "#001F4B"
  const accent = weddingPalette[2] ?? "#015B97"
  const accentLight = weddingPalette[3] ?? "#6497B2"
  const accentPale = weddingPalette[4] ?? "#B2CDE0"

  const sponsorPalette = parsePalette(sponsors.palette)
  const guestPalette = parsePalette(guests.palette)

  const sectionStyle = {
    "--gi-ink": bgDeep,
    "--gi-accent": accent,
    "--gi-accent-light": accentLight,
    "--gi-accent-pale": accentPale,
  } as CSSProperties

  return (
    <Section
      id="guest-information"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-transparent"
      style={sectionStyle}
    >
      {/* Intro — transparent; white type + shadow for contrast on silk */}
      <div className="relative z-10 mb-8 sm:mb-10 max-w-4xl mx-auto px-3 sm:px-5 text-center">
        <p
          className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]`}
        >
          Important Guidelines
        </p>

        <h2
          className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.35)" }}
        >
          Guest Information
        </h2>

        <p
          className={`${cormorant.className} text-xs sm:text-sm md:text-base text-white font-light max-w-xl mx-auto leading-relaxed px-2 mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]`}
        >
          Everything you need to know to make your experience smooth and enjoyable
        </p>

     

        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div
            className="w-8 sm:w-12 md:w-16 h-px opacity-80"
            style={{ backgroundColor: accentPale }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full opacity-95"
            style={{ backgroundColor: accent }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full opacity-95"
            style={{ backgroundColor: accentPale }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full opacity-95"
            style={{ backgroundColor: accentLight }}
          />
          <div
            className="w-8 sm:w-12 md:w-16 h-px opacity-80"
            style={{ backgroundColor: accentPale }}
          />
        </div>

        {/* <div className="space-y-2 pt-6 border-t border-white/25">
          <h3
            className="text-base sm:text-xl md:text-2xl font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
          >
            Important Information
          </h3>
          <p className="text-[11px] sm:text-xs md:text-sm text-white max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {siteConfig.dressCode.note}
          </p>
        </div> */}
      </div>

      {/* Cards */}
      <div className="relative z-10 mb-4 sm:mb-7 max-w-4xl mx-auto px-3 sm:px-5">
        <div className="space-y-3 sm:space-y-4">
          {/* Attire Guidelines — card + inner panel layout */}
          <div
            className="relative rounded-2xl border border-charcoal/10 p-3.5 sm:p-5 md:p-6 overflow-hidden"
            style={{
              boxShadow: `0 18px 50px color-mix(in srgb, ${bgDeep} 14%, transparent)`,
              backgroundColor: `color-mix(in srgb, var(--gi-accent-pale) 14%, #faf7f4)`,
            }}
          >
            <div className="mb-3 sm:mb-4 text-center">
              <h4
                className={`${cormorant.className} text-[0.7rem] sm:text-sm md:text-[0.95rem] font-semibold tracking-[0.32em] uppercase`}
                style={{ color: "var(--gi-ink)" }}
              >
                Attire &amp; Motif
              </h4>
            </div>

            <div
              className="relative w-full rounded-2xl border bg-white p-4 sm:p-6 md:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
              style={{
                borderColor: `color-mix(in srgb, var(--gi-ink) 20%, transparent)`,
              }}
            >
              {/* Intro — centered, bold primary + softer secondary */}
              {/* <div className="text-center space-y-2 sm:space-y-3 pb-4 sm:pb-5">
                <p
                  className="text-xs sm:text-sm font-semibold leading-relaxed max-w-xl mx-auto px-1"
                  style={{ color: "var(--gi-ink)" }}
                >
                  We kindly request our guests to dress in{" "}
                  {siteConfig.dressCode.theme.replace(/-/g, " ").toLowerCase()} attire with colors from our motif.
                </p>
                <p
                  className="text-[11px] sm:text-xs leading-relaxed max-w-md mx-auto font-normal opacity-[0.92]"
                  style={{ color: "var(--gi-ink)" }}
                >
                  Please dress within our wedding colors to help create a soft, elegant celebration.
                </p>
              </div> */}

              <div
                className="h-px w-full mb-5 sm:mb-6"
                style={{ backgroundColor: `color-mix(in srgb, var(--gi-ink) 22%, transparent)` }}
              />

              {/* Principal sponsors */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7">
                <div className="text-left space-y-1">
                  <h5 className="font-semibold text-sm sm:text-base" style={{ color: "var(--gi-ink)" }}>
                    Principal Sponsors Attire
                  </h5>
                  <p
                    className="text-[11px] sm:text-xs"
                    style={{ color: `color-mix(in srgb, var(--gi-ink) 52%, #766860)` }}
                  >
                    Kindly align attire below.
                  </p>
                </div>

                <div
                  className="rounded-xl sm:rounded-2xl overflow-hidden border bg-transparent shadow-none"
                  style={{
                    borderColor: `color-mix(in srgb, var(--gi-ink) 14%, transparent)`,
                  }}
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] max-h-[260px] sm:max-h-[300px] md:max-h-[340px] mx-auto">
                    <Image
                      src={sponsors.photo}
                      alt="Principal sponsors attire guideline"
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="(min-width: 1024px) 700px, (min-width: 640px) 600px, 100vw"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5 text-left">
                  <div className="space-y-1">
                    <p
                      className={`${cormorant.className} text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.28em]`}
                      style={{ color: "var(--gi-accent)" }}
                    >
                      What to wear
                    </p>
                    <p
                      className="text-sm sm:text-base font-semibold leading-snug"
                      style={{ color: "var(--gi-ink)" }}
                    >
                      Beige dresses &amp; barong Tagalog
                    </p>
                  </div>
                  <div
                    className="text-[11px] sm:text-xs md:text-sm"
                    style={{ color: `color-mix(in srgb, var(--gi-ink) 72%, #5c534c)` }}
                  >
                    <NoteLines text={sponsors.notes} className="leading-relaxed" />
                  </div>
                </div>

                {/* Celebration palette — single row like mock */}
                <div className="pt-1">
                  <p
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] mb-2 sm:mb-2.5"
                    style={{ color: "var(--gi-ink)" }}
                  >
                    Palette
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-start">
                    {sponsorPalette.map((color) => (
                      <span
                        key={color}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white shadow-md ring-1 ring-black/[0.06]"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="h-px w-full mb-5 sm:mb-6"
                style={{ backgroundColor: `color-mix(in srgb, var(--gi-ink) 18%, transparent)` }}
              />

              {/* Wedding guests */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-left space-y-1">
                  <h5 className="font-semibold text-sm sm:text-base" style={{ color: "var(--gi-ink)" }}>
                    Wedding Guests
                  </h5>
                  <p
                    className="text-[11px] sm:text-xs"
                    style={{ color: `color-mix(in srgb, var(--gi-ink) 52%, #766860)` }}
                  >
                    Reference for all invited guests.
                  </p>
                </div>

                <div
                  className="rounded-xl sm:rounded-2xl overflow-hidden border bg-transparent shadow-none"
                  style={{
                    borderColor: `color-mix(in srgb, var(--gi-ink) 14%, transparent)`,
                  }}
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] max-h-[260px] sm:max-h-[300px] md:max-h-[340px] mx-auto">
                    <Image
                      src={guests.photo}
                      alt="Guest attire guideline"
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="(min-width: 1024px) 700px, (min-width: 640px) 600px, 100vw"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5 text-left">
                  <div className="space-y-1">
                    <p
                      className={`${cormorant.className} text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.28em]`}
                      style={{ color: "var(--gi-accent)" }}
                    >
                      What to wear
                    </p>
                    <p
                      className="text-sm sm:text-base font-semibold leading-snug"
                      style={{ color: "var(--gi-ink)" }}
                    >
                      Formal &amp; semi-formal attire
                    </p>
                  </div>
                  <div
                    className="text-[11px] sm:text-xs md:text-sm"
                    style={{ color: `color-mix(in srgb, var(--gi-ink) 72%, #5c534c)` }}
                  >
                    <NoteLines text={guests.notes} className="leading-relaxed" />
                  </div>
                </div>

                <div className="pt-1">
                  <p
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] mb-2 sm:mb-2.5"
                    style={{ color: "var(--gi-ink)" }}
                  >
                    Guest palette
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-start">
                    {guestPalette.map((color) => (
                      <span
                        key={color}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white shadow-md ring-1 ring-black/[0.06]"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="h-px w-full mt-6 sm:mt-8"
                style={{ backgroundColor: `color-mix(in srgb, var(--gi-ink) 16%, transparent)` }}
              />
            </div>
          </div>

          {/* Arrival Time & Reception Guidelines */}
          {/* <div
            className="relative rounded-2xl border border-charcoal/10 bg-white/90 backdrop-blur-lg p-3.5 sm:p-5 overflow-hidden"
            style={{
              boxShadow: `0 18px 45px color-mix(in srgb, ${bgDeep} 16%, transparent)`,
            }}
          >
            <div className="space-y-4 sm:space-y-5">
              <div
                className="relative w-full rounded-2xl overflow-hidden border shadow-lg bg-white p-4 sm:p-6"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 25%, transparent)` }}
              >
                <div className="mb-3 sm:mb-4">
                  <h4
                    className="text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-3"
                    style={{ color: "var(--gi-ink)" }}
                  >
                    Arrival Time
                  </h4>
                  <div className="space-y-2 sm:space-y-2.5">
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--gi-ink)" }}>
                      Kindly arrive by{" "}
                      <span className="font-semibold" style={{ color: "var(--gi-accent-light)" }}>
                        {siteConfig.ceremony.guestsTime}
                      </span>{" "}
                      so we can begin the wedding ceremony promptly at exactly{" "}
                      <span className="font-semibold" style={{ color: "var(--gi-accent-light)" }}>
                        {siteConfig.ceremony.time}
                      </span>
                      .
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--gi-ink)" }}>
                      Your punctuality means so much to us — and don&apos;t forget to have a light snack beforehand so you
                      can enjoy the celebration comfortably!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative w-full rounded-2xl overflow-hidden border shadow-lg bg-white p-4 sm:p-6"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 25%, transparent)` }}
              >
                <div className="mb-3 sm:mb-4">
                  <h4
                    className="text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-3"
                    style={{ color: "var(--gi-ink)" }}
                  >
                    Reception Guidelines
                  </h4>
                  <div className="space-y-2 sm:space-y-2.5">
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--gi-ink)" }}>
                      The seating will be formal, RSVP-style. That&apos;s why we&apos;re asking you to fill out this
                      invitation form to secure your spot. Kindly do not bring plus ones unless explicitly stated in
                      your invitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Travel & Parking */}
          {/* <div
            className="relative rounded-2xl border border-charcoal/10 backdrop-blur-lg bg-white/90 p-3.5 sm:p-5 overflow-hidden"
            style={{
              boxShadow: `0 16px 40px color-mix(in srgb, ${bgDeep} 14%, transparent)`,
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3 relative z-10">
              <div
                className="p-1.5 rounded-full shadow-md bg-white/95 border"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 28%, transparent)` }}
              >
                <Car className="w-3.5 h-3.5" style={{ color: "var(--gi-ink)" }} />
              </div>
              <h4 className="font-semibold text-xs sm:text-base" style={{ color: "var(--gi-ink)" }}>
                Parking &amp; Travel
              </h4>
            </div>

            <div className="space-y-3 relative z-10">
              <div
                className="rounded-xl p-2.5 sm:p-3 border shadow-sm bg-white/90"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 22%, transparent)` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg text-white" style={{ backgroundColor: "var(--gi-accent)" }}>
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] sm:text-sm font-semibold" style={{ color: "var(--gi-ink)" }}>
                      Parking Available
                    </p>
                    <p className="text-[10px] sm:text-xs opacity-85" style={{ color: "var(--gi-ink)" }}>
                      Parking is available at the venue. Please arrive early to find a comfortable spot.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-2.5 sm:p-3 border shadow-sm bg-white/90"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 22%, transparent)` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg text-white" style={{ backgroundColor: "var(--gi-accent)" }}>
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] sm:text-sm font-semibold" style={{ color: "var(--gi-ink)" }}>
                      Transportation
                    </p>
                    <p className="text-[10px] sm:text-xs opacity-85" style={{ color: "var(--gi-ink)" }}>
                      Private vehicles and local transport are welcome. Coordinate with friends or family and plan your
                      route ahead of time.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-2.5 sm:p-3 border bg-white/85"
                style={{ borderColor: `color-mix(in srgb, var(--gi-accent) 20%, transparent)` }}
              >
                <p className="text-[11px] sm:text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: "var(--gi-ink)" }}>
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white"
                    style={{ backgroundColor: `color-mix(in srgb, var(--gi-accent) 85%, white)` }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  Quick Tips
                </p>
                <ul className="text-[10px] sm:text-xs space-y-1 opacity-90" style={{ color: "var(--gi-ink)" }}>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5" style={{ color: "var(--gi-accent)" }}>•</span>
                    <span>Plan your route ahead to avoid unexpected delays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5" style={{ color: "var(--gi-accent)" }}>•</span>
                    <span>
                      Please avoid walking during the ceremony. Approach the coordinator or wait to be guided.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5" style={{ color: "var(--gi-accent)" }}>•</span>
                    <span>Coordinate carpooling with friends or family when possible.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  )
}
