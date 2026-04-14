/** Sign up screen — implemented from Figma node136:107 (Project-Structure). */

import { Link } from 'react-router-dom'

const img = {
  logo: '/figma-assets/signup-logo.png',
  line1: '/figma-assets/signup-line1.svg',
  line2: '/figma-assets/signup-line2.svg',
  loginUnderline: '/figma-assets/signup-login-underline.svg',
} as const

export function BoomboxSignupScreen() {
  return (
    <div
      className="relative size-full bg-[#0d0d0d]"
      data-node-id="136:107"
      data-name="iPhone 16 & 17 Pro Max - 3"
    >
      <div className="absolute left-0 top-[122px] contents" data-node-id="130:30">
        <form
          className="absolute left-0 top-[122px] contents"
          data-node-id="4:25"
          data-name="Sign up or Login option Frame"
          onSubmit={(e) => e.preventDefault()}
        >
          <div
            className="absolute left-0 top-[122px] h-[630.102px] w-[402px] bg-black"
            data-node-id="4:26"
          />
          <div
            className="absolute left-[19.72px] top-[172.48px] contents"
            data-node-id="4:27"
          >
            <div
              className="absolute left-[19.72px] top-[172.48px] h-[244.723px] w-[232.783px] border-[0.124px] border-solid border-black bg-[#d9d35b] opacity-60"
              data-node-id="4:28"
            />
            <div
              className="absolute left-[149.87px] top-[366.85px] h-[244.723px] w-[232.783px] border-[0.124px] border-solid border-black bg-[#dfe0af] opacity-60"
              data-node-id="4:29"
            />
            <div
              className="absolute left-[19.72px] top-[489.27px] h-[244.723px] w-[232.783px] border-[0.124px] border-solid border-black bg-[#aa5455] opacity-60"
              data-node-id="4:30"
            />
          </div>
          <div
            className="absolute left-[65.58px] top-[221.97px] h-[437.846px] w-[270.722px] border-[0.744px] border-solid border-white bg-black"
            data-node-id="4:32"
          />
          <label
            htmlFor="signup-email"
            className="absolute left-[84.8px] top-[336.46px] h-[22.45px] w-[74.496px] cursor-text font-['Katibeh',serif] text-[24.807px] leading-[normal] not-italic text-white"
            data-node-id="5:42"
          >
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            className="absolute left-[84.8px] top-[358.91px] h-[40.808px] w-[232.281px] border-0 bg-[#d9d9d9] px-2 font-['Katibeh',serif] text-[18px] text-black outline-none"
            data-node-id="4:37"
          />
          <label
            htmlFor="signup-password"
            className="absolute left-[84.29px] top-[412.62px] h-[22.45px] w-[96.354px] cursor-text font-['Katibeh',serif] text-[24.807px] leading-[normal] not-italic text-white"
            data-node-id="5:43"
          >
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            className="absolute left-[84.8px] top-[433.33px] h-[40.684px] w-[232.281px] border-0 bg-[#d9d9d9] px-2 font-['Katibeh',serif] text-[18px] text-black outline-none"
            data-node-id="4:38"
          />
          <button
            type="submit"
            className="absolute left-[142.84px] top-[489.27px] flex h-[40.684px] w-[116.203px] cursor-pointer items-center justify-center border-[0.992px] border-solid border-white bg-black p-0 font-['Katibeh',serif] text-[27.288px] leading-[normal] not-italic text-white"
            data-node-id="5:45"
          >
            SIGN UP
          </button>
          <p
            className="absolute left-[190.57px] top-[547.57px] h-[29.769px] w-[17.713px] font-['Katibeh',serif] text-[24.807px] leading-[normal] not-italic text-white"
            data-node-id="5:48"
          >
            or
          </p>
          <div
            className="pointer-events-none absolute left-[70.73px] top-[557.97px] flex h-[1.26px] w-[109.922px] items-center justify-center"
            aria-hidden={true}
          >
            <div className="flex-none rotate-[-179.34deg] skew-x-[-0.02deg]">
              <div className="relative h-0 w-[109.929px]" data-node-id="5:49">
                <div className="absolute inset-[-0.99px_0_0_0]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={img.line1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-[218.21px] top-[559.22px] flex h-[1.023px] w-[112.937px] items-center justify-center"
            aria-hidden={true}
          >
            <div className="flex-none rotate-[-179.48deg] skew-x-[-0.01deg]">
              <div className="relative h-0 w-[112.941px]" data-node-id="5:50">
                <div className="absolute inset-[-0.99px_0_0_0]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={img.line2}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="absolute left-[116.45px] top-[631.54px] h-[28.28px] w-[165.825px] font-['Katibeh',serif] text-[23.567px] leading-[normal] not-italic text-shadow-[0px_0.496px_0.496px_rgba(0,0,0,0.25)] text-white"
            data-node-id="5:52"
          >
            <span>Already a user? </span>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </p>
          <div
            className="pointer-events-none absolute left-[236.93px] top-[649.83px] h-0 w-[45.351px]"
            aria-hidden={true}
          >
            <div className="absolute inset-x-0 inset-y-[-0.62px]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={img.loginUnderline}
              />
            </div>
          </div>
          <div
            className="absolute left-[110px] top-[214.12px] h-[129.928px] w-[181.899px] opacity-55"
            data-node-id="63:2"
            data-name="logo 1"
          >
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              src={img.logo}
            />
          </div>
          <p
            className="absolute left-[136.05px] top-[284.73px] h-[59.537px] w-[133.916px] font-['Katibeh',serif] text-[49.614px] leading-[normal] not-italic text-white"
            data-node-id="5:40"
          >
            SIGN UP
          </p>
        </form>
      </div>
    </div>
  )
}
