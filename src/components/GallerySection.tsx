import { useState } from "react";

const galleryImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "/24.jpg",
  "/25.jpg",
  "/26.jpg",
  "/27.jpg",
  "/28.jpg",
  "/29.jpg",
  "/30.jpg",
  "/31.jpg",
  "/32.jpg",
  "/33.jpg",
  "/34.jpg",
  "/35.jpg",
  "/36.jpg",
  "/37.jpg",
  "/38.jpg",
  "/39.jpg",
  "/40.jpg",
  "/41.jpg",
  "/42.jpg",
  "/43.jpg",
  "/44.jpg",
  "/45.jpg",
  "/46.jpg",
  "/47.jpg",
  "/48.jpg",
  "/49.jpg",
  "/50.jpg",
  "/51.jpg",
  "/52.jpg",
  "/53.jpg",
  "/54.jpg",
  "/55.jpg",
  "/56.jpg",
  "/57.jpg",
  "/58.jpg",
  "/59.jpg",
  "/60.jpg",
  "/61.jpg",
  "/62.jpg",
  "/63.jpg",
  "/64.jpg",
  "/65.jpg",
  "/66.jpg",
  "/67.jpg",
];

const IMAGES_PER_PAGE = 12;

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase">
              Campus Life
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Photo Gallery
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              A glimpse into the vibrant life at ST. Global School — classrooms,
              events, sports, and celebrations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {visibleImages.map((src, i) => (
              <div
                key={src}
                className="rounded-2xl overflow-hidden group cursor-pointer relative aspect-[4/3] bg-muted"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`School photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() =>
                  setVisibleCount((c) =>
                    Math.min(c + IMAGES_PER_PAGE, galleryImages.length)
                  )
                }
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Load More Photos
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <p className="text-xs text-muted-foreground mt-2">
                Showing {visibleCount} of {galleryImages.length} photos
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex]}
            alt={`School photo ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {galleryImages.length}
          </span>
        </div>
      )}
    </>
  );
};

export default GallerySection;
