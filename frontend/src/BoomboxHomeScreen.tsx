/** Home screen — Figma node 136:128 (Project-Structure). */

import { Link } from 'react-router-dom'

const img = {
  logo: '/figma-assets/home-logo.png',
  group2: '/figma-assets/home-group2.svg',
  titleBox: '/figma-assets/home-title-box.svg',
  polygon1: '/figma-assets/home-polygon1.svg',
  rect27: '/figma-assets/home-rect27.svg',
  trending: '/figma-assets/home-trending.svg',
  vector2: '/figma-assets/home-vector2.svg',
  ellipse6: '/figma-assets/home-ellipse6.svg',
  ellipse7: '/figma-assets/home-ellipse7.svg',
  ellipse8: '/figma-assets/home-ellipse8.svg',
  line3: '/figma-assets/home-line3.svg',
  rect28: '/figma-assets/home-rect28.svg',
  rect34: '/figma-assets/home-rect34.svg',
  rect24: '/figma-assets/home-rect24.svg',
  rect36: '/figma-assets/home-rect36.svg',
  rect29: '/figma-assets/home-rect29.svg',
} as const

export function BoomboxHomeScreen() {
  return (
    <div
      className="relative size-full bg-[#0d0d0d]"
      data-node-id="136:128"
      data-name="iPhone 16 & 17 Pro Max - 4"
    >
      <div
        className="absolute left-0 top-[118px] h-[638.175px] w-[402px] overflow-clip bg-white"
        data-node-id="80:170"
        data-name="Home Frame ??"
      >
        <div
          className="absolute left-[12px] top-[43px] h-[107px] w-[103px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[#aa5455]"
          data-node-id="203:143"
        />
        <div
          className="absolute left-0 top-0 h-[638.175px] w-[402px] bg-black"
          data-node-id="80:171"
        />
        <div
          className="absolute left-[18.47px] top-[181.28px] h-[389.438px] w-[365.192px]"
          data-node-id="80:172"
        >
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={img.group2}
          />
        </div>
        <div
          className="absolute left-[-18.84px] top-0 h-[31.155px] w-[421.346px]"
          data-node-id="80:347"
          data-name="Title Box Group"
        >
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={img.titleBox}
          />
        </div>
        <div
          className="absolute left-[11.93px] top-[-4.52px] contents"
          data-node-id="80:350"
          data-name="title icon group"
        >
          <div
            className="absolute left-[22.61px] top-[-4.52px] h-[38.316px] w-[53.642px] opacity-50"
            data-node-id="80:351"
            data-name="logo 1"
          >
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              src={img.logo}
            />
          </div>
          <p
            className="absolute left-[11.93px] top-[12.94px] whitespace-nowrap font-['Katibeh',serif] text-[25.125px] leading-[normal] not-italic text-white"
            data-node-id="80:352"
          >
            Boombox
          </p>
        </div>
        <div
          className="absolute left-[148.61px] top-[1.88px] contents"
          data-node-id="80:393"
          data-name="Home Icon"
        >
          <p
            className="absolute left-[148.61px] top-[17.96px] h-[30.15px] w-[57.034px] font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="80:394"
          >
            Home
          </p>
          <div
            className="absolute left-[153.01px] top-[1.88px] h-[6.909px] w-[12.939px]"
            data-node-id="80:395"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={img.polygon1}
            />
          </div>
          <div
            className="absolute left-[154.9px] top-[8.79px] h-[8.166px] w-[9.296px]"
            data-node-id="80:396"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={img.rect27}
            />
          </div>
          <div
            className="absolute left-[157.41px] top-[10.8px] h-[6.156px] w-[4.271px] bg-black"
            data-node-id="81:398"
          />
        </div>
        <Link
          to="/trending"
          className="absolute left-[186.8px] top-[2.89px] contents cursor-pointer"
          data-node-id="81:400"
          data-name="Trending Icon Group"
        >
          <p
            className="absolute left-[186.8px] top-[18.34px] whitespace-nowrap font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="81:401"
          >
            Trending
          </p>
          <div className="absolute left-[197.98px] top-[2.89px] flex h-[14.918px] w-[12.814px] items-center justify-center">
            <div className="flex-none rotate-[-0.37deg]">
              <div
                className="relative h-[14.837px] w-[12.719px]"
                data-node-id="81:402"
                data-name="Trending Icon"
              >
                <div className="absolute inset-[-0.67%_-0.49%_-0.42%_-0.49%]">
                  <img
                    alt=""
                    className="block size-full max-w-none"
                    src={img.trending}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/community"
          className="absolute left-[232.03px] top-[2.89px] contents cursor-pointer"
          data-node-id="81:404"
          data-name="Genre Icon Group"
        >
          <div
            className="absolute left-[245.47px] top-[2.89px] h-[14.07px] w-[9.296px] bg-[#bd9820]"
            data-node-id="81:405"
          />
          <div
            className="absolute left-[250.12px] top-[2.89px] h-[14.07px] w-[9.296px] bg-[#d9d35b]"
            data-node-id="81:406"
          />
          <div
            className="absolute left-[254.89px] top-[2.89px] h-[14.07px] w-[7.663px] bg-[#4e0909]"
            data-node-id="81:407"
          />
          <p
            className="absolute left-[232.03px] top-[19.22px] whitespace-nowrap font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="81:408"
          >
            Community
          </p>
        </Link>
        <Link
          to="/reviews"
          className="absolute left-[287.05px] top-[4.77px] contents cursor-pointer"
          data-node-id="81:410"
          data-name="Reviews Icon"
        >
          <div
            className="absolute left-[296.73px] top-[4.77px] h-[12.563px] w-[11.055px] bg-white"
            data-node-id="81:411"
          />
          <div
            className="absolute left-[299.18px] top-[8.11px] h-[0.311px] w-[6.344px]"
            data-node-id="81:412"
          >
            <div className="absolute inset-[-98.66%_-1.13%_-100.85%_-1.03%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={img.vector2}
              />
            </div>
          </div>
          <div
            className="absolute left-[299.24px] top-[15.29px] h-[0.311px] w-[6.344px]"
            data-node-id="81:413"
          >
            <div className="absolute inset-[-98.66%_-1.13%_-100.85%_-1.03%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={img.vector2}
              />
            </div>
          </div>
          <div
            className="absolute left-[299.24px] top-[12.85px] h-[0.311px] w-[6.344px]"
            data-node-id="81:414"
          >
            <div className="absolute inset-[-98.66%_-1.13%_-100.85%_-1.03%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={img.vector2}
              />
            </div>
          </div>
          <div
            className="absolute left-[299.24px] top-[10.54px] h-[0.311px] w-[6.344px]"
            data-node-id="81:415"
          >
            <div className="absolute inset-[-98.66%_-1.13%_-100.85%_-1.03%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src={img.vector2}
              />
            </div>
          </div>
          <p
            className="absolute left-[287.05px] top-[18.97px] whitespace-nowrap font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="81:416"
          >
            Reviews
          </p>
        </Link>
        <Link
          to="/search"
          className="absolute left-[327.88px] top-[4.52px] contents cursor-pointer"
          data-node-id="81:418"
          data-name="Search Icon"
        >
          <p
            className="absolute left-[327.88px] top-[19.35px] whitespace-nowrap font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="81:419"
          >
            Search
          </p>
          <div
            className="absolute left-[334.94px] top-[4.52px] h-[9.7px] w-[9.827px]"
            data-node-id="81:420"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={img.ellipse6}
            />
          </div>
          <div
            className="absolute left-[336.61px] top-[6.19px] h-[6.466px] w-[6.482px]"
            data-node-id="81:421"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={img.ellipse7}
            />
          </div>
          <div className="absolute left-[340.38px] top-[12.55px] flex h-[6.837px] w-[4.661px] items-center justify-center">
            <div className="flex-none rotate-[-26.24deg] skew-x-[-2.81deg]">
              <div
                className="h-[6.292px] w-[2.406px] bg-[#bd9820]"
                data-node-id="81:422"
              />
            </div>
          </div>
        </Link>
        <Link
          to="/profile"
          className="absolute left-[363.68px] top-[4.77px] contents cursor-pointer"
          data-node-id="81:424"
          data-name="Profile Icon Group"
        >
          <p
            className="absolute left-[363.68px] top-[19.22px] whitespace-nowrap font-['Katibeh',serif] text-[12.06px] leading-[normal] not-italic text-white"
            data-node-id="81:425"
          >
            Profile
          </p>
          <div
            className="absolute left-[369.09px] top-[4.77px] h-[13.244px] w-[13.442px] bg-[#4e0909]"
            data-node-id="81:426"
          />
          <div
            className="absolute left-[372.18px] top-[8.01px] h-[7.481px] w-[7.253px]"
            data-node-id="81:427"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={img.ellipse8}
            />
          </div>
          <div
            className="absolute left-[374.89px] top-[15.29px] h-[2.831px] w-[1.934px] bg-gradient-to-r from-[#bd9820] to-[#bd9820]"
            data-node-id="81:428"
          />
          <div
            className="absolute left-[372.57px] top-[16.91px] h-[1.213px] w-[6.576px] bg-[#bd9820]"
            data-node-id="81:429"
          />
        </Link>
        <div className="absolute left-[143.97px] top-[28.33px] h-0 w-[31.155px]">
          <div className="absolute inset-[-0.5px_-1.61%_-1px_-1.61%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={img.line3}
            />
          </div>
        </div>
        <p
          className="absolute left-[36.81px] top-[216.83px] h-[38.316px] w-[136.68px] font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-[#424242] not-italic"
          data-node-id="81:447"
        >
          Recent Activity:
        </p>
        <p
          className="absolute left-[230.9px] top-[216.83px] h-[38.316px] w-[136.68px] font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-[#424242] not-italic"
          data-node-id="81:449"
        >
          Upcoming Events:
        </p>
        <p
          className="absolute left-[34px] top-[441px] h-[38.316px] w-[136.68px] font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-[#424242] not-italic"
          data-node-id="107:2"
        >
          Friends
        </p>
        <p
          className="absolute left-[37px] top-[251px] h-[31px] w-[120px] font-['Katibeh',serif] text-[20px] leading-[normal] not-italic text-white"
          data-node-id="197:2"
        >
          Your last review was posted 3 day/s ago.
        </p>
        <p
          className="absolute left-[34px] top-[467px] h-[31px] w-[120px] font-['Katibeh',serif] text-[20px] leading-[normal] not-italic text-white"
          data-node-id="197:4"
        >
          Your friend just posted a review!
        </p>
        <p
          className="absolute left-[231px] top-[244px] h-[52px] w-[147px] font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-white not-italic"
          data-node-id="197:3"
        >
          Album release party for Florida band Illiad at Stardust coffee and video!
        </p>
        <p
          className="absolute left-[237px] top-[467px] w-[131px] whitespace-pre-wrap font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-white not-italic"
          data-node-id="198:89"
        >
          You&apos;ve rated this song the highest
        </p>
        <p
          className="absolute left-[231px] top-[441px] h-[38.316px] w-[136.68px] font-['Katibeh',serif] text-[18.844px] leading-[normal] tracking-[1.1306px] text-[#424242] not-italic"
          data-node-id="107:4"
        >
          Favorites
        </p>
        <div
          className="absolute left-[353px] top-[43px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(170,84,85,0.4)]"
          data-node-id="203:148"
        />
        <div
          className="absolute left-[353px] top-[134px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(170,84,85,0.4)]"
          data-node-id="205:255"
        />
        <div
          className="absolute left-[132px] top-[88px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(170,84,85,0.4)]"
          data-node-id="204:230"
        />
      </div>
      <div
        className="absolute left-[299px] top-[161px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(217,211,91,0.4)]"
        data-node-id="203:150"
      />
      <div
        className="absolute left-[299px] top-[252px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(217,211,91,0.4)]"
        data-node-id="205:253"
      />
      <div
        className="absolute left-[187px] top-[206px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(217,211,91,0.4)]"
        data-node-id="204:234"
      />
      <div
        className="absolute left-[245px] top-[161px] h-[31.673px] w-[35.663px]"
        data-node-id="203:152"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect28}
        />
      </div>
      <div
        className="absolute left-[245px] top-[252px] h-[31.673px] w-[35.663px]"
        data-node-id="205:251"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect28}
        />
      </div>
      <div
        className="absolute left-[354px] top-[206px] h-[31.673px] w-[35.663px]"
        data-node-id="204:238"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect34}
        />
      </div>
      <div
        className="absolute left-[185px] top-[161px] h-[31.673px] w-[35.663px]"
        data-node-id="203:154"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect24}
        />
      </div>
      <div
        className="absolute left-[187px] top-[252px] h-[31.673px] w-[35.663px]"
        data-node-id="205:249"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect24}
        />
      </div>
      <div
        className="absolute left-[245px] top-[206px] h-[31.673px] w-[35.663px]"
        data-node-id="204:232"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect24}
        />
      </div>
      <div
        className="absolute left-[131px] top-[161px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(78,9,9,0.5)]"
        data-node-id="203:156"
      />
      <div
        className="absolute left-[132px] top-[252px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(78,9,9,0.5)]"
        data-node-id="205:247"
      />
      <div
        className="absolute left-[299px] top-[206px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(78,9,9,0.5)]"
        data-node-id="204:236"
      />
      <div
        className="absolute left-[76px] top-[161px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(217,211,91,0.4)]"
        data-node-id="203:158"
      />
      <div
        className="absolute left-[76px] top-[252px] h-[31.673px] w-[36.146px]"
        data-node-id="204:244"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect36}
        />
      </div>
      <div
        className="absolute left-[16px] top-[206px] h-[31.673px] w-[36.146px] border-[0.116px] border-solid border-[rgba(0,0,0,0.95)] bg-[rgba(217,211,91,0.4)]"
        data-node-id="204:228"
      />
      <div
        className="absolute left-[16px] top-[161px] h-[31.673px] w-[35.663px]"
        data-node-id="203:160"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect29}
        />
      </div>
      <div
        className="absolute left-[16px] top-[252px] h-[31.673px] w-[35.663px]"
        data-node-id="204:242"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect29}
        />
      </div>
      <div
        className="absolute left-[76px] top-[206px] h-[31.673px] w-[35.663px]"
        data-node-id="204:226"
      >
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none"
          src={img.rect29}
        />
      </div>
      <p
        className="absolute left-[198px] top-[206px] h-[38.316px] w-[231.276px] font-['Katibeh',serif] text-[43.969px] leading-[normal] tracking-[2.6381px] text-white not-italic"
        data-node-id="81:435"
      >
        Your Name!
      </p>
      <p
        className="absolute left-[25px] top-[206px] h-[38.316px] w-[231.276px] font-['Katibeh',serif] text-[43.969px] leading-[normal] tracking-[2.6381px] text-white not-italic"
        data-node-id="81:433"
      >
        Welcome,{' '}
      </p>
    </div>
  )
}
