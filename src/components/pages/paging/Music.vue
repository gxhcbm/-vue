<template>
	<div class="music">
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
		name: 'Music',
		components: {
			Nav,Bottom,Movie,Advertising
		},
		data() {
			return {
				name: '我是音乐页面！'
			}
		}
	}
</script>

<style scoped>

</style>