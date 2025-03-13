<template>
  <div class="bg-white -z-10 absolute">
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Produk Terbaru</h1>

        <div class="flex items-center">
          <Menu as="div" class="relative inline-block text-left">
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 focus:outline-hidden"
              >
                <div class="py-1">
                  <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a
                      :href="option.href"
                      :class="[
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        active ? 'bg-gray-100 outline-hidden' : '',
                        'block px-4 py-2 text-sm',
                      ]"
                      >{{ option.name }}</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>

      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <!-- Grid Produk -->
        <div class="lg:col-span-3">
          <div class="bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              >
                <RouterLink
                  :to="`/product/${product.id}`"
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="group relative"
                >
                  <img
                    :src="product.image_src"
                    :alt="product.image_alt"
                    class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                  />
                  <span
                    class="capitalize mt-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                    >{{ product.for }}</span
                  >
                  <div class="mt-2 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a :href="product.href">
                          <span aria-hidden="true" class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/vue/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [
  { name: "sewa", href: "#" },
  { name: "Dijual", href: "#" },
  { name: "Tukar Tambah", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Warna",
    options: [
      { value: "Putih", label: "Putih", checked: false },
      { value: "Emas", label: "Emas", checked: false },
      { value: "Biru Muda", label: "Biru Muda", checked: false },
      { value: "Coklat", label: "Coklat", checked: false },
      { value: "Hijau", label: "Hijau", checked: false },
      { value: "Ungu", label: "Ungu", checked: false },
    ],
  },
  {
    id: "category",
    name: "Kategori",
    options: [
      { value: "Baju", label: "Baju", checked: false },
      { value: "Celana", label: "Celana", checked: false },
      { value: "Dress", label: "Dress", checked: false },
      { value: "Rok", label: "Rok", checked: false },
      { value: "Kebaya", label: "Kebaya", checked: false },
    ],
  },
  {
    id: "size",
    name: "Ukuran",
    options: [
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      { value: "XL", label: "XL", checked: false },
      { value: "XXL", label: "XXL", checked: false },
      { value: "3XL", label: "3XL", checked: false },
    ],
  },
];

const mobileFiltersOpen = ref(false);
const route = useRoute();
const filterFor = ref(route.params.for || "");
const products = ref([]);
const loading = ref(false);
const errorMessage = ref("");

// Fungsi untuk mengambil data produk dari Laravel API
import api from "../api.js";

const getProducts = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.get("/products");

    // axios langsung mengembalikan data di response.data
    products.value = response.data;
    console.log(products);
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Gagal mengambil data produk";
  } finally {
    loading.value = false;
  }
};

// Filter produk sesuai dengan parameter
const filteredProducts = computed(() => {
  return products.value.filter((product) => !filterFor.value || product.for === filterFor.value);
});

// Memanggil API saat komponen dimuat
onMounted(getProducts);

// Watcher untuk update produk saat route berubah
watch(
  () => route.params.for,
  (newFor) => {
    filterFor.value = newFor;
  },
);
</script>
