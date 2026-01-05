## 1.

一个计算机上安装 JDK 后，该计算机不包含的是（）。

A.JRE

B.JVM

C.Eclipse

D.javac.exe

## 2.

关于 Java 语言的描述，错误的是（）。

A.每一个.java 文件编译后对应一个.class 文件。

B..java 文件编译后，每一个 class 对应一个.class 文件

C.Java 源代码编译后产生的.class 是字节码文件

D..class 文件在 JVM 上运行

## 3.

下面哪个标识符不符合 Java 定义要求？

A.String

B.\_Name

C.Name123

D.100Book

## 4.

下列哪个叙述是正确的？

A.Java 应用程序由若干个类所构成，这些类必须在一个源文件中

B.Java 源文件必须含有主类

C.Java 源文件的文件名必须与 public 类名完全相同

D.Java 应用程序由若干个类所构成，这些类可以在一个源文件中，也可以分布在若干个源文件中，其中每个源文件必须含有主类。

## 5.

以下哪个标识符不合法？

A.\_sys1_lll

B.2mail

C.$change

D.Class

## 6.

Java 应用程序源文件的扩展名为( )。

A.java

B.class

C.exe

D.html

## 7.

Java 应用程序经过编译后会产生一个以（ ）为扩展名的字节码文件

A.java

B.class

C.exe

D.html

## 8.

哪一种类型的代码被 JVM 解释成本地代码？

A.源代码

B.处理器代码

C.字节码

D..exe 可执行代码

## 9.

编译 Java 源文件和解释执行 Java 字节码文件的指令分别是什么？

A.javac.exe 和 javadoc.exe

B.java.exe 和 jdb.exe

C.jad.exe 和 java.exe

D.javac.exe 和 java.exe

## 10.

在 Java 类的定义中，程序执行入口声明如下，哪一个是错误的程序代码？

A.public static void main(String args){ }

B.public static void main(String[ ] args){ }

C.public static void main(String args[ ]){ }

D.public static void main(String message[ ]){ }

## 11.

一个 Java 源文件中最多可以包含（ ）个主类？

A.0

B.1

C.2

D.不受限制

## 12.

下列说法中，不正确的是( )。

A.一个 java 源程序经过编译后，得到的文件的扩展名一定是.class。

B.一个 java 源程序编译通过后，得到的结果文件数也只有一个。

C.一个 java 源程序只能有一个 public class 类定义，且源文件的名字与 public class 的类名相同，扩展名必须是.java。

D.一个 java 源程序可以编译成多个 class 文件。

## 13.

某 Java 源文件代码如下，该源文件应如何命名？

```{Java}
public class A {
 int a;
}
class B {
 int b;
}
class C {
 public static void main(String[] args) {
  System.out.print("HELLO!");
 }
}
```

A.一定是 A.java

B.一定是 B.java

C.一定是 C.java

D.不确定

## 14.

某 Java 源文件代码如下，该源文件应如何命名？

```
class A {
  int a;
}
class B {
  int b;
}
class C {
   public static void main(String[] args) {
       System.out.print("HELLO!");
   }
}
```

A.一定是 A.java

B.一定是 B.java

C.一定是 C.java

D.后缀是.java，文件名可以任意取，符合标识符规范即可。

## 15.

（ ）方法是 Java 程序执行的入口，含有该方法的类叫做（ ）。

A.main 主类

B.Main 主类

C.main 公共类

D.Main 公共类

## 16.

下面哪种类型的文件可以在 Java 虚拟机中运行？

A..java

B..jre

C..exe

D..class

## 17.

Java 属于以下哪种语言？

A.机器语言

B.汇编语言

C.高级语言

D.以上都不对

## 18.

对 JDK 描述错误的是（ ）。

A.运行 Java 程序只要有 JRE 环境就可以，不一定需要全部 JDK 的功能

B.JDK 中包括 JVM、核心类库、Java 开发工具（java，javac）等

C.JDK 本身也是平台无关的，不同的操作系统安装的 JDK 是一样的

D.JDK 的全称是 Java Development Kit

## 19.

正确配置 path 环境变量的方式是：（ ）。

A.在系统环境变量 path 原有的字符串基础上，加上分号“;”，然后再加上 JDK 安装路径下的 bin 目录

B.新建系统环境变量 path，其值为：分号“;”，然后再连上 JDK 安装路径下的 bin 目录

C.在系统环境变量 path 原有的字符串基础上，加上分号“;”，然后再加上 JDK 安装路径下的 lib 目录

D.新建系统环境变量 path，其值为：分号“;”，然后再连上 JDK 安装路径下的 lib 目录

## 20.

下面关于 main 方法声明正确的是（ ）。

A.public main(String args[ ])

B.public static void main(String args[ ])

C.private static void main(String args[ ])

D.void main()

## 21.

下列选项中，哪一个是多行注释符号（）

A.//\*\*//

B./_/_

C.//

D./\*\*/

## 22.

以下（ ）字符串是 Java 中合法的标识符。

A.super

B.3number

C.#number

D.$number

## 23.

属于 main() 方法的返回类型是（）。

A.public

B.static

C.void

D.main

## 24.

请问，为了使一个名为 MyClass 的 public 类成功编译，需要满足以下哪些条件？

A.MyClass 必须定义一个正确的 main()方法

B.MyClass 必须定义在 MyClass.java 源文件中

C.MyClass 必须定义在 MyClass 包中

D.MyClass 类必须被导入

## 25.

以下哪个标识符不是 Java 语言的合法用户标识符（ ）。

A.\_double

B.$123

C.Main

D.class

## 26.

编译 Java Application 源程序文件将产生相应的字节码文件，这些字节码文件的扩展名是（）。

A..java

B..class

C..html

D..exe

## 27.

下面（ ）是 main()方法的合法参数。

A.char args[]

B.char args[][]

C.String args[]

D.String args

## 28.

下面概念中，不属于面向对象编程范畴的是（ ）。

A.对象

B.继承

C.类

D.过程调用

## 29.

Given the following code:

```
public class TestClass {
    public static void main(String args[]) {
        String str = new String("World");
        char[] ch = { 'H', 'e', 'l', 'l', 'o' };
        change(str, ch);
        System.out.println(str + " and " + new String(ch));
    }

    public static void change(String str, char ch[])
    {
		    str="Changed"; ch[0]='C';
    }
}
```

What is the result after execution?

A.World and Hello

B.World and Cello

C.Changed and Hello

D.Changed and Cello

## 30.

关于字符串的方法，如下代码执行结果是（ ）。

```
String fileName = "sdut@sdut.edu.cn";
System.out.println(fileName.lastIndexOf("."));
```

A.9

B.10

C.13

D.12

## 31.

关于字符串的方法，如下代码执行结果是（ ）。

```
String fileName = "中国China";
System.out.println(fileName.indexOf("国"));
```

A.0

B.1

C.2

D.3

## 32.

关于字符串的构造方法，如下代码执行结果是（ ）。

```
String str="ABCDEFG";
char[] chars=str.toCharArray();
System.out.println(new String(chars,1,3));
```

A.ABC

B.BCD

C.AB

D.BC

## 33.

关于字符串的方法，如下代码执行结果是（ ）。

```
String str1 = "sdut@sdut.edu.cn";
String str2 = str1.toLowerCase();
System.out.println(str2);
System.out.println(str1);
System.out.println(str1 == str2);
```

A.```
sdut@sdut.edu.cn
sdut@sdut.edu.cn
true

````

B.```
sdut@sdut.edu.cn
sdut@sdut.edu.cn
false
````

C.```
sdut@sdut.edu.cn
SDUT@SDUT.EDU.CN
true

````

D.```
sdut@sdut.edu.cn
SDUT@SDUT.EDU.CN
false
````

## 34.

关于字符串的方法，如下代码执行结果是（ ）。

```
String str1 = "abcd";
String str2="sdut";
System.out.println(str1.compareTo(str2)>0);
```

A.true

B.false

C.1

D.-1

## 35.

关于字符串的方法，如下代码执行结果是（ ）。

```
String str1 = "sdut12";
String str2="sDut12";
System.out.println(str1.equalsIgnoreCase(str2));
```

A.true

B.false

C.0

D.1

## 36.

关于字符串的方法，如下代码执行结果是（ ）。

```
String str = "    abcd123";
  str.toUpperCase();
  str.trim();
  System.out.println(str);
```

A.abcd123

B.abcd123

C.ABCD123

D.`ABCD123`

## 37.

关于字符串的相关操作，如下代码执行后输出的结果是：（ ）。

```
String str1="abc";
String str2=str1.toUpperCase();
String str3=str1.toLowerCase();
System.out.println(str1==str2);
 System.out.println(str1==str3);
```

A.```
false
true

````

B.```
false
false
````

C.```
true
true

````

D.```
true
false
````

## 38.

关于字符串对象的比较，==用于比较字符串对象的（ ）是否相同；equals()方法用于比较字符串对象的（ ）是否相同。

A.存储地址 字符序列

B.存储地址 存储地址

C.字符序列 存储地址

D.字符序列 字符序列

## 39.

执行如下两行代码之后，则内存中存在几个字符串对象?（ ）

```
String str="abc";
str+="def";
```

A.1

B.2

C.3

D.4

## 40.

Given code below:

```
String s1 = "Hello";
String s2 = "Hell"+"o";
String s3 = "Hell";
s3 = s3+"o";
```

Which one below is correct?

A.`s1 == s2` is true, `s1 == s3` is true

B.`s1 == s2` is true, `s1 == s3` is false

C.`s1 == s2` is false, `s1 == s3` is false

D.`s1 == s2` is false, `s1 == s3` is true

## 41.

阅读下面的程序段，以下表达式的值为 true 的是哪个?（ ）

```
		String str1=new String("java");
		String str2=new String("java");
		StringBuffer str3=new StringBuffer("java");
		StringBuffer str4=new StringBuffer("java");
```

A.str1==str2

B.str1.equals(str2)

C.str3==str4

D.str3.equals(str4)

E.str1==str3

F.str1.equals(str4)

## 42.

对 String 类型的字符串 `String str="abcdefg";` 调用 str 对象的( )方法，得到 byte 类型的数组`[97, 98, 99, 100, 101, 102, 103]`?

A.getBytes()

B.getChars()

C.toBytes()

D.toChars()

## 43.

对 String 类型的字符串`String str="abcd"`，调用 str 对象的( )方法，得到 char 类型的数组`['a','b','c','d'] `?

A.toCharArray()

B.toChars()

C.getChars()

D.getBytes()

## 44.

执行以下语句后，str2 的值是（ ）。

```
String str1 = "abc";
String str2 = str1.concat("cde");

```

A.abcde

B.abccde

C.cdeabc

D.edccba

## 45.

下列选项中，可以正确实现 String 初始化的是（ ）2 分。

A.String str=abcd;

B.String str="hello";

C.String str=1234;

D.String str='good';

## 46.

有如下程序代码， 程序运行的结果是（ ）。
String s1 = "中国";
String s2 = "我爱 " + s1;
String s3 = "我爱 " + s1;
System.out.print(s2 == s3);
System.out.println(" "+s2.equals(s3));

A.true false

B.true true

C.false false

D.false true

## 47.

如下代码输出（ ）。

```
public class TestStringBuilder {
	public static void main(String[] args) {
		String s = "Hello";
	    StringBuilder buffer = new StringBuilder(s);
	    buffer.append(" World!");
	    System.out.println(buffer);
	  }
}
```

A.Hello

B.World!

C.Hello World!

D.无输出

## 48.

以下代码段将创建几个对象?

<pre>
String s1="bc";
String s2="bc";
</pre>

A.2

B.3

C.0

D.1

## 49.

Given code below:

```Java
String s1 = "Hello";
String s2 = "Hell"+"o";
String s3 = "Hell";
s3 = s3+"o";
```

Which one below is correct?

A.s1 == s2 is true, s1 == s3 is true

B.s1 == s2 is true, s1 == s3 is false

C.s1 == s2 is false, s1 == s3 is false

D.s1 == s2 is false, s1 == s3 is true

## 50.

请选择下面程序正确的输出结果（ ）

```
public class Main{
		public static void main(String args[ ]){
			String a = new String("A");
			String b = new String("B");
			mb_operate(a,b);
			System.out.println(a + "." + b);
}
static void mb_operate(String x,String y){
	x.concat(y);
	y=x;
}
}
```

A.A.B

B.A.A

C.AB.AB

D.AB.B

## 51.

如下程序输出（ ）

```
public class Test {
  public static void main(String[] args) {
    String s = "Java";
    StringBuilder buffer = new StringBuilder(s);
    change(s);
    System.out.println(s);
  }

  private static void change(String s) {
    s = s + " and HTML";
  }
}
```

A.Java

B.Java and HTML

C.and HTML

D.什么都不显示

## 52.

关于以下程序段，正确的说法是（ ）。

```
1. String s1 = "abc"+"def";
2. String s2 = new String(s1);
3. if (s1==s2) {
4.    System.out.println("==succeeded");
5. }
6. if (s1.equals(s2)) {
7.    System.out.println(".equals() succeeded");
8. }
```

A.行 4 与行 7 都将执行

B.行 4 执行，行 7 不执行

C.行 7 执行，行 4 不执行

D.行 4、行 7 都不执行

## 53.

有如下程序代码， 程序运行的结果是（ ）。

```
String s1 = "sdut";
String s2 = "I love " + s1;
String s3 = "I love " + s1;
System.out.print(s2 == s3);
Sytem.out.println(" "+s2.equals(s3));
```

A.true false

B.true true

C.false false

D.false true

## 54.

有如下代码，程序执行的结果是（ ）。

```
String str1 = "sdut@sdut.edu.cn";
String[] strings = str1.split("u");
System.out.println(Arrays.toString(strings));
```

A.`sd, t@sd, t.ed, .cn`

B.`[sd, t@sd, t.ed, .cn]`

C.`[sdu, t@sdu, t.edu, .cn]`

D.`sdu, t@sdu, t.edu, .cn`

## 55.

有如下程序代码，程序执行的结果是（ ）。

```
String str1 = "\t sdut@sdut.edu.cn \t ";
System.out.println(str1.trim());
```

A.sdut@sdut.edu.cn

B.\tsdut@sdut.edu.cn

C.替换为正确项

D.替换为错误项

## 56.

有如下程序代码，程序执行的结果是（ ）。

```
int i= 110;
String str2=i+2+"lucky";
System.out.println(str2);
```

A.1102lucky

B.112lucky

C.lucky1102

D.lucky112

## 57.

有如下代码，程序执行的结果是（ ）。

```
int i= 110;
String str2="lucky"+i+2;
System.out.println(str2);
```

A.lucky1102

B.lucky112

C.1102lucky

D.112lucky

## 58.

在下面的代码中，程序执行的结果将是：（ ）。

```
public class Test {
  public static void main(String[] args) {
         String str = "123";
         System.out.println(str);
         change(str);
         System.out.println(str);
     }
    public static void change(String str){
      str = "456";
    }
}
```

A.```
456
123

````

B.```
456
456
````

C.```
123
456

````

D.```
123
123
````

## 59.

Which one below is NOT a valid Java identifier?

A.Int

B.goto

C.变量

D.$0

## 60.

在 Java 中，以下程序段的输出结果是。

![222.png](https://images.ptausercontent.com/e1c0eb9a-f221-43ae-8a94-14f42cb1f52b.png)

A.1,2,3

B.2,3,4

C.2,2,3

D.2,3,3

## 61.

若有定义:int x=3,y=2;float a=2.5,b=4.5;则下面表达式的值为（）。

(x+y)%2+(int)a/(int)b。

A.1.0

B.1

C.1.5

D.2

## 62.

下面那种类型不属于 Java 的基本数据类型？

A.byte

B.int

C.boolean

D.String

## 63.

假设有如下程序：

```
public class Demo {
        public static void main(String args[]) {
                int num = 68 ;
                char c = (char) num ;
                System.out.println(c) ;
        }
}
```

最终的执行结果是什么？

A.B

B.C

C.D

D.a

## 64.

以下语句输出的结果是?

```
 String str="123";
 int x=4,y=5;
 str = str + (x + y);
 System.out.println(str);
```

A.1239

B.12345

C.会产生编译错误

D.123+4+5

## 65.

一个表达式中有 int、byte、long、double 型的数据相加，其结果是（ ）类型的值

A.int

B.long

C.byte

D.double

## 66.

45 / 4 的结果是（ ）?

A.11

B.12

C.10

D.11.25

## 67.

-1 作为 int 数据类型出现，在内存中的存储形式是：（ ）。

A.11111111

B.11111111 11111111

C.11111111 11111111 11111111 11111111

D.11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111111

## 68.

在 JAVA 中，按精度从小到大的顺序排列，各种基本数据类型自动转换的顺序是：（ ）。

A.byte-short(char)- int-long-float-double

B.byte-short(char)- int-float-long-double

C.byte-short- int(char)-long-float-double

D.byte(char)-short- int-long-float-double

## 69.

下列（ ）是合法标识符。

A.rwkj@163

B.Java 程序设计

C.8a

D.e-mail

## 70.

下面哪些元素不能作为 Java 标识符的首字符？（ ）

A.字母

B.数字

C.下划线\_

D.$

## 71.

JAVA 中，下面哪个赋值表达式正确：（ ）

A.float f=1.3;

B.char c="a";

C.byte b=257;

D.int i=10;

## 72.

判断两个对象的引用是否相同，使用（ ）方式进行判断。

A.equals()

B.hashcode()

C.toString()

D.==

## 73.

在控制台显示消息的语句正确的是（ ）

A.System.out.println(我是一个 Java 程序员了！);

B.System.Out.println("我是一个 Java 程序员了！");

C.System.out.println("我是一个 Java 程序员了！");

D.System.Out.Println("我是一个 Java 程序员了！");

## 74.

下面选项中不是开发 Java 程序的步骤（ ）

A.编译

B.编写源代码

C.运行

D.发布

## 75.

下列关于变量作用域的说法中，正确的是（）

A.在 main()方法中任何位置定义的变量，其作用域为整个 main()方法。

B.代码块中定义的变量，在代码块外也是可以使用的。

C.变量的作用域为：从定义处开始，到变量所在代码块结束的位置。

D.变量的作用域不受代码块的限制。

## 76.

以下标识符中，不合法的是（ ）

A.user

B.$inner

C.class

D.login_1

## 77.

下列选项中，不属于 Java 中关键字的是（）

A.if

B.float

C.Final

D.try

## 78.

下列选项中，属于布尔常量的是（）

A.198

B.2e3f

C.true

D.null

## 79.

下列选项中，哪一个不能通过编译（ ）

A.byte a=1;

B.short b=100;

C.int c='a';

D.long d=8888888888888888;

## 80.

下列浮点数的定义中，正确的是（ ）

A.float f = 1F;

B.float f = 1.0;

C.float f = '1';

D.float f = "1";

## 81.

若 int a = 7;a %= 2;则执行后，变量 a 的值是（）

A.7

B.1

C.2

D.3

## 82.

下列选项中，不属于比较运算符的是（ ）

A.=

B.==

C.<

D.<=

## 83.

执行下列程序后，输出的正确结果是（）。

```
public class Test {
    public static void main(String[] args) {
        System.out.print(100%3);
        System.out.print(",");
        System.out.println(100%3.0);
    }
}
```

A.1,1

B.1,1.0

C.1.0,1

D.1.0,1.0

## 84.

假设有以下整型变量赋初值语句：int i=1+1/2+1/4；请问该语句执行后变量 i 的值为：

A.1

B.1.75

C.2.5

D.3

## 85.

下面程序段：

```{JAVA}
boolean a = false;
boolean b = true;
boolean c = (a && b) && (!b);
boolean result = (a & b) & (!b);
```

执行完后，正确的结果是（）。

A.c=false; result=false;

B.c=true; result=true;

C.c=true; result=false;

D.c=false; result=true;

## 86.

已知有如下定义：String s = "story"; 下面（ ）表达式是合法的。

A.s += books;

B.char c = s[1];

C.int len = s.length;

D.String t = s.toLowerCase();

## 87.

下列选项中，合法的 String 型字符串常量是( )

A.'M'

B.How are you

C.'#apple'

D."apple"

## 88.

下面的方法，当输入为 2 的时候返回值是多少?（     ）

<pre>
public int getValue(int i) {
         int result = 0;
         switch (i) {
            case 1:
                result = result + i;
            case 2:
                result = result + i * 2;
            case 3:
                result = result + i * 3;
        }
        return result;
 }
</pre>

A.0

B.2

C.4

D.10

## 89.

在下面的代码段中，下列 m 的（ ）值将引起“default”的输出。

```
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
        int m = input.nextInt();
        switch(m) {
            case 0: System.out.println("case 0");
            case 1: System.out.println("case 1");break;
            case 2:
            default:System.out.println("default");
        }
    }
}

```

A.0

B.1

C.2

D.以上答案都不正确

## 90.

下列语句序列执行后，k 的值是( )

```
int x=6, y=10, k=5;
switch( x%y ){
        case 0: k=x*y;
  	case 6: k=x/y;
  	case 12: k=x-y;
  	default: k=x*y-x;
}
```

A.60

B.5

C.0

D.54

## 91.

以下选项中没有语法错误的是（       ） 。

A.<pre>
while (int  i<7) {
     i++;
      System.out.println(“i is “+i);
}

</pre>

B.<pre>
int  j=3; while(j) {
System.out.println(“ j  is “+j);
}

</pre>

C.<pre>
int  j=0;
for(int  k=0; j + k !=10; j++,k++) {
System.out.println(“ j  is “+ j + “k  is”+ k);
}

</pre>

D.<pre>
int  j=0;
do{
      System.out.println( “j  is “+j++);
if (j == 3) {
continue  loop;
}
}while  (j<10);

</pre>

## 92.

在 JAVA 中，给定代码片段如下所示，则编译运行后，输出结果是（）。

```
for (int i = 0; i < 10; i++) {
    if (i == 10 - i) {
        break;
    }

    if (i % 3 != 0) {
        continue;
    }
    System.out.print(i + " ");
}
```

A.0

B.0 3

C.0 3 6

D.0 3 6 9

## 93.

下面代码将输出（ ）行 "Welcome to Java"?。

```
int count = 0;
do {
     System.out.println("Welcome to Java");
} while (count++ < 10);
```

A.10

B.11

C.9

D.1

## 94.

分析下列代码的运行结果是什么？

void looper(){

    	int x=0;
    	one:
    	while(x<20) {
    	    two:
    			System.out.print(++x);
    			if(x>3)
    			  break two;
    	}

}

A.编译错误

B.0

C.1

D.2

## 95.

当编译并运行下列程序段时，运行结果是什么？

public class Test {

    	public static void main(String[ ] args) {
            int i=0;
            while (i--<0){
                 System.out.println("The value of i is "+i);
             }
             System.out.println("The end");
    	 }
    }

A.编译时错误

B.运行时错误

C.The end

D.The value of i is 0

## 96.

下列选项中不属于本段代码输出结果的是（ ）

    public class Main{
    	public static void main(String args[]) {
    	  one:
    	  two:
    	  for(int i=0; i<3; i++) {
    	      three:
    	      for(int j=10; j<30; j+=10) {
    	         System.out.println(i+j);
    			 if(i>0)
    			    break one;
    	      }
    	  }
    	}
    }

A.10

B.20

C.11

D.21

## 97.

关于类和对象的关系，下列说法哪种说法是错误的？

A.类和对象都是具体的。

B.类是抽象的，对象是具体的。

C.一般情况下，在定义类之后，能创建无数个对象，可以说，类能化身千万。

D.类是引用型数据类型。

## 98.

关于下面的类描述中正确的是：

```
class Test{
    void test(int i){
        System.out.println("I am an int.");
    }
    void test(String s){
        System.out.println("I am a char");
    }
    public static void main(String args[]){
        Test t=new Test();
        t.test('a');
    }
}
```

A.编译出错

B.编译通过，运行出错

C.编译通过，运行时输出“I am an int”

D.编译通过，运行时输出“I am a char"

## 99.

关于构造方法定义与作用，下列说法**错误**的是：（ ）。

A.用来创建类的实例时调用的方法

B.调用该方法时，对实例变量赋值

C.定义时，方法名称与类名相同，返回值类型可以不写，也可以写成 void

D.一个类的构造方法可以定义多个，多个构造方法的参数有明显区别。

## 100.

以下有关构造方法的说法，正确的是： \_\_\_\_。

A.一个类的构造方法可以有多个

B.构造方法在类定义时被调用

C.构造方法只能由对象的其它方法调用

D.构造方法可以和类同名，也可以和类名不同

## 101.

关于以下代码的说明，正确的是（ ）。

```
class Main {
	static int x = 10;
	static {
		x += 5;
		System.out.println("x=" + x);
	}
	public static void main(String args[ ])
	{
		System.out.println("x=" + x);
	}
	static {
		x /= 3;
		System.out.println("x=" + x);
	}
}
```

A.不能通过编译，因为缺少方法名和返回类型

B.不能通过编译，因为只能有一个静态初始化器

C.编译通过，执行结果为：

```
x=15
x=5
x=5
```

D.编译通过，执行结果为：

```
x=3
x=8
x=8
```

## 102.

在 Java 中，针对类和成员提供了 4 种访问级别，以下控制级别由小到大的顺序是：（ ）。

A.private< 默认 < protected < public

B.默认 < private< protected < public

C.protected < 默认 < private < public

D.protected < private< 默认 < public

## 103.

在成员方法的访问控制修饰符中，规定访问权限只包含该类自身作用域和同包作用域的修饰符是（ ）。

A.protected

B.public

C.默认

D.private

## 104.

下列关于修饰符使用的说法，错误的是（ ）。

A.abstract 不能与 final 并列修饰同一个类

B.abstract 类中可以有 private 的成员

C.abstract 方法必须在 abstract 类中

D.static 方法中能访问非 static 的属性

## 105.

在非静态成员方法中，可以使用关键字（ ）指代当前对象，访问类的其他非静态成员。

A.this

B.super

C.static

D.public

## 106.

有如下程序代码，哪处出现编译错误？（ ）

```
class Father {
 int a = 100;    // A
 final public void print() { // B
  System.out.println(a);
 }
}

class Child extends Father {
 int a = 200;                // C
 public void print() {       // D
  System.out.println(a);
 }
}
```

A.A 处

B.B 处

C.C 处

D.D 处

## 107.

执行完以下代码 int[ ] x = new int[25]；后，以下哪项说明是正确的( )

A.x[24]为 0

B.x[24]未定义

C.x[25]为 0

D.x[0]没有数值存在

## 108.

下列程序代码运行结果是：（ ）。

```
import java.util.*;
public class Test {
    public int hashCode() {
         return 1;
    }
    public boolean equals(Object b) {
        return true;
   }
    public static void main(String args[]) {
        Set set = new HashSet();
        set.add(new Test());
        set.add(new String("ABC"));
        set.add(new Test());
        System.out.println(set.size());
    }
}
```

A.1

B.2

C.3

D.4

## 109.

若 int a[][]={{123,345,334},{1,2},{3,4}}; 则 a[2][1]=（ ）。

A.1

B.3

C.2

D.4

## 110.

如下语句执行结果是：（ ）。

```
int[] intArr=new int[10];
System.out.println(intArr[0]);
```

A.编译错误

B.会报运行错误

C.0

D.null

## 111.

如下语句执行结果是：（ ）。

```
int[] intArr=new int[10];
System.out.println(intArr[10]);
```

A.编译错误

B.会报运行错误

C.0

D.null

## 112.

设有数组的定义 int[] a = new int[3]，则下面对数组元素的引用错误的是（ ）。

A.a[0]=8;

B.a[a.length-1]=90;

C.a[3]=9;

D.```
int i=1;
a[i]=0;

```

## 113.

数组的定义为：`int[] arr=new int[10];`
如何获得数组的长度？

A.arr.length()

B.arr.size()

C.arr.length

D.arr.size

## 114.

执行完以下代码`int[ ] x = new int[25]；`后，以下哪项说明是正确的（      ）。

A.x[24]为0

B.x[25]为0

C.x[0]为空

D.x[24]未定义

## 115.

下列程序代码运行结果是：（ ）。
```

import java.util.ArrayList;
import java.util.List;
public class Test {
public static void main(String args[]) {
List list = new ArrayList();
list.add(new Test());
list.add(new String(""ABC""));
list.add(new Test());
System.out.println(list.size());
}
}

```

A.1

B.2

C.3

D.4

## 116.

欲构造ArrayList类的一个实例，此类实现了List接口，下列哪个写法是正确的 ？

A.ArrayList myList=new Object()；

B.List myList=new ArrayList()；

C.ArrayList myList=new List()；

D.List myList=new List();

## 117.

有如下程序代码：
```

class Dog{ }
class Cat { }
public class Test{
public static void main(String[] args) {
Dog dog=new Dog();
Cat cat=new Cat();
System.out.println(cat instanceof Dog); //A
System.out.println(dog instanceof Dog); //B
}  
 }

```
关于A、B两段代码，下列哪种说法是正确的？（     ）

A.输出：
```

false
true

```

B.输出：
```

true
true

```

C.输出：
```

false
false

```

D.出现语法编译错误，程序不能执行

## 118.

有如下程序代码，执行的结果是（      ）。
```

class Father {
int a = 100;
int b = 200;

    public void print() {
    	System.out.println(a + " " + b);
    }

}

class Child extends Father {
int b = 300;
int c = 400;

    public void print() {
    	System.out.println(a + " " + b + " " + c);
    }

    public void printExtend() {
    	System.out.println(c);
    }

}

public class Main {
public static void main(String[] a) {
Father obj=new Child();
System.out.println(obj.a+" "+obj.b);  
 obj.print();  
 }
}

````

A.```
100 200
100 200 400
````

B.```
100 300
100 300 400

````

C.```
100 300
100 200 400
````

D.```
100 200
100 300 400

```

## 119.

有如下父类、子类及测试类的定义，程序执行结果是：（     ）。
```

class Father {
int a =100;
public void print() {
System.out.println(a);
}
}
class Child1 extends Father {
int a =200;
public void print() {
System.out.println(a);
}
}
class Child2 extends Father {
int a =300;
public void print() {
System.out.println(a);
}
}
public class Main {
public static void main(String[] a) {
Father obj1;
obj1=new Child1();
System.out.println(obj1.a);
obj1.print();
  
 obj1=new Child2();
System.out.println(obj1.a);
obj1.print();
}
}

````

A.```
200
200
300
300
````

B.```
100
200
300
300

````

C.```
200
200
100
300
````

D.```
100
200
100
300

```

## 120.

有如下代码，程序执行结果是：（       ）。
```

abstract class Person {
public abstract void eat();
}
public class Main {
public static void main(String[] a) {

    	  Person p = new Person() {
    	   public void eat() {
    	    System.out.println("eat something");
    	   }
    	  };
    	  p.eat();
    }

}

```

A.空字符串

B.编译错误

C.eat something

D.运行错误

## 121.

有如下代码，程序的执行结果是（     ）。
```

interface Person {
public void eat();
}

public class Main {
public static void main(String[] a) {

    	  Person p = new Person() {
    	   public void eat() {
    	    System.out.println("eat something");
    	   }
    	  };
    	  p.eat();
    }

}

```

A.空字符串

B.编译错误

C.eat something

D.运行时错误

## 122.

下面关于JAVA面向对象的理解，说法中不正确的是：（     ）。

A.Java中，一个类只允许实现一个接口

B.抽象类中允许有非抽象方法的存在

C.静态的成员变量可以直接用类名调用

D.通过super可以调用父类的构造函数

## 123.

以下关于继承的叙述正确的是（      ）。

A.在Java中类只允许单一继承

B.在Java中,一个类只能实现一个接口

C.在Java中，一个类不能同时继承一个类和实现一个接口

D.在Java中，接口也具有单继承性

## 124.

以下对接口描述错误的有

A.接口没有提供构造方法

B.接口中的方法默认使用public、abstract修饰

C.接口中的属性默认使用public、static、final修饰

D.接口不允许多继承

## 125.

以下描述错误的有

A.abstract 可以修饰类、接口、方法

B.abstract修饰的类主要用于被继承

C.abstract 可以修饰变量

D.abstract修饰的类，其子类也可以是abstract修饰的

## 126.

下列选项中关于java中super关键字的说法错误的是

A.super关键字是在子类对象内部指代其父类对象的引用

B.super关键字不仅可以指代子类的直接父类，还可以指代父类的父类

C.子类可以通过super关键字调用父类的方法

D.子类可以通过super关键字调用父类的属性

## 127.

已知类的继承关系如下：
```

class Employee{}
class Manager extends Employee{}
class Director extends Employee{}

```
则下列语句通过编译的有哪些？（    ）

A.Employee e=new Manager();

B.Director d= new Manager();

C.Director d= new Employee();

D.Manager m=new Director();

## 128.

在Java中，要想让一个类继承另一个类，可以使用以下哪个关键字？（    ）

A.inherits

B.implements

C.extends

D.modifies

## 129.

如下代码，程序的输出结果将是：（      ）。

```

class A {
int a = 11;
int b = 12;

    public void print() {
    	System.out.println(a + " " + b);
    }

}

class B extends A {
int a = 20;

    public void print() {
    	System.out.println(a + " " + b);
    }

}

public class Main {
public static void main(String[] args) {
A aObj = new A();
aObj.print();
B bObj = new B();
bObj.print();
}
}

````

A.```
11 12
20 0
````

B.```
20 12
20 12

````

C.```
11 12
11 12
````

D.```
11 12
20 12

```

## 130.

关于抽象类，下面叙述错误的是（） 。

A.包含抽象方法的类必须是抽象类

B.抽象方法只需要声明，不需要实现

C.抽象类可以实例化

D.抽象类中可以没有抽象方法

## 131.

关于接口的声明，错误的是(  ) 。

A.接口中所有的成员属性都是public static final修订的常量

B.接口中的成员属性在声明时可以省略修订关键字

C.接口中所有的方法都是public abstract final修订的

D.接口中所有的方法都是public abstract修订的

## 132.

关于接口，下面的叙述错误的是（）。

A.一个接口可以多继承多个接口

B.一个类可以实现多个接口

C.抽象类在实现接口时，可以不实现该接口中声明的所有方法

D.抽象类在实现接口时，必须实现该接口中声明的所有方法

## 133.

以下代码运行输出是。
```

public class Person{
private String name=”Person”;
int age=0;
}
public class Child extends Person{
public String grade;

    public static void main(String[] args){
        Person p = new Child();
        System.out.println(p.name);
    }

}

```

A.输出：Person

B.没有输出

C.编译出错

D.运行出错

## 134.

在使用super 和this关键字时，以下描述正确的是

A.在子类构造方法中使用super（）显示调用父类的构造方法，super（）必须写在子类构造方法的第一行，否则编译不通过

B.this（）和super（）可以同时出现在一个构造函数中

C.super（）和this（）不一定要放在构造方法内第一行

D.this（）和super（）可以在static环境中使用，包括static方法和static语句块

## 135.

以下对抽象类的描述正确的是

A.抽象类没有构造方法

B.抽象类必须提供抽象方法

C.有抽象方法的类一定是抽象类

D.抽象类可以通过new关键字直接实例化

## 136.

在Java中，以下（）类的对象是以键-值的方式存储对象。

A.List

B.ArrayList

C.HashMap

D.LinkedList

## 137.

下面关于try块的说法正确的是?

A.try块后至少应有一个catch 块

B.try块后必须有finally块

C.可能抛出异常的语句应放在try块中

D.对抛出的异常的处理应放在try块中

## 138.

Java异常类（Exception）是（      ）的子类。

A.RuntimeException

B.Exception

C.Error

D.Throwable

## 139.

下列程序的运行结果是（   ）。
```

public class Test {
public static void main(String[] args) {
try {
System.out.println("Welcome to Java");
int i = 0;
int y = 2 / i;
System.out.println("Welcome to HTML");
}
finally {
System.out.println("The finally clause is executed");
}
}
}

```

A.Welcome to Java, 然后是错误信息

B.Welcome to Java，下一行是 The finally clause is executed , 然后是错误信息.

C.替换为正确项

D.替换为错误项

## 140.

给定一个未完成的方法 ，代码如下：
```

//此处添加方法的声明
{
int success=connect();
if(success==-1)
throw new TimedOutException();
}

```
已知TimedOutException不属于RuntimeException，那么在第一行注释位置上填写哪段代码能够正确完成该方法的声明？

A.public void MyMethod()

B.public void MyMethod() throws TimedOutException

C.public void MyMethod() throw TimeOutException

D.public throws TimedOutException void MyMethod()

## 141.

已知方法test()定义如下，在方法unsafe()运行正常的情况下哪条语句将肯定不会被输出？
```

public void test( ){
try {
unsafe();
System.out.println("Test 4");
} catch(SafeException e) {
System.out.println("Test 3");
}finally{
System.out.println("Test 2");
}
System.out.println("Test 1");
}

```

A.Test 4

B.Test 3

C.Test 2

D.Test 1

## 142.

已知下列代码，如果方法oneMethod()运行异常，则下列哪个语句肯定不会被输出？
```

public void example(){
try {
oneMethod();
System.out.println("condition1");
}catch(ArrayIndexOutOfBoundsException e) {
System.out.println("condition2");
}catch(Exception e) {
System.out.println("condition3");
}finally{
System.out.println("condition4");
}

```

A.condition1

B.condition2

C.condition3

D.condition4

## 143.

下面程序在fun（ ）方法当出现数组下标超过界限的情况下，被ArrayIndexOutOfBoundsException类型的异常对象e所捕获。程序输出结果是：（   ）。
```

public void test() {
try {
fun();
System.out.print("情况 1");
} catch (ArrayIndexOutOfBoundsException e) {
System.out.print("情况 2");
} catch (Exception e) {
System.out.print("情况 3");
} finally {
System.out.print("finally");
}
}

```

A.情况1

B.情况2

C.情况2finally

D.情况3finally

## 144.

程序代码中包含产生CheckedException受检异常（非运行时异常）的语句时，（         ）。

A.如果程序错误，就使用try-catch语句处理异常；否则，不必处理

B.必须进行处理，或使用try-catch语句处理异常，或在调用方法上使用throws将其抛出

C.只能使用try-catch语句处理

D.可以置之不理

## 145.

关于Java中异常的叙述，正确的是：（     ）。

A.异常是程序编写过程中代码的语法错误

B.异常是程序编写过程中代码的逻辑错误

C.异常出现后程序的运行马上中止

D.异常是可以捕获和处理的

## 146.

关于异常，下列说法正确的是 (        )。

A.程序运行过程中，若产生异常，它是某种异常类型的对象

B.一旦程序运行，异常对象将被创建

C.为了保证程序运行速度，要尽量避免异常控制

D.以上说法都不对

## 147.

Java中用来抛出异常的关键字是：（     ）。

A.try

B.catch

C.throw和throws

D.finally

## 148.

在异常处理时，将可能发生异常的代码放在（     ）语句块中，后面紧跟着一个或多个（     ）语句块，还可以再跟零个或一个（     ）语句块。

A.catch、try、finally

B.try、catch、finally

C.try、finally、exception

D.exception、try、finally

## 149.

关于try语句对应的多个catch子句中，若捕获的异常类型有父子类关系时，它们的排列下列哪种是正确的(        ) 。

A.异常父类在先，异常子类在后

B.异常子类在先，异常父类在后

C.有继承关系的异常不能同时出现在同一个try程序段之后

D.先后顺序无所谓

## 150.

在异常处理中，如释放资源、关闭文件、关闭数据库等由（     ）来完成。

A.try子句

B.catch子句

C.finally子句

D.throw子句

## 151.

以下描述不正确的有

A.try块不可以省略

B.可以使用多重catch块

C.finally块可以省略

D.catch块和finally块可以同时省略

## 152.

以下对自定义异常描述正确的是

A.自定义异常必须继承Exception

B.自定义异常可以继承自Error

C.自定义异常可以更加明确定位异常出错的位置和给出详细出错信息

D.程序中已经提供了丰富的异常类，使用自定义异常没有意义

## 153.

下列哪一项不属于布局管理器? (    )

A.GridLayout

B.CardLayout

C.BorderLayout

D.BagLayout

## 154.

声明并创建一个按钮对象b，应该使用的语句是（     ）

A.Button b=new Button( );

B.button b=new button( );

C.Button b=new b( );

D.b.setLabel(“确定”);

```
