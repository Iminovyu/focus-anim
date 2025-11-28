import svgPaths from "./svg-8owaoe9n0a";

function Timer() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.4)] box-border content-stretch flex flex-col h-[190px] items-center justify-center leading-[0] not-italic px-6 py-2.5 relative rounded-[20px] shrink-0 text-[#181818] text-center w-[313px]"
      data-name="Timer"
    >
      <div className="font-['Jomhuria:Regular',_sans-serif] h-32 relative shrink-0 text-[160px] w-[237px]">
        <p className="block leading-[160px]">25:00</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[32px] w-[237px]">
        <p className="block leading-[50px]">Focus time</p>
      </div>
    </div>
  );
}

function Cat() {
  return (
    <div className="absolute h-[245.199px] left-[42.02px] top-[193px] w-[409.979px]" data-name="Cat">
      <div className="absolute inset-[-1.63%_-0.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 254">
          <g id="Cat">
            <g filter="url(#filter0_g_1_1352)" id="Union">
              <path d={svgPaths.p1b1d6100} fill="var(--fill-0, #181818)" />
            </g>
            <circle cx="127.659" cy="172.583" fill="var(--fill-0, white)" id="Ellipse 80" r="49.0601" />
            <circle cx="138.748" cy="172.247" fill="var(--fill-0, #181818)" id="Ellipse 82" r="31.9227" />
            <circle cx="306.425" cy="172.583" fill="var(--fill-0, white)" id="Ellipse 81" r="49.0601" />
            <circle cx="323.562" cy="172.247" fill="var(--fill-0, #181818)" id="Ellipse 83" r="31.9227" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="253.199"
              id="filter0_g_1_1352"
              width="417.979"
              x="0"
              y="-7.11803e-05"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="4389" type="fractalNoise" />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="8"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_1_1352">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Character() {
  return (
    <div className="absolute h-[447px] left-0 top-0 w-[464px]" data-name="Character">
      <div className="h-[447px] overflow-clip relative w-[464px]">
        <Cat />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[15px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function SceneWrap() {
  return (
    <div className="h-[447px] relative shrink-0 w-[464px]" data-name="scene-wrap">
      <Character />
      <div className="absolute h-0 left-[-22px] top-[15px] w-[508px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-15px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 508 15">
            <line id="Line 4" stroke="var(--stroke-0, white)" strokeWidth="15" x2="508" y1="7.5" y2="7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pe21b600} fill="var(--fill-0, #181818)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0"
      data-name="State-layer"
    >
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#ffffff] relative rounded-[100px] shrink-0" data-name="Content">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
        <StateLayer />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <Content />
    </div>
  );
}

function StateLayer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0"
      data-name="State-layer"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#181818] text-[16px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">Break</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#ffffff] relative rounded-[100px] shrink-0" data-name="Content">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
        <StateLayer1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <Content1 />
    </div>
  );
}

function Undo1() {
  return (
    <div className="relative shrink-0 size-6" data-name="undo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="undo">
          <path d={svgPaths.p7758700} fill="var(--fill-0, #181818)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0"
      data-name="State-layer"
    >
      <Undo1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#ffffff] relative rounded-[100px] shrink-0" data-name="Content">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
        <StateLayer2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <Content2 />
    </div>
  );
}

function PlayArrowFilled() {
  return (
    <div className="relative shrink-0 size-6" data-name="play_arrow_filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="play_arrow_filled">
          <path d="M8 19V5L19 12L8 19Z" fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0"
      data-name="State-layer"
    >
      <PlayArrowFilled />
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">Start</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="bg-[#181818] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0"
      data-name="Content"
    >
      <StateLayer3 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <Content3 />
    </div>
  );
}

function Controls() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[9px] items-center justify-start p-0 relative shrink-0"
      data-name="controls"
    >
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-[502px] px-6 py-0 top-28 w-[508px]">
      <Timer />
      <SceneWrap />
      <Controls />
    </div>
  );
}

export default function PomodoroCat() {
  return (
    <div className="bg-[#b92a1b] relative size-full" data-name="Pomodoro/cat">
      <Frame7 />
    </div>
  );
}