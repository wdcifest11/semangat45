<template>
  <div id="faq">
    <div class="about">FAQ</div>
    <div class="about-title px-8 md:px-0">Ada pertanyaan untuk kami?</div>
    <div class="faq">
      <div class="faq-container pt-5 px-8 md:p-0 mx-auto w-full max-w-3xl">
        <!-- FAQ 1 -->
        <div class="faq-text py-5">
          <button
            class="flex justify-between cursor-pointer w-full rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal shadow-primary-3 transition duration-350 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2"
            type="button"
            @click="toggleFaq(1)"
          >
            <p class="md:text-2xl md:pr-12 leading-[30px] md:leading-[40px] text-start">
              <span class="number">01</span>
              Apa saja yang bisa dilakukan di website ini?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div
            :class="openIndex === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="overflow-hidden transition-all duration-300 ease-in-out px-15"
          >
            <p class="px-6 py-2">
              Di website ini anda dapat menyewa pakaian, membeli pakaian secondhand dan menukarkan pakaian anda dengan pakaian lain.
            </p>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-text py-5">
          <button
            class="flex justify-between cursor-pointer w-full rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal shadow-primary-3 transition duration-350 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2"
            type="button"
            @click="toggleFaq(2)"
          >
            <p class="md:text-2xl md:pr-12 leading-[30px] md:leading-[40px] text-start">
              <span class="number">02</span>
              Bagaimana cara saya menyewa pakaian melalui website?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div
            :class="openIndex === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="overflow-hidden transition-all duration-300 ease-in-out px-15"
          >
            <p class="px-6 py-2">
              Anda dapat menuju ke halaman sewa Temukan Pakaian kemudian klik filter sewa.
            </p>
          </div>
        </div>
        <!-- FAQ 3 -->
        <div class="faq-text py-5">
          <button
            class="flex justify-between cursor-pointer w-full rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal shadow-primary-3 transition duration-350 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2"
            type="button"
            @click="toggleFaq(3)"
          >
            <p class="md:text-2xl md:pr-12 leading-[30px] md:leading-[40px] text-start">
              <span class="number">03</span>
              Bagaimana cara saya melihat hasil menyewa pakaian?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div
            :class="openIndex === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="overflow-hidden transition-all duration-300 ease-in-out px-15"
          >
            <p class="px-6 py-2">
              Anda dapat melihatnya di keranjang dengan mengklik ikon keranjang saya di bagian navbar paling kanan.
            </p>
          </div>
        </div>
        <!-- FAQ 4 -->
        <div class="faq-text py-5">
          <button
            class="flex justify-between cursor-pointer w-full rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal shadow-primary-3 transition duration-350 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2"
            type="button"
            @click="toggleFaq(4)"
          >
            <p class="md:text-2xl md:pr-12 leading-[30px] md:leading-[40px] text-start">
              <span class="number">04</span>
              Apakah bisa membayar dengan transfer bank?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div
            :class="openIndex === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="overflow-hidden transition-all duration-300 ease-in-out px-15"
          >
            <p class="px-6 py-2">
              Ya, anda dapat memilih pembayaran mealui bank sesuai pilihan yang tersedia.
            </p>
          </div>
        </div>
        <!-- FAQ 5 -->
        <div class="faq-text py-5">
          <button
            class="flex justify-between cursor-pointer w-full rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal shadow-primary-3 transition duration-350 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2"
            type="button"
            @click="toggleFaq(5)"
          >
            <p class="md:text-2xl md:pr-12 leading-[30px] md:leading-[40px] text-start">
              <span class="number">05</span>
              Jenis pembayaran apa saja yang dapat digunakan?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#212121"
              />
            </svg>
          </button>
          <div
            :class="openIndex === 5 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="overflow-hidden transition-all duration-300 ease-in-out px-15"
          >
            <p class="px-6 py-2">
              Kami menerima pembayaran melalui transfer bank, dan e-wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FaqSection",
  setup() {
    const openIndex = ref(null);

    const toggleFaq = (index) => {
      openIndex.value = openIndex.value === index ? null : index;
    };

    return { openIndex, toggleFaq };
  },
};
</script>

<style>
/* Background */
#faq {
  background-image: url("../assets/background-pattern.png");
  background-repeat: repeat-y;
}

/* Styling FAQ */
.faq {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.faq-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}
.faq-text {
  border-bottom: 1px solid #000000;
}
.faq-text p {
  color: #000;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
}
.number {
  margin-right: 34px;
  color: #000;
  text-align: center;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
</style>
