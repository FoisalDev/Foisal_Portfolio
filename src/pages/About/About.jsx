import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer | UI/UX Designer | Tester | Innovator
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
                passionate Computer Science student and full-stack developer
                with expertise in JavaScript, PHP, and front-end technologies. I
                specialize in creating highly interactive web solutions,
                intuitive UI/UX designs, and innovative prototypes. My goal is
                to deliver seamless and efficient web applications that enhance
                user experience.
              </p>

              <p className="text-white">
                Beyond development, I am skilled in database management, manual
                testing, and project tracking using platforms like Jira. With
                experience in team leadership, remote collaboration, and
                international client communication, I ensure projects are
                delivered on time with high quality standards.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a lifelong learner and innovator, constantly upgrading
                    my technical skills and exploring new tools to stay ahead in
                    software development. My expertise spans front-end design,
                    prototyping, back-end development, and quality assurance.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Foisal Arefin
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
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
