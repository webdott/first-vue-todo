<template>
	<button
		class="absolute w-[60px] h-[60px] bg-green-500 flex items-center justify-center -bottom-[30px] left-1/2 -translate-x-1/2 rounded-full hover:shadow-md focus:shadow-md no-select"
		@click="openModal">
		<v-icon name="co-plus" scale="1.2" class="text-white" />
	</button>

	<Teleport to="body">
		<div
			v-show="modalOpen"
			class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
			<div class="w-full max-w-[400px] bg-white rounded-lg p-2 md:p-4">
				<h2 class="text-center text-[30px] text-slate-500">Add Todo</h2>
				<form
					@submit.prevent="submitTask"
					class="flex flex-col gap-y-6 items-center py-[40px]"
					id="add-todo">
					<input
						type="text"
						placeholder="Enter Todo"
						class="w-full h-[40px] rounded-md p-2 border border-slate-500"
						v-model="task"
						id="add-todo-input" />
					<button
						class="w-full bg-green-500 text-white border border-green-500 hover:bg-white hover:text-green-500 max-w-[200px] rounded-md h-[40px] no-select focus:shadow-md hover:shadow-md"
						type="submit">
						Add
					</button>
				</form>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['addTodo']);

const task = ref('');
const modalOpen = ref(false);

const openModal = () => (modalOpen.value = true);

const submitTask = () => {
	if (task.value.trim() === '') return;

	emit('addTodo', task.value);
	modalOpen.value = false;
	task.value = '';
};
</script>
