<template>
	<div class="cartoon">
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
		name: 'cartoon',
		components: {
			Nav,Bottom,Movie,Advertising
		},
		data() {
			return {
				name: '我是动画页面'
			}
		}
	}
</script>

<style scoped>

</style>