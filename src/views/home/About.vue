<template>
  <div id="tentang">
    <div class="about">Tentang</div>
    <div class="about-title">Greenc</div>
    <div class="about-containter">
      <div class="grid place-items-center">
        <div class="w-full max-w-2xl">
          <p class="text-center text-gray-700 px-4 md:p-0">
            Pada awal berdirinya, Greenc dibangun dengan maksud menjaga lingkungan dengan cara
            mengurangi limbah tekstil, memperpanjang siklus hidup pakaian, dan merubah pola konsumsi
            di tengah masyarakat di tengah gempuran teknologi yang meningkat.
          </p>
        </div>
      </div>
      <div class="btn-info">
        <RouterLink to="/about">Info Selengkapnya</RouterLink>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <g clip-path="url(#clip0_31_10)">
              <path
                d="M24.0002 10.2145C22.6647 8.82349 20.9467 7.85972 19.0634 7.4451C17.1801 7.03048 15.2162 7.18362 13.42 7.88516C11.6238 8.5867 10.0759 9.80513 8.97215 11.3864C7.86839 12.9676 7.25831 14.8406 7.21907 16.7686C7.17982 18.6966 7.71316 20.5929 8.75165 22.2177C9.79014 23.8426 11.2871 25.123 13.0533 25.8971C14.8195 26.6711 16.7756 26.9041 18.6741 26.5664C20.5727 26.2288 22.3286 25.3358 23.7196 24.0002C25.5824 22.208 26.6581 19.7499 26.7108 17.1654C26.7634 14.5809 25.7886 12.0811 24.0002 10.2145ZM18.4821 20.711C18.3387 20.8487 18.1463 20.9239 17.9475 20.9198C17.7486 20.9158 17.5595 20.8329 17.4217 20.6894C17.2839 20.5459 17.2088 20.3536 17.2129 20.1547C17.2169 19.9558 17.2998 19.7667 17.4433 19.629L19.3835 17.7662L12.71 17.631C12.6115 17.629 12.5143 17.6076 12.4241 17.568C12.3338 17.5285 12.2522 17.4715 12.184 17.4004C12.1157 17.3293 12.0621 17.2455 12.0263 17.1537C11.9904 17.0619 11.973 16.964 11.975 16.8654C11.977 16.7669 11.9984 16.6697 12.038 16.5795C12.0775 16.4892 12.1345 16.4076 12.2056 16.3394C12.2767 16.2711 12.3605 16.2176 12.4523 16.1817C12.5441 16.1459 12.642 16.1284 12.7406 16.1304L19.414 16.267L17.5512 14.3268C17.4135 14.1833 17.3384 13.9909 17.3424 13.7921C17.3465 13.5932 17.4293 13.4041 17.5728 13.2663C17.7163 13.1286 17.9086 13.0534 18.1075 13.0575C18.3064 13.0615 18.4955 13.1444 18.6333 13.2879L21.7498 16.534C21.8876 16.6775 21.9627 16.8698 21.9586 17.0687C21.9546 17.2675 21.8717 17.4567 21.7282 17.5944L18.4821 20.711Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_10">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(17.3125) rotate(46.1662)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style>
#tentang {
  background-image: url("../assets/background-pattern.png");
  background-repeat: repeat-y;
  padding-top: 106px;
  padding-bottom: 117px;
}
.btn-info {
  margin-top: 44px;
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
.about-containter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
.about-containter p {
  margin-top: 32px;
  color: #000;
  text-align: center;

  /* Raleway/regular/h6 */
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}
</style>
