<template>
  <section class="buttons-view">
    
    <section v-for="(button, key) in buttons" :key="key">
      
      <Heading size="lg">{{ button.title }}</Heading>
      <Heading size="lg" subtitle>{{ button.title }} subtitle</Heading>
      <Heading size="md">{{ button.title }}</Heading>
      <Heading size="md" subtitle>{{ button.title }} subtitle</Heading>
      <Heading size="sm">{{ button.title }}</Heading>
      <Heading :label="`${button.title} subtitle`" subtitle/>
      
      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="md" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="anchor">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="award">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="x">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="anchor" rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="award" rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="x" rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="upload-cloud"/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="box"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
      </div>
    </section>

  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Button from './buttons/Button.vue'
import Heading from './typography/Heading.vue'

export default defineComponent({
  components: {
    Button,
    Heading
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
    const buttons = [
      {
        title: 'Primary buttons',
        outline: false,
        secondary: false,
        danger: false,
      },
      {
        title: 'Secondary buttons',
        outline: false,
        secondary: true,
        danger: false,
      },
      {
        title: 'Outline buttons',
        outline: true,
        secondary: false,
        danger: false,
      },
      {
        title: 'Danger buttons',
        outline: false,
        secondary: false,
        danger: true,
      },
    ]
    return { count, buttons }
  }
})
</script>

<style lang="scss" scoped>
.buttons-view {
  .buttons {
    margin: 60px 0;

    button {
      margin-right: 15px;
    }
  }
}
</style>
