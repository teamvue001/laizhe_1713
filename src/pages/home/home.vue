<template>
	<div>

        <weekend-trip />
	</div>
</template>

<script>

	import weekend from "../index-weekend-trip/weekend-trip";

	export default {
	    components:{
	        "index-header" : header,
            "weekend-trip" : weekend
        }
	}
</script>

<style scoped>

</style>
