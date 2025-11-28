import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-szhdw9jda8";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Only add mouse tracking on non-touch devices
    if (!isTouch) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouch]);

  // Don't render custom cursor on touch devices
  if (isTouch) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999] will-change-transform"
      style={{
        left: mousePos.x - 20, // Center horizontally (40px / 2)
        top: mousePos.y - 8,   // Position hotspot at head tip (top of ladybug)
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
      }}
    >
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 94 94" 
        fill="none"
        className="drop-shadow-sm"
      >
        <g id="Custom mouse">
          <g id="Group 16">
            <circle cx="48.6868" cy="48.687" fill="#3F3228" id="Ellipse 89" r="36" />
            <g filter="url(#filter0_g_18_36)" id="Ellipse 90">
              <mask fill="white" id="path-2-inside-1_18_36">
                <path d={svgPaths.p1abb6500} />
              </mask>
              <path d={svgPaths.p1abb6500} fill="#E37C56" />
              <path d={svgPaths.p12378180} fill="#E26E4A" mask="url(#path-2-inside-1_18_36)" />
            </g>
            <g filter="url(#filter1_g_18_36)" id="Ellipse 92">
              <circle cx="66.3351" cy="25.8811" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p3aeab600} fill="#3F3228" />
            </g>
            <g filter="url(#filter2_g_18_36)" id="Ellipse 95">
              <circle cx="53.8311" cy="25.8811" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p7da2900} fill="#3F3228" />
            </g>
            <g filter="url(#filter3_g_18_36)" id="Ellipse 102">
              <circle cx="53.8311" cy="15.5837" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p35c6d680} fill="#3F3228" />
            </g>
            <g filter="url(#filter4_g_18_36)" id="Ellipse 93">
              <circle cx="66.3351" cy="39.8562" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p3e60b600} fill="#3F3228" />
            </g>
            <g filter="url(#filter5_g_18_36)" id="Ellipse 94">
              <circle cx="78.1036" cy="39.8562" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p25db7940} fill="#3F3228" />
            </g>
            <g filter="url(#filter6_g_18_36)" id="Ellipse 96">
              <circle cx="32.5008" cy="56.0378" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p80a2c00} fill="#3F3228" />
            </g>
            <g filter="url(#filter7_g_18_36)" id="Ellipse 97">
              <circle cx="19.9967" cy="56.0378" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p7b16100} fill="#3F3228" />
            </g>
            <g filter="url(#filter8_g_18_36)" id="Ellipse 98">
              <circle cx="44.2692" cy="61.9221" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p37b1cb00} fill="#3F3228" />
            </g>
            <g filter="url(#filter9_g_18_36)" id="Ellipse 101">
              <circle cx="30.2942" cy="69.2774" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.pbc77a80} fill="#3F3228" />
            </g>
            <g filter="url(#filter10_g_18_36)" id="Ellipse 100">
              <circle cx="56.7732" cy="67.0708" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p27540b00} fill="#3F3228" />
            </g>
            <g filter="url(#filter11_g_18_36)" id="Ellipse 99">
              <circle cx="46.4758" cy="76.6327" fill="#3F3228" r="2.57436" />
              <path d={svgPaths.p761fe80} fill="#3F3228" />
            </g>
          </g>
          <path d={svgPaths.p3a7d3500} fill="#3F3228" id="Ellipse 91" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="77.7152"
            id="filter0_g_18_36"
            width="77.7152"
            x="7.98603"
            y="7.98599"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.76923078298568726 0.76923078298568726"
              numOctaves="3"
              seed="7588"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.2200000286102295"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter1_g_18_36"
            width="7.79134"
            x="62.5987"
            y="22.1626"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter2_g_18_36"
            width="7.79134"
            x="50.0947"
            y="22.1626"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter3_g_18_36"
            width="7.79134"
            x="50.0947"
            y="11.8652"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter4_g_18_36"
            width="7.79134"
            x="62.5987"
            y="36.1377"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter5_g_18_36"
            width="7.79133"
            x="74.3672"
            y="36.1377"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter6_g_18_36"
            width="7.79133"
            x="28.7643"
            y="52.3194"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter7_g_18_36"
            width="7.79133"
            x="16.2603"
            y="52.3194"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter8_g_18_36"
            width="7.79134"
            x="40.5328"
            y="58.2036"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter9_g_18_36"
            width="7.79133"
            x="26.5577"
            y="65.5589"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter10_g_18_36"
            width="7.79134"
            x="53.0368"
            y="63.3523"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.50659"
            id="filter11_g_18_36"
            width="7.79134"
            x="42.7394"
            y="72.9142"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence
              baseFrequency="0.51020407676696777 0.51020407676696777"
              numOctaves="3"
              seed="6677"
              type="fractalNoise"
            />
            <feDisplacementMap
              height="100%"
              in="shape"
              result="displacedImage"
              scale="1.9800000190734863"
              width="100%"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMerge result="effect1_texture_18_36">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}