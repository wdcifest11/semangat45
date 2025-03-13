<script setup>
import "../assets/main.css";
</script>

<template>
  <div class="hero" name="home">
    <div class="overlap-group">
      <div class="group">
        <div class="rectangle" />
      </div>
      <div class="text-wrapper-3">
        <div class="text-wrapper-4">Jual Beli Pakaian Preloved</div>
        <p class="bersama-lestarikan">
          Bersama Lestarikan <br />
          Lingkungan Dengan Mengurangi <br />
          Overkonsumsi Pakaian
        </p>
      </div>
    </div>

    <About />
    <YoutubeSection />
    <FeatureSection />
    <FaqSection />
    <FooterSection />
  </div>
</template>

<script>
import About from "./home/About.vue";
import YoutubeSection from "./home/YoutubeVideo.vue";
import FeatureSection from "./home/Feature.vue";
import FaqSection from "./home/Faq.vue";
import FooterSection from "./home/Footer.vue";
</script>

<style>
.hero {
  width: 100%;
}

.hero .overlap-group {
  position: relative;
}

.hero .group {
  background-image: url(../assets/used-clothing-3779497_1280.jpg);
  background-size: 100% 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
}

.hero .rectangle {
  background-color: #21212166;
  height: 100vh;
}

.hero .navbar {
  align-items: center;
  display: flex;
  gap: 345px;
  justify-content: center;
  left: 0;
  padding: 10px 0px;
  position: absolute;
  top: 0;
  width: 100%;
}

.hero .div {
  height: 84px;
  position: relative;
  width: 219px;
}

.hero .logo {
  height: 20px;
  left: 0;
  object-fit: cover;
  position: absolute;
  width: 68px;
}

.hero .brand {
  width: 139px;
  color: white;
}

.hero .navbar-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
}

.hero .text-wrapper {
  color: var(--variable-collection-white);
  font-family: var(--raleway-regular-p-font-family);
  font-size: var(--raleway-regular-p-font-size);
  font-style: var(--raleway-regular-p-font-style);
  font-weight: var(--raleway-regular-p-font-weight);
  letter-spacing: var(--raleway-regular-p-letter-spacing);
  line-height: var(--raleway-regular-p-line-height);
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
  color: white;
}

.hero .text-wrapper-2 {
  font-family: "Raleway-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
  border-radius: 5px;
  background-color: #daa520;
  padding: 5px 25px 5px 25px;
}

.text-wrapper-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.hero .bersama-lestarikan {
  position: absolute;
  text-align: center;
  top: 233px;
  color: var(--yellow_title, #fff6e0);
  /* Raleway/regular/display */
  font-family: Raleway;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
}
</style>
