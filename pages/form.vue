<template>
    <div class="container mx-auto p-6">
        <Card>
            <template #title>Simple Card</template>
            <template #content>                            
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="value" aria-describedby="username-help" size="small"/>
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const value =ref('');
</script>