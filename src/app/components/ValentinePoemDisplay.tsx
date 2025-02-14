"use client";

import React from "react";
import { useEffect } from "react";

const ValentinePoemDisplay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "scale-100",
              "translate-y-0"
            );
            entry.target.classList.remove(
              "opacity-0",
              "scale-90",
              "translate-y-16"
            );
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    document.querySelectorAll(".stanza").forEach((stanza) => {
      observer.observe(stanza);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-50 relative p-4 sm:p-8">
      {/* Fixed Border with Hearts */}
      <div className="fixed inset-0 pointer-events-none p-4 sm:p-8">
        <div className="border-4 border-red-200 rounded-lg h-full relative">
          {/* Top Left Heart */}
          <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-pink-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-400 transform -translate-y-1/2 -translate-x-1/2 sm:scale-125"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>

          {/* Top Right Heart */}
          <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-pink-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-400 transform -translate-y-1/2 translate-x-1/2 sm:scale-125"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>

          {/* Bottom Left Heart */}
          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-pink-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-400 transform translate-y-1/2 -translate-x-1/2 sm:scale-125"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>

          {/* Bottom Right Heart */}
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-pink-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-400 transform translate-y-1/2 translate-x-1/2 sm:scale-125"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrollable Content Container */}
      <div
        className="h-screen overflow-y-auto px-4 sm:px-8 py-8 sm:py-12 no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide webkit scrollbar */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-24 sm:space-y-48 font-serif text-gray-800">
            {/* First stanza */}
            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Tales of love
                <br />
                Are tales galore,
                <br />
                Like stars in the sky
                <br />
                That plenty adore.
                <br />
                How beautifully they shine,
                <br />
                How eloquent they sound,
                <br />
                Yet amidst it all I stand,
                <br />
                Dumbfound.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Of passionate love many a tale recount,
                <br />
                Love so fiery it chars,
                <br />
                Love like crimson sky,
                <br />
                Love that is paramount.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                A tale once told,
                <br />
                A story of old,
                <br />
                Of a man and a woman,
                <br />
                Whose demise their love foretold.
                <br />
                Their lineage they defied,
                <br />
                For the flame of love they cried,
                <br />
                Yet, their happiness hast fate denied.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Of passionate love,
                <br />
                This tale resounds,
                <br />
                Of tragic love the fates bestow,
                <br />
                And never in life,
                <br />
                Has there ever been,
                <br />
                "A tale of more woe."
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Is love but mere embers cold?
                <br />
                Or passion a flame that dies untold?
                <br />
                Is love so tragic?
                <br />
                Must I passion forego?
                <br />
                Is all love naught but
                <br />
                An ocean of sorrow?
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Nay, claim the poets,
                <br />
                For love is the seed
                <br />
                That roots itself deep,
                <br />
                Through trial and need.
                <br />
                Not all love is fire,
                <br />
                Or fleeting desire,
                <br />
                Some love is the ember
                <br />
                With which lovers soar higher.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Like Penelope's vigil
                <br />
                Through long, sleepless years,
                <br />
                Love waits not in silence,
                <br />
                But through wisdom and tears.
                <br />
                Not bound by mere longing,
                <br />
                Nor fleeting embrace,
                <br />
                But woven through time
                <br />
                In patience and grace.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                For love is the seed
                <br />
                From which true hearts grow,
                <br />
                Not swept by the tempest,
                <br />
                But steady in flow.
                <br />
                Love not only nurtures,
                <br />
                Nor burns with desire,
                <br />
                But walks through the shadows,
                <br />
                Through ruin and fire.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                For love, some suffer,
                <br />
                For love, some weep,
                <br />
                For love, some descend
                <br />
                To the darkness deep.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                A song once played in sorrow's embrace,
                <br />
                A melody woven through time and space.
                <br />
                Orpheus sang, his heart laid bare,
                <br />
                For love, he braved the Underworld's stare.
                <br />
                Through caverns vast and halls of stone,
                <br />
                He walked for love, yet walked alone.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                The fates stood silent,
                <br />
                The gods took heed,
                <br />
                But love must pay its toll,
                <br />
                And love must bleed.
                <br />
                With every step did his heart yearn
                <br />
                To see her face, but he must not turn.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                Alas! Orpheus turned,
                <br />
                He turned too soon,
                <br />
                And her grave was sealed,
                <br />
                Her fate was doomed.
                <br />
                Oh love, that bends, that breaks, that dies,
                <br />
                Yet lingers still in mournful cries.
                <br />
                For love, he lost, for love, he tried,
                <br />
                For love, he sang, and for love, he died.
              </p>
            </div>

            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8">
              <p className="text-xl sm:text-3xl leading-relaxed text-center">
                I read of love in tales and echoes of lore,
                <br />
                Yet none could teach what the heart implores.
                <br />
                Not in tragedy, nor passion's decree,
                <br />
                Could I grasp what love meant to me.
              </p>
            </div>

            {/* Final stanza with special styling */}
            <div className="stanza opacity-0 scale-90 translate-y-16 transition-all duration-1000 ease-out px-2 sm:px-8 mb-24">
              <p className="text-2xl sm:text-4xl font-medium italic text-red-800 text-center">
                Oblivious, I've been,
                <br />
                To what love means and what hearts plea,
                <br />
                Until love itself, in you, found me.
                <br />
                My pillar had come, all set in stone,
                <br />
                And my tale is true—
                <br />
                My tale is you.
              </p>
            </div>
            {/* Add extra padding at the bottom to ensure scrollability */}
            <div className="h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentinePoemDisplay;
