export default function Content() {
  return (
    <>
      <section class="bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Hubungi kami sekarang dan dapatkan penawaran spesial!
            </h2>
            <p class="mb-5 font-light sm:text-xl text-gray-400">
              Mulai Perjalanan digitalmu hari ini dengan layanan pembuatan
              website profesional, Mencakup semua lini bisnis, Mulai dari
              website UMKM, POS, Management produk, Semua kami tangani, Tersedia
              Paket Harga, Mulai Dari.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
              <p class="font-light sm:text-lg text-gray-400">
                Website ini cocok untuk bisnis digital atau personal branding,
                Agar customer bisa melihat produk yang anda tawarkan.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">899.999</span>
                <span class="text-gray-400">/Rupiah</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Kustomisasi Tampilan:{" "}
                    <span class="font-semibold">Terbatas</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Gratis Konsultasi</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Halaman: <span class="font-semibold">Terbatas</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team Support: <span class="font-semibold">2 Bulan</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Gratis Hosting: <span class="font-semibold">1 Bulan</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Company</h3>
              <p class="font-light sm:text-lg text-gray-400">
                Permintaan konsumen tinggi dan sulit mengatur produk, Website
                ini cocok untuk anda, Dengan pemilihan fitur dan desain yang
                update.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">2.999.999</span>
                <span class="text-gray-400">/Rupiah</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Kustomisasi Tampilan:{" "}
                    <span class="font-semibold">Custom</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Gratis Konsultasi</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Halaman: <span class="font-semibold">Custom</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team Support: <span class="font-semibold">6 Bulan</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Gratis Hosting: <span class="font-semibold">3 Bulan</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p class="font-light sm:text-lg text-gray-400">
                Ketika lini bisnis yang dicakup besar, Mungkin website satu ini
                cocok untuk anda, Dengan fitur yang dicustomize dan mendapatkan
                support Penuh.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">5.999.999</span>
                <span class="text-gray-400">/Rupiah</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Kustomisasi Tampilan:{" "}
                    <span class="font-semibold">Unlimited</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Gratis Konsultasi</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Halaman: <span class="font-semibold">Unlimited</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team Support: <span class="font-semibold">Unlimited</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Gratis Hosting: <span class="font-semibold">5 Bulan</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
