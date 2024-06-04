import React from 'react';
import Image from "next/image";

const CTA: React.FC = () => {
    return (

        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                                volutpat quisque ut interdum tincidunt duis.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Download the android app today!
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <Image
                            width={640}
                            height={480}
                            alt=""
                            src="/waterfall.webp"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <Image
                            width={640}
                            height={480}
                            alt=""
                            src="/nbo.webp"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>


    );
}

export default CTA;