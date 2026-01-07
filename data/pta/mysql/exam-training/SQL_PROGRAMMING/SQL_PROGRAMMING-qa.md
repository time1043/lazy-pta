## 1.

### 题干:
找出所有姓“李”的学生姓名、民族和联系电话。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

### 表样例
上述表结构对应的表样例：

```student```表：

![student.png](https://images.ptausercontent.com/214c212b-d599-4d1b-9c4e-d60f9bb3031d.png)

### 输出样例:
输出样例：

![1-2.png](https://images.ptausercontent.com/6edc0114-9a43-4dba-b00f-15e0992b1de5.png)

### Answer ✅

```sql
select sname,nation,phone
from student
where sname like '%李%'
```

## 2.

本题目要求编写SQL语句，
检索出```course```表中前3门课程的课号及课程名称的记录。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE course (
 cno char(7) ,
 cname varchar(20) NOT NULL,
  cpno char(7),
  ccredit int NOT NULL,
  PRIMARY KEY (cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```course```表：

|cno|cname|cpno|ccredit|
|----|------|-----|--------|
|0000001|数据库OCP考证||4|
|0000002|C语言基础|0000027|9|
|0000003|Linux操作系统|0000013|5|
|0000004|C#程序设计|0000002|6|

### 输出样例:

请在这里给出输出样例。例如：

|cno|cname||
|----|------|
|0000001|数据库OCP考证|
|0000002|C语言基础|
|0000003|Linux操作系统|

### Answer ✅

```sql
select cno,cname
from course
limit 3
```

## 3.

本题目要求编写SQL语句，
检索出```students```表中姓名中含有“明”字的男生的学生姓名和班级。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sname|class|
|-------|-----|
|苏有明|13英语1|

### Answer ✅

```sql
select sname,class
from students
where sname like '%明%'
```

## 4.

本题目要求编写SQL语句，
检索出```students```表中姓名是两个字的学生信息。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### Answer ✅

```sql
select *
from students
where char_length(sname) = 2;

-- 或者
select *
from students
where sname like '__';
```

## 5.

显示截止到2021年9月1日为止年满24周岁的男学生信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/bb501d79-ad5e-4b3b-a24b-7bf630d888fc.png)

### 输出样例:

![5-6.png](https://images.ptausercontent.com/815caa54-8dae-4658-83f5-d89f29051c34.png)

### Answer ✅

```sql
select *
from student
where sex='男' and TIMESTAMPDIFF(year,birth,'2021-09-01')>=24;
```

## 6.

本题目要求编写SQL语句，查询`sh_goods`表，先按商品分类`category_id`升序排列，对于相同分类的商品再按商品价格`price`降序排列 。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/17e69781-c3b6-424e-89ec-48dc00ba3d79.PNG)


### 输出样例:

![答案.PNG](https://images.ptausercontent.com/5072deec-3bb6-42f1-8b32-89b1cb0bc7f4.PNG)

### Answer ✅

```sql
select name,category_id ,price 
from sh_goods 
order by category_id asc,price desc
```

## 7.

本题目要求编写SQL语句，查询`sh_goods`表中`id`、`category_id`和`name`字段。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![样例1.PNG](https://images.ptausercontent.com/af38f5c4-8594-4adf-a08f-290ee2c02706.PNG)


### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/0582be2f-2df9-4411-b5ab-199372672049.PNG)

### Answer ✅

```sql
select id,category_id,name
from sh_goods
```

## 8.

本题目要求编写SQL语句，
在`sh_goods`表中，查询5星好评的商品库存增加850后的值，以及这些商品进行75折促销后的价格。查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/c67dd734-8b01-4474-856f-e511b0e5af80.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/d8cd14c4-5563-44da-a3f3-21a5f980c7c9.PNG)

### Answer ✅

```sql
select name,price as old_price,
        stock as old_stock,price * 0.75 as new_price,
        stock + 850 as new_stock
from sh_goods 
where score = 5.0
```

## 9.

本题目要求编写SQL语句，
查询`sh_goods`表中价格在2000到6000元之间的商品编号、名称和价格，注意此范围包括2000元和6000元的商品。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/a64fa37a-2200-4042-867f-f9894068093a.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/c9a63be5-af8f-4660-9c33-c9b8b74de473.PNG)

### Answer ✅

```sql
select id,name ,price 
from sh_goods 
where price between 2000 and 6000
```

## 10.

本题目要求编写SQL语句，
查询`goods`表中价格为NULL的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE goods
 (
    id INT PRIMARY key,         --商品id
    name VARCHAR(32),           --商品名称
    price INT ,                 --商品价格
    description VARCHAR(255)    -- 商品描述
 );
```

### 表样例

`goods`表：

![样例1.PNG](https://images.ptausercontent.com/eff48a76-0e53-4b9e-b7d2-f3da1b1111f6.PNG)


### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/adf4f32d-07a3-4511-abfa-abcb4d801ebe.PNG)

### Answer ✅

```sql
select id,name,price
from goods
where price is NULL
```

## 11.

本题目要求编写SQL语句，
获取`goods`表中商品名称含有“pad”的商品。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE goods
 (
    id INT PRIMARY key,         --商品id
    name VARCHAR(32),           --商品名称
    price INT ,                 --商品价格
    description VARCHAR(255)    -- 商品描述
 );
```

### 表样例

`goods`表：


![样例1.PNG](https://images.ptausercontent.com/d2238b63-d802-42b0-9039-0f69ad482688.PNG)



### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/178c5afe-5f2a-4c9e-8a83-92cc1f160827.PNG)

### Answer ✅

```sql
select id,name,price
from goods
where name like '%pad%'
```

## 12.

本题目要求编写SQL语句，
查询`sh_goods`表中商品分类编号（`category_id`）为3，并且用户评分为5星的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/7902d0ac-ed6d-4cb4-9f93-af76ae30d3de.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/5cc0cf84-3d89-4407-ad21-63c0a9e866f4.PNG)

### Answer ✅

```sql
select id,name,price
from sh_goods
where category_id=3 and score = 5.0
```

## 13.

本题目要求编写SQL语句，
查询`sh_goods`表中用户评分为4.5或者价格小于10元的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/a7e03894-0606-49bf-a0e5-3b4adbec7736.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/41a09c40-73b9-4028-8221-1c6ad199333a.PNG)

### Answer ✅

```sql
select name,price,score
from sh_goods 
where score = 4.5 or price <10
```

## 14.

本题目要求编写SQL语句，在`Teacher`r表中查询出所有教师所在部门编号，并消除重复记录。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Teacher(
TeacherID   char(8) primary key,     --教师编号
Teachername char(12) not null,       --教师姓名
Sex  char(2) not null check(sex in('男','女')),  --教师性别
Brith datetime ,                                 --出生日期
Profession char(8) check(profession in('教授','副教授','讲师','助教')),  --职称
Telephone varchar(20),                          --联系电话
HomeAddr varchar(50),                           --家庭地址
DepartmentID char(4)                            --系部编号
);
```



### 表样例

`Teacher`表：

![Teacher表.PNG](https://images.ptausercontent.com/e9e1e65f-8459-4174-91d8-7bfaac1f9e3f.PNG)




### 输出样例:

![答案.PNG](https://images.ptausercontent.com/f6db91be-875d-4e19-a563-b833d5caaace.PNG)

### Answer ✅

```sql
select distinct DepartmentID 
from Teacher
```

## 15.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Student`表中出出生日期最大（即年龄最小）的学生姓名及出生日期。。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Student(
StudentID   char(12) primary key,
StudentName char(8) not null,
Sex  char(2) not null ,
Birth  datetime not null,
HomeAddr varchar(80),
EntranceTime datetime default getdate(),
ClassID char(8) 
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```Student```表：


![Student表.PNG](https://images.ptausercontent.com/6ab3de80-02b1-49d1-875d-07f12ebc8c49.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/b2569ed7-ccee-4736-8e42-b78673900b7b.PNG)

### Answer ✅

```sql
select StudentName ,Birth  
from Student
where Birth>=all(select Birth from Student)
```

## 16.

这是一个SQL编程题模板。本题目要求编写SQL语句，查询`Class`表中学生人数大于5人的班级编号。

提示：请使用SELECT语句作答。

### 表结构:

```
Create table Class(
ClassID   char(8) primary key,    --班级编号
ClassName varchar(20) not null,   --班级名称
Monitor  char(8),                 --班长姓名
StudentNum int ,                  -- 学生人数
DepartmentID char(4)              -- 系部编号
);
```

### 表样例


```Class```表：


![Class表.PNG](https://images.ptausercontent.com/a691ba1c-ed20-4445-8970-0d108c8a73ae.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/8d8e524d-a674-421b-834b-f97a064b1961.PNG)

### Answer ✅

```sql
select ClassID
from Class
where StudentNum > 5
```

## 17.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Grade`表中课程“Dp010001”的最高分。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Grade(
CourseID   char(8) ,    --班级编号
StudentID char(12) ,    --学号
Semester  int not null, --学期
SchoolYear int ,        --学年
Grade numeric(5,1),     --成绩
primary key(CourseID,StudentID)  
);
```

### 表样例


```Grade```表：

![Grade表第1部分.PNG](https://images.ptausercontent.com/4c4c7dfe-1599-48cd-904f-14910295bfa1.PNG)


![Grade表第2部分.PNG](https://images.ptausercontent.com/debe1c14-a547-4366-96be-d5b396c9b809.PNG)


![Grade表第3部分.PNG](https://images.ptausercontent.com/d3d155c2-eb1c-4fe4-9c7c-a71e97fcc465.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/76ec6859-fc7d-46d5-814e-4508108e1a4b.PNG)

### Answer ✅

```sql
select max(grade) as max_grade
from Grade 
where CourseID='Dp010001'
```

## 18.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Grade`表中课程“Dp010004”的学生学号和成绩，并按成绩降序排列，成绩相同按学号升序排列。

提示：请使用`SELECT`语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
Create table Grade(
CourseID   char(8) ,
StudentID char(12) ,
Semester  int not null,
SchoolYear int ,
Grade numeric(5,1),
primary key(CourseID,StudentID)
);
```

### 表样例


```Grade```表：


![Grade表第1部分.PNG](https://images.ptausercontent.com/661c3086-9d33-4718-bacb-e38056d1c4e4.PNG)

![Grade表第2部分.PNG](https://images.ptausercontent.com/df85b11c-474b-492b-8174-984f7e9c911b.PNG)

![Grade表第3部分.PNG](https://images.ptausercontent.com/d208a14e-2b4e-4ef7-9220-ba5e3bc4f667.PNG)


### 输出样例:

![答案.PNG](https://images.ptausercontent.com/ac4e30a1-b90d-42ec-bd20-1a2694d4742d.PNG)

### Answer ✅

```sql
select StudentID,Grade
from Grade
where CourseID = 'Dp010004'
order by Grade desc,StudentID asc;
```

## 19.

本题目要求编写SQL语句，
检索出```sc```表、```course```表中选修课名中含有“数据库”三个字的课程且成绩在80～90分之间的学生学号及成绩。

提示：请使用join连接作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE course (
 cno char(7) ,
 cname varchar(20) NOT NULL,
  cpno char(7),
  ccredit int NOT NULL,
  PRIMARY KEY (cno)
) ;

CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
 score decimal(4,1),
 point decimal(2,1),
 PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```course```表：

|cno|cname|cpno|ccredit|
|----|------|-----|--------|
|0000002|C语言基础|0000027|9|
|0000003|Linux操作系统|0000013|5|
|0000004|C#程序设计|0000002|6|
|0000052|数据库OCP考证|NULL|4|

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1311104|0000011|53.0|0.0|
|1311104|0000027|80.0|1.0|
|1311105|0000027|84.0|1.0|
|1711101|0000052|81.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|sno|score|
|----|------|
|1711101|81.0|

### Answer ✅

```sql
select distinct sno,score
from course join sc on course.cno = sc.cno
where cname like '%数据库%' and score between 80 and 90
```

## 20.

本题目要求编写UPDATE语句，
将```sc```表中“高等数学”课程不及格的成绩全改为60分


### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)
CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`)
)

```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```cou```表：


![cou.JPG](https://images.ptausercontent.com/9cb5a144-fbe6-4cf7-87c2-4aacb53c6280.JPG)

```sc```表：


![u1.JPG](https://images.ptausercontent.com/3dc111be-28b7-4512-abd8-854c41e17060.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![u2.JPG](https://images.ptausercontent.com/7803263b-de65-4a21-a771-a8bf245dfa17.JPG)

### Answer ✅

```sql
update sc join cou on cou.cno=sc.cno  
set grade=60 where grade<60 and cname='高等数学'
```

## 21.

本题目要求编写SQL语句，
增加一个仓库，编号为’D01’，城市为’绍兴’，大小为11000。


### 表结构:

```
CREATE TABLE `warehouse` (
  `Wno` varchar(10),   --仓库编号
  `City` varchar(20),  --所在城市
  `Size` int(11),      --面积
);
```

### 表样例

```warehouse```表：

| Wno  | City | Size |
| ---- | ---- | ---- |
| A01  | 杭州 | 15000 |
| A02  | 建德 | 5000  |
| B01  | 宁波 | 1200  |
| B02  | 奉化 | 7500  |
| C01  | 温州 | 10000 |
| C02  | 乐清 | 8000  |

### 输出样例:

| Wno  | City | Size |
| ---- | ---- | ---- |
| A01  | 杭州 | 15000 |
| A02  | 建德 | 5000  |
| B01  | 宁波 | 1200  |
| B02  | 奉化 | 7500  |
| C01  | 温州 | 10000 |
| C02  | 乐清 | 8000  |
| D01  | 绍兴 | 11000 |

### Answer ✅

```sql
insert into warehouse(Wno,city,size)
 values('D01','绍兴',11000);
```

## 22.

本题目要求编写SQL语句，
给所有产品名中含’螺母’的订单的数量增加40%。


### 表结构:

```
CREATE TABLE `orders` (
  `OrdNo` int(11),   --订单编号
  `Sid` varchar(10), --供应商编号
  `Eid` varchar(10), --职工编号
  `Pid` varchar(20), --商品编号
  `Price` decimal(10,2), --价格
  `QTY` int(11),     --订购数量
  `ordDate` date    --订单日期
);
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例
```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P03  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P05  | 60    | 50  | 2022-02-14 |

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |

### 输出样例:


```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P03  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P05  | 60    | 70  | 2022-02-14 |

### Answer ✅

```sql
update orders 
set QTY = QTY * 1.4
where Pid in (select Pid from product where PName like '%螺母%')
```

## 23.

要求编写SQL语句， 删除`Product`表中销售价格大于等于100的商品信息。


### 表结构:


```
CREATE TABLE Product
(product_id      CHAR(4)      NOT NULL, --商品编号
 product_name    VARCHAR(100) NOT NULL, --商品名称
 product_type    VARCHAR(32)  NOT NULL, --商品种类
 sale_price      INTEGER ,              --销售价格
 purchase_price  INTEGER ,              --进货价格
 regist_date     DATE ,                 --登记日期
 PRIMARY KEY (product_id)); 

```

### 删除前查询结果：
`Product`表

![图1.png](https://images.ptausercontent.com/4af9eaea-7a2e-4ee0-adca-6b1383d7c6e3.png)



### 删除后查询结果：
`Product`表

![图2.png](https://images.ptausercontent.com/ed4f36d3-5e44-454e-bc16-b3686f26a004.png)

### Answer ✅

```sql
delete from product
 where sale_price>=100
```

## 24.

### 题干:
检索出生日期早于伍容华出生日期（不包含此日期）的所有学生信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例
```student```表：


![student.png](https://images.ptausercontent.com/989fcf26-df8b-464b-bab0-c647772ae412.png)

```course```表：


![course.png](https://images.ptausercontent.com/cbcd8de4-a8ac-450f-b316-19a950425c0c.png)

```score```表：


![score.png](https://images.ptausercontent.com/6dceeaa7-09d4-4868-ac59-ac50e498aad0.png)

### 输出样例:

![7-1.png](https://images.ptausercontent.com/02766a54-a7e9-4f63-a652-5e760fd8d17d.png)

### Answer ✅

```sql
select *
from student
where birth < (select birth from student where sname = '伍容华')
```

## 25.

本题目要求编写SQL语句，
检索出```product```表中所有符合```40 <= Weight <= 65```的记录。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |

### 输出样例:

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P02  | M8螺栓  | 40     |
| P05  | 螺母    | 45     |

### Answer ✅

```sql
select *
from `product`
where Weight between 40 and 65;
```

## 26.

本题目要求编写SQL语句，
检索出```supplier```表中所有符合```既不是’上海’，也不是’北京’和’天津’的供货商信息```的记录。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `supplier` (
  `Sid` varchar(10),   --供应商编号
  `SName` varchar(50), --供应商名称
  `City` varchar(20)   --供应商地址
);
```

### 表样例

```supplier```表：

| Sid  | SName        | City |
| ---- | ------------ | ---- |
| S01  | 东风机械厂   | 武汉 |
| S02  | 天鹰紧固件厂 | 温州 |
| S05  | 长城机电     | 杭州 |

### 输出样例:

| Sid  | SName        | City |
| ---- | ------------ | ---- |
| S01  | 东风机械厂   | 武汉 |
| S02  | 天鹰紧固件厂 | 温州 |
| S05  | 长城机电     | 杭州 |

### Answer ✅

```sql
select *
from `supplier`
where City not in ('上海','北京','天津');
```

## 27.

本题目要求编写SQL语句，
检索出```product```表中所有符合```包含’M’且重量大于30```产品编号。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |


### 输出样例:

| Pid  |
| ---- |
| P02  |
| P03  |

### Answer ✅

```sql
select Pid
from `product`
where PName like '%M%' and Weight >30
```

## 28.

本题目要求编写SQL语句，
检索出```employee```表中没有分配工作的员工编号、姓名。

提示：请使用SELECT语句作答。

### 表结构:



```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);
```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |


### 输出样例:

| Eid | EName 
| ---- | ---- |
| 0023 | 李军  |
| 0031 | 王林  |

### Answer ✅

```sql
select Eid,EName
from `employee`
where Wno is null
```

## 29.

要求编写SQL语句，查询`Product`表中进货价格在50至150之间的商品记录。注意：查询结果中应包含50和150元的商品记录。


### 表结构:


```
CREATE TABLE Product
(product_id      CHAR(4)      NOT NULL, --商品编号
 product_name    VARCHAR(100) NOT NULL, --商品名称
 product_type    VARCHAR(32)  NOT NULL, --商品种类
 sale_price      INTEGER ,              --销售价格
 purchase_price  INTEGER ,              --进货价格
 regist_date     DATE ,                 --登记日期
 PRIMARY KEY (product_id)); 

```

### 表样例
`Product`表

![图1.png](https://images.ptausercontent.com/5ac32c55-83e4-4f16-8e58-0d49f8230dd7.png)


### 输出样例:
`Product`表

![图2.png](https://images.ptausercontent.com/2fbb7002-911b-4a4e-9bfc-8c5077666744.png)

### Answer ✅

```sql
SELECT * FROM Product WHERE  purchase_price  BETWEEN 50 AND 150;
```

## 30.

本题目要求编写SQL语句，
检索出```product```表中每种产品的名称和重量(用kg表示)。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight_g` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight_g|
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |

### 输出样例:

| PName   | Weight_kg |
| ------- | ------ |
| M6螺栓  | 0.030  |
| M8螺栓  | 0.040  |
| M16螺栓 | 0.140  |
| 螺帽    | 0.030  |
| 螺母    | 0.045  |
| 垫片    | 0.010  |
| 铰链    | 0.070  |
| 螺钉    | 0.003  |

### Answer ✅

```sql
SELECT PName, Weight_g / 1000 as Weight_kg
FROM product;
```

## 31.

本题目要求编写SQL语句，
检索C002号课程的成绩最高的二人学号，姓名与成绩



### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
);

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu.JPG](https://images.ptausercontent.com/bbf57a3f-bfff-4cc3-b175-6e34f9658519.JPG)


``` sc```表：


![sc.JPG](https://images.ptausercontent.com/a88f12a4-f199-4034-b2f7-013aadcaf8b5.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![l225.JPG](https://images.ptausercontent.com/6bd95adb-d82c-4b8e-869e-b08829194b99.JPG)

### Answer ✅

```sql
select stu.sno,sname,grade
from stu join sc on stu.sno=sc.sno
where cno='C002'
order by grade desc 
limit 2
```

## 32.

本题目要求编写UPDATE语句，
把所有低于７５分的女生成绩提高5%;



### 表结构:

请在这里写定义表结构的SQL语句。例如：

```

CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)


```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu.JPG](https://images.ptausercontent.com/d1009ca4-e96f-4400-81b7-aee761cf0861.JPG)


``` sc```表：


![sc.JPG](https://images.ptausercontent.com/7c9724c4-82b9-4073-be6b-5a921d90c20a.JPG)

### 输出样例:

例如：
修改女生成绩后的```sc```表如下：

![u2b.JPG](https://images.ptausercontent.com/507ca0d9-bb8b-497f-ba38-e9130b99471f.JPG)

### Answer ✅

```sql
update sc join stu on sc.sno=stu.sno
set grade=grade*1.05
where grade < 75 and sex=0
```

## 33.

本题目要求编写DELETE语句，删除选修’C语言’课程的女生的选课记录。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL, 
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,  --0为女生，1为男生。
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)
CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)

```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu1.JPG](https://images.ptausercontent.com/fcad1d1f-9d5c-45a9-9533-e19c0c6a5fa6.JPG)

```cou```表：


![cou.JPG](https://images.ptausercontent.com/bb3c9397-96a3-4521-8cff-6b8c1b13a273.JPG)


```sc```表：


![sc1.JPG](https://images.ptausercontent.com/c0c78e29-ffc1-406e-a62f-ce67b8661b29.JPG)




### 输出样例:

删除记录后，```sc```表如下：



![sc2.JPG](https://images.ptausercontent.com/97d96f20-6559-4eed-b062-089c504f5bf0.JPG)

### Answer ✅

```sql
delete sc from sc join cou on sc.cno=cou.cno join stu on sc.sno=stu.sno
where cname='C语言' and sex=0;

-- 或者
delete from sc 
where cno in(select cno from cou where  cname='C语言') 
    and sno in (select sno from stu where sex=0);
```

## 34.

在```产品表(products)```中找出```库存量(UnitsInStock)```小于```订购量(UnitsOnOrder)```的产品的```产品编号（ProductID）```和```产品名称（ProductName）```
提示：请使用SELECT语句作答。

### 表结构:

|列名|数据类型|长度|主码|说明|
|---|---|---|---|---|
|ProductID|int|11|√|产品编号|
|ProductName|varchar|40||产品名称|
|SupplierID|int|11||供应商编号|
|CategoryID|int|11||种类编号|
|QuantityPerUnit|varchar|20||数量|
|UnitPrice|decimal|10,4||单价|
|UnitsInStock|smallint|2||库存数量|
|UnitsOnOrder|smallint|2||订购数量|
|ReorderLevel|smallint|2||再次订购量|
|Discontinued|bit|1||中止|


### 表样例


```products```表：

|ProductID|ProductName|UnitsInStock|UnitsOnOrder|
|---|---|---|---|
|1|Chai|39|0|
|2|Chang|17|40|
|3|Aniseed Syrup|13|70|
|4|Chef Anton's Cajun Seasoning|53|0|
|5|Chef Anton's Gumbo Mix|0|0|
|6|Grandma's Boysenberry Spread|120|0|
|7|Uncle Bob's Organic Dried Pears|15|0|
|8|Northwoods Cranberry Sauce|6|0|
|9|Mishi Kobe Niku|29|0|
|10|Ikura|31|0|

### 输出样例:

|ProductID|ProductName|
|---|---|
|2|Chang|
|3|Aniseed Syrup|

### Answer ✅

```sql
select ProductID, ProductName
from products
where UnitsInStock < UnitsOnOrder
```

## 35.

查询每位领导的直接下属数量，显示：领导的```员工编号（EmployeeID）```，下属数量（重命名为（```countSub```））

提示：请使用SELECT语句作答。

### 表结构:

|列名|数据类型|长度|主码|说明|
|---|---|---|---|---|
|EmployeeID| int|11|√|员工编号|
|LastName| varchar|20||姓|
|FirstName| varchar|10||名|
|Title| varchar|30||职务|
|TitleOfCourtesy| varchar|25||礼貌称号|
|BirthDate| datetime,|||出生日期|
|HireDate| datetime,|||入职日期|
|Address| varchar|60||地址|
|City| varchar|15||城市|
|Region| varchar|15||区域|
|PostalCode| varchar|10||邮政编码|
|Country| varchar|15||国家|
|HomePhone| varchar|24||住宅电话|
|Extension| varchar|4||范围|
|Photo| longblob,|||照片|
|ReportsTo| int|11||直接上级|
|PhotoPath| varchar|255||照片|



### 表样例


```employees```表：

|EmployeeID|LastName|FirstName|Title|TitleOfCourtesy|BirthDate|HireDate|Address|City|Region|PostalCode|Country|HomePhone|Extension|ReportsTo|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|1|Davolio|Nancy|Sales Representative|Ms.|1948/12/8 00:00:00|1992/5/1 00:00:00|507 - 20th Ave. E.Apt. 2A|Seattle|WA|98122|USA|(206) 555-9857|5467|2|
|2|Fuller|Andrew|Vice President, Sales|Dr.|1952/2/19 00:00:00|1992/8/14 00:00:00|908 W. Capital Way|Tacoma|WA|98401|USA|(206) 555-9482|3457||
|3|Leverling|Janet|Sales Representative|Ms.|1963/8/30 00:00:00|1992/4/1 00:00:00|722 Moss Bay Blvd.|Kirkland|WA|98033|USA|(206) 555-3412|3355|2|


### 输出样例:

|EmployeeID|countSub|
|---|---|
|2|2|

### Answer ✅

```sql
select ReportsTo EmployeeID,count(EmployeeID) countSub
from employees
where ReportsTo is not null
group by ReportsTo;


-- 或
select b.EmployeeID, count(*) countSub
from employees a, employees b
where a.ReportsTo = b.EmployeeID
group by b.EmployeeID;
```

## 36.

本题目要求编写SQL语句，
查询比“网络工程”专业所有学生年龄都小的学生姓名。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
);
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu.JPG](https://images.ptausercontent.com/c9ad805e-7792-4269-ba0a-4be483aaac81.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/e5b27180-f435-461d-b599-d857eabeeab1.JPG)


### 输出样例:

请在这里给出输出样例。例如：


![midt01.JPG](https://images.ptausercontent.com/37a7b467-6f08-410a-8dd8-b25906c81710.JPG)

### Answer ✅

```sql
select sname
from stu
where birdate > (
    select max(birdate)
    from stu, major
    where mname = '网络工程' and stu.mno = major.mno
);

-- or 
select sname
from stu
where birdate >all (
    select birdate
    from stu, major
    where mname = '网络工程' and stu.mno = major.mno
)
```

## 37.

本题目要求编写SQL语句，
查询软件工程专业中年龄最大的同学姓名.

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
);
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：


![stu.JPG](https://images.ptausercontent.com/b3ed8aa7-449f-4c5d-b202-f51d145e4a86.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/246cf1c2-00c5-4558-84e2-96ae3f562214.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![midt01b.JPG](https://images.ptausercontent.com/11a1b3d7-ec24-4e25-8081-c01bd7d9a5f9.JPG)

### Answer ✅

```sql
select sname 
from stu 
join major on major.mno=stu.mno
order by birdate ASC
limit 1;

-- or
select sname
from stu join major ON major.mno=stu.mno
where mname = '软件工程'
  and birdate = (
    select min(birdate) 
    from stu
    WHERE stu.mno = major.mno and mname = '软件工程'
  );
```

## 38.

本题目要求编写SQL语句，查询选修人数超过2人且成绩都在60分以上的课程的课程名、最高成绩、最低成绩和平均成绩。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
);
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
);

CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)；

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  KEY `fk_sc_cno` (`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)


```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：


![stu.JPG](https://images.ptausercontent.com/b3ed8aa7-449f-4c5d-b202-f51d145e4a86.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/246cf1c2-00c5-4558-84e2-96ae3f562214.JPG)

```cou```表：

![cou.JPG](https://images.ptausercontent.com/933f8460-affd-428c-b663-5beb3b9d0da5.JPG)


```sc```表：

![sc.JPG](https://images.ptausercontent.com/b27c21ce-8969-4dbc-9d89-727f338c84e6.JPG)



## 输出样例:

请在这里给出输出样例。例如：


![midt05b.JPG](https://images.ptausercontent.com/477adc02-9ee8-4fab-8eb7-254d2af1173a.JPG)

### Answer ✅

```sql
select sc.cno 课程号,cname 课程名,max(grade) 最高成绩,min(grade) 最低成绩,avg(grade) 平均成绩
from sc join cou on sc.cno=cou.cno
group by sc.cno,cname
having count(sno)>2 and min(grade)>=60 and sc.cno not in(
    select cno
    from sc 
    where grade is null
)
```

## 39.

### 题干:
将student表中的数计学院的学生信息插入到stu表中。

提示：请使用INSERT语句作答，stu数据表已存在，结构同student一样。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

### 表样例
上述表结构对应的表样例：

```student```表：

![student.png](https://images.ptausercontent.com/214c212b-d599-4d1b-9c4e-d60f9bb3031d.png)

### 输出样例:
输出样例：

```stu```表：

![3-3.png](https://images.ptausercontent.com/d0fe9800-fdc2-43b9-bc3f-e06bffa9c0c8.png)

### Answer ✅

```sql
Insert into stu
select * 
from student
where dept='数计学院'
```

## 40.

### 题干:
没有被购买过的商品信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE good(

gid CHAR(4) PRIMARY KEY,

gname VARCHAR(40) NOT NULL,

price FLOAT(10,2),

stock INT

);

CREATE TABLE recorder(

id INT PRIMARY KEY  AUTO_INCREMENT,

cid CHAR(4),

gid CHAR(4),

quantity INT NOT NULL,

sale_date DATETIME,

CONSTRAINT recorder_gid_fk FOREIGN KEY (gid) REFERENCES good(gid)

);

### 表样例
上述表结构对应的表样例：

```good```表：

![good.png](https://images.ptausercontent.com/19c47604-68d2-49f0-9196-42b8f8416c98.png)

```recorder```表：

![recorder.png](https://images.ptausercontent.com/27c2014d-8b65-4a05-857e-497d01d67e71.png)


### 输出样例:
输出样例：

![4-6.png](https://images.ptausercontent.com/485d30b0-f75d-431d-bfe4-1e5ff8e4a859.png)

### Answer ✅

```sql
select gid, gname, price, stock
from good
where gid not in(
    select gid
    from recorder
)
```

## 41.

本题目要求编写SQL语句，
检索出``` sc```表中学号为S001的学生选修的而S003学号学生未选修的课程号。
注意：查询结果忽略顺序只对比数据。

提示：MSSQLServer 评测SQL语句。


### 表结构:

定义表结构的SQL语句如：

```
-- 学生选课成绩表
CREATE TABLE  sc  (  
   sno  char(4) NOT NULL,  -- 学生学号
   cno  char(4) NOT NULL,  -- 课程号
   grade  decimal(4,1) DEFAULT NULL,
  PRIMARY KEY ( sno , cno )
)
```

### 表样例

上述表结构对应的表样例如

``` sc```表：


![sc.JPG](https://images.ptausercontent.com/e4451831-395f-44fd-b378-9426ddcff5ce.JPG)


### 输出样例:

输出样例如：


![l218.JPG](https://images.ptausercontent.com/93a8f9d5-7eb2-45bb-a5d0-fd4ab34b16a6.JPG)

### Answer ✅

```sql
select cno 课程号
from sc 
where sno='S001' and cno not in
(select cno from sc where sno ='S003')
```

## 42.

查询选修课程数在2门以上（含2门）且所有选课成绩都在80分以上（含80分）的学生的姓名、专业名及总学分。

提示：MSSQLServer 评测SQL语句。

### 表结构:

定义表结构的SQL语句如：

```
-- 专业表
CREATE TABLE major (  
  mno char(2) NOT NULL,
  mname nvarchar(20) NOT NULL,
  PRIMARY KEY (mno)
);
-- 学生表
CREATE TABLE stu (    
  sno char(4) NOT NULL,
  sname nvarchar(8) NOT NULL,
  sex smallint DEFAULT NULL,
  mno char(2) DEFAULT NULL,
  birdate datetime DEFAULT NULL,
  memo ntext,
  PRIMARY KEY (sno),
  CONSTRAINT  fk_stu_mno FOREIGN KEY (mno) REFERENCES major (mno)
);
-- 课程表
CREATE TABLE  cou  (  
   cno  char(4) NOT NULL,
   cname  nvarchar(30) NOT NULL,
   credit  smallint DEFAULT NULL,
   ptime  char(5) DEFAULT NULL,
   teacher  nvarchar(10) DEFAULT NULL,
  PRIMARY KEY ( cno )
);
-- 学生选课成绩表
CREATE TABLE  sc  (  
   sno  char(4) NOT NULL,  -- 学生学号
   cno  char(4) NOT NULL,  -- 课程号
   grade  decimal(4,1) DEFAULT NULL,
  PRIMARY KEY ( sno , cno ),
  CONSTRAINT  fk_sc_cno  FOREIGN KEY ( cno ) REFERENCES  cou  ( cno ),
  CONSTRAINT  fk_sc_sno  FOREIGN KEY ( sno ) REFERENCES  stu  ( sno )
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu表.PNG](https://images.ptausercontent.com/e0eef1b9-75cc-47ef-a678-aa3edbd702a5.PNG)

```major```表：

![major表.PNG](https://images.ptausercontent.com/5d0d470d-392b-4714-ae6a-692da9c0367d.PNG)

```cou```表：

![cou表.PNG](https://images.ptausercontent.com/3cdc6e02-b2f5-4a5e-bffd-286e7f289342.PNG)


```sc```表：


![sc表.PNG](https://images.ptausercontent.com/bb6c39e6-c800-45a1-bc42-7dca06d8ed3a.PNG)



### 输出样例:

输出样例如：


![result.PNG](https://images.ptausercontent.com/0511f054-cb54-40a4-b61e-7d54337c1710.PNG)

### Answer ✅

```sql
select sname 姓名,mname 专业名,SUM(credit) 总学分
FROM stu,major,cou,sc
WHERE stu.sno=sc.sno and cou.cno=sc.cno and stu.mno=major.mno
group by sname,mname
having count(sc.cno)>=2 and min(grade)>=80 and count(sc.cno)=count(grade)
```

## 43.

本题目要求编写SQL语句，
统计``sc```表中有学生选修的课程的门数，多人选修同一门只算一门，要求结果中列名显示“门数”
提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
  score decimal(4,1),
	point decimal(2,1),
  PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1711202|0000011|53.0|0.0|
|1711202|0000027|80.0|1.0|
|1911201|0000027|84.0|1.0|
|1911201|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|门数|
|-----|
|3|

### Answer ✅

```sql
select count(distinct cno) 门数 from sc
```

## 44.

本题目要求编写SQL语句，\
统计出`sc`表中选修人数最多的3门课，要求结果中列名分别显示“课程号”、“选修人数”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
  score decimal(4,1),
    point decimal(2,1),
  PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

`sc`表：

| sno | cno | score | point |
| ----- | ----- | ----- | ----- |
| 1711202 | 0000011 | 53\.0 | 0\.0 |
| 1711202 | 0000027 | 80\.0 | 1\.0 |
| 1911201 | 0000027 | 84\.0 | 1\.0 |
| 1911201 | 0000052 | 71\.0 | 2\.0 |

### 输出样例:

请在这里给出输出样例。例如：

| 课程号 | 选修人数 |
| ----- | ----- |
| 0000027 | 2 |
| 0000011 | 1 |
| 0000052 | 1 |

### Answer ✅

```sql
select cno 课程号,count(sno) 选修人数
from sc
group by 课程号
order by 选修人数 desc
limit 3;
```

## 45.

本题目要求编写SQL语句，
检索出```students```表中与“陆毅”同一个系的同学姓名。

提示：请使用嵌套查询语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|陆毅|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sname|
|-------|
|赵薇|

### Answer ✅

```sql
select sname
from students
where sdept = (
    select sdept
    from students
    where sname = '陆毅'
)and sname != '陆毅'
```

## 46.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_comment`表，查询在`sh_goods_comment`表中没有任何评论信息的商品记录。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

```
CREATE TABLE sh_goods_comment (
 id INT  PRIMARY KEY,                  -- 评论id
 user_id INT  NOT NULL DEFAULT 0,      -- 用户id
 goods_id INT  NOT NULL DEFAULT 0 ,    -- 商品id
 content TEXT NOT NULL ,               -- 评论内容
 is_show TINYINT  NOT NULL DEFAULT 0,  -- 是否显示
 create_time INT  NOT NULL DEFAULT 0   -- 创建时间
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/b5305518-2aab-4a1c-87db-2cf240d7ca2b.PNG)


`sh_goods_comment`表

![sh_goods_comment表数据.PNG](https://images.ptausercontent.com/3a6ec02c-c125-4963-b452-071f647b3787.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/6d4941b7-f6f2-480c-9d0e-b0c35f1bf946.PNG)

### Answer ✅

```sql
select sh_goods.id, name
from sh_goods left join sh_goods_comment on sh_goods.id = sh_goods_comment.goods_id 
where sh_goods_comment.content is null
```

## 47.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_comment`表，查询用户评分为5星的商品对应的评论信息。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

```
CREATE TABLE sh_goods_comment (
 id INT  PRIMARY KEY,                  -- 评论id
 user_id INT  NOT NULL DEFAULT 0,      -- 用户id
 goods_id INT  NOT NULL DEFAULT 0 ,    -- 商品id
 content TEXT NOT NULL ,               -- 评论内容
 is_show TINYINT  NOT NULL DEFAULT 0,  -- 是否显示
 create_time INT  NOT NULL DEFAULT 0   -- 创建时间
) ;

```


### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/6a740e3d-2d6d-499b-9cc6-3d712c2333b2.PNG)

`sh_goods_comment`表：

![sh_goods_comment表数据.PNG](https://images.ptausercontent.com/af844572-5d17-436b-b66d-108324ca1b75.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/727ed681-84ff-470c-8697-375127b3ce80.PNG)

### Answer ✅

```sql
select sg.name, sgc.content
from sh_goods sg, sh_goods_comment sgc
where sg.id = sgc.goods_id and score = 5
```

## 48.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_category`表，查询所有用户评分为5分的商品对应的商品id、商品id、分类id和分类名称和用户评分。注意，查询结果显示字段依据输出样例设置。

提示：以`sh_goods`表为主表。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```


```
CREATE TABLE sh_goods_category (
id INT  PRIMARY KEY ,-- 分类id
parent_id INT  NOT NULL DEFAULT 0, --上级分类id
name VARCHAR(120) NOT NULL  --分类名称
);
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/df3945e2-ace1-4cff-bbd4-b1a56a70d565.PNG)


`sh_goods_category`表


![sh_goods_category表数据.PNG](https://images.ptausercontent.com/32474b4b-94c3-45df-ba79-33833525c0bb.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/2b83c9df-7299-4fc1-b34d-2c48e390590a.PNG)

### Answer ✅

```sql
select sg.id gid, sgc.id cid, sgc.name cname, score
from sh_goods sg join sh_goods_category sgc on sg.category_id = sgc.id
where score = 5
```

## 49.

本题目要求编写SQL语句，
从`sh_goods_category`表中获取分类中商品价格小于500的商品对应的分类名称。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

```
CREATE TABLE sh_goods_category (
id INT  PRIMARY KEY ,-- 分类id
parent_id INT  NOT NULL DEFAULT 0, --上级分类id
name VARCHAR(120) NOT NULL  --分类名称
);
```


### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/542e1021-ae5a-4922-b475-6625caef0e86.PNG)


`sh_goods_category`表：


![sh_goods_category表数据.PNG](https://images.ptausercontent.com/3c6eba1c-9fc4-42e8-8785-524ea75ce34b.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/726ffd31-ce25-4432-98cd-1f671c8d9155.PNG)

### Answer ✅

```sql
select name
from sh_goods_category
where id in (
    select category_id
    from sh_goods
    where price < 500
)
```

## 50.

### 题干:
检索选修了三门课以上的学生学号、姓名、院部。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例
```student```表：

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:


![7-4.png](https://images.ptausercontent.com/0c3eaa41-6a3f-4085-90d9-a696992948ac.png)

### Answer ✅

```sql
select sno, sname, dept
from student
where sno in(
    select sno
    from score
    group by sno
    having count(*) >= 3
)
```

## 51.

### 题干:
查询每门必修课的课程编号，课程名称和选修人数。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-5.png](https://images.ptausercontent.com/bb0cdb94-4fa1-4bb9-98ae-615ad64986d3.png)

### Answer ✅

```sql
select course.cno,cname,count(sno) total
from course left join score on course.cno=score.cno
where attribute ='必修'
group by course.cno,cname
```

## 52.

### 题干:
查找所有“大学语文”分数在80以上的学生的姓名，所在院系。

提示：请使用SELECT语句作答。

### 表结构:
定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例
```student```表：

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-7.png](https://images.ptausercontent.com/3bc62764-3458-4f72-b4b7-a174045de6cc.png)

### Answer ✅

```sql
select sname,dept from student,score,course
where student.sno = score.sno 
and course.cno = score.cno 
and cname='大学语文' 
and grade >80
```

## 53.

### 题干:
显示每位员工的编号，姓名，工资及工资级别。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE  emp(

empno INT(4) ,

ename VARCHAR(20),

job VARCHAR(9),

mgr INT(4),

hiredate DATE,

sal FLOAT(7, 2),

comm FLOAT(7, 2),

deptno INT(2),

PRIMARY KEY(empno)

);

CREATE TABLE salgrade (  

grade  int, 

losal  int,  

hisal  int,

PRIMARY KEY (grade)

) ;

### 表样例
```emp```表：

![emp.png](https://images.ptausercontent.com/e05e97b7-8dd8-4958-a317-b217b2df0970.png)

```salgrade```表：

![salgrade.png](https://images.ptausercontent.com/e62d06dd-2441-43b3-8a2a-4c9bbad025d6.png)


### 输出样例:
![8-4.png](https://images.ptausercontent.com/852c8085-c27b-4117-b77a-eb39da10f533.png)

### Answer ✅

```sql
select empno,ename,sal,grade from emp,salgrade
where sal between losal and hisal
```

## 54.

### 题干:
显示每位员工的编号，姓名及其上级领导的编号和姓名（要求显示出所有的员工）。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE  emp(

empno INT(4) ,

ename VARCHAR(20),

job VARCHAR(9),

mgr INT(4),

hiredate DATE,

sal FLOAT(7, 2),

comm FLOAT(7, 2),

deptno INT(2),

PRIMARY KEY(empno)

);


### 表样例
```emp```表：

![emp.png](https://images.ptausercontent.com/bf5a793e-60e9-439a-8da8-0b2699cfc205.png)

### 输出样例:
![8-5.png](https://images.ptausercontent.com/1e576503-deca-492c-bad7-4f5e1333a4f7.png)

### Answer ✅

```sql
select a.empno 员工编号,a.ename 员工姓名,a.mgr 上司编号,b.ename 上司姓名
from emp a left join emp b on a.mgr = b.empno
```

## 55.

本题目要求编写SQL语句，
基于`Teacher表`和`Department`表，查询编号‘dep01001’教师的系主任名称。

提示：请使用`SELECT`语句作答。

### 表结构:

```
Create table Teacher(
TeacherID   char(8) primary key,     --教师编号
Teachername char(12) not null,       --教师姓名
Sex  char(2) not null check(sex in('男','女')),  --教师性别
Brith datetime ,                                 --出生日期
Profession char(8) check(profession in('教授','副教授','讲师','助教')),  --职称
Telephone varchar(20),                          --联系电话
HomeAddr varchar(50),                           --家庭地址
DepartmentID char(4)                            --系部编号
);

```


```
Create table Department(
DepartmentID char(4) primary key,           -- 系部编号
DepartmentName varchar(20) NOT NULL unique, -- 系部名称
DepartmentHeader varchar(8) NOT NULL,       -- 系主任
TeacherNum int                              -- 教师数量
);
```

### 表样例


```Teacher```表：

![Teacher表.PNG](https://images.ptausercontent.com/876ad264-49b5-49a6-8253-c68d8b823d6f.PNG)


`Department`表：


![Department表.PNG](https://images.ptausercontent.com/d39fcc00-2b13-4f1c-8efd-e3bf9093b872.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/e4e80c0a-c7cc-4aef-89a3-0e45f1162fff.PNG)

### Answer ✅

```sql
select DepartmentHeader from Teacher,Department
where Teacher.DepartmentID = Department.DepartmentID and TeacherID = 'dep01001'
```

## 56.

本题目要求编写SQL语句，
基于`Student`表和`Grade`表，查询没有课程成绩的学生对应的学号、姓名、性别。

提示：请使用`SELECT`语句作答。

### 表结构:

```
Create table Student(
StudentID   char(12) primary key,
StudentName char(8) not null,
Sex  char(2) not null ,
Birth  datetime not null,
HomeAddr varchar(80),
EntranceTime datetime default getdate(),
ClassID char(8) 
);
```


```
Create table Grade(
CourseID   char(8) ,    --班级编号
StudentID char(12) ,    --学号
Semester  int not null, --学期
SchoolYear int ,        --学年
Grade numeric(5,1),     --成绩
primary key(CourseID,StudentID)  
);
```

### 表样例

```Student```表：

![Student表.PNG](https://images.ptausercontent.com/d25c480d-1311-4cd6-9d73-3b2e1984a38a.PNG)


`Grade`表


![Grade表第1部分.PNG](https://images.ptausercontent.com/70b044bb-ac37-4560-bd28-387711ecb378.PNG)

![Grade表第2部分.PNG](https://images.ptausercontent.com/2219a912-6d08-481f-a001-bb72c6f4d1c2.PNG)

![Grade表第3部分.PNG](https://images.ptausercontent.com/24e83f48-1899-4f61-a003-45ec1ad3416c.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/37eaf0e5-de28-4a97-aa70-f9e9f5944f06.PNG)

### Answer ✅

```sql
select StudentID, StudentName, Sex
from Student s
where StudentID not in(
    select StudentID
    from Grade
)
```

## 57.

### 题干:
查询出学生的选课情况，结果集包括学号、姓名、课号、课名、开设学期和成绩。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例
```student```表：

![student.png](https://images.ptausercontent.com/b8ba91ec-53bf-43ea-8438-24c3495a5ff1.png)

```course```表：

![course.png](https://images.ptausercontent.com/9e62794e-c903-4bb1-ac3b-6e8ad2f7ceaf.png)

```score```表：

![score.png](https://images.ptausercontent.com/93058cac-ae56-41d0-95e8-64c62995a472.png)


### 输出样例(部分数据):

![8-3.png](https://images.ptausercontent.com/dd3b6d49-ef81-4a77-a187-691ae942ccd7.png)

### Answer ✅

```sql
select student.sno, sname, course.cno, cname, term, grade
from student, course, score
where student.sno = score.sno and course.cno = score.cno
```

## 58.

本题目要求编写SQL语句，
查询每个同学超过他选修的平均成绩的课程。

请使用：
1）用相关子查询实现
2）使用派生表实现。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`CNO`),
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` cou```表：


![cou.JPG](https://images.ptausercontent.com/df90a6cc-4834-40ac-a471-7801804310bc.JPG)

``` sc```表：


![sc.JPG](https://images.ptausercontent.com/3d6f8240-9eb5-4184-86a0-8fdaf69c77ec.JPG)

### 输出样例:

请在这里给出输出样例。例如：
 

![l220.JPG](https://images.ptausercontent.com/3d792c3b-2c9f-4c0b-94e0-fe2c36bd90b2.JPG)

### Answer ✅

```sql
select sc.sno 学号,cname 课程名,grade 成绩
from cou,sc,(select sno,avg(grade) avgscore from sc  group by sno) sc_avg
where cou.cno=sc.cno  and sc.sno=sc_avg.sno and grade>avgscore
```

## 59.

本题目要求编写SQL语句，
查询选修了张老师所讲授的所有课程的学生。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
);

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`CNO`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu.JPG](https://images.ptausercontent.com/aa2d96b0-a8da-4250-892b-fa817eb7b9da.JPG)

```cou```表：


![cou.JPG](https://images.ptausercontent.com/eb717bfc-e2e7-4336-bd2d-cf406c775497.JPG)

```sc```表：


![sc.JPG](https://images.ptausercontent.com/624a7728-e0dd-4937-b611-a3bb192f82b8.JPG)


### 输出样例:

请在这里给出输出样例。例如：

![l226.JPG](https://images.ptausercontent.com/3cf414af-387b-418a-b85c-fcc2c9efd6a9.JPG)

### Answer ✅

```sql
select sname
from stu
where not exists(
    select *
    from cou 
    where teacher='张老师' and not exists
        (
            select *
            from sc
            where sno=stu.sno and cno=cou.cno
        )
)
```

## 60.

### 题干:
检索没被学生选修的课程编号和课程名称。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-3.png](https://images.ptausercontent.com/6b265bf6-c48d-4779-9b7a-76a5a4e9f1b7.png)

### Answer ✅

```sql
select cno, cname
from course
where cno not in(
    select cno
    from score
)
```

## 61.

### 题干:
查询选修了2门以上课程的学生学号和平均成绩。

提示：请使用SELECT语句作答，平均成绩四舍五入，保留1位有效数字。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;

### 表样例
上述表结构对应的表样例，部分数据如下：

```score```表：

![score.png](https://images.ptausercontent.com/636db679-91b8-4842-a248-beca695aea5c.png)

### 输出样例:
输出样例：

![2-3.png](https://images.ptausercontent.com/288b54a8-d3c1-4716-b104-2a06a4202ef5.png)

### Answer ✅

```sql
select sno 学号,round(avg(grade),1) 平均成绩
from score
group by sno
having count(cno)>=2
```

## 62.

### 题干:
统计每种商品的销售数量。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE recorder(

id INT PRIMARY KEY  AUTO_INCREMENT,

cid CHAR(4),

gid CHAR(4),

quantity INT NOT NULL,

sale_date DATETIME,

CONSTRAINT salrecorder_cid_fk FOREIGN KEY (cid) REFERENCES customer(cid),

CONSTRAINT salrecorder_gid_fk FOREIGN KEY (gid) REFERENCES good(gid)

);

### 表样例
上述表结构对应的表样例：

```recorder```表：

![recorder.png](https://images.ptausercontent.com/12197a3e-1964-4ad0-b5e1-383ace95b6a2.png)

### 输出样例:
输出样例：

![4-4.png](https://images.ptausercontent.com/873f25be-5526-4997-8659-4b417f3efb66.png)

### Answer ✅

```sql
select gid 商品编号,sum(quantity) 销售总数量
from recorder
group by gid
```

## 63.

本题目要求编写SQL语句，
计算``sc```表中“0000001”课程的平均分、最高分和最低分，要求结果中列名分别显示“平均分”、“最高分”、“最低分”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
  score decimal(4,1),
	point decimal(2,1),
  PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1711202|0000001|53.0|0.0|
|1711202|0000027|80.0|1.0|
|1911201|0000001|84.0|1.0|
|1911201|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|平均分|最高分|最低分|
|-------|-------|-------|
|68.50000|84.0|53.0|

### Answer ✅

```sql
select avg(score) 平均分, max(score) 最高分, min(score) 最低分
from sc
where cno = '0000001'
```

## 64.

本题目要求编写SQL语句，\
统计\`\`sc\`\`表中，每个学生的选课门数和考试总成绩，并按选课门数升序排列，要求结果中列名分别显示“学号”、“选课门数”、“考试总成绩”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
  score decimal(4,1),
    point decimal(2,1),
  PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

`sc`表：

| sno | cno | score | point |
| ----- | ----- | ----- | ----- |
| 1711202 | 0000011 | 53\.0 | 0\.0 |
| 1711202 | 0000027 | 80\.0 | 1\.0 |
| 1711202 | 0000052 | 77\.0 | 1\.0 |
| 1911201 | 0000027 | 84\.0 | 1\.0 |
| 1911201 | 0000052 | 71\.0 | 2\.0 |

### 输出样例:

请在这里给出输出样例。例如：




| 学号 | 选课门数 | 考试总成绩 |
| ----- | ----- | ----- |
| 1411101 | 1 |  |
| 1401102 | 3 | 156\.0 |
| 1811102 | 4 | 296\.8 |
| 1411201 | 7 | 501\.6 |
| 1511211 | 7 | 487\.0 |
| 1711101 | 7 | 525\.6 |
| 1711202 | 7 | 510\.0 |
| 1911201 | 7 | 532\.2 |
| 1701102 | 8 | 635\.7 |
| 1701101 | 8 | 704\.1 |
| 1711102 | 9 | 705\.7 |

### Answer ✅

```sql
select sno 学号,count(*) 选课门数,sum(score) 考试总成绩
from sc
group by sno
order by sno
```

## 65.

本题目要求编写SQL语句，
检索出`sh_goods`表中每项`keyword`对应的商品数量，查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/2ff8eac2-7c7b-4476-b5ec-eb26c0fc0584.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/e7c1c6e1-6ef8-40f7-80f7-e881862092ca.PNG)

### Answer ✅

```sql
select keyword, count(*) goodscount
from sh_goods
group by keyword
```

## 66.

本题目要求编写SQL语句，
获取`sh_goods`表中每个分类下商品的最高价格。查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/96eb7e48-6573-4004-99de-4ee42dc6df0c.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/ef8652a3-51b5-4e9f-85e7-4cb89d2843a6.PNG)

### Answer ✅

```sql
select category_id, max(price) max_price
from sh_goods
group by category_id
```

## 67.

本题目要求编写SQL语句，
查询`sh_goods`表中商品库存`stock`的最高和最低值。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/09c2a1d6-1f93-4ca3-8c5e-bbb854b0b9c6.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/a77370ac-c68b-4504-bac1-346f6a4b95ee.PNG)

### Answer ✅

```sql
select max(stock) stock1, min(stock) stock2
from sh_goods
```

## 68.

本题目要求编写SQL语句，
在`sh_goods`表中查询不同商品分类（`category_id`）下商品数量大于2的商品的平均价格。查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/7dd0ff9a-0621-4670-8ee0-814e943673d7.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/aebd22da-0b3b-4a63-b75d-e25abab04dc2.PNG)

### Answer ✅

```sql
select category_id, avg(price) average
from sh_goods
group by category_id
having count(*) > 2
```

## 69.

本题目要求编写SQL语句，在```SPJ```数据库中，查询在供应工程项目零件时，比```p6```零件每次的供应数量都高的零件```pno```。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `j` (  --  工程项目表
  `jno` char(3) NOT NULL,-- 工程项目号
  `jname` varchar(10) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`jno`)
);
CREATE TABLE `p` (  -- 零件表
  `pno` char(3) NOT NULL,  -- 零件号
  `pname` varchar(10) DEFAULT NULL,
  `color` char(2) DEFAULT NULL,
  `weight` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`pno`)
);
CREATE TABLE `s` (  -- 供应商表
  `sno` char(3) NOT NULL,  -- 供应商号
  `sname` varchar(10) DEFAULT NULL,
  `status` char(2) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `spj` (  -- 零件供应表
  `sno` char(3) NOT NULL,
  `pno` char(3) NOT NULL,
  `jno` char(3) NOT NULL,
  `qty` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`sno`,`pno`,`jno`),
  CONSTRAINT `fk_jno` FOREIGN KEY (`jno`) REFERENCES `j` (`jno`),
  CONSTRAINT `fk_pno` FOREIGN KEY (`pno`) REFERENCES `p` (`pno`),
  CONSTRAINT `fk_sno` FOREIGN KEY (`sno`) REFERENCES `s` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```s```表：


![s.JPG](https://images.ptausercontent.com/c73d9251-aae3-41a4-bf69-53ce1ad449e2.JPG)

```p```表：

![p.JPG](https://images.ptausercontent.com/380bc506-c0b8-4e9c-b232-18bd9c1f6557.JPG)

```j```表：


![j.JPG](https://images.ptausercontent.com/4b3256f6-dc2c-476e-aa49-ac0721662110.JPG)

```spj```表：



![sc.JPG](https://images.ptausercontent.com/e8f1c1f6-ce38-41c4-981b-d71b48287fc9.JPG)





### 输出样例:

请在这里给出输出样例。例如：


![12.JPG](https://images.ptausercontent.com/b010f077-913c-4970-af65-969eb1f08d00.JPG)

### Answer ✅

```sql
select pno
 from spj
 group by pno
 having min(qty) >all (
     select qty
     from spj
     where pno='p6'
 )
```

## 70.

本题目要求编写SQL语句，
查询生产```三```种不同型号的```PC```的厂商。


### 表结构:


```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
```

### 表样例


```product```表：

|maker|model|type|
|--|----|----|
|D|2003|便携式电脑|
|D|3001|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|B|1004|个人电脑|
|C|1005|个人电脑|

```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|24|2.00|6X|1899|
|1004|166.00|32|2.50|8X|1999|
|1005|166.00|16|2.00|8X|1999|



### 输出样例:

|maker|
|--|
|A|

### Answer ✅

```sql
select maker from product
where model in (select model from pc)
group by maker
having count(*) >=3
```

## 71.

本题目要求编写SQL语句，
检索出```students```表和```sc```表中所有学生的选课情况（包括学号，姓名，课号，成绩），结果中包括没有选课的学生。

提示：请使用join连接作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;

CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
 score decimal(4,1),
 point decimal(2,1),
 PRIMARY KEY (sno,cno)
) ;

```
### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1311104|0000011|53.0|0.0|
|1311104|0000027|80.0|1.0|
|1311105|0000027|84.0|1.0|
|1711101|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|sno|sname|cno|score|
|----|-------|----|------|
|1311104|李嘉欣|0000011|53.0|
|1311104|李嘉欣|0000027|80.0|
|1311105|苏有明|0000027|84.0|
|1711101|赵薇|0000052|71.0|
|1711102|董洁|NULL|NULL|

### Answer ✅

```sql
select students.sno,sname,cno,score
from students left join sc on sc.sno = students.sno
```

## 72.

本题目要求编写SQL语句，
检索出```product```表中所有产品名中包含’螺母’的产品种类数。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |


### 输出样例:

请在这里给出输出样例。例如：

|count(*)|
|--|
|1|

### Answer ✅

```sql
select count(*)
from product
where PName like '%螺母%'
```

## 73.

本题目要求编写SQL语句，
检索出```employee```表中所有员工中最高工资和最低工资。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);
```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |


### 输出样例:

请在这里给出输出样例。例如：

|max_Salary|min_Salary|
|--|--|
|8500|2500|

### Answer ✅

```sql
select max(Salary) max_Salary,min(Salary) min_Salary
from employee
```

## 74.

本题目要求编写SQL语句，
检索出```employee```表中每个仓库的编号及员工数量。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);
```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |


### 输出样例:

请在这里给出输出样例。例如：

|Wno|Count_Eid|
|--|--|
|A01|3|
|A02|2|

### Answer ✅

```sql
select Wno,count(Eid) Count_Eid
from employee
where Wno is not null
group by Wno
```

## 75.

本题目要求编写嵌套查询SQL语句，
查询’A01’仓库中的职工中比’A02’所有职工薪水都高的职工编号与姓名。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);

```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |

### 输出样例:

| Eid | EName 
| ---- | ---- |
| 0012 | 张立  |

### Answer ✅

```sql
select Eid,EName
from employee
where Wno = 'A01' and Salary > (select max(Salary) from employee where Wno = 'A02')
```

## 76.

本题目要求编写嵌套查询SQL语句，
查询销售数量最多的供应商编号。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `orders` (
  `OrdNo` int(11),   --订单编号
  `Sid` varchar(10), --供应商编号
  `Eid` varchar(10), --职工编号
  `Pid` varchar(20), --商品编号
  `Price` decimal(10,2), --价格
  `QTY` int(11),     --订购数量
  `ordDate` date    --订单日期
);
```

### 表样例

```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P01  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P03  | 60    | 55   | 2022-02-14 |

### 输出样例:

| Sid | 
| ---- |
| S03|

### Answer ✅

```sql
select Sid
from orders
group by sid
having sum(qty) >=all
    (    select sum(qty)
        from orders
        group by sid
    )
```

## 77.

本题目要求编写SQL语句，
查询销售过’0011’号员工销售的所有产品的其他员工编号和姓名。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);

CREATE TABLE `orders` (
  `OrdNo` int(11),   --订单编号
  `Sid` varchar(10), --供应商编号
  `Eid` varchar(10), --职工编号
  `Pid` varchar(20), --商品编号
  `Price` decimal(10,2), --价格
  `QTY` int(11),     --订购数量
  `ordDate` date    --订单日期
);

```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |


```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P01  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P03  | 60    | 55   | 2022-02-14 |


### 输出样例:


| Eid | EName | 
| ---- | ---- | 
| 0012 | 张立  |

### Answer ✅

```sql
select Eid,EName
from employee where Eid != '0011' and not exists
(select * from orders b where Eid = '0011' and not exists 
(select * from orders where employee.Eid=Eid))
```

## 78.

本题目要求编写SQL语句，
 查询在具有最小内存容量的所有PC中具有最快处理器的PC制造商。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
```

### 表样例

```product```表：

|maker|model|type|
|--|----|----|
|D|2003|便携式电脑|
|D|3001|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|B|1004|个人电脑|



```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|24|2.50|6X|1899|
|1004|166.00|32|2.50|8X|1999|


### 输出样例:



|maker|
|--|
|A|

### Answer ✅

```sql
select maker
from product,pc
where product.model=pc.model 
and ram = (select min(ram) from pc)
and speed = (select max(speed) from pc where ram = (select min(ram) from pc))
```

## 79.

本题目要求编写SQL语句，
查询至少生产两种不同型号的计算机(```PC```或```便携式电脑```)且机器速度至少为```133```的厂商，输出结果按照制造商升序排列。

提示：

本题有三种情况:
（1）	至少生产两种不同PC的厂商 
（2）	至少生产两种不同便携式电脑的厂商
（3）	至少生产一种PC且至少生产一种便携式电脑的厂商。

### 表结构:
```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
CREATE TABLE laptop
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度 
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  screen DECIMAL(6,2),        --屏幕大小
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model) 
);
```

### 表样例


```product```表：

|maker|model|type|
|--|----|----|
|D|2001|便携式电脑|
|D|2002|便携式电脑|
|E|2004|便携式电脑|
|D|3001|打印机|
|B|3002|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|D|1008|个人电脑|


```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|32|2.50|8X|1999|
|1008|180.00|32|2.00|8X|3699|



```laptop```表：

|model|speed|ram|hd|screen|price|
|--|----|---|----|----|----|
|2001|100.00|20|1.10|9.50|1999|
|2002|133.00|12|0.75|11.30|2499|
|2004|133.00|16|1.10|11.20|3499 |



### 输出样例:


|maker |
|--|
|A|
|D|

### Answer ✅

```sql
select maker 
from product
where model in (select model from pc where speed>=133) 
      or model in (select model from laptop where speed>=133)
group by maker
having count(model)>=2
```

## 80.

本题目要求编写嵌套查询SQL语句，
查询’A01’仓库中的职工中比’A02’任意一个职工薪水少的职工编号与姓名。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);

```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |

### 输出样例:

| Eid | EName 
| ---- | ---- |
| 0010 | 张三  |
| 0011 | 刘勇  |

### Answer ✅

```sql
select Eid,EName
from employee
where Wno = 'A01' and Salary < any(
    select Salary from employee where Wno = 'A02')
```

## 81.

### 题干:
统计每个学院的学生总人数，并按人数降序排列。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/5ba2c268-ccb2-45c0-9f90-abc1bb915712.png)

```course```表：

![course.png](https://images.ptausercontent.com/aed71a58-8b5f-431c-8456-8627d6f6275d.png)

```score```表：

![score.png](https://images.ptausercontent.com/43cc116d-5ab4-4363-91dc-16d79c515e6b.png)

### 输出样例:

![6-4.png](https://images.ptausercontent.com/51aba08c-3080-412d-9fbf-f6add6358c95.png)

### Answer ✅

```sql
select dept 院部,count(sno) 总人数
from student
group by dept
order by count(sno) desc
```

## 82.

### 题干:
查询选修了2门以上课程的学生学号和平均成绩。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/5ba2c268-ccb2-45c0-9f90-abc1bb915712.png)

```course```表：

![course.png](https://images.ptausercontent.com/aed71a58-8b5f-431c-8456-8627d6f6275d.png)

```score```表：

![score.png](https://images.ptausercontent.com/43cc116d-5ab4-4363-91dc-16d79c515e6b.png)

### 输出样例:


![6-6.png](https://images.ptausercontent.com/bc08cdd8-5087-41d7-8ae8-f6a1e8b2a34f.png)

### Answer ✅

```sql
select sno 学号, avg(grade) 平均分
from score
group by sno
having count(*) >= 2
```

## 83.

本题目要求编写SQL语句，删除所有期末成绩小于60分的选课记录。
#### 现有教务管理系统的关系描述如下：
* 每个院系（部门）有多个班级和多名教师，每名教师各自开设有多门课程。
* 每位教师管理多个班级（班主任），每个班级只能被一位老师管理。
* 每名学生属于一个班级，可以选修多门课程。
* 每门课程可被多位老师讲授，并且有些课程具有先导课程，每门课程的成绩由平时成绩、期中成绩、期末成绩组成，最终计算总评成绩。
* 课程信息表供教师和学生查询，包含课程信息、任课教师、上课班级、上课教室、上课日期（周几）、上课时间（第几节课）、上课学期学年等信息。
##### 1.选课表sc
######  表结构
![sc-1.png](https://images.ptausercontent.com/5053c0e1-61b9-4a7e-a906-32d4ffac3223.png)
######  表数据
![sc-2.png](https://images.ptausercontent.com/16ba66d5-0702-4fad-87f6-dea6f3abd027.png)

### Answer ✅

```sql
delete 
from sc
where SCScore3 < 60
```

