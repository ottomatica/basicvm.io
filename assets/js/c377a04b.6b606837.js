"use strict";(self.webpackChunkbasicvm=self.webpackChunkbasicvm||[]).push([[971],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=i,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1269:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:1},l="basicvm Intro",m={unversionedId:"index",id:"index",title:"basicvm Intro",description:"Let's discover basicvm in less than 2 minutes and with 3 commands.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/basicvm.io/docs/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"Commands",id:"commands",children:[{value:"pull",id:"pull",children:[],level:3},{value:"ls-remote",id:"ls-remote",children:[],level:3},{value:"images",id:"images",children:[],level:3},{value:"start",id:"start",children:[],level:3},{value:"stop",id:"stop",children:[],level:3},{value:"rm",id:"rm",children:[],level:3},{value:"ssh",id:"ssh",children:[],level:3},{value:"ssh-config",id:"ssh-config",children:[],level:3},{value:"list",id:"list",children:[],level:3}],level:2}],u={toc:c};function p(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basicvm-intro"},"basicvm Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"basicvm in less than 2 minutes")," and with 3 commands."),(0,o.kt)("script",{id:"asciicast-HxikoQMZHDJhujmt27moweaPc",src:"https://asciinema.org/a/HxikoQMZHDJhujmt27moweaPc.js",async:!0}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"basicvm is currently only available on Mac App store."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"available in app store",src:t(2999).Z})),(0,o.kt)("p",null,"After installation, open the app, this will add the command line component of basicvm to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," envrironment variable automatically, and you will be able run ",(0,o.kt)("inlineCode",{parentName:"p"},"vm")," command in your terminal."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can check status of your running virtual machines using the menu bar icon. You can also close the GUI app if you would like, by clicking on the quit button. Quitting the GUI app will not effect your running virtual machines, and cli component of basicvm can be used separately."))),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"pulling the default base image for virtual machines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vm pull\n")),(0,o.kt)("p",null,"And then create and start a virtual machine by running by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vm start\n")),(0,o.kt)("p",null,"and now you have a headless linux virtual machine running. It's that basic!"),(0,o.kt)("p",null,"connect the virtual machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vm ssh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You only need to pull the base images if you haven't done it before, next time just start your virtual machines!"))),(0,o.kt)("p",null,"Let's do something ",(0,o.kt)("strong",{parentName:"p"},"more advanced"),", like creating multiple virtual machines, or using different base images, setting amount of memory you want to share with your virtual machine, or the number of cpu cores for the vm."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"basicvm cli component is automatically added to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable the first time you open the app. The cli tool is called ",(0,o.kt)("inlineCode",{parentName:"p"},"vm")," (can't get more basic than that \ud83d\ude09). ",(0,o.kt)("inlineCode",{parentName:"p"},"vm")," supports many commands and args which we will explain in this section."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using basicvm (and really any other tool), ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," is always there for you for a quick reference. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"vm --help")," to see a list of supported commands, or run ",(0,o.kt)("inlineCode",{parentName:"p"},"vm {command} --help")," to get more details (and examples) for that specific command."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm --help\nvm <command>\n\nCommands:\n  vm exec [name] [command...]  Run a command in a running virtual machine\n  vm images                    list of local virtual machine images (check `ls-remote` for\n                               supported images you can pull)`\n  vm list                      list of existing virtual machine and their status [aliases: ls]\n  vm ls-remote                 Get list of official suppoerted base images\n  vm pull [image]              Pull a base image from official linux distro repositories; get\n                               supported list in `ls-remote` command\n  vm rm [name]                 Remove an existing virtual machine\n  vm ssh-config [name]         Get ssh configuration for connecting to the specified virtul\n                               machine\n  vm ssh [name]                Ssh to a running virtual machine\n  vm start [name] [image]      Create/run a virtual machine                     [aliases: run]\n  vm stop [name]               Stop an existing virtual machine\n\nOptions:\n  --version  Show version number                                                     [boolean]\n  --help     Show help                                                               [boolean]\n\nVersion: 1.0.0\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"In this section we explain and show an example for all the commands and their supported options/args."),(0,o.kt)("h3",{id:"pull"},"pull"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pull")," command downloads a base image and stores it on your system. You can think of this as the template for creating virtual machine. This commands has an optional argument which is name of the image. If you don't specify an image, basicvm will automatically download latest LTS Ubuntu image available. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm pull [image]\n\n# example: pull ubuntu:jammy image\n$ vm pull ubuntu:jammy\n\n# example: pull ubuntu:xenial image, replace the local version if any (in case you want to update)\n$ vm pull ubuntu:xenial --force\n")),(0,o.kt)("h3",{id:"ls-remote"},"ls-remote"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ls-remote")," command displays a list of suppoted base images. You can use this command to find which image names you can use with ",(0,o.kt)("inlineCode",{parentName:"p"},"pull")," command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm ls-remote       \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                 (index)                 \u2502      name       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502   Ubuntu 22.04 LTS (Jammy Jellyfish)    \u2502 'ubuntu:jammy'  \u2502\n\u2502  Ubuntu Server 20.04 LTS (Focal Fossa)  \u2502 'ubuntu:focal'  \u2502\n\u2502 Ubuntu Server 18.04 LTS (Bionic Beaver) \u2502 'ubuntu:bionic' \u2502\n\u2502 Ubuntu Server 16.04 LTS (Xenial Xerus)  \u2502 'ubuntu:xenial' \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h3",{id:"images"},"images"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"images")," command simply displays a list of base images that you have previously pulled on your system."),(0,o.kt)("h3",{id:"start"},"start"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"start")," command can be used to either create a new virtual machine, or start an existing one. You can (optionally) specify arguments for the name and image you want to use for this virtual machine. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm start [name] [image]\n\n# example: start a vm with name `basicvm` and latest LTS Ubuntu image  \n$ vm start\n\n# example: start a vm with name v1 and `ubuntu:xenial` image\n$ vm start v1 ubuntu:xenial\n\n# example: start a vm with name v1, `ubuntu:xenial` image, 2GB of memory and 2 CPU cores\n$ vm start v1 ubuntu:xenial --memory 2 --cpus 2\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Pro tip:")," basicvm virtual machines use cloud-init out of the box, if you want to attach your own seed image when starting a vm, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--seed")," option and give it path to your seed .iso file. "))),(0,o.kt)("h3",{id:"stop"},"stop"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stop")," command simply stops a virtual machine, given the name of that virtual machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm stop [name]\n\n# example: stop the vm name v1\n$ vm stop v1\n")),(0,o.kt)("h3",{id:"rm"},"rm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rm")," command removed a virtual machine, given the name of that virtual machine. If the vm is in running state cannot remove it. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," with remove command to first stop the virtual machine and then remove it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm rm [name]\n\n# example: remove the vm name v1\n$ vm rm v1\n\n# example: stop v1 vm if running, and then remove it\n$ vm rm v1 --force\n")),(0,o.kt)("h3",{id:"ssh"},"ssh"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," command simply uses ssh to connect to your virtual machine. You can specify the name of your vm and basicvm will connect you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm ssh [name]\n\n# example: ssh to the default vm (name = basicvm)\n$ vm ssh\n\n# example: ssh to the v1 vm\n$ vm ssh v1\n")),(0,o.kt)("h3",{id:"ssh-config"},"ssh-config"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ssh-config")," displays ssh information for a specific virtual machine. The output of this command is a proper ssh configuration file which you can append to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," if you would like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm ssh-config [name]\n\n# example: get ssh-config for v1 vm\n$ vm ssh-config v1\n")),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command displays a list of your virtual machines, their status (running, stopped) and their ip address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vm list\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (index) \u2502  status   \u2502       ip        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 basicvm \u2502 'running' \u2502 '192.168.64.11' \u2502\n\u2502   v2    \u2502 'stopped' \u2502 '192.168.64.10' \u2502\n\u2502   v1    \u2502 'running' \u2502 '192.168.64.9'  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}p.isMDXComponent=!0},2999:function(e,n,t){n.Z=t.p+"assets/images/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917-1d39e8dace6b366637c5a86a05efe854.svg"}}]);