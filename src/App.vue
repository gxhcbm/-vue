<template>
	<div id="app">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
	import Header from './components/commons/Header'
	import Home  from './components/pages/Home/Home'
	export default {
		name: 'App',
		components: {
			Header,
			Home,
		},
	}
</script>

<style>

</style>