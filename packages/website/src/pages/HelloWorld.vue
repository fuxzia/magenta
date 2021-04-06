<template>
  <section class="buttons-view">

    <section>

      <Heading size="lg">Avatars</Heading>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" image="https://i.pravatar.cc/300" />
        <Avatar size="md" image="https://i.pravatar.cc/300" />
        <Avatar size="lg" image="https://i.pravatar.cc/300" />
        <Avatar size="xlg" image="https://i.pravatar.cc/300" />
        <Avatar size="xxlg" image="https://i.pravatar.cc/300" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xlg" />
        <Avatar size="xxlg" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" square />
        <Avatar size="md" square />
        <Avatar size="lg" square />
        <Avatar size="xlg" square />
        <Avatar size="xxlg" square />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square  image="https://i.pravatar.cc/300" />
        <Avatar size="md"  square image="https://i.pravatar.cc/300" />
        <Avatar size="lg"  square image="https://i.pravatar.cc/300" />
        <Avatar size="xlg" square  image="https://i.pravatar.cc/300" />
        <Avatar size="xxlg" square  image="https://i.pravatar.cc/300" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square>US</Avatar>
        <Avatar size="md"  square>US</Avatar>
        <Avatar size="lg"  square>US</Avatar>
        <Avatar size="xlg" square>US</Avatar>
        <Avatar size="xxlg" square>US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" >US</Avatar>
        <Avatar size="md" >US</Avatar>
        <Avatar size="lg" >US</Avatar>
        <Avatar size="xlg">US</Avatar>
        <Avatar size="xxlg">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" badge="red">US</Avatar>
        <Avatar size="md" badge="green">US</Avatar>
        <Avatar size="lg" badge="gray">US</Avatar>
        <Avatar size="xlg" badge="red">US</Avatar>
        <Avatar size="xxlg" badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" badge="red" :badgeNumber="99">US</Avatar>
        <Avatar size="md" badge="green" :badgeNumber="7">US</Avatar>
        <Avatar size="lg" badge="gray" :badgeNumber="77">US</Avatar>
        <Avatar size="xlg" badge="red" :badgeNumber="84">US</Avatar>
        <Avatar size="xxlg" badge="green" :badgeNumber="25">US</Avatar>
      </div>
      
      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" >US</Avatar>
        <Avatar size="md"  square badge="green">US</Avatar>
        <Avatar size="lg"  square badge="gray">US</Avatar>
        <Avatar size="xlg" square  badge="red">US</Avatar>
        <Avatar size="xxlg" square  badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" >US</Avatar>
        <Avatar size="md"  square badge="green">US</Avatar>
        <Avatar size="lg"  square badge="gray">US</Avatar>
        <Avatar size="xlg" square  badge="red">US</Avatar>
        <Avatar size="xxlg" square  badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" :badgeNumber="99" image="https://i.pravatar.cc/300"/>
        <Avatar size="md"  square badge="green" :badgeNumber="7" image="https://i.pravatar.cc/300"/>
        <Avatar size="lg"  square badge="gray" :badgeNumber="77" image="https://i.pravatar.cc/300"/>
        <Avatar size="xlg" square  badge="red" :badgeNumber="84" image="https://i.pravatar.cc/300"/>
        <Avatar size="xxlg" square  badge="green" :badgeNumber="25" image="https://i.pravatar.cc/300"/>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  badge="red" :badgeNumber="99" image="https://i.pravatar.cc/300"/>
        <Avatar size="md"  badge="green" :badgeNumber="7" image="https://i.pravatar.cc/300"/>
        <Avatar size="lg"  badge="gray" :badgeNumber="77" image="https://i.pravatar.cc/300"/>
        <Avatar size="xlg"  badge="red" :badgeNumber="84" image="https://i.pravatar.cc/300"/>
        <Avatar size="xxlg"  badge="green" :badgeNumber="25" image="https://i.pravatar.cc/300"/>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  badge="red" image="https://i.pravatar.cc/300"/>
        <Avatar size="md"  badge="green" image="https://i.pravatar.cc/300"/>
        <Avatar size="lg"  badge="gray" image="https://loremflickr.com/640/360"/>
        <Avatar size="xlg"  badge="red" image="https://i.pravatar.cc/300"/>
        <Avatar size="xxlg"  badge="green" image="https://i.pravatar.cc/300"/>
      </div>

    </section>

    <section>

      <Heading size="lg">Typography</Heading>
      <Spacer size="lg" />
      
      <div>
        <Heading>Text default</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora animi quisquam illo sed suscipit voluptate similique? Tempore explicabo ut itaque inventore facilis cumque, quisquam maxime magnam tempora ab impedit?</Text>
      </div>

      <div>
        <Heading>Text with no spacer after</Heading>
        <Text :spacerAfter="false">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora animi quisquam illo sed suscipit voluptate similique? Tempore explicabo ut itaque inventore facilis cumque, quisquam maxime magnam tempora ab impedit?</Text>
      </div>
      
      <div>
        <Heading>Text lg</Heading>
        <Text size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>

      <div>
        <Heading>Text xlg</Heading>
        <Text size="xlg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
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

      <div>
        <Heading>Code block</Heading>
        <Code content="<template>
  <Feather icon=`box` />
</template>

<script>
import { Feather } from '@magenta/ui'
</script>"/>
      </div>
    </section>
    
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
import { Avatar, Button, Code, Heading, Text, Spacer } from '@magenta-ui/components'

export default defineComponent({
  components: {
    Avatar,
    Button,
    Heading,
    Text,
    Code,
    Spacer,
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
