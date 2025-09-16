import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer | UI/UX Designer | QA Tester | IoT Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Foisal Arefin</span>, a
                dedicated Computer Science student and versatile full-stack
                developer with expertise in JavaScript, PHP, and modern
                front-end frameworks. I specialize in designing seamless web
                applications, creating intuitive UI/UX interfaces, and
                developing innovative prototypes that merge functionality with
                aesthetic appeal.
              </p>

              <p className="text-white">
                My skills extend to database management, manual testing, and
                agile project tracking using Jira. I have in-depth knowledge of
                networking concepts, Cisco Packet Tracer, and IoT-based device
                development with Arduino, allowing me to tackle complex
                technical challenges and deliver scalable solutions.
              </p>

              <p className="text-white">
                With experience in team leadership, remote collaboration, and
                international client communications, I am committed to
                delivering projects on time with precision and excellence. I
                continuously seek opportunities to innovate, learn, and push the
                boundaries of technology.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white italic">
                    “Driven by curiosity and passion, I blend creativity with
                    technology to craft solutions that leave a lasting impact.
                    From front-end design to IoT innovations, I am committed to
                    excellence in every line of code.”
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Foisal Arefin
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src="/OwnLogo.png" // public ফোল্ডার থেকে লোড হচ্ছে
                        alt="Foisal Logo"
                        height="100"
                        width="auto"
                      />

                      <span className="text-white">Portfolio & Projects</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
