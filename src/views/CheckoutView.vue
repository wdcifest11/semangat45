<template>
  <div class="bg-white -z-10">
    <div
      class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8 lg:pt-16 lg:pb-24"
    >
      <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <div class="mt-6">
            <h3 class="text-lg font-semibold text-gray-700">Detail Pemesan</h3>
            <p class="text-gray-600 font-medium">{{ user?.name }} - {{ user?.email }}</p>
          </div>

          <div class="mt-4 flex justify-between items-center">
            <p class="text-lg font-semibold">{{ product?.name }}</p>
            <p class="text-lg font-semibold">{{ product?.price }}</p>
          </div>

          <div class="mt-4 flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-700">Kuantitas</h3>
            <p class="text-lg font-semibold">{{ quantity }}</p>
          </div>

          <div class="mt-6">
            <h3 class="text-lg font-semibold text-gray-700">Pilih Pembayaran</h3>
            <select v-model="paymentMethod" class="border p-2 rounded w-full mt-2">
              <option disabled selected value="">Pilih Metode Pembayaran</option>
              <option v-for="method in paymentmethod" :key="method.val" :value="method.val">
                {{ method.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4 self-start">
          <h3 class="text-lg font-semibold">Ringkasan Pemesanan</h3>
          <div class="flex justify-between mt-2">
            <span>Total Harga</span>
            <span>{{ totalHarga }}</span>
          </div>
          <div class="flex justify-between mt-2">
            <span>Biaya Layanan</span>
            <span>{{ biayalayanan }}</span>
          </div>
          <div class="flex justify-between mt-2">
            <span>Biaya Jasa Aplikasi</span>
            <span>{{ biayaaplikasi }}</span>
          </div>
          <div class="flex justify-between mt-4 font-bold text-lg">
            <span>Total Tagihan</span>
            <span>{{ totaltagihan }}</span>
          </div>
          <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
          <button
            @click="processPayment"
            :disabled="isLoading"
            class="mt-6 w-full bg-yellow-500 cursor-pointer text-white py-3 rounded-lg flex justify-center items-center"
          >
            {{ isLoading ? "Memproses..." : "Bayar →" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({ user: Object });

// Fungsi untuk mengambil data produk dari Laravel API
import api from "../api.js";
import { useRoute } from "vue-router";

const product = ref();
const loading = ref(false);
const errorMessage = ref("");
const route = useRoute();

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

const biayalayanan = 1000;
const biayaaplikasi = 2500;
const totaltagihan = ref(0);
const totalHarga = ref(0);

// Memanggil API saat komponen dimuat
onMounted(getProducts);
const quantity = route.query.q || 1; // Default 1 jika tidak ada nilai

// Hitung ulang total tagihan saat product.value tersedia
watchEffect(() => {
  const price = parseInt(product?.value?.price.replace(/\./g, ""));

  totalHarga.value = price * quantity;
  if (product.value?.price) {
    totaltagihan.value = biayaaplikasi + biayalayanan + totalHarga.value;
  }
});

const paymentmethod = [
  { name: "Bank BRI", val: "bank_bri", href: "#" },
  { name: "Bank Seabank", val: "bank_seabank", href: "#" },
  { name: "DANA", val: "dana", href: "#" },
  { name: "GOPAY", val: "gopay", href: "#" },
  { name: "OVO", val: "ovo", href: "#" },
  { name: "Shopeepay", val: "shopeepay", href: "#" },
  { name: "SCAN QRIS (Semua Pembayaran)", val: "qris", href: "#" },
];

onMounted(() => {
  const token = localStorage.getItem("userInfo");
  if (!token) {
    router.push("/signin");
  }
});

const paymentMethod = ref(""); // Menyimpan metode pembayaran yang dipilih
const isLoading = ref(false);

// Fungsi untuk mengirim pembayaran
const processPayment = async () => {
  if (!paymentMethod.value) {
    errorMessage.value = "Pilih metode pembayaran terlebih dahulu!";
    return;
  }

  isLoading.value = true;
  errorMessage.value = "";

  const id = Math.floor(Math.random() * 500) + 1;

  const formData = new FormData();
  formData.append("id", id);
  formData.append("user_id", props.user.id);
  formData.append("product_id", route.params.id);
  formData.append("payment_method", paymentMethod.value);
  formData.append("total_price", totalHarga.value);
  formData.append("total_bill", totaltagihan.value);
  formData.append("biaya_layanan", biayalayanan);
  formData.append("biaya_aplikasi", biayaaplikasi);
  formData.append("quantity", quantity);

  try {
    await api.post("/payment", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: false,
    });
    router.push(`/payment/${id}`);
  } catch (error) {
    errorMessage.value = "Pembayaran gagal! Coba lagi.";
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
select {
  appearance: none;
  background-color: white;
  cursor: pointer;
}
</style>
