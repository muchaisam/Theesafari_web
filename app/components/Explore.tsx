import React from "react";
import Image from "next/image";

const Explore: React.FC = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold sm:text-3xl">Unearth Kenya&apos;s Hidden Treasures</h2>

                    <p className="mx-auto mt-4 text-gray-500">
                        Step off the well-trodden path and discover the magic of Kenya&apos;s hidden gems. From secret
                        beaches and hidden waterfalls to vibrant local markets and cultural festivals, let us guide you
                        to the authentic experiences that make Kenya truly unforgettable.
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <a href="#" className="group relative block">
                            <Image
                                src="/cereal.webp"
                                alt="about placeholder alt text"
                                width={400}
                                height={400}
                                className="aspect-square rounded-lg w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">A Sensory Feast</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
              Explore Now
            </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group relative block">
                            <Image
                                src="/waterfall.webp"
                                alt="about placeholder alt text"
                                width={400}
                                height={400}
                                className="aspect-square w-full rounded-t-lg object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Cultural Encounters: Embrace
                                    Traditions</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
              Explore Now
            </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group relative block">
                            <Image
                                src="/waterfall.webp"
                                alt="about placeholder alt text"
                                width={400}
                                height={400}
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Wildlife Adventures:
                                    Witness Nature&apos;s Wonders</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
              Explore Now
            </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}


export default Explore;