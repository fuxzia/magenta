<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <div style="display:block; align-items: center">
    <MButton size="sm" icon="archive" style="margin-right: 15px;">Button text</MButton>
    <MButton size="sm" type="secondary" style="margin-right: 15px;">Button text</MButton>
    <MButton size="sm" icon="archive" style="margin-right: 15px;"/>
    <MButton size="sm" icon="arrow-right-circle" style="margin-right: 15px;"/>
    <MButton size="md" icon="trello" secondary style="margin-right: 15px;">Go to Trello</MButton>
    <MButton size="sm" icon="users" rounded style="margin-right: 15px;"/>
    <MButton style="margin-right: 15px;">Button text</MButton>
    <MButton type="secondary" style="margin-right: 15px;">Button text</MButton>
    <MButton size="lg" style="margin-right: 15px;">Button text</MButton>
    <MButton size="lg" icon="battery-charging" type="secondary" style="margin-right: 15px;">Button text</MButton>
  </div>

  <br/>
  <br/>

  <MButton size="lg" type="secondary" circle style="margin-right: 15px;" icon="activity" />

  <MButton size="lg" type="secondary" :outline="true" circle style="margin-right: 15px;" icon="bluetooth" loading/>

  <br/>
  <br/>

  <MButton size="sm" :outline="true" style="margin-right: 15px;">Button text</MButton>
  <MButton size="sm" style="margin-right: 15px;">Button text</MButton>
  <MButton :outline="true" style="margin-right: 15px;">Button text</MButton>
  <MButton size="md" style="margin-right: 15px;">Button text</MButton>
  <MButton size="lg" :outline="true" style="margin-right: 15px;">Button text</MButton>
  <MButton size="lg" style="margin-right: 15px;">Button text</MButton>

  <br/>
  <br/>

  <br/>
  <br/>

  <MButton size="sm" :outline="true" style="margin-right: 15px;" rounded>Button text</MButton>
  <MButton size="sm" style="margin-right: 15px;" rounded>Button text</MButton>
  <MButton :outline="true" style="margin-right: 15px;" rounded>Button text</MButton>
  <MButton size="md" style="margin-right: 15px;" rounded>Button text</MButton>
  <MButton size="lg" :outline="true" style="margin-right: 15px;" rounded loading>Button text</MButton>
  <MButton size="lg" style="margin-right: 15px;" rounded>Button text</MButton>

  <br/>
  <br/>

  <MButton size="sm" :outline="true" style="margin-right: 15px;" disabled>Button text</MButton>
  <MButton size="sm" disabled style="margin-right: 15px;">Button text</MButton>
  <MButton :outline="true" style="margin-right: 15px;">Button text</MButton>
  <MButton size="md" style="margin-right: 15px;">Button text</MButton>
  <MButton size="lg" :outline="true" style="margin-right: 15px;">Button text</MButton>
  <MButton size="lg" style="margin-right: 15px;">Button text</MButton>

  <br />

  <p>This is a text with icon <Feather icon="archive" /> inside.</p>
  <div>This is a text with icon <Feather icon="user" /> inside.</div>
  <p>This is a text with icon <Feather icon="award" /> inside.</p>
  <p>This is a text with icon <Feather icon="users" /> inside.</p>
  <p>This is a text with icon <Feather icon="bar-chart" /> inside.</p>

  <br />

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import MButton from './buttons/Button.vue'
import Feather from './icons/Feather.vue'

export default defineComponent({
  components: {
    MButton,
    Feather,
  },
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
