<script setup>
</script>

<template>
  <main class="flex-1 px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-gradient-to-br from-indigo-100 via-white to-pink-100 min-h-screen relative overflow-hidden">
    
    <!-- Decorative Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </div>

    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        🌟 Upcoming Events
      </h1>
      <p class="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Discover exciting activities and opportunities coming your way.  
        Stay inspired, stay connected, and don’t miss out!
      </p>
    </div>

    <!-- Event Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      <!-- Event Card -->
      <div
        class="backdrop-blur-lg bg-white/70 border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 p-7 flex flex-col"
      >
        <div class="flex items-center space-x-4 mb-5">
          <span
            class="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
          >
            20
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-xl">Tech Innovation Summit</h3>
            <p class="text-sm text-gray-500">Aug 20, 2025</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm flex-1 leading-relaxed">
          Join industry leaders and innovators for a day of talks, networking, and technology showcases.
        </p>
        <div class="mt-6 flex justify-between items-center">
          <a href="#" class="text-indigo-600 hover:underline text-sm font-medium">View Details</a>
          <button
            class="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </div>
      </div>

      <!-- Event Card -->
      <div
        class="backdrop-blur-lg bg-white/70 border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 p-7 flex flex-col"
      >
        <div class="flex items-center space-x-4 mb-5">
          <span
            class="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
          >
            25
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-xl">Campus Clean-Up Drive</h3>
            <p class="text-sm text-gray-500">Aug 25, 2025</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm flex-1 leading-relaxed">
          A sustainability initiative for students and staff to clean and green our campus together.
        </p>
        <div class="mt-6 flex justify-between items-center">
          <a href="#" class="text-green-600 hover:underline text-sm font-medium">View Details</a>
          <button
            class="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Join Event
          </button>
        </div>
      </div>

      <!-- Event Card -->
      <div
        class="backdrop-blur-lg bg-white/70 border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 p-7 flex flex-col"
      >
        <div class="flex items-center space-x-4 mb-5">
          <span
            class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
          >
            28
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-xl">Art & Culture Fair</h3>
            <p class="text-sm text-gray-500">Aug 28, 2025</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm flex-1 leading-relaxed">
          Experience an array of student performances, artworks, and food stalls celebrating diversity.
        </p>
        <div class="mt-6 flex justify-between items-center">
          <a href="#" class="text-pink-600 hover:underline text-sm font-medium">View Details</a>
          <button
            class="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Attend
          </button>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div
      class="mt-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-10 text-center text-white max-w-3xl mx-auto transform hover:scale-[1.01] transition"
    >
      <h2 class="text-3xl font-bold mb-4 drop-shadow">🚀 Want to host your own event?</h2>
      <p class="text-base sm:text-lg mb-6 opacity-90 leading-relaxed">
        Share your ideas with the community and make them a reality.  
        Organize something amazing today!
      </p>
      <button
        class="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-semibold shadow-md hover:bg-gray-100 transition"
      >
        Create Event
      </button>
    </div>
  </main>
</template>
