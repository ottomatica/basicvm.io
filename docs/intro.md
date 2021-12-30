---
sidebar_position: 1
---

# basicvm Intro

Let's discover **basicvm in less than 2 minutes**.

<script id="asciicast-HxikoQMZHDJhujmt27moweaPc" src="https://asciinema.org/a/HxikoQMZHDJhujmt27moweaPc.js" async></script>

## Installation

basicvm is currently only available on Mac App store.

![available in app store](/img/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg)

After installation, open the app, this will add the command line component of basicvm to your `$PATH` envrironment variable automatically, and you will be able run `vm` command in your terminal.

## Getting Started

Get started by **pulling the default base image for virtual machines**.

```bash
vm pull
```

And then create and start a virtual machine by running by running:

```bash
vm start
```

and now you have a headless linux virtual machine running. It's that basic!

connect the virtual machine by running:

```bash
vm ssh
```

:::note
You only need to pull the base images if you haven't done it before, next time just start your virtual machines!
:::


Let's do something **[more advanced](./advanced.md)**, like creating multiple virtual machines, or using different base images, setting amount of memory you want to share with your virtual machine, number of cpu cores and more.**.

### GUI menu bar icon

You can check status of your running virtual machines using the menu bar icon. You can also close the GUI app if you would like, by clicking on the quit button. Quitting the GUI app will not effect your running virtual machines, and cli component of basicvm can be used separately.

