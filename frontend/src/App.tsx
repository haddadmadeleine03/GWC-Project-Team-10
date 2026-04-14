import type { ReactNode } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { BoomboxLoadingScreen } from './BoomboxLoadingScreen'
import { BoomboxLoginScreen } from './BoomboxLoginScreen'

function PhoneFrame({
  widthPx,
  children,
  ariaLabel,
}: {
  widthPx: 402 | 508
  children: ReactNode
  ariaLabel?: string
}) {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-black px-0">
      <div
        className="relative h-[874px] max-h-[100dvh] overflow-hidden sm:rounded-[2.5rem] sm:shadow-[0_0_0_3px_#222,0_24px_48px_rgba(0,0,0,0.5)]"
        style={{ width: `min(${widthPx}px, 100vw)` }}
        {...(ariaLabel
          ? { role: 'region' as const, 'aria-label': ariaLabel }
          : {})}
      >
        {children}
      </div>
    </div>
  )
}

function SignupPlaceholder() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#0d0d0d] px-6 text-center">
      <p className="font-['Katibeh',serif] text-3xl text-white">Sign up</p>
      <p className="max-w-sm font-['Inter',sans-serif] text-sm text-neutral-400">
        This screen is not in the Figma file yet. Wire this route when the sign-up
        frame is ready.
      </p>
      <Link
        to="/login"
        className="font-['Katibeh',serif] text-xl text-[#d9d35b] underline"
      >
        Back to login
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PhoneFrame widthPx={508} aria-label="Boombox loading screen">
            <BoomboxLoadingScreen />
          </PhoneFrame>
        }
      />
      <Route
        path="/login"
        element={
          <PhoneFrame widthPx={402} aria-label="Boombox login">
            <BoomboxLoginScreen />
          </PhoneFrame>
        }
      />
      <Route path="/signup" element={<SignupPlaceholder />} />
    </Routes>
  )
}
