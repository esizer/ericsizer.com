import type { Component } from "solid-js";

const Logo: Component<{ class: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    {...props}
  >
    <path fill="url(#paint0_linear)" d="M0 0h512v512H0z"></path>
    <g
      style={{ "mix-blend-mode": "color-dodge" }}
      fill="#1F2937"
      filter="url(#filter0_dd)"
    >
      <path d="M267.13 178.087a8.349 8.349 0 100-16.698 8.349 8.349 0 000 16.698z"></path>
      <path d="M350.01 301.254c5.596-7.103 8.946-16.053 8.946-25.776 0-23.015-18.724-41.739-41.739-41.739v-64c0-23.015-18.724-41.739-41.738-41.739h-50.087c-17.081 0-31.79 10.318-38.244 25.044h-16.734l-14.251-14.251a8.347 8.347 0 10-11.805 11.805l10.793 10.793-10.793 10.794a8.348 8.348 0 0011.806 11.805l14.251-14.251h13.238c0 23.015 18.724 41.739 41.739 41.739h8.348v22.261h-38.957c-22.95 0-41.739 18.662-41.739 41.739 0 9.723 3.351 18.673 8.947 25.776-19.324 3.645-33.991 20.64-33.991 41.007C128 365.276 146.724 384 169.739 384H342.26c23.015 0 41.739-18.724 41.739-41.739.001-20.367-14.666-37.362-33.989-41.007zM225.392 194.783c-13.809 0-25.044-11.235-25.044-25.044 0-13.809 11.235-25.044 25.044-25.044h50.087c13.809 0 25.043 11.235 25.043 25.044v31.449c-16.33 3.328-29.223 16.22-32.551 32.551h-17.536v-30.608a8.349 8.349 0 00-8.348-8.348h-16.695zm75.129 23.696v15.261h-15.259a25.163 25.163 0 0115.259-15.261zm-57.087 31.956c-3.446 9.716-12.726 16.695-23.608 16.695-10.963 0-20.221-6.907-23.635-16.695h47.243zm-63.263 4.723c2.081 6.33 5.672 12.107 10.574 16.87 7.832 7.608 18.16 11.798 29.081 11.798 20.157 0 37.021-14.362 40.899-33.391h56.492c13.809 0 25.044 11.234 25.044 25.043s-11.235 25.043-25.044 25.043H194.783c-13.809 0-25.044-11.234-25.044-25.043 0-8.359 4.12-15.768 10.432-20.32zm152.306 62.059c-3.446 9.717-12.725 16.696-23.607 16.696-10.883 0-20.162-6.98-23.608-16.696h47.215zm-152.954 50.088c3.446-9.717 12.725-16.696 23.608-16.696 10.882 0 20.161 6.98 23.607 16.696h-47.215zm162.738 0H244.03c-3.878-19.029-20.742-33.392-40.899-33.392-19.773 0-36.367 13.825-40.653 32.314-10.279-3.12-17.783-12.681-17.783-23.966 0-13.809 11.235-25.044 25.044-25.044h98.231c3.878 19.029 20.742 33.392 40.9 33.392 19.773 0 36.367-13.825 40.653-32.314 10.278 3.12 17.782 12.682 17.782 23.966 0 13.809-11.235 25.044-25.044 25.044z"></path>
    </g>
    <defs>
      <filter
        id="filter0_dd"
        width="416"
        height="416"
        x="48"
        y="48"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="-20" dy="-20"></feOffset>
        <feGaussianBlur stdDeviation="30"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.5 0"></feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="20" dy="20"></feOffset>
        <feGaussianBlur stdDeviation="30"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="181.76"
        x2="483.495"
        y2="270.139"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7E3AED"></stop>
        <stop offset="0.988" stop-color="#4F46E5"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
