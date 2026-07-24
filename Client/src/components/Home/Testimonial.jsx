import Badge from "./Badge";

const Testimonial = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@briar_tech",
      text: "ResuCraft transformed my job hunt! The AI suggestions helped me land my dream role as a Senior Engineer within 2 weeks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averydesigns",
      text: "The ATS scanning feature is a lifesaver. I finally stopped getting auto-rejected and actually got to speak with recruiters.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordandev",
      text: "I love the live preview and customizer. It was so incredibly easy to tailor my resume for different company cultures.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Taylor Reed",
      handle: "@taylor_pm",
      text: "The AI bullet optimizer took my basic task lists and turned them into powerful, metric-driven accomplishments. Highly recommend!",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-2xl mx-4 shadow-lg border border-neutral-800/60 bg-neutral-900/30 backdrop-blur-md hover:bg-neutral-900/60 hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.05)] transition-all duration-300 w-80 shrink-0 group">
      <div className="flex gap-3 items-center">
        <img
          className="size-12 rounded-full border border-neutral-700/50 group-hover:border-green-500/50 transition-colors"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="text-neutral-100 font-semibold">{card.name}</p>
            <svg
              className="fill-green-500"
              width="14"
              height="14"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
              />
            </svg>
          </div>
          <span className="text-[11px] text-green-400 font-medium">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
        "{card.text}"
      </p>
    </div>
  );

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 35s linear infinite;
            }
            .marquee-inner:hover {
                animation-play-state: paused;
            }

            .marquee-reverse {
                animation-direction: reverse;
                animation-duration: 40s;
            }
        `}</style>

      <div id="testimonial" className="bg-black w-full py-24 lg:py-32 overflow-hidden">
        <div className="flex flex-col items-center mb-12 relative z-10 px-4">
          <Badge text="Loved by users" />
          <h2 className="text-transparent bg-linear-to-r bg-clip-text from-neutral-200 via-neutral-100 to-neutral-400 mt-5 text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl tracking-tight leading-[1.15] text-center">
            Assisting professionals in achieving their career aspirations.
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed mt-4 text-center">
            Empower your career journey with seamless AI-driven resume building and smart job-matching. See what our users have to say.
          </p>
        </div>
        
        {/* Glow effect behind the marquees */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 bg-green-500/5 rounded-[100%] blur-[80px] pointer-events-none"></div>

          <div className="marquee-row w-full mx-auto max-w-[1400px] overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-linear-to-r from-black via-black/80 to-transparent"></div>
            <div className="marquee-inner flex transform-gpu min-w-[200%] pt-6 pb-4">
              {[...cardsData, ...cardsData].map((card, index) => (
                <CreateCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-linear-to-l from-black via-black/80 to-transparent"></div>
          </div>

          <div className="marquee-row w-full mx-auto max-w-[1400px] overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-linear-to-r from-black via-black/80 to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-6">
              {[...cardsData, ...cardsData].reverse().map((card, index) => (
                <CreateCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-linear-to-l from-black via-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
