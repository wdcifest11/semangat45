<template>
  <header
    v-if="!isAuthPage"
    class="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4"
    :class="{
      'shadow-lg bg-[#DAA520]/90 z-50': isScrolled,
      'bg-transparent': !isScrolled,
      'bg-white border-b border-gray-300': !isHome,
      'z-50': isHome,
    }"
  >
    <div class="flex items-center gap-4">
      <!-- Logo untuk Desktop -->
      <RouterLink to="/" v-if="isScrolled === true && isHome">
        <img src="../assets/Greenc-white.png" alt="Logo" width="150" class="hidden md:block" />
      </RouterLink>
      <RouterLink to="/" v-else>
        <img src="../assets/Greenc.png" alt="Logo" width="150" class="hidden md:block" />
      </RouterLink>

      <!-- Logo untuk Mobile -->
      <RouterLink to="/" v-if="isScrolled === true && isHome">
        <img src="../assets/Greenc-white.png" alt="Logo" width="150" class="block md:hidden" />
      </RouterLink>
      <RouterLink to="/" v-else>
        <img src="../assets/Greenc.png" alt="Logo" width="120" class="block md:hidden" />
      </RouterLink>

      <!-- Button Menu Mobile -->
      <button v-if="isHome === true" class="absolute right-0 pr-8 md:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>
      <button v-else class="absolute right-0 pr-8 md:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="gray"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Menu Samping untuk Mobile -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 z-100 w-64 h-full bg-[#DAA520] shadow-lg transition-transform transform translate-x-0 md:hidden"
    >
      <div class="flex justify-between p-4">
        <div>
          <RouterLink to="/">
            <img src="../assets/Greenc-white.png" alt="Logo" width="120" class="block md:hidden" />
          </RouterLink>
        </div>
        <div>
          <button @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <ul class="flex flex-col p-6 space-y-4">
        <li>
          <RouterLink
            to="/article"
            class="text-md no-underline font-semibold text-white hover:text-gray-300"
            >Artikel</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/dijual` }"
            class="text-md no-underline font-semibold text-white hover:text-gray-300"
            >Preloved</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/tukar` }"
            class="text-md no-underline font-semibold text-white hover:text-gray-300"
            >Tukar Pakaian</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/sewa` }"
            class="text-md no-underline font-semibold text-white hover:text-gray-300"
            >Sewa Pakaian</RouterLink
          >
        </li>
      </ul>
    </div>

    <!-- Navbar untuk Desktop -->
    <nav class="md:flex items-center">
      <ul
        class="md:flex gap-6 hidden pr-8"
        :class="{ 'text-white': isHome, 'text-black': !isHome }"
      >
        <li>
          <RouterLink to="/article" class="text-md no-underline hover:text-gray-300"
            >Artikel</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/dijual` }"
            class="text-md no-underline hover:text-gray-300"
            >Preloved</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/tukar` }"
            class="text-md no-underline hover:text-gray-300"
            >Tukar Pakaian</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: `/products/sewa` }"
            class="text-md no-underline hover:text-gray-300"
            >Sewa Pakaian</RouterLink
          >
        </li>
      </ul>

      <!-- Tombol Masuk -->
      <RouterLink v-if="!user?.name" to="/signin">
        <button
          class="md:flex items-center px-4 py-1 cursor-pointer font-semibold rounded-md border-none hidden"
          :class="{
            'shadow-lg bg-white text-black': isScrolled && isHome,
            'shadow-lg bg-[#DAA520] text-black': isHome,
            'bg-[#DAA520] text-white': !isHome,
          }"
        >
          Masuk
        </button>
      </RouterLink>
      <RouterLink v-else>
        <Popover class="relative">
          <PopoverButton
            class="inline-flex items-center gap-x-1 text-sm/6 font-semibold cursor-pointer"
          >
            <span class="font-medium hidden md:flex" :class="{ 'text-white ': isHome }">{{
              user?.name
            }}</span>
            <ChevronDownIcon
              class="size-5 hidden md:flex"
              :class="{
                'text-white': isHome,
                hidden: !user?.name,
                block: user?.name,
              }"
              aria-hidden="true"
            ></ChevronDownIcon>
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex max-w-max -translate-x-1/2 px-4">
              <div
                class="flex-auto cursor-pointer px-8 py-2 overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5"
                @click="logout"
              >
                <div class="flex justify-center items-center">
                  <ArrowLeftStartOnRectangleIcon
                    class="size-5 mr-2 text-red-500"
                    aria-hidden="true"
                  />
                  Logout
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import api from "../api.js";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/vue/20/solid";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    ArrowLeftStartOnRectangleIcon,
  },
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  props: ["user"],
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
    isAuthPage() {
      return this.$route.name === "signin" || this.$route.name === "signup";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    async logout() {
      try {
        await api.post(
          "/logout",
          {},
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } },
        );
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        this.$root.user = null;
        this.$router.push("/signin");
      } catch (error) {
        console.error("Gagal logout:", error);
      }
    },
  },
};
</script>
