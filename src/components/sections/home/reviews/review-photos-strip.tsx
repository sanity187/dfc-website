import Image from "next/image";
import type { GooglePhotoItem } from "@/lib/reviews/get-google-reviews";
import { Camera } from "lucide-react";

interface ReviewPhotosStripProps {
  photos: GooglePhotoItem[];
  title: string;
  subtitle: string;
}

export function ReviewPhotosStrip({ photos, title, subtitle }: ReviewPhotosStripProps) {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="h-4 w-4 text-secondary" aria-hidden="true" />
          <span className="text-sm font-bold text-ink">{title}</span>
        </div>
        <span className="text-xs font-semibold text-dim">{subtitle}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {photos.slice(0, 6).map((photo, idx) => (
          <div
            key={idx}
            className="group relative aspect-4/3 overflow-hidden rounded-xl border border-line bg-muted shadow-xs transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src={photo.photoUrl}
              alt={photo.authorName ? `Photo by ${photo.authorName}` : "Dallas Skydive Center dropzone photo"}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-[10px] font-bold text-white truncate">
                {photo.authorName || "Verified Jumper"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
