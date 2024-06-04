import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const About: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
      <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 1 } },
            hidden: { opacity: 0 }
          }}
      >
        <motion.div className="bg-orange-400 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div className="max-w-3xl">
            <motion.h2 className="text-3xl font-bold sm:text-4xl" initial={{y: -50}} animate={{y: 0}}
                       transition={{duration: 0.5}}>
              Discover Hidden Gems in Kenya with Our App!
            </motion.h2>
          </motion.div>

          <motion.div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <motion.img
                  alt=""
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  className="rounded-lg absolute inset-0 h-full w-full object-cover"
                  initial={{scale: 1.1}}
                  animate={{scale: 1}}
                  transition={{duration: 1}}
              />
            </motion.div>

            <motion.div className="lg:py-16">
              <motion.article className="space-y-4 text-gray-900">
                <motion.p initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>
                  Our app, Theesafari, is designed to help both locals and tourists discover the lesser-known but
                  equally
                  beautiful destinations in Kenya. Our goal is to promote sustainable tourism and local businesses by
                  bringing attention to these hidden gems.
                </motion.p>

                <motion.p initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}}
                          transition={{duration: 0.5, delay: 0.2}}>
                  Tired of the tourist traps? Yearning to experience the true heart and soul of Kenya? Theesafari is
                  your
                  guide to the unknown paths, the secret spots, and the authentic experiences that make Kenya so
                  special.
                  Discover Hidden waterfalls tucked away in lush forests
                  ,Local markets buzzing with life and unique treasures, Delicious street food stalls known only to
                  locals
                  Cultural festivals celebrating Kenya&apos;s rich heritage and Breathtaking viewpoints far from the crowds
                </motion.p>
                <ul>
                  <strong>
                    Coming Soon to the App:
                  </strong>
                </ul>

                <ul>
                  <li><strong>Personalized Itineraries:</strong> Craft your dream Kenyan adventure based on your
                    interests
                    and travel style.
                  </li>
                  <li><strong>Curated Recommendations:</strong> Access handpicked gems from trusted sources, ensuring
                    you
                    never miss out on the best Kenya has to offer.
                  </li>
                  <li><strong>Offline Access:</strong> Explore with confidence, even in remote areas without internet
                    access.
                  </li>
                  <li><strong>Local Tips & Insights:</strong> Gain valuable knowledge from Kenyan locals, unlocking
                    hidden
                    secrets and authentic experiences.
                  </li>
                </ul>

              </motion.article>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
  );
}

export default About;