---
sidebar_position: 1
---

# basicvm Intro

Let's discover **basicvm in less than 2 minutes** and with 3 commands.

<script id="asciicast-HxikoQMZHDJhujmt27moweaPc" src="https://asciinema.org/a/HxikoQMZHDJhujmt27moweaPc.js" async></script>

## Installation

basicvm is currently only available on Mac App store.

![available in app store](/img/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg)

After installation, open the app, this will add the command line component of basicvm to your `$PATH` envrironment variable automatically, and you will be able run `vm` command in your terminal.

:::info
You can check status of your running virtual machines using the menu bar icon. You can also close the GUI app if you would like, by clicking on the quit button. Quitting the GUI app will not effect your running virtual machines, and cli component of basicvm can be used separately.
:::


## Quick Start

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


Let's do something **more advanced**, like creating multiple virtual machines, or using different base images, setting amount of memory you want to share with your virtual machine, or the number of cpu cores for the vm.


---

## Advanced

basicvm cli component is automatically added to your `$PATH` environment variable the first time you open the app. The cli tool is called `vm` (can't get more basic than that :wink:). `vm` supports many commands and args which we will explain in this section.

:::note
When using basicvm (and really any other tool), `--help` is always there for you for a quick reference. You can run `vm --help` to see a list of supported commands, or run `vm {command} --help` to get more details (and examples) for that specific command.
:::

```
$ vm --help
vm <command>

Commands:
  vm exec [name] [command...]  Run a command in a running virtual machine
  vm images                    list of local virtual machine images (check `ls-remote` for
                               supported images you can pull)`
  vm list                      list of existing virtual machine and their status [aliases: ls]
  vm ls-remote                 Get list of official suppoerted base images
  vm pull [image]              Pull a base image from official linux distro repositories; get
                               supported list in `ls-remote` command
  vm rm [name]                 Remove an existing virtual machine
  vm ssh-config [name]         Get ssh configuration for connecting to the specified virtul
                               machine
  vm ssh [name]                Ssh to a running virtual machine
  vm start [name] [image]      Create/run a virtual machine                     [aliases: run]
  vm stop [name]               Stop an existing virtual machine

Options:
  --version  Show version number                                                     [boolean]
  --help     Show help                                                               [boolean]

Version: 1.0.0
```

## Commands

In this section we explain and show an example for all the commands and their supported options/args.

### pull

`pull` command downloads a base image and stores it on your system. You can think of this as the template for creating virtual machine. This commands has an optional argument which is name of the image. If you don't specify an image, basicvm will automatically download latest LTS Ubuntu image available. 

```
$ vm pull [image]

# example: pull ubuntu:jammy image
$ vm pull ubuntu:jammy

# example: pull ubuntu:xenial image, replace the local version if any (in case you want to update)
$ vm pull ubuntu:xenial --force
```

### ls-remote

`ls-remote` command displays a list of suppoted base images. You can use this command to find which image names you can use with `pull` command

```
$ vm ls-remote       
┌─────────────────────────────────────────┬─────────────────┐
│                 (index)                 │      name       │
├─────────────────────────────────────────┼─────────────────┤
│   Ubuntu 22.04 LTS (Jammy Jellyfish)    │ 'ubuntu:jammy'  │
│  Ubuntu Server 20.04 LTS (Focal Fossa)  │ 'ubuntu:focal'  │
│ Ubuntu Server 18.04 LTS (Bionic Beaver) │ 'ubuntu:bionic' │
│ Ubuntu Server 16.04 LTS (Xenial Xerus)  │ 'ubuntu:xenial' │
└─────────────────────────────────────────┴─────────────────┘
```

### images

`images` command simply displays a list of base images that you have previously pulled on your system.

### start

`start` command can be used to either create a new virtual machine, or start an existing one. You can (optionally) specify arguments for the name and image you want to use for this virtual machine. 

```
$ vm start [name] [image]

# example: start a vm with name `basicvm` and latest LTS Ubuntu image  
$ vm start

# example: start a vm with name v1 and `ubuntu:xenial` image
$ vm start v1 ubuntu:xenial

# example: start a vm with name v1, `ubuntu:xenial` image, 2GB of memory and 2 CPU cores
$ vm start v1 ubuntu:xenial --memory 2 --cpus 2
```

:::info
**Pro tip:** basicvm virtual machines use cloud-init out of the box, if you want to attach your own seed image when starting a vm, you can use `--seed` option and give it path to your seed .iso file. 
:::

### stop

`stop` command simply stops a virtual machine, given the name of that virtual machine.

```
$ vm stop [name]

# example: stop the vm name v1
$ vm stop v1
```

### rm

`rm` command removed a virtual machine, given the name of that virtual machine. If the vm is in running state cannot remove it. Use `--force` with remove command to first stop the virtual machine and then remove it.

```
$ vm rm [name]

# example: remove the vm name v1
$ vm rm v1

# example: stop v1 vm if running, and then remove it
$ vm rm v1 --force
```

### ssh

`ssh` command simply uses ssh to connect to your virtual machine. You can specify the name of your vm and basicvm will connect you.

```
$ vm ssh [name]

# example: ssh to the default vm (name = basicvm)
$ vm ssh

# example: ssh to the v1 vm
$ vm ssh v1
```

### ssh-config

`ssh-config` displays ssh information for a specific virtual machine. The output of this command is a proper ssh configuration file which you can append to your `~/.ssh/config` if you would like.

```
$ vm ssh-config [name]

# example: get ssh-config for v1 vm
$ vm ssh-config v1
```

### list

`list` or `ls` command displays a list of your virtual machines, their status (running, stopped) and their ip address:

```
$ vm list
┌─────────┬───────────┬─────────────────┐
│ (index) │  status   │       ip        │
├─────────┼───────────┼─────────────────┤
│ basicvm │ 'running' │ '192.168.64.11' │
│   v2    │ 'stopped' │ '192.168.64.10' │
│   v1    │ 'running' │ '192.168.64.9'  │
└─────────┴───────────┴─────────────────┘
```

