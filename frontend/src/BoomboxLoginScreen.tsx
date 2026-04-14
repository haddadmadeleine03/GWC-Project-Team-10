/** Login screen — implemented from Figma node136:55 (Project-Structure). */

import { Link } from 'react-router-dom'

const img = {
  logo1: '/figma-assets/logo1.png',
  vector11: '/figma-assets/vector11.svg',
} as const

export function BoomboxLoginScreen() {
  return (
    <div
      className="relative size-full bg-[#0d0d0d]"
      data-node-id="136:55"
      data-name="iPhone 16 & 17 Pro Max - 2"
    >
      <div className="absolute left-0 top-[119px] contents" data-node-id="144:4">
        <form
          className="absolute left-0 top-[119px] h-[635.791px] w-[402px] overflow-clip bg-white"
          data-node-id="1:845"
          data-name="Log in Frame"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div
            className="absolute left-0 top-0 h-[635.791px] w-[400.498px] bg-black"
            data-node-id="2:5"
          />
          <div
            className="absolute left-[19.65px] top-[50.94px] contents"
            data-node-id="2:12"
          >
            <div
              className="absolute left-[19.65px] top-[50.94px] h-[246.932px] w-[231.913px] border-[0.125px] border-solid border-black bg-[#d9d35b] opacity-60"
              data-node-id="2:6"
            />
            <div
              className="absolute left-[149.31px] top-[247.06px] h-[246.932px] w-[231.913px] border-[0.125px] border-solid border-black bg-[#dfe0af] opacity-60"
              data-node-id="2:7"
            />
            <div
              className="absolute left-[19.65px] top-[370.59px] h-[246.932px] w-[231.913px] border-[0.125px] border-solid border-black bg-[#aa5455] opacity-60"
              data-node-id="2:9"
            />
          </div>
          <div
            className="absolute left-[65.33px] top-[102.5px] h-[441.799px] w-[269.711px] border-[0.751px] border-solid border-white bg-black"
            data-node-id="2:13"
          />
          <div
            className="absolute left-[107.51px] top-[95.74px] h-[130.269px] w-[182.377px] opacity-55"
            data-node-id="64:60"
            data-name="logo 1"
          >
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              src={img.logo1}
            />
          </div>
          <div
            className="absolute left-[149.31px] top-[370.59px] h-[39.8px] w-[102.252px] border-[0.751px] border-solid border-white bg-black"
            data-node-id="4:8"
          />
          <button
            type="submit"
            className="absolute left-[172.09px] top-[381.35px] block cursor-pointer border-0 bg-transparent p-0 font-['Katibeh',serif] text-[31.289px] leading-[0] not-italic whitespace-nowrap text-white"
            data-node-id="2:2"
          >
            <span className="leading-[normal]">Login</span>
          </button>
          <button
            type="button"
            className="absolute left-[136.92px] top-[424.78px] w-[168.084px] cursor-pointer border-0 bg-transparent p-0 text-left font-['Katibeh',serif] text-[22.528px] leading-[normal] not-italic text-white"
            data-node-id="4:6"
          >
            Forgot Password?
          </button>
          <p
            className="absolute left-[75.59px] top-[519.27px] whitespace-pre font-['Inter',sans-serif] text-[0px] font-normal leading-[0] not-italic text-white"
            data-node-id="2:3"
          >
            <span className="font-['Katibeh',serif] text-[22.528px] leading-[normal]">
              Don&apos;t have an account?{' '}
            </span>
            <Link
              to="/signup"
              className="font-['Katibeh',serif] text-[22.528px] leading-[normal] text-white"
            >
              Sign up!
            </Link>
          </p>
          <label
            htmlFor="login-username"
            className="absolute left-[82.23px] top-[217.02px] h-[22.403px] w-[106.758px] cursor-text font-['Katibeh',serif] text-[25.031px] leading-[normal] not-italic text-white"
            data-node-id="5:53"
          >
            Username
          </label>
          <input
            id="login-username"
            name="username"
            autoComplete="username"
            className="absolute left-[83.48px] top-[240.3px] h-[40.676px] w-[231.413px] border-0 bg-[#d9d9d9] px-2 font-['Katibeh',serif] text-[18px] text-black outline-none"
            data-node-id="3:3"
          />
          <label
            htmlFor="login-password"
            className="absolute left-[83.48px] top-[297.24px] h-[26.158px] w-[125.907px] cursor-text font-['Katibeh',serif] text-[25.031px] leading-[normal] not-italic text-white"
            data-node-id="5:55"
          >
            Password
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="absolute left-[84.48px] top-[317.52px] h-[39.8px] w-[231.413px] border-0 bg-[#d9d9d9] px-2 font-['Katibeh',serif] text-[18px] text-black outline-none"
            data-node-id="3:4"
          />
          <p
            className="absolute left-[146.68px] top-[160.95px] whitespace-nowrap font-['Katibeh',serif] text-[50.062px] leading-[normal] not-italic text-white"
            data-node-id="5:57"
          >
            LOGIN
          </p>
          <div
            className="pointer-events-none absolute left-[250.16px] top-[537.04px] flex h-[0.265px] w-[58.115px] items-center justify-center"
            aria-hidden={true}
          >
            <div className="flex-none rotate-[0.26deg]">
              <div
                className="relative block h-0 w-[58.116px]"
                data-node-id="80:165"
              >
                <div className="absolute inset-x-0 inset-y-[-0.63px]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={img.vector11}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
