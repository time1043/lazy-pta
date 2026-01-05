## 1.

一个Java源文件中可以有（     ）个公共类？

A.0

B.1

C.2

D.不受限制

## 2.

在Java中，关于数据的标准输出System.out，哪些说法是正确的?

A.调用print、println都可以输出各种数据类型的数据，二者没有什么差别

B.兼容C语言中的printf方法，可以按指定格式的字符串形式输出数据

C.如果不进行输出重定向，标准输出意味着输出到屏幕上

D.System.out.println();    可以输出一个空行

## 3.

关于Java中的注释，哪些说法是正确的？

A.单行注释形式为：//****

B.多行注释形式为：
```
/*
*****
*/
```

C.文档注释形式为：
```
/**
*****
*/
```

D.注释的作用是增加程序的可读性。

## 4.

以下选项中，哪些属于JDK工具？

A.Java编译器

B.Java运行工具

C.Java文档生成工具

D.Java打包工具

## 5.

JAVA中的注释有几种？

A.`//单行注释`

B.```
/* 
多行注释 
*/
```

C.```
/** 
文档注释 
*/
```

D.```
/** 
多行注释 
**/
```

## 6.

关于JDK、JRE、JVM的含义及其关系，下列哪种说法是正确的？

A.JDK就是Java Development Kit，Java开发工具，它包含JRE。

B.JRE就是Java runtime environment，即：Java运行环境，包括：JVM、类库以及其他环境

C.JVM 就是Java virtual machine，即：Java虚拟机，是由软代码组成的一个模拟的计算机，负责程序的执行

D.Java是编译型语言

## 7.

下面Java语句错误的有？

A.Float a=1.0;

B.double a=1.0;

C.out.println("hello");

D.DatagramSocket a = new DatagramSocket()；

## 8.

Java语言中，下列有关使用String类的语句中哪几项是正确的？

A.String s[]={"Zero","One","Two","Three","Four"};

B.String s[5]=new String[]{"Zero","One","Two","Three","Four"};

C.String s[]=new String[]{"Zero","One","Two","Three","Four"};

D.String s[]=new String(){"Zero","One","Two","Three","Four"};

## 9.

String类对象的创建方式包括：（        ）。

A.String str1="imooc";

B.String str2=new String();

C.String str3=new String("imooc");

D.String str4="abc"+"123";

E.String str5=str1.toUpperCase();

## 10.

下面的哪些Java程序片断可能导致错误。

A.```java
String s = "Gone with the wind";
String t = " good ";
String k = s + t;
```

B.```java
String s = "Gone with the wind";
String t;
t = s[3] + "one"; 
```

C.```java
String s = "Gone with the wind";
String standard = s.toUpperCase();
```

D.```java
String s = "home directory";
String t = s - "directory";
```

## 11.

Java中的数据类型可以分为两大类，分别是：（    ）和（    ）。

A.基本数据类型

B.整数类型

C.浮点类型

D.引用型数据类型

## 12.

关于String与char类型，下列哪种赋值合法？

A.String str='1';

B.char ch1="a";

C.char ch2="abc".charAt(0);

D.String str1="a";

## 13.

Java中,以下表达式说法正确的是：（     ）。

A.int a=20;a++;

a的值是21。

B.int a=20;int b=a++;

b的值是21。

C.int a=20;int b=++a;

b的值是21。

D.int a=3++; 

a的值是3。

## 14.

在Java中，下列赋值语句哪些是正确的：

A.byte b=340;

B.Boolean b=1;

C.long l=-2;

D.double d=0.9239d;

## 15.

下列赋值哪项赋值是不正确的？

A.float f=12.34;

B.byte b=23;

C.float f1=100;

D.long l=23.3;

E.float f2=100L;

F.char ch=100;

## 16.

switch-case语句与if语句相比，说法正确的是：

A.所有switch-case语句都可以用if语句进行改写

B.所有if语句都可以用switch-case语句进行改写

C.switch-case语句用于等值判断

D.if语句可用于等值判断，也可用于区间判断，有时要用结构比较复杂的嵌套

## 17.

在Java语言的if结构中，是否执行该分支结构的判断条件表达式的运算结果可能是：（     ）。

A.0

B.1

C.true

D.false

## 18.

下面关于Java中的if结构形式，哪些是合法的?

A.```
if(  )
{    } 
```

B.```
if(  )
{  }
else
{  }
```

C.```
if(  )
{   }
else if(  )
{  }
else if(  )
{  }
```

D.```
if(  )
{  }
else if(  )
{  }
else if(  )
{  }
else
{  }	
```

## 19.

有如下TestA类的定义：
```
public class TestA {
    static int a=10;
}
```
用该类创建2个对象：testA1和testA2，现将类变量（静态变量）a的数值变为100，则正确的方式是：（    ）。

A.TestA.a=100;

B.testA1.a=100;

C.testA2.a=100;

D.以上都不对

## 20.

下面关于构造方法的描述，正确的有哪些？（    ）   (2.0分)

A.方法名必须和类名相同

B.在方法中不能return语句返回一个值

C.方法名的前面有返回值类型的声明

D.当定义了带参数的构造方法，系统默认的不带参数的构造方法依然存在

## 21.

下面关于变量及其作用域范围的陈述哪些是正确的（    ）。

A.实例变量是类的成员变量

B.实例变量用关键字static声明

C.在方法中定义的局部变量，在该方法被执行时创建

D.局部变量在使用前必须被初始化

## 22.

若在cn.sdut包中有A、B类，在cn.sdut.cs包中有C、D类，在default package中如果要使用到A、B、C、D 4个类时，引入方式为：(    )。

A.```
import cn.sdut.A;
import cn.sdut.B;
import cn.sdut.cs.C;
import cn.sdut.cs.D;
```

B.```
import cn.sdut.*;

```

C.```
import cn.sdut.*;
import cn.sdut.cs.*;
```

D.```
import cn.sdut.cs.*;
```

## 23.

类中哪些访问权限修饰的成员，在子类访问时不受限制?（     ）

A.private

B.默认

C.protected

D.public

## 24.

Java中的数组在声明并分配了空间之后，关于其数组元素，哪些说法是正确的？（     ）

A.数组元素未人为赋值之前不能进行访问

B.数组元素都有默认值

C.基本数据类型中数值类型数组，元素默认值为0；布尔类型数组，元素默认值为false。

D.引用数据类型的数组，其数组元素默认值为null

## 25.

List类型的对象list可以以几种形式输出其内容（    ）？

A.```
System.out.println(list.toString());

```

B.```
for (int i = 0; i < list.size(); i++)
{
    System.out.println(list.get(i));  
}
```

C.```
for (Object obj : list)
{
    System.out.println(obj);  
}
```

D.```
Iterator it = list.iterator();   
while (it.hasNext())
{ 
     System.out.println(it.next());  
}
```

## 26.

迭代器接口（Iterator）所定义的方法有（     ）。

A.hasNext()

B.next()

C.remove()

D.nextElement()

## 27.

对于Set类型的对象set，可以以几种形式输出其内容（ ）？

A.```
System.out.println(set.toString());
```

B.```
for (int i = 0; i < set.size(); i++)
{ 
    System.out.println(set.get(i)); 
}
```

C.```
for (Object obj : set) 
{
    System.out.println(obj);
}
```

D.```
Iterator it = set.iterator();  
while (it.hasNext()) 
{  
    System.out.println(it.next());
}
```

## 28.

在JAVA集合框架中，下面哪些类型所表示的对象是有序的？（       ）

A.HashMap

B.HashSet

C.TreeMap

D.LinkedList

E.LinkedHashMap

## 29.

接口和抽象类描述正确的有

A.抽象类没有构造函数

B.接口没有构造函数

C.抽象类不允许多继承

D.接口中的方法可以有方法体

## 30.

接口中定义常量（变量）时，默认含有哪些修饰符？(     )

A.public

B.static

C.final

D.void

## 31.

在Java中，利用java.util.Scanner类输入数据，哪些说法是T的？

A.利用该类对象调用nextXxxxx()方法来输入相应数据类型的数据

B.利用该类对象调用next()和nextLine()方法均可输入字符串，二者功能无差别

C.该类构造方法接收一个参数，表示数据的来源

D.Scanner类位于java.util包中。

## 32.

关于封装类Float，下列说法正确的是（      ）。

A.Float在java.lang包中

B.Float a=1.0; 是正确的赋值方法

C.Float是一个类

D.Float a= new Float(1.0); 是正确的赋值方法

## 33.

下列哪些方法属于java.lang.Math类（        ）?

A.random()

B.sqrt()

C.abs()

D.pow()

E.exp()

F.ceil()

G.floor()

## 34.

关于基本类型的封装类，下列说法正确的是：(     )。

A.每种基本数据类型都有对应的封装类类型

B.封装类对于其基本数据类型，好处是可以提供丰富的信息和更丰富的功能

C.从基本数据类型到封装类类型不能自动转换

D.从封装类类型到基本数据类型能自动转换，称为自动拆箱

## 35.

Java中，关于自动装箱、自动拆箱、封装类，说法正确的是：（    ）

A.把基本变量赋值给一个类类型的变量，叫做自动装箱

B.把封装类的变量，赋值给基本数据类型，叫做自动拆箱。

C.封装类不仅仅可以包含这种类型的数值，还可以提供更多的功能和更多的信息。

D.自动装箱和自动拆箱是从jdk 1.0开始的。

## 36.

JAVA中如何将基本数据类型的数据转换成字符串? 以整型数据为例，现有一个整数： `int i=100;` 下面哪种方式能够得到字符串`“123”`?

A.String str1=i+"";

B.String str2=String.valueOf(i);

C.String str3=Integer.toString(i);

D.String str4=String.format("%d", i);

## 37.

在程序中利用throw或throws抛出异常，下列说法正确的是：（    ）。

A.throw代表动作，表示抛出一个异常的动作；throws代表一种状态，代表方法可能有异常抛出

B.throw用在方法实现中，而throws用在方法声明中

C.throw只能用于抛出一种异常，而throws可以抛出多个异常

D.当调用抛出异常的方法时，需要进行捕获处理或者继续利用thows向上抛出。

## 38.

这是一个多选题的样例。答案为AC，分值为2分。

A.异常是程序中出现的不正常情况，而不是指Java虚拟机本身比较严重的错误。

B.程序中出现异常不进行处理，则程序中断执行。

C.Java程序利用try-catch或者try-catch-finally结构处理异常。

D.Java程序利用throw和throws来处理异常。

## 39.

关于Java异常的处理的catch语句块，哪些说法是正确的？（     ）

A.catch语句块可以有一个，也可以有多个

B.多个catch语句块所捕获的异常类型如果有父子类关系，则父类在前，子类在后

C.多个catch语句块可能有0个或1个执行到

D.catch语句块必须和try语句块配合使用，不能独立存在

## 40.

关于Java异常的处理的finally语句块，哪些说法是正确的？（     ）

A.finally语句块可有可无。

B.如果finally语句块存在，它一定会执行。

C.finally语句块通常用于一些收尾性的工作，如数据库断开连接、关闭系统资源等等。

D.finally语句块必须和try-catch结构一起配合来进行处理异常

## 41.

利用命令：`java MultiCatch`  执行下面的程序，说法**错误**的是 (      )。

```
public class MultiCatch
	{
	      public static void main(String args[])
	     {
	           try
	           {
	               int a=args.length;
	               int b=42/a;
	               int c[]={1};
	               c[42]=99;     //第10行
	               System.out.println(“b=”+b);
	            }
	           catch(ArithmeticException e)
	           {
	                 System.out.println(“除0异常：”+e);       //第15行
	           }
	           catch(ArrayIndexOutOfBoundsException e) {
	                System.out.println(“数组超越边界异常：”+e);     //第18行
	           }
	     }
	}
```

A.程序将输出第15行的异常信息

B.程序第10行出错

C.程序将输出b=42

D.程序将输出第15和18行的异常信息

