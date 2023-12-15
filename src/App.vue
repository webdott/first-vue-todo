<script setup>
import DateHeader from '@/components/DateHeader.vue';
import Todos from '@/components/Todos.vue';
import InputTodos from '@/components/InputTodos.vue';
import { ref } from 'vue';

const todos = ref([
	{
		id: 1,
		task: 'hello',
		done: true,
	},
]);

const toggleTodo = (id) => {
	const todo = todos.value.find((todo) => todo.id === id);

	if (todo) {
		todo.done = !todo.done;
	}
};

const removeTodo = (id) => {
	todos.value = todos.value.filter((todo) => todo.id !== id);
};

const addTodo = (task) => {
	todos.value.push({
		id: (todos.value[todos.value.length - 1]?.id ?? 0) + 1,
		task,
		done: false,
	});
};
</script>

<template>
	<div
		class="w-screen min-h-screen bg-slate-400 bg-opacity-50 flex items-center justify-center">
		<div
			class="bg-white w-full max-w-[400px] h-full max-h-[90%] py-6 p-4 relative">
			<DateHeader />
			<Todos
				:todos="todos"
				:toggle-todo="toggleTodo"
				:remove-todo="removeTodo" />

			<InputTodos @add-todo="addTodo" />
		</div>
	</div>
</template>
