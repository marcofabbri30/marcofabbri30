<template>
    <div class="container mx-auto p-6">
        <Card>
            <template #title>Simple Card</template>
            <template #content>                            
                <FloatLabel>
                    <InputText id="username" v-model="value" />
                    <label for="username">Username</label>
                </FloatLabel>
            </template>
        </Card>
    </div>
</template>

<script setup>
const value =ref('');
</script>