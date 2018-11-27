<template>
	<div class="create">
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
		name: 'Create',
		components: {
			Nav,Bottom,Movie,Advertising
		},
		data() {
			return {
				name: '我是国创页面！'
			}
		}
	}
</script>

<style scoped>

</style>