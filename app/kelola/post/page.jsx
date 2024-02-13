import MainLayout from "@/components/main-layout";
import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Page() {
  return (
    <MainLayout>
      <section className="w-full px-4 py-2">
        <h1 className="mb-5 text-xl font-semibold">Kelola Postingan</h1>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <article
                key={index}
                className="rounded-lg border bg-white px-4 py-2 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2">
                  <PhotoIcon width={24} height={24} />
                  <p className="text-sm">Jumlah Postingan</p>
                </div>
                <h1 className="text-3xl font-medium">200</h1>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
