<template>
  <section class="grid grid-cols-2 p-3">
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

    <article class="w-4/6 m-auto space-y-7">
      <h1 class="text-white text-4xl">Create an account</h1>
      <h5 class="text-sm text-gray-400">
        Already have an account?
        <NuxtLink class="underline text-steel-gray-600" to="/login"
          >Log in</NuxtLink
        >
      </h5>
      <UForm
        class="flex flex-col gap-3"
        id="create account"
        :state="createState"
        :schema="registerSchema"
        @submit="onSubmit"
      >
        <div class="flex gap-x-3">
          <UInput
            :ui="{
              wrapper: 'flex-1',
              padding: {
                sm: 'px-3 py-2.5'
              },
              color: {
                white: {
                  outline:
                    'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
                }
              }
            }"
            v-model="createState.firstname"
            placeholder="First name"
          />
          <UInput
            :ui="{
            wrapper: 'flex-1',

              padding: {
                sm: 'px-3 py-2.5'
              },
              color: {
                white: {
                  outline:
                    'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
                }
              }
            }"
            v-model="createState.lastname"
            placeholder="Last name"
          />
        </div>
        <UInput
          :ui="{
            padding: {
              sm: 'px-3 py-2.5'
            },
            color: {
              white: {
                outline:
                  'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
              }
            }
          }"
          v-model="createState.username"
          placeholder="Username"
        />
        <UInput
          :ui="{
            padding: {
              sm: 'px-3 py-2.5'
            },
            color: {
              white: {
                outline:
                  'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
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
                outline:
                  'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
              }
            }
          }"
          type="password"
          v-model="createState.password"
          placeholder="Enter your password"
        />
        <UInput
          :ui="{
            padding: {
              sm: 'px-3 py-2.5'
            },
            color: {
              white: {
                outline:
                  'bg-steel-gray-900 dark:bg-transparent ring-0 text-white dark:text-gray-900'
              }
            }
          }"
          type="password"
          v-model="createState.check_password"
          placeholder="Enter your confirm password"
        />
      </UForm>
      <UButton
        :ui="{
          padding: {
            sm: 'px-2.5 py-3'
          },
          variant: {
            solid: 'bg-blue-violet-600'
          }
        }"
        block
        type="submit"
        form="create-account"
        label="Create account"
      />
      <UDivider
        :ui="{
          label: 'text-xs',
          container: { base: 'font-normal text-gray-500 dark:text-gray-500' },
          border: {
            base: ' border-gray-500 dark:border-gray-500'
          }
        }"
        label="Or register with"
        orientation="horizontal"
      />
      <div class="flex gap-x-3">
        <UButton
        :ui="{
          base: 'flex-1',
          padding: {
            sm: 'px-2.5 py-3'
          },
          
        }"
          leading-icon="i-logos-google-icon"
          label="Google"
          variant="outline"
          block
        />
        <UButton :ui="{
          base: 'flex-1 ',
          padding: {
            sm: 'px-2.5 py-3'
          },
          
        }"  block leading-icon="i-logos-apple" label="Apple" variant="outline" />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { registerSchema, type RegisterSchema } from '~/schema/Auth'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth-layout'
})

const createState = reactive({
  firstname: undefined,
  lastname: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
  check_password: undefined
})

async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
  const { data, error, refresh } = await useFetch('api/auth/register', {
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

<style>

</style>
