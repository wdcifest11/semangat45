<template>
  <div class="footer mx-auto px-4 sm:px-6 lg:px-24 sm:pt-24 sm:pb-8 pt-6">
    <div class="py-12">
      <img class="w-32" alt="Logo keraton" src="../../assets/Greenc.png" />
    </div>
    <div
      class="mx-auto grid grid-flow-row-dense grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-5 lg:grid-cols-5 lg:grid-rows-2 xl:gap-x-8 justify-center items-center"
    >
      <div class="text-start grid justify-start">
        <div class="">Quick Links</div>
        <RouterLink :to="`/`" class="text-start">Beranda</RouterLink>
        <RouterLink :to="`/article`" class="text-start">Artikel</RouterLink>
        <RouterLink :to="{ path: '/products', query: { for: 'dijual' } }" class="text-start">Beli Pakaian Secondhand</RouterLink>
        <RouterLink :to="{ path: '/products', query: { for: 'tukar' } }" class="text-start">Tukar Pakaian</RouterLink>
        <RouterLink :to="{ path: '/products', query: { for: 'sewa' } }" class="text-start">Sewa Pakaian</RouterLink>
      </div>
      <div class="text-start grid justify-start">
        <div class="">Socials</div>
        <a href="https://wa.me/6282334907089" target="_blank" class="text-start">Whatsapp</a>
        <a href="" class="text-start">Facebook</a>
        <a href="" class="text-start">Instagram</a>
        <div class="text-start">Youtube</div>
      </div>
      <div class="text-start grid justify-start">
        <div class="">Company</div>
        <div class="text-start">About us</div>
        <div class="text-start">Partners</div>
        <div class="text-start">Contact</div>
      </div>
      <div class="rigth-container col-span-2">
        <p class="pb-4">Subscribes your email for updates!</p>
        <div class="bg-[#daa520] rounded-sm px-8 py-2">
          <div class="text-wrapper-8">Enter your email</div>
        </div>
      </div>
      <p>
        Jalan Usaha 17A
        <br />
        Kramatjati, Jakarta Timur
        <br />
        45114
      </p>
    </div>
    <div class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <p class="self-end">@ 2024 Greenc</p>
      <div>
        <p class="text-center pb-4">In collaboration</p>
        <div class="grid grid-flow-col auto-cols-auto gap-8">
          <img
            src="../../assets/stis.png"
            class="h-12 md:h-16 lg:h-18 justify-self-end"
            alt="lambang-politeknik-statistika-stis"
          />
          <img
            src="../../assets/niagahoster.png"
            class="h-12 md:h-16 lg:h-18"
            alt="lambang-politeknik-statistika-stis"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "FooterSection",
};
</script>

<style>
.footer {
  background-image: url("../assets/background-pattern.png");
  background-repeat: repeat-y;
  position: relative;
  width: 100%;
}

.rigth-container p {
  color: var(--secondary, #212121);
  /* Raleway/regular/h4 */
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 133.333% */
}
.footer .overlap-group {
    background-color: #daa520;
    border-radius: 10px;
    height: 48px;
    width: 431px;
  }
  
  .footer .text-wrapper-8 {
    color: var(--variable-collection-white);
    font-family: "Raleway-ExtraBold", Helvetica;
    font-size: 20px;
    font-weight: 800;
    left: 29px;
    letter-spacing: 0;
    line-height: 28px;
    white-space: nowrap;
    color: var(--white, #FFF);
  }
</style>
