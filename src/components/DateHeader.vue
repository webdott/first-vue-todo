<template>
	<div
		class="w-full flex justify-between items-center text-[14px] text-slate-600 font-medium">
		<div class="flex items-center gap-x-2">
			<p class="text-slate-800 text-[40px]">
				{{ date.getDate() }}
			</p>
			<p class="flex flex-col">
				<span>{{ month }}</span>
				<span class="text-slate-400">{{ date.getFullYear() }}</span>
			</p>
		</div>

		<p class="">
			{{ day }}
		</p>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getMonth, getDay } from '@/helpers/dateHelper.js';

const date = ref(new Date());
const month = computed(() => {
	return getMonth(date.value.getMonth()).toUpperCase();
});
const day = computed(() => {
	return getDay(date.value.getDay()).toUpperCase();
});
</script>
