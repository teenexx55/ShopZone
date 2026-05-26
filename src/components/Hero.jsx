import heroImg from "../assets/Hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="flex flex-1 flex-col scroll-mt-16 px-5 pt-4 pb-6 md:px-6 md:pt-5 md:pb-8">
      <div className="relative mx-auto w-full max-w-7xl min-h-[calc(100dvh-7rem)] overflow-hidden rounded-3xl shadow-[0_16px_48px_-12px_rgba(40,70,40,0.25)]">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#d4e6d4]/90 via-[#d4e6d4]/25 at-[45%] to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex h-full min-h-[calc(100dvh-7rem)] items-end p-8 md:p-12 lg:p-14">
          <div className="max-w-xl pb-2">
            <h2 className="text-5xl font-bold tracking-tight text-[#1a2e1a] md:text-6xl lg:text-7xl">
              ShopZone
            </h2>
            <p className="mt-4 max-w-md text-lg text-[#3a4a3a] md:text-xl">
              Find everything you need, all at one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
