<template>
	<li class="flex items-center gap-x-2">
		<button
			class="w-full flex items-center justify-between no-select focus:shadow-md p-1 border-[0.5px] border-transparent focus:border-slate-400"
			@click="() => toggleTodo(todo.id)">
			<p
				class="text-[18px] text-slate-600 font-medium"
				:class="{ 'text-opacity-50 line-through': todo.done }">
				{{ todo.task }}
			</p>
			<div
				class="w-[20px] h-[20px] border-2 rounded-full flex items-center justify-center"
				:class="{
					'border-green-400 text-green-400': todo.done,
					'border-gray-400': !todo.done,
				}">
				<v-icon name="co-check-alt" scale="0.8" v-show="todo.done" />
			</div>
		</button>
		<button @click="() => removeTodo(todo.id)" class="close-icon">
			<v-icon
				name="io-close-circle-outline"
				scale="1.2"
				color="#ff0000"
				class="text-red-500 stroke-red-500 fill-red-500" />
		</button>
	</li>
</template>

<script setup>
defineProps(['todo', 'toggleTodo', 'removeTodo']);
</script>

<style>
.close-icon svg path {
	stroke: red;
}
</style>
