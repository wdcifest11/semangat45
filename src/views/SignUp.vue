<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <div class="h-full relative hero hidden md:block">
      <div class="overlap-group">
        <div class="group">
          <div class="rectangle" />
          <div class="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col p-12">
            <RouterLink to="/">
              <img src="../assets/Greenc.png" alt="Logo" class="w-40 pb-8" />
            </RouterLink>
            <h1 class="text-[#FAE084] text-2xl font-bold">
              Bersama Lestarikan Lingkungan dengan mengurangi konsumsi fesyen
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center p-12">
      <div class="w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Sign up</h2>

        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Nama Lengkap</label>
            <input v-model="name" type="text" class="w-full p-3 border rounded" required />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Email</label>
            <input v-model="email" type="email" class="w-full p-3 border rounded" required />
          </div>

          <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <!-- Password -->
            <div>
              <label class="block text-gray-700 font-medium">Password</label>
              <input
                v-model="password"
                type="password"
                class="w-full p-3 border rounded"
                required
                minlength="6"
              />
            </div>

            <!-- Konfirmasi Password -->
            <div>
              <label class="block text-gray-700 font-medium">Konfirmasi Password</label>
              <input
                v-model="confirm_password"
                type="password"
                class="w-full p-3 border rounded"
                required
                minlength="6"
              />
            </div>
          </div>

          <button type="submit" class="w-full cursor-pointer bg-[#DAA520] text-white py-3 rounded">
            Buat Akun
          </button>
        </form>

        <RouterLink to="/signin">
          <p class="text-center text-sm mt-4">
            Sudah buat akun? <a href="#" class="text-blue-600">Sign In</a>
          </p>
        </RouterLink>
        <p class="text-center text-xs text-gray-500 mt-2">
          Dengan signin ke Greenc, anda setuju dengan
          <a href="#" class="underline">Terms</a> dan
          <a href="#" class="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      try {
        // Validasi Password & Confirm Password
        if (this.password !== this.confirm_password) {
          this.errorMessage = "Password dan Konfirmasi Password tidak cocok!";
          return;
        }

        this.errorMessage = "";

        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);

        await api.post("/register", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: false,
        });

        this.$router.push("/signin");
      } catch (err) {
        this.error = "Login gagal, periksa email dan password!";
      }
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  outline: none;
}
input:focus {
  border-color: #4a90e2;
}
.hero .overlap-group {
  position: relative;
}

.hero .group {
  background-image: url(../assets/jeans-2597210_1280.jpg);
  background-size: 100% 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
}

.hero .rectangle {
  background-color: #21212166;
  height: 100vh;
}
</style>
