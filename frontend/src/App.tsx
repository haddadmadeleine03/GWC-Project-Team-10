import type { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BoomboxLoadingScreen } from './BoomboxLoadingScreen'
import { BoomboxLoginScreen } from './BoomboxLoginScreen'
import { BoomboxSignupScreen } from './BoomboxSignupScreen'

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
      <Route
        path="/signup"
        element={
          <PhoneFrame widthPx={402} aria-label="Boombox sign up">
            <BoomboxSignupScreen />
          </PhoneFrame>
        }
      />
    </Routes>
  )
}
