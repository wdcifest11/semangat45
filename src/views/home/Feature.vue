<template>
  <div id="fitur">
    <div class="about">Fitur</div>
    <div class="about-title">Jelajahi Fitur-Fitur Greenc</div>
    <div
      class="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-center items-center"
    >
      <div class="relative justify-self-center">
        <img class="image-1" src="../../assets/fashion-3555646_1280.jpg" />
        <p class="text-center text-gray-800 mt-2 font-medium">Preloved</p>
      </div>

      <div class="relative">
        <img class="image-2" src="../../assets/garment-racks-5259773_1280.jpg" />
        <p class="text-center text-gray-800 mt-2 font-medium">Tukar Pakaian</p>
      </div>

      <div class="relative justify-self-center">
        <img class="image-3" src="../../assets/shirts-428619_1280.jpg" />
        <p class="text-center text-gray-800 mt-2 font-medium">Sewa Pakaian</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
};
</script>

<style>
#fitur {
  background-image: url("../assets/background-pattern.png");
  background-repeat: repeat-y;
  padding: 0px 52px 6rem 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about {
  color: var(--primary, #daa520);
  text-align: center;
  font-family: "Inria Serif";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.about-title {
  color: var(--secondary, #212121);
  text-align: center;
  font-family: "Inria Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.galery {
  padding-top: 57px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.image-1 {
  width: 323px;
  height: 323px;
  object-fit: cover;
  border-radius: 50px;
  background: lightgray -108.564px 0px / 123.314% 100% no-repeat;
}
.image-2 {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50px;
  background: lightgray -108.564px 0px / 123.314% 100% no-repeat;
}
.image-3 {
  width: 323px;
  height: 323px;
  object-fit: cover;
  border-radius: 50px;
  background: lightgray -108.564px 0px / 123.314% 100% no-repeat;
}
.btn-info {
  width: fit-content;
  padding: 0 5px 0 5px;
  border-radius: 10px;
  background: var(--primary, #daa520);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-content: center;
}
.btn-info a {
  color: var(--white, #fff);
  padding: 5px;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
}
</style>
