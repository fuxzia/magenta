<template>
  <section class="buttons-view">

    <section>

      <Heading size="lg">Typography</Heading>
      
      <div>
        <Heading>Text default</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora animi quisquam illo sed suscipit voluptate similique? Tempore explicabo ut itaque inventore facilis cumque, quisquam maxime magnam tempora ab impedit?</Text>
      </div>
      
      <div>
        <Heading>Text lg</Heading>
        <Text size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>

      <div>
        <Heading>Text 2lg</Heading>
        <Text size="2lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>

      <div>
        <Heading>Text small</Heading>
        <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>
      
      <div>
        <Heading>Text muted</Heading>
        <Text muted>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text italic</Heading>
        <Text italic>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text nowrap</Heading>
        <Text nowrap>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text ellipsis</Heading>
        <Text ellipsis>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text danger</Heading>
        <Text danger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text success</Heading>
        <Text success>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text primary</Heading>
        <Text primary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text bold</Heading>
        <Text bold>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text maxLines="5"</Heading>
        <Text :maxLines="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis possimus, debitis, repellat pariatur accusantium necessitatibus repudiandae placeat ratione nostrum quibusdam incidunt accusamus velit? Deserunt magni vero maiores qui fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa delectus possimus vitae, animi quod reiciendis soluta nesciunt et! Deserunt necessitatibus quibusdam explicabo beatae repudiandae dolorum omnis fuga! Praesentium, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cumque aliquam porro asperiores harum minus debitis illum numquam architecto eum blanditiis excepturi voluptas repellat vitae? Accusamus fugit hic velit culpa.</Text>
      </div>

      <div>
        <Heading>Text code</Heading>
        <Text :maxLines="5" code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis possimus, debitis, repellat pariatur accusantium necessitatibus repudiandae placeat ratione nostrum quibusdam incidunt accusamus velit? Deserunt magni vero maiores qui fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa delectus possimus vitae, animi quod reiciendis soluta nesciunt et! Deserunt necessitatibus quibusdam explicabo beatae repudiandae dolorum omnis fuga! Praesentium, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cumque aliquam porro asperiores harum minus debitis illum numquam architecto eum blanditiis excepturi voluptas repellat vitae? Accusamus fugit hic velit culpa.</Text>
      </div>
    </section>
    
    <section v-for="(button, key) in buttons" :key="key">
      
      <Heading size="2lg">{{ button.title }}</Heading>
      <Heading size="2lg" subtitle>{{ button.title }} subtitle</Heading>
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
import Text from './typography/Text.vue'

export default defineComponent({
  components: {
    Button,
    Heading,
    Text,
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
