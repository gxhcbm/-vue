<template>
	<div class="home">
		<Nav/>
		<Banner/>
		<Advertising/>
		<Movie/>
		<Bottom/>
				
	</div>
</template>

<script>
	import Nav from '../../commons/Nav'
	import Banner from '../../commons/Banner'
	import Movie from '../../commons/Movie'
	import Bottom from '../../commons/Bottom'
	import Advertising from '../../commons/Advertising'
	export default {
		name: 'Home',
		components: {
			Nav,Banner,Movie,Bottom,Advertising
		},
		 data(){
            return{
                name: ''
            }
       },
	}
</script>