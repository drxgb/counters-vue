<template>
  <main class="flex flex-col justify-between h-full">
    <header class="bg-blue-600 px-8 py-4">
      <h1 class="text-4xl font-semibold">Counters</h1>
    </header>
    <section class="container mx-auto px-8 py-4 overflow-y-auto">
      <slot />
    </section>
    <footer class="bg-blue-600 text-right px-2 py-4">
      <p>
        &copy;
        {{ new Date().getFullYear() }} - Made with
        <font-awesome-icon
          icon="heart"
          class="text-red-600 font-bold text-lg"
        />
        by Dr.XGB
      </p>
    </footer>
  </main>
</template>
