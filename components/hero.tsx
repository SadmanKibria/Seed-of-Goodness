import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center bg-black overflow-hidden">
      <Image
        src="/seedpics/1.png" // Adjust the path based on where you put the image
        alt="Seed of Goodness - Helping Gaza"
        fill
        className="object-cover object-center opacity-70"
        priority
      />
      <div className="absolute z-10 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bringing Hope to Gaza
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow">
          Providing food, water, and medical aid to those in urgent need.
        </p>
        <Link
          href="/donate"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}
