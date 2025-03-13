<template>
  <div class="bg-white -z-10 absolute">
      <main class="mx-auto max-w-7xl">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6 bg-gradient-to-r from-[#DAA520]/50 to-[#123B32]/50"
        >
          <h5 class="text-2xl font-bold tracking-tight text-[#212121] px-12 md:px-28 lg:px-32">
            Artikel Terkini
          </h5>
        </div>
        <!-- Product grid -->
        <div class="lg:col-span-3">
          <div class="bg-white">
            <div class="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl px-12 md:px-28 lg:px-32 pt-3 pb-12 md:pb-16 lg:pb-21">
              <div
                class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
              >
                <RouterLink v-for="th in Thumbnail" :key="th.id" :to="`/article/${th.id}`" class="group relative">
                  <img
                    :src="th.imageSrc"
                    :alt="th.imageAlt"
                    class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-48"
                  />
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a :href="th.href">
                          <span aria-hidden="true" class="absolute inset-0" />
                          {{ th.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">{{ th.subtitile }}</p>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
import dress from "../assets/ProductsImage/dress-2583113_1280.jpg";
import fastfashion from "../assets/ProductsImage/fast fashion.jpg";
import  closeup from "../assets/closeup-bea-ch-shore-washed-up-with-garbage.jpg";

const Thumbnail = [
  {
    id: 1,
    name: "10 Tips Merawat Pakaian Agar Tetap Awet",
    href: "#",
    imageSrc: dress,
    imageAlt: "dresss",
  },
  {
    id: 2,
    name: "Fenomena Fast Fashion, Lingkungan Menjadi Rusak",
    href: "#",
    imageSrc: fastfashion,
    imageAlt: "fast fashion"},
  {
    id: 3,
    name: "Indonesia Darurat Sampah Textil, Rata-Rata Orang Membuang Sampah 30kg Per Tahun",
    href: "#",
    imageSrc: closeup,
    imageAlt:
      "",
  },
];
</script>