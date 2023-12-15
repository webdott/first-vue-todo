<template>
	<ul class="flex flex-col w-full gap-y-4 my-6">
		<Todo
			v-for="todo in todos"
			:key="todo.id"
			:todo="todo"
			:toggle-todo="toggleTodo"
			:remove-todo="removeTodo" />
		<p
			v-show="todos.length === 0"
			class="text-center text-[18px] text-slate-600 font-medium">
			No todos to Show
		</p>
	</ul>
</template>

<script setup>
import Todo from '@/components/Todo.vue';

defineProps(['todos', 'toggleTodo', 'removeTodo']);
</script>
