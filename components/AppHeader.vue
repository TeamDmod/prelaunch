<template>
  <div class="py-8 lg:py-0 flex items-center">
    <div class="container flex flex-wrap items-center lg:flex-nowrap">
      <div class="mr-10 flex-shrink-0">
        <img src="~/assets/img/logo.png" class="h-12" />
      </div>

      <a class="lg:hidden ml-auto" href="#" @click.prevent="smallMD = !smallMD">
        menu
      </a>

      <div
        class="w-full flex"
        :class="{ 'mt-8': smallMD, 'hidden lg:flex': !smallMD }"
      >
        <div
          class="lg:h-24 lg:flex lg:w-auto w-full items-center lg:ml-auto text-center lg:text-right"
          :class="{ 'text-center inline-block': smallMD }"
        >
          <div class="inline-block w-auto mr-auto items-center">
            <a href="https://twitter.com/dmodgg/" class="text-lg mx-2 lg:px-3"
              >Twitter</a
            >
          </div>
          <div class="inline-block w-auto mr-auto items-center">
            <a href="https://dev.dmod.gg/imgur" class="text-lg mx-2 lg:px-3"
              >Leaks</a
            >
          </div>
          <div class="inline-block w-auto mr-auto items-center">
            <a href="https://discord.gg/VUTu3HyRpN" class="text-lg mx-2 lg:px-3"
              >Discord</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallMD: false
    };
  }
};
</script>
