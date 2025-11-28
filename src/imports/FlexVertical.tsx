function Frame161() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-left text-neutral-900 w-full">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Choose character</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.25px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">Each character has its own theme and appearance.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffffff] h-10 relative rounded-lg shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip px-8 py-2 relative">
        <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Frog</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-400 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
      />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-8 py-2 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Cat</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-8 py-2 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Dog</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-8 py-2 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Duck</p>
      </div>
    </div>
  );
}

function Flex() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Flex"
    >
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Wrapper">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-[24px] relative w-full">
          <Frame161 />
          <Flex />
        </div>
      </div>
    </div>
  );
}

export default function FlexVertical() {
  return (
    <div className="bg-[#ffffff] relative rounded-3xl size-full" data-name="Flex Vertical">
      <div className="box-border content-stretch flex flex-col items-center justify-start max-w-inherit min-w-inherit overflow-clip p-0 relative size-full">
        <ContentWrapper />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}