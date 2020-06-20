(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{493:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh远程免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh远程免密登录"}},[s._v("#")]),s._v(" ssh远程免密登录")]),s._v(" "),a("h3",{attrs:{id:"利用ssh-key实现linux免密访问github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用ssh-key实现linux免密访问github"}},[s._v("#")]),s._v(" 利用ssh key实现Linux免密访问github")]),s._v(" "),a("p",[s._v("使用git bash的windows用户或者linux用户对上传到远端版本库软件（github，gitee等代码托管仓库）时，\n发现每次git push 或者是 git pull等命令是需要输入自己的账号和密钥时，\n一次两次还好，每次都做这没啥技术含量的动作，就感觉很繁琐和烦躁，\n所以，学会使用ssh免密访问必不可少，对我们之后的工作，学习都有好处（这里以linux命令为演示，Windows用git bash一样的处理）")]),s._v(" "),a("h3",{attrs:{id:"_1-生成ssh-key，使用默认保存位置（注意要求输入密码时直接回车，否则每次要输密码）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成ssh-key，使用默认保存位置（注意要求输入密码时直接回车，否则每次要输密码）"}},[s._v("#")]),s._v(" 1 生成ssh key，使用默认保存位置（注意要求输入密码时直接回车，否则每次要输密码）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-keygen -t rsa")]),s._v("\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/root/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:CvE7bPPDYb1EnQsGsDjs8uqUoiW2XH8g36ycVixmJBw root@localhost.localdomain\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   E "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   + "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("    + o    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o S+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" B "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("o o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("o.+.* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("o o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v("o.o+.Bo "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".+o ."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_2-将公钥文件-root-ssh-id-rsa-pub上传到github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-将公钥文件-root-ssh-id-rsa-pub上传到github"}},[s._v("#")]),s._v(" 2 将公钥文件/root/.ssh/id_rsa.pub上传到github")]),s._v(" "),a("p",[s._v("在个人用户头像选择settings–>>SSH and GPG keys")]),s._v(" "),a("p",[s._v("显示如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180609185051636",alt:"ssh"}})]),s._v(" "),a("p",[s._v("用命令行输入指令并复制显示出来的数据（或用记事本打开文件，然后拷贝内容到github）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd .ssh/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cat id_rsa.pub")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180609185425339",alt:"key"}})]),s._v(" "),a("h3",{attrs:{id:"_3-测试（切换为ssh方式，而不是默认的http方式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试（切换为ssh方式，而不是默认的http方式）"}},[s._v("#")]),s._v(" 3 测试（切换为ssh方式，而不是默认的http方式）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180609190534672",alt:"test"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add origin git@github.com:username/repository.git")]),s._v("\n//username:你的github或其它远程代码托管仓库的用户名，repository:你的克隆仓库\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -u origin master")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);