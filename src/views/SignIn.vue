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
        <h2 class="text-2xl font-bold pb-6 text-center">Sign in</h2>

        <form @submit.prevent="login">
          <div class="pb-4">
            <label class="block text-gray-700 font-medium">Email</label>
            <input v-model="email" type="email" class="w-full p-3 border rounded" required />
          </div>

          <div class="pb-4">
            <label class="block text-gray-700 font-medium">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full p-3 border rounded"
              required
              minlength="6"
            />
          </div>

          <button type="submit" class="w-full bg-[#DAA520] text-white py-3 rounded cursor-pointer">
            Sign In
          </button>

          <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
        </form>

        <RouterLink to="/signup">
          <p class="text-center text-sm pt-4">
            Belum buat akun? <a href="#" class="text-blue-600">Sign Up</a>
          </p>
        </RouterLink>
        <p class="text-center text-xs text-gray-500 pt-2">
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
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("password", this.password);

      try {
        const response = await api.post("/login", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: false,
        });
        const token = response?.data?.token;
        const userData = response?.data?.user;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userInfo", JSON.stringify(userData));

        this.$root.user = userData;
        this.$router.push("/");
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
