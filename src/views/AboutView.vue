<script setup>
import "../assets/main.css";
</script>

<template>
  <div>
    <Header />
    <div>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            class="content w-full max-w-[522px] h-auto flex flex-col justify-start self-start text-black text-base sm:text-lg"
          >
            Greenc pada mulanya berdiri karena keprihatinan mahasiswa di tengah budaya fast fashion
            pada industri fesyen. Fast fashion adalah sebuah koleksi busana murah mengikuti tren
            merek-merek mentereng yang diproduksi dalam waktu cepat. Hal ini menimbulkan budaya
            konsumtif di tengah masyarakat dengan melakukan pembelian terus menerus karena tren
            fesyen dan model nya selalu up to date jauh lebih cepat dibanding produk musiman.
          </div>
          <img
            src="../assets/woman-choosing-colorful-sari-market.jpg"
            class="macan-ali"
            alt="woman-choosing-colorful-sari-market"
          />
        </div>
      </section>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterSection from "./home/Footer.vue";

export default {
  name: "AboutView",
};
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}
.title-sej {
  display: flex;
  justify-content: end;
  text-align: end;
}
.sej-container {
  display: flex;
  flex-direction: row;
}
.sej-container img {
  margin: 40px;
}

.title {
  margin-right: 20px;
  margin-left: 20px;
}
.content {
  height: auto;
  flex-direction: column;
  justify-content: center;
  color: #000;
  font-family: Raleway;
}
.border-left {
  margin-left: 20px;
  border-left: 2px solid #daa520; /* Ganti #000 dengan warna border yang diinginkan */
  padding-left: 30px;
}

.border-right {
  margin-right: 20px;
  border-right: 2px solid #daa520; /* Ganti #000 dengan warna border yang diinginkan */
  padding-right: 30px;
}

.macan-ali {
  width: 445.088px;
  height: 445.088px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 10px;
}
</style>
