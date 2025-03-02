<script setup lang="ts">
import { ref } from 'vue';
import FormField from '@/components/FormField.vue';
import FormTextarea from '@/components/FormTextarea.vue';
import '../css/style.scss';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const name = ref('');
const ageIC = ref('');
const ageOOC = ref('');
const discordId = ref('');
const steamUrl = ref('');
const dailyTime = ref('');
const experiencePrevious = ref('');
const whyChooseMe = ref('');
const whyUsAndNotOther = ref('');
const successMessage = ref('');
const errorMessage = ref('');

async function handleSubmit() {
  const payloadSections = [
    `- **Nombre y Apellidos IC:** ${name.value}`,
    `- **Edad IC:** ${ageIC.value}`,
    `- **Edad OOC:** ${ageOOC.value}`,
    `- **Nombre de Discord:** ${discordId.value}`,
    `- **Steam:** ${steamUrl.value}`,
    `- **Tiempo Disponible Diario:** ${dailyTime.value}`,
    `- **Experiencia previa:** ${experienciePrevious.value}`,
    `- **¿Por qué deberiamos escogerte?:** ${whyCooseMe.value}`,
    `- **¿Por qué nosotros y no el Salieri's?:** ${whyUsAndNotOther.value}`,
  ];

  try {
    await sendToDiscord(payloadSections);
    successMessage.value = 'Mensaje enviado con éxito';
    errorMessage.value = '';
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
    resetForm();
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = 'Error al enviar el mensaje.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000);
    console.error(error);
  }
}

async function sendToDiscord(sections: string[]) {
  const maxMessageLength = 2000;
  let messageBuffer = '# Nueva Respuesta Formulario BurguerShot:\n';
  const username = 'Muhaddil Form Sender';
  const avatar_url = 'https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true';

  for (const section of sections) {
    if (messageBuffer.length + section.length + 1 > maxMessageLength) {
      await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
      messageBuffer = section + '\n';
    } else {
      messageBuffer += section + '\n';
    }
  }

  if (messageBuffer.trim().length > 0) {
    await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendMessageToWebhook(content: string, username: string, avatar_url: string) {
  await delay(200);

  if (!content.trim()) {
    throw new Error('El contenido del mensaje está vacío.');
  }

  const payload = {
    username: username,
    avatar_url: avatar_url,
    content: content,
  };

  const response = await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`Error en la respuesta del servidor: ${response.status} - ${responseText}`);
  }
}

function resetForm() {
  name.value = '';
  ageIC.value = '';
  ageOOC.value = '';
  discordId.value = '';
  steamUrl.value = '';
  dailyTime.value = '';
  experiencePrevious.value = '';
  whyChooseMe.value = '';
  whyUsAndNotOther.value = '';
}
</script>

<template>
  <div :class="['form-container']">
    <form @submit.prevent="handleSubmit" class="form">
      <FormField id="name" label="Nombre y Apellidos IC" type="text" placeholder="Ingresa tu nombre y apellidos IC"
        v-model="name" required />
      <FormField id="ageIC" label="Edad IC" type="text" placeholder="Ingresa tu edad IC" v-model="ageIC" required
        :maxlength="2" />
      <FormField id="ageOOC" label="Edad OOC" type="text" placeholder="Ingresa tu edad OOC" v-model="ageOOC" required
        :maxlength="2" />
      <FormField id="discordId" label="ID de Discord" type="text" placeholder="Ingresa tu nombre de Discord"
        v-model="discordId" required />
      <FormField id="steamUrl" label="URL de Steam" type="url" placeholder="Ingresa tu nombre de Steam" v-model="steamUrl"
        required />
      <FormField id="dailyTime" label="Tiempo Disponible Diario" type="text" placeholder="Ejemplo: 2 horas diarias"
        v-model="dailyTime" required />
      <FormTextarea id="experiencePrevious" label="Experiencia Previa"
        placeholder="Dinos tu experiencia en el ambito de la hosteleria" v-model="experiencePrevious" required />
      <FormTextarea id="whyChooseMe" label="¿Por qué deberíamos elegirte?"
        placeholder="Explica por qué deberíamos elegirte" v-model="whyChooseMe" required />
      <FormTextarea id="whyUsAndNotOther" label="¿Por qué nosotros y no el Salieri's?"
        placeholder="Explica porque nos eliges a nosotros y no al Salieri's" v-model="whyUsAndNotOther" required />
      <button type="submit">Enviar</button>
    </form>
    <div v-if="successMessage" class="toast success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="toast error">{{ errorMessage }}</div>
  </div>
</template>
