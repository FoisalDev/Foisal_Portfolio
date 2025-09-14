import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer | Frontend Developer | UI/UX Designer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m <span className="font-bold">Foisal Arefin</span>, a
                dedicated software engineer with expertise in frontend
                development, UI/UX design, and database management. I specialize
                in creating clean, responsive, and user-friendly web
                applications that combine aesthetic design with high
                performance.
              </p>
              <p className="text-white">
                My skills include prototyping, building interactive interfaces,
                and managing robust backend systems with databases efficiently.
                I focus on delivering scalable solutions while maintaining an
                intuitive and engaging user experience.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am passionate about innovation and continuous learning. My
                    goal is to contribute to impactful projects, collaborate
                    with forward-thinking teams, and provide high-quality web
                    solutions that exceed expectations.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Foisal Arefin
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Professional Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Portfolio</span>
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
