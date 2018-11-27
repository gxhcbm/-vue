<template>
	<div class="drama">
		<Nav/>
		<Advertising/>
        <Movie/>
        <Bottom/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Nav from '../../commons/Nav'
	import Advertising from '../../commons/Advertising'
	import Movie from '../../commons/Movie'
	import Bottom from '../../commons/Bottom'
	export default {
		name: 'Drama',
		components: {
			Nav,Bottom,Movie,Advertising
		},
		data() {
			return {
				name: '我是番剧页面！'
			}
		}
	}
</script>

<style scoped>

</style>