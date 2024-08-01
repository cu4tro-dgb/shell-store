<template>
  <section class="grid grid-cols-2 p-3 bg-gradient-custom">
    <article class=" relative flex">
      <header class="absolute top-0  w-full flex justify-between p-10 ">
        <i></i>
        <ULink
          to="/register"
          class="text-sm block text-gray-400 underline"
        >
          Create an account
        </ULink>
      </header>

      <div class="w-3/6 m-auto space-y-7 ">
        <div class="space-y-3">
          <h1 class="text-white text-4xl">Log in</h1>
          <p class="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <UForm
          class="flex flex-col gap-3"
          id="create account"
          :state="createState"
          :schema="loginSchema"
          @submit="onSubmit"
        >
          <UInput
            :ui="{
              padding: {
                sm: 'px-3 py-2.5'
              },
              color: {
                white: {
                  outline: ' ring-0 text-white dark:text-gray-900'
                }
              }
            }"
            v-model="createState.email"
            placeholder="Email"
          />
          <UInput
            :ui="{
              padding: {
                sm: 'px-3 py-2.5'
              },
              color: {
                white: {
                  outline: ' ring-0 text-white dark:text-gray-900'
                }
              }
            }"
            type="password"
            v-model="createState.password"
            placeholder="Enter your password"
          />
          <NuxtLink
            class="text-sm text-end block text-gray-400 underline"
            to="/forgot-password"
            >Forgot password</NuxtLink
          >
        </UForm>
        <UButton
          :ui="{
            padding: {
              sm: 'px-2.5 py-3'
            },
            variant: {
              solid: 'bg-steel-gray-900'
            }
          }"
          block
          type="submit"
          form="sign-in"
          label="Sign in"
        />
        <div class="flex gap-x-3">
          <UButton
            :ui="{
              base: 'flex-1',
              padding: {
                sm: 'px-2.5 py-3'
              }
            }"
            leading-icon="i-logos-google-icon"
            label="Google"
            variant="outline"
            block
          />
          <UButton
            :ui="{
              base: 'flex-1 ',
              padding: {
                sm: 'px-2.5 py-3'
              }
            }"
            block
            leading-icon="i-logos-apple"
            label="Apple"
            variant="outline"
          />
        </div>
      </div>
    </article>

    <article class="relative">
      <NuxtImg
        class="rounded-lg h-[calc(100vh-24px)] object-cover w-full"
        src="/bg-login.jpg"
      />
      <header class="absolute top-0 left-0 w-full flex justify-between p-4">
        <i></i>
        <ULink
          to="/"
          class="relative backdrop-blur-[200px] py-1 px-3 rounded-2xl text-xs flex items-center gap-x-2 text-white"
        >
          Back to website
          <UIcon name="i-heroicons-arrow-right" />
        </ULink>
      </header>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { loginSchema, type LoginSchema } from '~/schema/Auth'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth-layout'
})

const createState = reactive({
  email: undefined,
  password: undefined,
})

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  const { data, error, refresh } = await useFetch('api/auth/login', {
    method: 'POST',
    baseURL: 'http://localhost:3000/',
    body: event.data
  })

  if (error.value) {
    console.log(error.value.message)
  }
  console.log(data.value)
}
</script>

<style scoped>
.bg-gradient-custom {
  background: rgb(133, 103, 210);
  background: radial-gradient(
    circle,
    rgba(133, 103, 210, 1) 0%,
    rgba(81, 64, 128, 1) 22%,
    rgba(56, 44, 85, 1) 38%,
    rgba(51, 40, 80, 1) 50%,
    rgba(48, 37, 77, 1) 62%,
    rgba(29, 23, 46, 1) 73%,
    rgba(6, 5, 9, 1) 100%
  );
}
</style>
