// components/PacManLoader.jsx

export default function PacManLoader() {
  return (
    <div className="pacman-loader flex justify-center items-center min-h-screen bg-[#022C43]">
      <div className="pacman">
        <div></div><div></div><div></div><div></div><div></div>
      </div>

      <style jsx>{`
        .pacman {
          position: relative;
          width: 0;
          height: 0;
        }
        .pacman > div {
          width: 20px;
          height: 20px;
          background: yellow;
          border-radius: 50%;
          position: absolute;
          animation: pacman-dot 1s infinite linear;
        }
        .pacman > div:nth-child(1) {
          background: transparent;
          border: 25px solid yellow;
          border-right-color: transparent;
          border-radius: 50%;
          animation: pacman-mouth 0.5s infinite;
        }
        .pacman > div:nth-child(n+2) {
          left: 50px;
          background: #eee;
        }
        .pacman > div:nth-child(2) { animation-delay: 0.1s; }
        .pacman > div:nth-child(3) { animation-delay: 0.2s; }
        .pacman > div:nth-child(4) { animation-delay: 0.3s; }
        .pacman > div:nth-child(5) { animation-delay: 0.4s; }

        @keyframes pacman-mouth {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(44deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pacman-dot {
          0%   { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-40px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
