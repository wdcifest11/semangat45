<template>
  <div class="bg-white -z-10 absolute">
    <div>
      <main class="mx-auto max-w-7xl">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6 bg-gradient-to-r from-[#DAA520]/50 to-[#123B32]/50"
        >
          <h5 class="text-sm tracking-tight text-[#212121] px-12 md:px-28 lg:px-32">
            <RouterLink to="/article" class="hover:text-gray-600">Artikel</RouterLink> /
            {{ article?.title || "Artikel Tidak Ditemukan" }}
          </h5>
        </div>

        <!-- Article Content -->
        <div class="lg:col-span-3">
          <div class="bg-white">
            <div
              class="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl px-12 md:px-28 lg:px-32 pt-3 pb-12 md:pb-16 lg:pb-21"
            >
              <div v-if="article">
                <div
                  class="flex items-baseline justify-between border-b border-gray-200 md:pt-9 pb-6"
                >
                  <h1 class="text-4xl font-bold tracking-tight text-[#212121]">
                    {{ article.title }}
                  </h1>
                </div>
                <p class="text-gray-500 text-sm mb-2 pb-5">{{ article.date }}</p>
                <img
                  :src="article.imageSrc"
                  :alt="article.title"
                  class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-72"
                />
                <p class="text-gray-700 leading-relaxed mt-4">{{ article.par1 }}</p>
                <p class="text-gray-700 leading-relaxed mt-4">{{ article.par2 }}</p>
                <p class="text-gray-700 leading-relaxed mt-4">{{ article.par3 }}</p>
                <p class="text-gray-700 leading-relaxed mt-4">{{ article.par4 }}</p>
                <h5 class="text-gray-700 font-semibold leading-relaxed mt-4">
                  {{ article.subtitle }}
                </h5>
                <ol class="list-decimal pl-6 mt-4 text-gray-700">
                  <li v-for="(item, index) in article.list" :key="index">
                    {{ item }}
                  </li>
                </ol>
                <p class="text-gray-700 leading-relaxed mt-4">{{ article.ending }}</p>
              </div>
              <div v-else class="text-center text-gray-500">Artikel tidak ditemukan...</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import dress from "../assets/ProductsImage/dress-2583113_1280.jpg";
import fastfashion from "../assets/ProductsImage/fast fashion.jpg";
import closeup from "../assets/closeup-bea-ch-shore-washed-up-with-garbage.jpg";

const articles = ref([
  {
    id: 1,
    title: "10 Tips Merawat Pakaian Agar Tetap Awet",
    date: "2025-03-01",
    imageSrc: dress,
    par1: "Merawat pakaian adalah salah satu cara menyayangi pakaian. Pakaian yang dirawat dengan baik akan memperpanjang umur pakaian dan juga mempertahankan penampilanya. Pakaian yang tidak dirawat dengan baik, seiring waktu akan menurun kualitasnya seperti warna yang memudar, kain yang mudah melar bahkan bisa rusak seperti berlubang dan lain sebagainya. Untuk menghindari hal-hal yang tidak diinginkan, pentingnya melakukan perawatan pakaian. Perawatan yang tepat akan menjaga pakaian nampak seperti baru. Banyak cara yang dapat dilakukan agar pakaian dapat awet dan terjaga kualitasnya.",
    subtitle: "Cara Merawat Pakaian Agar Tetap Awet",
    list: [
      "Pisahkan pakaian berdasarkan warna saat mencuci",
      "Balik pakaian ke luar saat menjemur di bawah terik matahari",
      "Perhatikan label pakaian saat mencuci",
      "Perhatikan suhu setrika sesuai jenis kain pakaian",
      "Jangan menyikat pakaian terlalu keras dan sesuaikan kondisi kain",
      "Hindari pengeringan di bawah terik matahari langsung secara berlebihan",
      "Cuci pakaian dengan suhu rendah supaya kain tetap lembut dan menjaga warna pakaian",
      "pilih detergen yang tepat dan ramah lingkungan",
      "Gunakan hanger saat menjemur pakaian",
      "Gunakan pelembut pakaian agar tekstur kain tetap aman",
    ],
    ending:
      "Itu dia cara merawat pakaian agar tetap awet. Pakaian yang awet juga berdampak pada lingkungan dari sampah textil. Semakin awet masa pakaian, semakin sedikit pakaian yang terbuang. Untuk itu mari jaga pakaian untuk masa depan yang lebih baik.",
  },
  {
    id: 2,
    title: "Fenomena Fast Fashion, Hingga Kerusakan Lingkungan",
    date: "2025-03-02",
    imageSrc: fastfashion,
    par1: "Fast fashion adalah perilaku dlam industri fasyen yang memproduksi produk dngan cepat dan relatif terjangkau di semua kalangan atau murah. Produk fast fashion umumnya ditandai dengan model model yang diikuti tren terkini dan harganya murah.",
    par2: " Brand brand fasyen yang menerapkan metode ini akan menghadirkan kolekai terbarunya di hadapan konsumen, pergantian mode selalu cepat sehingga produk produknya juga tersedia dalam waktu yang cepat. Produksi ini menjadi tak terkendali kemudian dijual di hadapan konsumen dengan harga murah.",
    par3: "Fenomena tersebut sangat menguntungkan produsen karen pihak konsumen akan terus berganti ganti gaya mengikuti tren fasyen yang ada dalam waktu relatif singkat. Perubahan tren ini membuat penampilan mereka tak membosankan. ",
    par4: "Saat ini,maraknya fast fashion bikan lagi menjadi hal yang asing, sebab semakin berkembangnya zaman, teknologi yang ada juga semakin cepat. Toko-toko online semakin marak. Masyarakat sebagai konsumen pun dapat mendapatkan pakaian dengan mudah, murah, dan cepat.",
  },
  {
    id: 3,
    title: "Fenomena Fast Fashion, Lingkungan Menjadi Rusak",
    date: "2025-03-02",
    imageSrc: closeup,
    par1: "PT LG Electronics Indonesia (LG)  memulai kampanye Better Life When We Recycle (Kamis, 27/2). kampanye ini bertujuan mengajak masyarakat mengumpulkan yang tak layak pakai untuk didaur ulang. Kampanye ini menjadi upaya memperluas kesadaran akan keberadaan dan pengelolaan fabric waste di Indonesia.",
    par2: "Menurut Ha Sang-chul, Presiden LG Electronics di Indonesia, fabric waste yang tak dapat terdekomposisi dengan baik menjadi tantangan bagi keberlangusngan lingkungan, terlebih lagi kita tumbuh berssama gaya hidup modern. Upaya kampanye ini menghadirkan drop box sebagai upaya mengumpulkan pakaian yang tak terpakai dari masyarakat, bertempat di 3 kota besar di Indonesia yakni Jakarta, Surabaya, dan Semarang. total berjumlah 4 buah dengan 2 box berada di Jakarta.",
    par3: "Rata-rata setiap orang di Indonesia mebuang sampah textil sebanyak 30kg pertahun. Sedangkan hanya 300.000 ton limbah tekstil yang bisa didaur ulang setiap tahunya, menurut Christina Harjanto, Co Founder EcoTouch.",
    par4: "Ia juga menambahkan, bahwa sampah tekstil adalah sampah yang sulit terurai dan lama prosesnya. Penumpukan sampah di TPA umumnya juga tekstil, terutama tekstil dari kain sintetis. Hal ini menjadi Tantangan bagi lingkungan.",
  },
  {
    id: 4,
    title: "Fenomena Fast Fashion, Lingkungan Menjadi Rusak",
    date: "2025-03-02",
    imageSrc: fastfashion,
    content:
      "Dalam Tinkerlust Impact Report 2022, terdapat 63,46 persen warga Indonesia yang lebih suka membeli produk fast fashion karena mudah dan fashionable. Berbagai tren fashion silih berganti hadir di tengah masyarakat. Adanya media sosial menyebabkan persebaran mode-mode baru pakaian berlangsung secara cepat. Akibatnya, masyarakat melakukan belanja pakaian secara masif untuk dapat memenuhi hasrat mengikuti tren.",
  },
  {
    id: 5,
    title: "Fenomena Fast Fashion, Lingkungan Menjadi Rusak",
    date: "2025-03-02",
    imageSrc: fastfashion,
    content:
      "Dalam Tinkerlust Impact Report 2022, terdapat 63,46 persen warga Indonesia yang lebih suka membeli produk fast fashion karena mudah dan fashionable. Berbagai tren fashion silih berganti hadir di tengah masyarakat. Adanya media sosial menyebabkan persebaran mode-mode baru pakaian berlangsung secara cepat. Akibatnya, masyarakat melakukan belanja pakaian secara masif untuk dapat memenuhi hasrat mengikuti tren.",
  },
  {
    id: 6,
    title: "Fenomena Fast Fashion, Lingkungan Menjadi Rusak",
    date: "2025-03-02",
    imageSrc: fastfashion,
    content:
      "Dalam Tinkerlust Impact Report 2022, terdapat 63,46 persen warga Indonesia yang lebih suka membeli produk fast fashion karena mudah dan fashionable. Berbagai tren fashion silih berganti hadir di tengah masyarakat. Adanya media sosial menyebabkan persebaran mode-mode baru pakaian berlangsung secara cepat. Akibatnya, masyarakat melakukan belanja pakaian secara masif untuk dapat memenuhi hasrat mengikuti tren.",
  },
]);

const route = useRoute();
const article = computed(
  () => articles.value.find((a) => a.id === Number(route.params.id)) || null,
);
</script>
