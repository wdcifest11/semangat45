<template>
  <div class="flex justify-center items-center min-h-80 mx-auto p-4 md:p-0 md:min-h-screen">
    <div class="w-full max-w-4xl">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/hqfsPUm3uek?si=itGotqAumMnZcgRN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YoutubeSection",
};
</script>

<style>
/* Jika tidak menggunakan Tailwind, bisa tambahkan CSS manual */
.aspect-w-16 {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}
.aspect-w-16 iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
