<template>
  <div class="bg-white -z-10">
    <div
      class="mx-auto max-w-2xl px-4 pt-10 pb-12 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8 lg:pt-16"
    >
      <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        <!-- Left Column -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Transaksi</h3>
          <div class="mt-2 border-b pb-2">
            <div class="flex justify-between text-gray-600">
              <span>Total Harga</span>
              <span>{{ payment?.total_price }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Biaya Layanan</span>
              <span>{{ payment?.biaya_layanan }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Biaya Jasa Aplikasi</span>
              <span>{{ payment?.biaya_aplikasi }}</span>
            </div>
          </div>
          <div class="flex justify-between font-bold text-lg mt-4">
            <span>Total Bayar</span>
            <span>{{ payment?.total_bill }}</span>
          </div>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'ovo'">Ovo</p>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'dana'">Dana</p>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'gopay'">Gopay</p>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'shopeepay'">
            Shopeepay
          </p>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'bank_bri'">
            Bank BRI
          </p>
          <p class="text-sm text-gray-500 mt-1" v-if="payment?.payment_method === 'bank_seabank'">
            Bank SeaBank
          </p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">Produk yang Dibeli</h3>
          <div class="mt-2 border-b pb-2">
            <div class="flex justify-between text-gray-600">
              <span>{{ payment?.product_name }}</span>
              <span>{{ payment?.product_price }}</span>
            </div>
            <div class="text-sm text-gray-500">{{ quantity }} x {{ payment?.product_price }}</div>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800">Batas Akhir Pembayaran</h2>
          <p class="text-gray-600">{{ formattedDeadline }}</p>

          <div class="mt-4 flex items-center space-x-2">
            <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ⏳ {{ countdown }}
            </span>
          </div>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">{{ payment?.payment_method }}</h3>
          <p class="text-gray-600">Nomor {{ payment?.payment_method }}</p>
          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'ovo'">082334907089</p>
          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'dana'">
            082334907089
          </p>
          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'gopay'">
            082334907089
          </p>
          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'shopeepay'">
            082334907089
          </p>

          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'bank_bri'">
            656701017112533
          </p>
          <p class="text-xl font-semibold" v-if="payment?.payment_method === 'bank_seabank'">
            901483052756
          </p>
          <p class="text-gray-600 mt-4">Total Pembayaran</p>
          <p class="text-2xl font-bold">Rp. {{ payment?.total_bill }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "../api.js";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

// Ambil parameter ID dari URL
const route = useRoute();

// State
const loading = ref(false);
const errorMessage = ref("");
const payment = ref(null);
const qty = ref(1); // Default qty 1, bisa disesuaikan
const biayalayanan = ref(5000);
const biayaaplikasi = ref(2500);

// Ambil data pembayaran dari API
const getPayment = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.get(`/payment/${route.params.id}`);
    payment.value = response.data[0];
    console.log(payment.value);
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Gagal mengambil data produk";
  } finally {
    loading.value = false;
  }
};

// Hitung total tagihan
const totalTagihan = computed(() => {
  if (!payment.value) return 0;
  return payment.value.price * qty.value + biayalayanan.value + biayaaplikasi.value;
});

// Ambil data saat komponen dimuat
onMounted(getPayment);
const quantity = route.query.q || 1; // Default 1 jika tidak ada nilai

// Set batas waktu 5 menit dari sekarang
const deadline = ref(new Date().getTime() + 5 * 60 * 1000);
const countdown = ref("05:00");

// Format waktu batas akhir pembayaran
const formattedDeadline = new Date(deadline.value).toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
});

// Fungsi hitung mundur
const startCountdown = () => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = deadline.value - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdown.value = "Waktu Habis!";
      return;
    }

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
};

// Jalankan countdown saat komponen dimuat
onMounted(() => {
  startCountdown();
});
</script>

<style scoped></style>
