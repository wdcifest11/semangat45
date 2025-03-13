<template>
  <div class="bg-white -z-10 absolute">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product?.breadcrumbs" :key="breadcrumb?.id">
            <div class="flex items-center">
              <a :href="breadcrumb?.href" class="mr-2 text-sm font-medium text-gray-900">{{
                breadcrumb?.name
              }}</a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product?.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              >{{ product?.name }}</a
            >
          </li>
        </ol>
      </nav>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Image gallery -->
          <div class="relative mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl pb-12">
            <!-- Slider Container -->
            <div class="overflow-hidden relative">
              <div
                class="flex transition-transform duration-500"
                :style="`transform: translateX(-${currentIndex * 100}%)`"
              >
                <div
                  v-for="(image, index) in product?.images"
                  :key="index"
                  class="min-w-full flex justify-center"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="w-54 h-auto rounded-lg object-cover"
                  />
                </div>
              </div>

              <!-- Previous Button -->
              <button
                @click="prevSlide"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
              >
                &#10094;
              </button>

              <!-- Next Button -->
              <button
                @click="nextSlide"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
              >
                &#10095;
              </button>
            </div>
          </div>

          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{ product?.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">{{ product?.price }}</p>

          <div class="mt-4">
            <h3 class="text-sm font-medium text-gray-900">Jumlah Hari Sewa/Beli</h3>
            <div class="flex items-center mt-4 space-x-4">
              <button
                @click.prevent="decrease"
                class="bg-white border hover:bg-gray-50 px-3 py-2 rounded"
              >
                -
              </button>
              <span>{{ count }}</span>
              <button
                @click.prevent="increase"
                class="bg-white border hover:bg-gray-50 px-3 py-2 rounded"
              >
                +
              </button>
            </div>
          </div>

          <!-- <button
            type="submit"
            class="mt-10 flex w-full items-center justify-center rounded-md bg-white border-1 border-[#daa520] px-8 py-3 text-base font-medium text-[#daa520] focus:ring-2 focus:ring-[#daa520] focus:ring-offset-2 focus:outline-hidden"
          >
            Add to cart
          </button> -->
          <RouterLink :to="`/checkout/${product?.id}?q=${count}`">
            <button class="mt-4 w-full bg-[#daa520] text-white p-3 rounded-md cursor-pointer">Check Out</button>
          </RouterLink>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product?.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product?.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight?.highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product?.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900"
                          >Shopping cart</DialogTitle
                        >
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="open = false"
                          >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="product in products" :key="product.id" class="flex py-6">
                              <div
                                class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="product.imageSrc"
                                  :alt="product.imageAlt"
                                  class="size-full object-cover"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a :href="product.href">{{ product.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div class="mt-6">
                        <a
                          href="#"
                          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                          >Checkout</a
                        >
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{{ " " }}
                          <button
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                            @click="open = false"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const open = ref(false);

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref();
const loading = ref(false);
const errorMessage = ref("");

const count = ref(1);

const increase = () => count.value++;
const decrease = () => {
  if (count.value > 1) count.value--;
};

// Fungsi untuk mengambil data produk dari  Back End
import api from "../api.js";

const getProducts = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.get(`/products/${route.params.id}`);

    // axios langsung mengembalikan data di response.data
    product.value = response.data;
    console.log(product);
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Gagal mengambil data produk";
  } finally {
    loading.value = false;
  }
};

// Memanggil API saat komponen dimuat
onMounted(getProducts);

const route = useRoute();

// Pastikan tidak mengakses properti jika product null
const selectedColor = ref(product.value?.colors?.[0] || null);
const selectedSize = ref(product.value?.sizes?.find((s) => s.in_stock) || null);

const currentIndex = ref(0);

const nextSlide = () => {
  if (product.value?.images) {
    currentIndex.value = (currentIndex.value + 1) % product.value.images.length;
  }
};

const prevSlide = () => {
  if (product.value?.images) {
    currentIndex.value =
      (currentIndex.value - 1 + product.value.images.length) % product.value.images.length;
  }
};
</script>
