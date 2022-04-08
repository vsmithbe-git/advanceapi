<script setup>
import {useApi} from "../composable/useAPI";

const {movies, getMovies} = useApi();
</script>

<template>
 
 <div class="mt-16">
   <ul class="grid grid-cols-3 gap-12">
     <router-link 
     
     class="bg-white p-4 rounded-lg shadow-2xl cursor-pointer hover:scale-105"
     v-for="movie in movies" 
     :key="movie._id"
     :to = "`/movie/${movie._id}`"
     >
     <div>
       <h3 class="text-xl font-semibold tracking-tight">{{movie.name}}</h3>
       <p>Runtime {{movie.runtimeInMinutes}} minutes</p>
        <p>Budget In {{movie.budgetInMillions}} millions</p>
        <p>Box Office Revenue In {{movie.boxOfficeRevenueInMillions}} millions</p>
        <p>Academy Award Nominations {{movie.academyAwardNominations}}</p>
        <p>Academy Award Wins {{movie.academyAwardWins}}</p>
        <p>Rotten Tomatoes Score {{movie.rottenTomatoesScore}}</p>

    
     </div>
     </router-link>
   </ul>
 </div>


</template>