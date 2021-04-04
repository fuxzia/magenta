---
title: Icon
---

This page will help you on how to create blog posts in Docusaurus.

## Create a Blog Post

Create a file at `blog/2021-02-28-greetings.md`:

```ts
---
<template>
  <Feather icon="box">
</template>

<script>
import { Feather } from '@magenta/ui'

export default {
  components: {
    Feather
  }
}
</script>
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`.
