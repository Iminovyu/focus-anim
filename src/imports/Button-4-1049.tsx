import svgPaths from "./svg-ccla7ywmlp";

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p8cbf100} fill="var(--fill-0, #59682A)" id="icon" />
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
        className="absolute border border-[#59682a] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

export default function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Button"
    >
      <Content />
    </div>
  );
}