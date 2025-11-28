import { useState, useEffect, useRef, useCallback } from 'react';
import svgPathsFrog from "./imports/svg-gydr1i0irs";
import svgPathsCat from "./imports/svg-wul53592rb";
import svgPathsCatNew from "./imports/svg-8owaoe9n0a";
import svgPathsDog from "./imports/svg-iycd71sgm8";
import svgPathsDuck from "./imports/svg-wy0n9pkpwj";
import svgPathsButton from "./imports/svg-ccla7ywmlp";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import CustomCursor from "./components/CustomCursor";

type Character = 'frog' | 'cat' | 'dog' | 'duck';
type TimerState = 'idle' | 'running' | 'paused';
type Mode = 'focus' | 'break';

const themes = {
  frog: {
    background: '#dbf283',
    accent: '#59682a',
    timerBg: 'rgba(255,255,255,0.4)',
    textColor: '#414a21'
  },
  cat: {
    background: '#b92a1b',
    accent: '#181818',
    timerBg: 'rgba(255,255,255,0.4)',
    textColor: '#181818'
  },
  dog: {
    background: '#00889a',
    accent: '#21314a',
    timerBg: 'rgba(255,255,255,0.4)',
    textColor: '#21314a'
  },
  duck: {
    background: '#edbd5c',
    accent: '#372300',
    timerBg: 'rgba(255,255,255,0.4)',
    textColor: '#372300'
  }
};

const presets = {
  focus: 25 * 60, // 25 minutes in seconds
  break: 5 * 60   // 5 minutes in seconds
};

function Timer({ time, mode, theme }: { time: number; mode: Mode; theme: typeof themes.frog }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8  items-center justify-center leading-[0] not-italic px-6 py-2.5 relative rounded-[20px] shrink-0 text-center w-full"
      style={{ 
        backgroundColor: theme.timerBg,
        color: theme.textColor 
      }}
      data-name="Timer"
    >
      <div className="font-['Jomhuria:Regular',_sans-serif] h-32 relative shrink-0 text-[160px] ">
        <p className="block leading-[160px]">{timeString}</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[32px]">
        <p className="block leading-[50px]">{mode === 'focus' ? 'Focus time' : 'Break time'}</p>
      </div>
    </div>
  );
}

function Eye({ x, y, pupilX, pupilY }: { x: number; y: number; pupilX: number; pupilY: number }) {
  return (
    <div 
      className="absolute w-[49.3px] h-[49.3px] bg-white rounded-full overflow-hidden"
      style={{ left: x, top: y }}
    >
      <div 
        className="w-[26.4px] h-[26.4px] bg-black rounded-full transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate(${pupilX}px, ${pupilY}px)`,
          margin: '11.45px'
        }}
      />
    </div>
  );
}

function FrogCharacter({ mousePos, cardRef }: { mousePos: { x: number; y: number }; cardRef: React.RefObject<HTMLDivElement> }) {
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const updatePupils = useCallback(() => {
    if (!cardRef.current || (mousePos.x === 0 && mousePos.y === 0)) {
      setLeftPupil({ x: 0, y: 0 });
      setRightPupil({ x: 0, y: 0 });
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    
    const leftEyeCenter = {
      x: rect.left + (257.219 / 620 * rect.width),
      y: rect.top + (35.7045 / 514 * rect.height) + 124
    };
    const rightEyeCenter = {
      x: rect.left + (362.905 / 620 * rect.width),
      y: rect.top + (35.7045 / 514 * rect.height) + 124
    };

    const maxDistance = 11.45;

    const leftDistance = Math.sqrt(Math.pow(mousePos.x - leftEyeCenter.x, 2) + Math.pow(mousePos.y - leftEyeCenter.y, 2));
    const rightDistance = Math.sqrt(Math.pow(mousePos.x - rightEyeCenter.x, 2) + Math.pow(mousePos.y - rightEyeCenter.y, 2));

    const leftAngle = Math.atan2(mousePos.y - leftEyeCenter.y, mousePos.x - leftEyeCenter.x);
    const rightAngle = Math.atan2(mousePos.y - rightEyeCenter.y, mousePos.x - rightEyeCenter.x);

    const leftPupilDistance = Math.min(leftDistance * 0.3, maxDistance);
    const rightPupilDistance = Math.min(rightDistance * 0.3, maxDistance);

    const newLeftPupil = {
      x: Math.cos(leftAngle) * leftPupilDistance,
      y: Math.sin(leftAngle) * leftPupilDistance
    };

    const newRightPupil = {
      x: Math.cos(rightAngle) * rightPupilDistance,
      y: Math.sin(rightAngle) * rightPupilDistance
    };

    setLeftPupil(prev => ({
      x: prev.x + (newLeftPupil.x - prev.x) * 0.15,
      y: prev.y + (newLeftPupil.y - prev.y) * 0.15
    }));

    setRightPupil(prev => ({
      x: prev.x + (newRightPupil.x - prev.x) * 0.15,
      y: prev.y + (newRightPupil.y - prev.y) * 0.15
    }));
  }, [mousePos.x, mousePos.y, cardRef]);

  useEffect(() => {
    const animate = () => {
      updatePupils();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updatePupils]);

  return (
    <div className="absolute h-[514px] left-[-78px] top-[124px] w-[619.187px]" data-name="Frog">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 514">
        <g id="Frog">
          <g filter="url(#filter0_n_1_1209)" id="Ellipse 33">
            <path d={svgPathsFrog.p26132600} fill="var(--fill-0, #C0DB5E)" />
          </g>
          <path
            d={svgPathsFrog.p21a0aa00}
            fill="var(--fill-0, #59682A)"
            id="Ellipse 17"
            stroke="var(--stroke-0, #59682A)"
            strokeWidth="5"
          />
          <path d={svgPathsFrog.p39c02a00} fill="var(--fill-0, #90A543)" id="Ellipse 18" />
          <g filter="url(#filter1_g_1_1209)" id="Ellipse 34">
            <path d={svgPathsFrog.p1fbea880} fill="url(#paint0_linear_1_1209)" fillOpacity="0.24" />
          </g>
          <ellipse cx="257.219" cy="45.7019" fill="var(--fill-0, #BFDA5D)" id="Ellipse 19" rx="35.7046" ry="45.7019" />
          <ellipse cx="362.905" cy="45.7019" fill="var(--fill-0, #BFDA5D)" id="Ellipse 20" rx="35.7046" ry="45.7019" />
          <path d={svgPathsFrog.p2486c700} fill="var(--fill-0, #BFDA5D)" id="Rectangle 5" />
          
          <ellipse
            cx="189.246"
            cy="170.353"
            fill="var(--fill-0, #BFDA5D)"
            id="Ellipse 24"
            rx="16.5261"
            ry="65.9004"
            transform="rotate(-15 189.246 170.353)"
          />
          <ellipse
            cx="16.5261"
            cy="65.9004"
            fill="var(--fill-0, #BFDA5D)"
            id="Ellipse 25"
            rx="16.5261"
            ry="65.9004"
            transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 460.975 111.384)"
          />
          <path d={svgPathsFrog.pd30c900} fill="var(--fill-0, #BFDA5D)" id="Ellipse 26" />
          <path d={svgPathsFrog.pd30c900} fill="var(--fill-0, #BFDA5D)" id="Ellipse 27" />
          <path d={svgPathsFrog.p187b6600} fill="var(--fill-0, #BFDA5D)" id="Ellipse 28" />
          <path d={svgPathsFrog.p31a76480} fill="var(--fill-0, #DEF686)" id="Ellipse 29" />
          <rect
            fill="var(--fill-0, #BFDA5D)"
            height="118.743"
            id="Rectangle 8"
            rx="18.9744"
            width="37.9489"
            x="221.515"
            y="115.479"
          />
          <path d={svgPathsFrog.p178aab80} fill="var(--fill-0, #BFDA5D)" id="Ellipse 32" />
          <g id="Group 3">
            <rect
              fill="var(--fill-0, #BFDA5D)"
              height="118.743"
              id="Rectangle 4"
              rx="18.9744"
              transform="matrix(-1 0 0 1 398.609 115.479)"
              width="37.9489"
            />
            <path d={svgPathsFrog.p3e2325a0} fill="var(--fill-0, #BFDA5D)" id="Ellipse 14" />
          </g>
          <g filter="url(#filter2_g_1_1209)" id="Manchas">
            <ellipse
              cx="227.771"
              cy="90.7677"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 34_2"
              rx="3.30375"
              ry="5.94674"
              transform="rotate(7.19369 227.771 90.7677)"
            />
            <ellipse
              cx="236.796"
              cy="85.3889"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 35"
              rx="2.29659"
              ry="4.13386"
              transform="rotate(7.19369 236.796 85.3889)"
            />
            <ellipse
              cx="230.796"
              cy="103.389"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 36"
              rx="2.29659"
              ry="4.13386"
              transform="rotate(7.19369 230.796 103.389)"
            />
            <ellipse
              cx="222.492"
              cy="105.341"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 37"
              rx="1.22502"
              ry="2.20503"
              transform="rotate(7.19369 222.492 105.341)"
            />
          </g>
          <g filter="url(#filter3_g_1_1209)" id="Manchas_2">
            <ellipse
              cx="3.30375"
              cy="5.94674"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 34_3"
              rx="3.30375"
              ry="5.94674"
              transform="matrix(-0.992128 0.125224 0.125224 0.992128 395.355 84.4541)"
            />
            <ellipse
              cx="2.29659"
              cy="4.13386"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 35_2"
              rx="2.29659"
              ry="4.13386"
              transform="matrix(-0.992128 0.125224 0.125224 0.992128 385.557 81)"
            />
            <ellipse
              cx="2.29659"
              cy="4.13386"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 36_2"
              rx="2.29659"
              ry="4.13386"
              transform="matrix(-0.992128 0.125224 0.125224 0.992128 391.557 99)"
            />
            <ellipse
              cx="1.22502"
              cy="2.20503"
              fill="var(--fill-0, #DDF587)"
              id="Ellipse 37_2"
              rx="1.22502"
              ry="2.20503"
              transform="matrix(-0.992128 0.125224 0.125224 0.992128 399.04 103)"
            />
          </g>
          <path d={svgPathsFrog.p2e57da00} fill="var(--fill-0, #414A21)" id="Ellipse 31 (Stroke)" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="171.955"
            id="filter0_n_1_1209"
            width="619.187"
            x="0.000198138"
            y="170.09"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="2 2"
              numOctaves="3"
              result="noise"
              seed="3216"
              stitchTiles="stitch"
              type="fractalNoise"
            />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                tableValues="0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                type="discrete"
              />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_1_1209">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="124.014"
            id="filter1_g_1_1209"
            width="395.777"
            x="112.1"
            y="164.1"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.67114090919494629 0.67114090919494629"
              numOctaves="3"
              seed="7920"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="11.800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_1_1209">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="27.5769"
            id="filter2_g_1_1209"
            width="19.2085"
            x="220.585"
            y="80.6173"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.23923446238040924 0.23923446238040924"
              numOctaves="3"
              seed="606"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.3200000524520874"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_1_1209">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="27.5769"
            id="filter3_g_1_1209"
            width="19.2085"
            x="380.799"
            y="80.6173"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.23923446238040924 0.23923446238040924"
              numOctaves="3"
              seed="606"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.3200000524520874"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_1_1209">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1209"
            x1="118"
            x2="501.977"
            y1="226.107"
            y2="226.107"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#BFDA5D" />
          </linearGradient>
        </defs>
      </svg>
      
      <Eye x={232.5} y={10.8} pupilX={leftPupil.x} pupilY={leftPupil.y} />
      <Eye x={338.2} y={10.8} pupilX={rightPupil.x} pupilY={rightPupil.y} />
    </div>
  );
}

function CatCharacter({ mousePos, cardRef }: { mousePos: { x: number; y: number }; cardRef: React.RefObject<HTMLDivElement> }) {
  const [leftPupilPos, setLeftPupilPos] = useState({ x: 138.748, y: 172.247 });
  const [rightPupilPos, setRightPupilPos] = useState({ x: 323.562, y: 172.247 });
  const animationRef = useRef<number>();

  const updatePupils = useCallback(() => {
    if (!cardRef.current || (mousePos.x === 0 && mousePos.y === 0)) {
      // Return pupils to center positions
      setLeftPupilPos({ x: 138.748, y: 172.247 });
      setRightPupilPos({ x: 323.562, y: 172.247 });
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    
    // Eye centers in SVG coordinates
    const leftEyeCenter = { x: 127.659, y: 172.583 };
    const rightEyeCenter = { x: 306.425, y: 172.583 };
    const eyeRadius = 49.0601;
    const pupilRadius = 31.9227;
    
    // Convert mouse position to SVG coordinates
    const svgRect = {
      left: rect.left + (42.02 / 464) * rect.width,
      top: rect.top + (193 / 447) * rect.height,
      width: (409.979 / 464) * rect.width,
      height: (245.199 / 447) * rect.height
    };
    
    const scaleX = 418 / svgRect.width;
    const scaleY = 254 / svgRect.height;
    
    const mouseSvgX = (mousePos.x - svgRect.left) * scaleX;
    const mouseSvgY = (mousePos.y - svgRect.top) * scaleY;

    // Calculate maximum movement distance (eye radius - pupil radius)
    const maxMovement = eyeRadius - pupilRadius;

    // Left eye pupil movement
    const leftDx = mouseSvgX - leftEyeCenter.x;
    const leftDy = mouseSvgY - leftEyeCenter.y;
    const leftDistance = Math.sqrt(leftDx * leftDx + leftDy * leftDy);
    
    let newLeftX = leftEyeCenter.x;
    let newLeftY = leftEyeCenter.y;
    
    if (leftDistance > 0) {
      const leftMovement = Math.min(leftDistance * 0.4, maxMovement);
      newLeftX = leftEyeCenter.x + (leftDx / leftDistance) * leftMovement;
      newLeftY = leftEyeCenter.y + (leftDy / leftDistance) * leftMovement;
    }

    // Right eye pupil movement  
    const rightDx = mouseSvgX - rightEyeCenter.x;
    const rightDy = mouseSvgY - rightEyeCenter.y;
    const rightDistance = Math.sqrt(rightDx * rightDx + rightDy * rightDy);
    
    let newRightX = rightEyeCenter.x;
    let newRightY = rightEyeCenter.y;
    
    if (rightDistance > 0) {
      const rightMovement = Math.min(rightDistance * 0.4, maxMovement);
      newRightX = rightEyeCenter.x + (rightDx / rightDistance) * rightMovement;
      newRightY = rightEyeCenter.y + (rightDy / rightDistance) * rightMovement;
    }

    // Smooth interpolation
    setLeftPupilPos(prev => ({
      x: prev.x + (newLeftX - prev.x) * 0.15,
      y: prev.y + (newLeftY - prev.y) * 0.15
    }));

    setRightPupilPos(prev => ({
      x: prev.x + (newRightX - prev.x) * 0.15,
      y: prev.y + (newRightY - prev.y) * 0.15
    }));
  }, [mousePos.x, mousePos.y, cardRef]);

  useEffect(() => {
    const animate = () => {
      updatePupils();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updatePupils]);

  return (
    <div className="absolute h-[245.199px] left-[42.02px] top-[193px] w-[409.979px]" data-name="Cat">
      <div className="absolute inset-[-1.63%_-0.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 254">
          <g id="Cat">
            <g filter="url(#filter0_g_1_1352)" id="Union">
              <path d={svgPathsCatNew.p1b1d6100} fill="var(--fill-0, #181818)" />
            </g>
            <circle cx="127.659" cy="172.583" fill="var(--fill-0, white)" id="Ellipse 80" r="49.0601" />
            <circle cx={leftPupilPos.x} cy={leftPupilPos.y} fill="var(--fill-0, #181818)" id="Ellipse 82" r="31.9227" />
            <circle cx="306.425" cy="172.583" fill="var(--fill-0, white)" id="Ellipse 81" r="49.0601" />
            <circle cx={rightPupilPos.x} cy={rightPupilPos.y} fill="var(--fill-0, #181818)" id="Ellipse 83" r="31.9227" />
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

function DuckCharacter({ mousePos, cardRef }: { mousePos: { x: number; y: number }; cardRef: React.RefObject<HTMLDivElement> }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
    
    const handleChange = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updatePosition = useCallback(() => {
    if (prefersReducedMotion.current) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    if (!cardRef.current || (mousePos.x === 0 && mousePos.y === 0)) {
      // Ease back to center when mouse leaves
      setPosition(prev => ({
        x: prev.x + (0 - prev.x) * 0.08,
        y: prev.y + (0 - prev.y) * 0.08
      }));
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate offset from center
    const offsetX = mousePos.x - centerX;
    const offsetY = mousePos.y - centerY;
    
    // Scale and clamp movement to ±32px
    const maxMovement = 32;
    const scaleFactor = 0.15;
    
    const targetX = Math.max(-maxMovement, Math.min(maxMovement, offsetX * scaleFactor));
    const targetY = Math.max(-maxMovement, Math.min(maxMovement, offsetY * scaleFactor));

    // Smooth spring-like interpolation
    setPosition(prev => ({
      x: prev.x + (targetX - prev.x) * 0.12,
      y: prev.y + (targetY - prev.y) * 0.12
    }));
  }, [mousePos.x, mousePos.y, cardRef]);

  useEffect(() => {
    const animate = () => {
      updatePosition();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updatePosition]);

  return (
    <div 
      className="absolute h-[267.512px] left-[136px] top-[126px] w-[261.383px] will-change-transform"
      data-name="Duck"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div className="absolute bottom-[-0.49%] left-[-0.5%] right-0 top-[-0.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 271">
          <g id="Duck">
            <g filter="url(#filter0_g_8_1202)" id="Union">
              <path d={svgPathsDuck.p3e6ffd00} fill="var(--fill-0, #FFFDF3)" />
            </g>
            <path d={svgPathsDuck.p29b0d100} fill="var(--fill-0, #FAE58F)" id="Union_2" />
            <path d={svgPathsDuck.p347efa00} fill="var(--fill-0, #FAE58F)" id="Union_3" />
            <g filter="url(#filter1_g_8_1202)" id="Ellipse 51">
              <ellipse
                cx="41.4204"
                cy="48.9379"
                fill="var(--fill-0, #6E4905)"
                rx="3.61123"
                ry="6.97523"
                transform="rotate(-40.3453 41.4204 48.9379)"
              />
            </g>
            <g filter="url(#filter2_g_8_1202)" id="Ellipse 52">
              <ellipse
                cx="73.0801"
                cy="26.152"
                fill="var(--fill-0, #6E4905)"
                rx="2.56028"
                ry="4.94529"
                transform="rotate(-40.3453 73.0801 26.152)"
              />
            </g>
            <path d={svgPathsDuck.p4917880} fill="var(--fill-0, #FAE58F)" id="Vector 3" />
            <g filter="url(#filter3_g_8_1202)" id="Ellipse 54">
              <ellipse
                cx="83.7525"
                cy="51.3347"
                fill="var(--fill-0, #6E4905)"
                rx="0.931561"
                ry="1.79935"
                transform="rotate(-40.3453 83.7525 51.3347)"
              />
            </g>
            <g filter="url(#filter4_g_8_1202)" id="Ellipse 55">
              <ellipse
                cx="72.739"
                cy="60.8798"
                fill="var(--fill-0, #6E4905)"
                rx="0.931561"
                ry="1.79935"
                transform="rotate(-40.3453 72.739 60.8798)"
              />
            </g>
            <g filter="url(#filter5_g_8_1202)" id="Ellipse 53">
              <circle cx="208.9" cy="223.374" fill="var(--fill-0, #FFFDF3)" r="33.0406" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="270.112"
              id="filter0_g_8_1202"
              width="255.036"
              x="0.700508"
              y="0.70055"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence
                baseFrequency="0.034674063324928284 0.034674063324928284"
                numOctaves="3"
                seed="1425"
                type="fractalNoise"
              />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="2.5999999046325684"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.6181"
              id="filter1_g_8_1202"
              width="11.5783"
              x="35.6313"
              y="42.6289"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="8847" type="fractalNoise" />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="1"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="9.23696"
              id="filter2_g_8_1202"
              width="8.49977"
              x="68.8302"
              y="21.5335"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="8847" type="fractalNoise" />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="1"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.99702"
              id="filter3_g_8_1202"
              width="3.7288"
              x="81.8881"
              y="49.3362"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="8847" type="fractalNoise" />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="1"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.99702"
              id="filter4_g_8_1202"
              width="3.7288"
              x="70.8746"
              y="58.8813"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="8847" type="fractalNoise" />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="1"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="70.5811"
              id="filter5_g_8_1202"
              width="70.5811"
              x="173.61"
              y="188.083"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence
                baseFrequency="0.079365074634552002 0.079365074634552002"
                numOctaves="3"
                seed="2471"
                type="fractalNoise"
              />
              <feDisplacementMap
                height="100%"
                in="shape"
                result="displacedImage"
                scale="4.5"
                width="100%"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMerge result="effect1_texture_8_1202">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DogCharacter({ mousePos, cardRef }: { mousePos: { x: number; y: number }; cardRef: React.RefObject<HTMLDivElement> }) {
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const updatePupils = useCallback(() => {
    if (!cardRef.current || (mousePos.x === 0 && mousePos.y === 0)) {
      setLeftPupil({ x: 0, y: 0 });
      setRightPupil({ x: 0, y: 0 });
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    
    const leftEyeCenter = {
      x: rect.left + (41.1368 / 265 * rect.width) + 190,
      y: rect.top + (66.7967 / 216 * rect.height) + 224
    };
    const rightEyeCenter = {
      x: rect.left + (88.0823 / 265 * rect.width) + 190,
      y: rect.top + (66.7967 / 216 * rect.height) + 224
    };

    const maxDistance = 4.8;

    const leftDistance = Math.sqrt(Math.pow(mousePos.x - leftEyeCenter.x, 2) + Math.pow(mousePos.y - leftEyeCenter.y, 2));
    const rightDistance = Math.sqrt(Math.pow(mousePos.x - rightEyeCenter.x, 2) + Math.pow(mousePos.y - rightEyeCenter.y, 2));

    const leftAngle = Math.atan2(mousePos.y - leftEyeCenter.y, mousePos.x - leftEyeCenter.x);
    const rightAngle = Math.atan2(mousePos.y - rightEyeCenter.y, mousePos.x - rightEyeCenter.x);

    const leftPupilDistance = Math.min(leftDistance * 0.3, maxDistance);
    const rightPupilDistance = Math.min(rightDistance * 0.3, maxDistance);

    const newLeftPupil = {
      x: Math.cos(leftAngle) * leftPupilDistance,
      y: Math.sin(leftAngle) * leftPupilDistance
    };

    const newRightPupil = {
      x: Math.cos(rightAngle) * rightPupilDistance,
      y: Math.sin(rightAngle) * rightPupilDistance
    };

    setLeftPupil(prev => ({
      x: prev.x + (newLeftPupil.x - prev.x) * 0.15,
      y: prev.y + (newLeftPupil.y - prev.y) * 0.15
    }));

    setRightPupil(prev => ({
      x: prev.x + (newRightPupil.x - prev.x) * 0.15,
      y: prev.y + (newRightPupil.y - prev.y) * 0.15
    }));
  }, [mousePos.x, mousePos.y, cardRef]);

  useEffect(() => {
    const animate = () => {
      updatePupils();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updatePupils]);

  return (
    <div className="absolute h-[215.88px] left-[190px] top-56 w-[264.335px]" data-name="Dog">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265 216">
        <g id="Dog">
          <path d={svgPathsDog.p3de7b800} fill="var(--fill-0, #E6E3D7)" id="Rectangle 15" />
          <path d={svgPathsDog.p79f4040} fill="var(--fill-0, #E6E3D7)" id="Rectangle 14" />
          <path d={svgPathsDog.pd215100} fill="var(--fill-0, #FBFBF4)" id="Union" />
          <path d={svgPathsDog.p1c0bc280} fill="var(--fill-0, #E6E3D7)" id="Exclude" />
          <path d={svgPathsDog.p3f68cd80} fill="var(--fill-0, #3F2749)" id="Polygon 11" />
          <path d={svgPathsDog.p3c8f4690} fill="var(--fill-0, #E6E3D7)" fillOpacity="0.51" id="Vector 9" />
        </g>
      </svg>
      
      <div 
        className="absolute w-[19px] h-[19px] bg-white rounded-full overflow-hidden"
        style={{ left: 31.6, top: 57.3 }}
      >
        <div 
          className="w-[9.5px] h-[9.5px] bg-[#3F2749] rounded-full transition-transform duration-75 ease-out"
          style={{ 
            transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)`,
            margin: '4.75px'
          }}
        />
      </div>
      <div 
        className="absolute w-[19px] h-[19px] bg-white rounded-full overflow-hidden"
        style={{ left: 78.6, top: 57.3 }}
      >
        <div 
          className="w-[9.5px] h-[9.5px] bg-[#3F2749] rounded-full transition-transform duration-75 ease-out"
          style={{ 
            transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)`,
            margin: '4.75px'
          }}
        />
      </div>
    </div>
  );
}

function CharacterCard({ character, mousePos, cardRef }: { 
  character: Character; 
  mousePos: { x: number; y: number };
  cardRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div 
      ref={cardRef}
      className="h-[447px] relative shrink-0 w-[464px]" 
      data-name="scene-wrap"
    >
      <div className="absolute h-[447px] left-0 top-0 w-[464px]" data-name="Character">
        <div className="h-[447px] overflow-clip relative w-[464px]">
          {character === 'frog' && <FrogCharacter mousePos={mousePos} cardRef={cardRef} />}
          {character === 'cat' && <CatCharacter mousePos={mousePos} cardRef={cardRef} />}
          {character === 'dog' && <DogCharacter mousePos={mousePos} cardRef={cardRef} />}
          {character === 'duck' && <DuckCharacter mousePos={mousePos} cardRef={cardRef} />}
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[15px] border-solid inset-0 pointer-events-none"
        />
      </div>
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

function Controls({ 
  timerState, 
  onStart, 
  onPause, 
  onReset, 
  onBreak,
  onFocus,
  theme,
  character,
  onCharacterChange,
  mode
}: { 
  timerState: TimerState;
  onStart: () => void;
  onPause: () => void; 
  onReset: () => void;
  onBreak: () => void;
  onFocus: () => void;
  theme: typeof themes.frog;
  character: Character;
  onCharacterChange: (char: Character) => void;
  mode: Mode;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCharacterSelect = (char: Character) => {
    onCharacterChange(char);
    setDialogOpen(false);
  };

  return (
    <div className="box-border content-stretch flex flex-row gap-[9px] items-center justify-start p-0 relative shrink-0" data-name="controls">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <button className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
            <div className="bg-[#ffffff] relative rounded-[100px] shrink-0">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0">
                  <svg className="relative shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsButton.p8cbf100} fill={theme.accent} />
                  </svg>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
                style={{ borderColor: theme.accent }}
              />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-[#ffffff] max-w-[600px] min-w-[200px] rounded-3xl p-0 border-neutral-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <DialogHeader className="sr-only">
            <DialogTitle>Choose character</DialogTitle>
            <DialogDescription>
              Each character has its own theme and appearance.
            </DialogDescription>
          </DialogHeader>
          <div className="box-border content-stretch flex flex-col items-center justify-start max-w-inherit min-w-inherit overflow-clip p-0 relative w-full">
            <div className="relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
              />
              <div className="flex flex-col items-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-[24px] relative w-full">
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
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                    {(['frog', 'cat', 'dog', 'duck'] as const).map((char) => {
                      const isSelected = character === char;
                      const isAvailable = ['frog', 'cat', 'dog', 'duck'].includes(char as Character);
                      return (
                        <button
                          key={char}
                          onClick={() => isAvailable && handleCharacterSelect(char as Character)}
                          disabled={!isAvailable}
                          className="bg-[#ffffff] h-10 relative rounded-lg shrink-0"
                          data-name="Button"
                        >
                          <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip px-8 py-2 relative">
                            <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
                              <p className="block leading-[20px] whitespace-pre capitalize">{char}</p>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className={`absolute border border-solid inset-0 pointer-events-none rounded-lg ${
                              isSelected 
                                ? 'border-neutral-400 shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'
                                : 'border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {mode === 'focus' ? (
        <button 
          onClick={onBreak}
          className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
        >
          <div className="bg-[#ffffff] relative rounded-[100px] shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0">
                <div
                  className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-left text-nowrap tracking-[0.15px]"
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    color: theme.accent 
                  }}
                >
                  <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">Break</p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
              style={{ borderColor: theme.accent }}
            />
          </div>
        </button>
      ) : (
        <button 
          onClick={onFocus}
          className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
        >
          <div className="bg-[#ffffff] relative rounded-[100px] shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0">
                <div
                  className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-left text-nowrap tracking-[0.15px]"
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    color: theme.accent 
                  }}
                >
                  <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">Focus</p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
              style={{ borderColor: theme.accent }}
            />
          </div>
        </button>
      )}

      <button 
        onClick={onReset}
        className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      >
        <div className="bg-[#ffffff] relative rounded-[100px] shrink-0">
          <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0">
              <svg className="relative shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill={theme.accent} />
              </svg>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
            style={{ borderColor: theme.accent }}
          />
        </div>
      </button>

      <button 
        onClick={timerState === 'running' ? onPause : onStart}
        className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      >
        <div 
          className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0"
          style={{ backgroundColor: theme.accent }}
        >
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative shrink-0">
            <svg className="relative shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              {timerState === 'running' ? (
                <>
                  <rect x="8" y="5" width="2" height="14" fill="white" />
                  <rect x="14" y="5" width="2" height="14" fill="white" />
                </>
              ) : (
                <path d="M8 19V5L19 12L8 19Z" fill="white" />
              )}
            </svg>
            <div
              className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[0.15px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
                {timerState === 'running' ? 'Pause' : 'Start'}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

// Create a soft alarm sound using Web Audio API
const playAlarm = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a gentle bell-like sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Soft, pleasant frequency
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    // Gentle fade-in and fade-out
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);
  } catch (error) {
    // Fallback: just use console.log if Web Audio API fails
    console.log('Timer completed!');
  }
};

export default function App() {
  const [character, setCharacter] = useState<Character>('frog');
  const [mode, setMode] = useState<Mode>('focus');
  const [time, setTime] = useState(presets.focus);
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = themes[character];

  useEffect(() => {
    if (timerState !== 'running') return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          // Timer completed - play alarm, switch modes, and stop
          playAlarm();
          setTimerState('idle');
          
          // Auto-switch to the opposite mode
          const newMode = mode === 'focus' ? 'break' : 'focus';
          setMode(newMode);
          
          // Set the new mode's preset time
          return presets[newMode];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerState, mode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
    };

    const handlePageBlur = () => {
      setMousePos({ x: 0, y: 0 });
    };

    // Track mouse movement globally across the entire page
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('blur', handlePageBlur);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('blur', handlePageBlur);
    };
  }, [character]);

  const handleStart = useCallback(() => setTimerState('running'), []);
  const handlePause = useCallback(() => setTimerState('paused'), []);
  
  const handleReset = useCallback(() => {
    setTimerState('idle');
    setTime(presets[mode]);
  }, [mode]);

  const handleBreak = useCallback(() => {
    setMode('break');
    setTime(presets.break);
    setTimerState('idle');
  }, []);

  const handleFocus = useCallback(() => {
    setMode('focus');
    setTime(presets.focus);
    setTimerState('idle');
  }, []);

  const handleCharacterChange = useCallback((newCharacter: Character) => {
    setCharacter(newCharacter);
  }, []);

  return (
    <div 
      className="relative size-full flex items-center justify-center cursor-none desktop:cursor-none"
      style={{ backgroundColor: theme.background }}
    >
      <CustomCursor />
      <div className="flex flex-col gap-8 items-center justify-center min-h-screen py-8 px-4">
        <Timer time={time} mode={mode} theme={theme} />
        <CharacterCard character={character} mousePos={mousePos} cardRef={cardRef} />
        <Controls
          timerState={timerState}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          onBreak={handleBreak}
          onFocus={handleFocus}
          theme={theme}
          character={character}
          onCharacterChange={handleCharacterChange}
          mode={mode}
        />
      </div>
    </div>
  );
}