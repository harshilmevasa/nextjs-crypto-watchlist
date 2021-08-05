import Head from "next/head";
import Link from "next/link";
const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>Crypto Watchlist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <svg
              width="150px"
              height="150px"
              viewBox="0 0 256 425"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="-352.925786%"
                  x2="50%"
                  y2="96.7175267%"
                  id="linearGradient-1"
                >
                  <stop stopcolor="#002E3B" offset="0%"></stop>
                  <stop stopcolor="#002639" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="50%"
                  y1="-2.80786187%"
                  x2="50%"
                  y2="428.758892%"
                  id="linearGradient-2"
                >
                  <stop stopcolor="#002E3B" offset="0%"></stop>
                  <stop stopcolor="#002639" offset="100%"></stop>
                </linearGradient>
                <radialGradient
                  cx="16.4234038%"
                  cy="142.999709%"
                  fx="16.4234038%"
                  fy="142.999709%"
                  r="295.57111%"
                  id="radialGradient-3"
                >
                  <stop stopcolor="#00BC85" offset="0%"></stop>
                  <stop stopcolor="#149D91" offset="100%"></stop>
                </radialGradient>
                <radialGradient
                  cx="16.423338%"
                  cy="-42.999755%"
                  fx="16.423338%"
                  fy="-42.999755%"
                  r="357.003966%"
                  id="radialGradient-4"
                >
                  <stop stopcolor="#00BC85" offset="0%"></stop>
                  <stop stopcolor="#149D91" offset="100%"></stop>
                </radialGradient>
                <radialGradient
                  cx="11.4670327%"
                  cy="-40.4580495%"
                  fx="11.4670327%"
                  fy="-40.4580495%"
                  r="343.189366%"
                  id="radialGradient-5"
                >
                  <stop stopcolor="#004473" offset="0%"></stop>
                  <stop stopcolor="#00345F" offset="100%"></stop>
                </radialGradient>
              </defs>
              <g>
                <path
                  d="M65.6992339,330.300644 L0.107733463,362.384436 L127.400289,424.384842 L255.039336,362.18981 L189.28052,329.651265 L127.352045,360.40471 L65.6992339,330.300644 Z"
                  fill="url(#linearGradient-1)"
                ></path>
                <path
                  d="M57.6019991,98.1748765 L57.6019991,98.1541795 L127.531267,64.0476413 L197.46571,98.1541795 L255.003891,62.1986373 L127.484698,0 L0,62.1796642 L0,62.2348584 L57.5537042,98.1990237 L57.6019991,98.1748765 L57.6019991,98.1748765 Z"
                  fill="url(#linearGradient-2)"
                ></path>
                <path
                  d="M0.15618046,298.428426 L63.071162,267.624645 L127.784793,299.667263 L0.15618046,362.461971 L0.15618046,298.428426 Z"
                  fill="url(#radialGradient-3)"
                ></path>
                <path
                  d="M196.677541,99.4103235 C196.67754,132.999495 196.677539,200.177839 196.677539,200.177839 L126.336262,234.601641 L191.022434,266.940614 L254.000917,236.143726 L254.00091,62.1907831 L196.677541,98.1665853 L196.677541,99.4103235 Z"
                  fill="url(#radialGradient-4)"
                ></path>
                <path
                  d="M255.003891,298.216498 L57.5889764,199.96591 L57.5889774,98.1815418 L1.42108547e-14,62.2302408 L1.42108547e-14,63.1375243 L1.42108547e-14,235.931797 L255.003891,362.253488 L255.003891,298.216498 Z"
                  fill="url(#radialGradient-5)"
                ></path>
              </g>
            </svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
