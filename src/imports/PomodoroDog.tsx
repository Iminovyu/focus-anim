import svgPaths from "./svg-iycd71sgm8";

function Timer() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.4)] box-border content-stretch flex flex-col h-[190px] items-center justify-center leading-[0] not-italic px-6 py-2.5 relative rounded-[20px] shrink-0 text-[#21314a] text-center w-[313px]"
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

function Dog() {
  return (
    <div className="absolute h-[215.88px] left-[190px] top-56 w-[264.335px]" data-name="Dog">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265 216">
        <g id="Dog">
          <path d={svgPaths.p3de7b800} fill="var(--fill-0, #E6E3D7)" id="Rectangle 15" />
          <path d={svgPaths.p79f4040} fill="var(--fill-0, #E6E3D7)" id="Rectangle 14" />
          <path d={svgPaths.pd215100} fill="var(--fill-0, #FBFBF4)" id="Union" />
          <path d={svgPaths.p1c0bc280} fill="var(--fill-0, #E6E3D7)" id="Exclude" />
          <circle cx="41.1368" cy="66.7967" fill="var(--fill-0, #3F2749)" id="Ellipse 76" r="9.51599" />
          <circle cx="88.0823" cy="66.7967" fill="var(--fill-0, #3F2749)" id="Ellipse 77" r="9.51599" />
          <path d={svgPaths.p3f68cd80} fill="var(--fill-0, #3F2749)" id="Polygon 11" />
          <path d={svgPaths.p3c8f4690} fill="var(--fill-0, #E6E3D7)" fillOpacity="0.51" id="Vector 9" />
          <circle cx="39.2336" cy="62.3559" fill="var(--fill-0, white)" id="Ellipse 78" r="2.5376" />
          <circle cx="84.9103" cy="62.3559" fill="var(--fill-0, white)" id="Ellipse 79" r="2.5376" />
        </g>
      </svg>
    </div>
  );
}

function Character() {
  return (
    <div className="absolute h-[447px] left-0 top-0 w-[464px]" data-name="Character">
      <div className="h-[447px] overflow-clip relative w-[464px]">
        <Dog />
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
          <path d={svgPaths.pe21b600} fill="var(--fill-0, #21314A)" id="icon" />
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
        className="absolute border border-[#21314a] border-solid inset-0 pointer-events-none rounded-[100px]"
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
        className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#21314a] text-[16px] text-left text-nowrap tracking-[0.15px]"
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
        className="absolute border border-[#21314a] border-solid inset-0 pointer-events-none rounded-[100px]"
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
          <path d={svgPaths.p7758700} fill="var(--fill-0, #21314A)" id="icon" />
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
        className="absolute border border-[#21314a] border-solid inset-0 pointer-events-none rounded-[100px]"
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
      className="bg-[#21314a] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0"
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

export default function PomodoroDog() {
  return (
    <div className="bg-[#00889a] relative size-full" data-name="Pomodoro/dog">
      <Frame7 />
    </div>
  );
}