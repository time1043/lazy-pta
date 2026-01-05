## 1.

本题目要求编写 SQL 语句，查询`Teacher`表中所有教师信息,按教师编号升序排列。

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

![Teacher表.PNG](https://images.ptausercontent.com/c6a16b18-bfb6-44e1-932e-9bd472fd89f2.PNG)

### 输出样例:

![Teacher表.PNG](https://images.ptausercontent.com/cb19c0b2-3b30-42c1-91c4-55d4d6098229.PNG)

## 2.

本题目要求编写 SQL 语句，
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

## 3.

本题目要求编写 SQL 语句，查询`sh_goods`表中`id`、`category_id`和`name`字段。

提示：请使用 SELECT 语句作答。

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

## 4.

本题目要求编写 SQL 语句，检索出`students`表和`sc`表中没有选课的学生学号、姓名和班级。

提示：请使用嵌套查询语句作答。

### **表结构:**

请在这里写定义表结构的 SQL 语句。例如：

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

### **表样例**

请在这里给出上述表结构对应的表样例。例如

`students`表：

| sno     | sname  | class     | ssex | bday       | bplace     | IDNum              | sdept    | phone       |
| ------- | ------ | --------- | ---- | ---------- | ---------- | ------------------ | -------- | ----------- |
| 1311104 | 李嘉欣 | 13 英语 1 | 女   | 1994-05-28 | 山西太原   | 330204199405281056 | 人文学院 | 15900002211 |
| 1311105 | 苏有明 | 13 英语 1 | 男   | 1995-04-16 | 内蒙古包头 | 330204199504162036 | 人文学院 | 15900002222 |
| 1711101 | 赵薇   | 17 物流 1 | 女   | 1999-02-11 | 安徽合肥   | 330203199902110925 | 经管学院 | 15900001177 |
| 1711102 | 董洁   | 17 物流 1 | 女   | 1999-02-17 | 上海       | 330203199902170017 | 经管学院 | 15900001188 |

`sc`表：

| sno     | cno     | score | point |
| ------- | ------- | ----- | ----- |
| 1311104 | 0000011 | 53\.0 | 0\.0  |
| 1311104 | 0000027 | 80\.0 | 1\.0  |
| 1311105 | 0000027 | 84\.0 | 1\.0  |
| 1711101 | 0000052 | 71\.0 | 2\.0  |

### **输出样例:**

请在这里给出输出样例。例如：

| sno     | sname | class     |
| ------- | ----- | --------- |
| 1711102 | 董洁  | 17 物流 1 |

## 5.

在`产品表(products)`中找出`库存量(UnitsInStock)`小于`订购量(UnitsOnOrder)`的产品的`产品编号（ProductID）`和`产品名称（ProductName）`
提示：请使用 SELECT 语句作答。

### 表结构:

| 列名            | 数据类型 | 长度 | 主码 | 说明       |
| --------------- | -------- | ---- | ---- | ---------- |
| ProductID       | int      | 11   | √    | 产品编号   |
| ProductName     | varchar  | 40   |      | 产品名称   |
| SupplierID      | int      | 11   |      | 供应商编号 |
| CategoryID      | int      | 11   |      | 种类编号   |
| QuantityPerUnit | varchar  | 20   |      | 数量       |
| UnitPrice       | decimal  | 10,4 |      | 单价       |
| UnitsInStock    | smallint | 2    |      | 库存数量   |
| UnitsOnOrder    | smallint | 2    |      | 订购数量   |
| ReorderLevel    | smallint | 2    |      | 再次订购量 |
| Discontinued    | bit      | 1    |      | 中止       |

### 表样例

`products`表：

| ProductID | ProductName                     | UnitsInStock | UnitsOnOrder |
| --------- | ------------------------------- | ------------ | ------------ |
| 1         | Chai                            | 39           | 0            |
| 2         | Chang                           | 17           | 40           |
| 3         | Aniseed Syrup                   | 13           | 70           |
| 4         | Chef Anton's Cajun Seasoning    | 53           | 0            |
| 5         | Chef Anton's Gumbo Mix          | 0            | 0            |
| 6         | Grandma's Boysenberry Spread    | 120          | 0            |
| 7         | Uncle Bob's Organic Dried Pears | 15           | 0            |
| 8         | Northwoods Cranberry Sauce      | 6            | 0            |
| 9         | Mishi Kobe Niku                 | 29           | 0            |
| 10        | Ikura                           | 31           | 0            |

### 输出样例:

| ProductID | ProductName   |
| --------- | ------------- |
| 2         | Chang         |
| 3         | Aniseed Syrup |

## 6.

本题目要求编写 SQL 语句，
检索出` sc`表中学号为 S001 的学生选修的而 S003 学号学生未选修的课程号。
注意：查询结果忽略顺序只对比数据。

提示：MSSQLServer 评测 SQL 语句。

### 表结构:

定义表结构的 SQL 语句如：

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

` sc`表：

![sc.JPG](https://images.ptausercontent.com/e4451831-395f-44fd-b378-9426ddcff5ce.JPG)

### 输出样例:

输出样例如：

![l218.JPG](https://images.ptausercontent.com/93a8f9d5-7eb2-45bb-a5d0-fd4ab34b16a6.JPG)

## 7.

本题目要求编写 SQL 语句，
查询销售过’0011’号员工销售的所有产品的其他员工编号和姓名。

提示：请使用 SELECT 语句作答。

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

`employee`表：

| Eid  | EName | Wno | Salary |
| ---- | ----- | --- | ------ |
| 0010 | 张三  | A01 | 3600   |
| 0011 | 刘勇  | A01 | 2700   |
| 0012 | 张立  | A01 | 8500   |
| 0021 | 刘靖  | A02 | 2500   |
| 0022 | 王强  | A02 | 5600   |
| 0023 | 李军  |     | 5000   |
| 0031 | 王林  |     | 3500   |

`orders`表：

| OrdNo | Sid | Eid  | Pid | Price | QTY | ordDate    |
| ----- | --- | ---- | --- | ----- | --- | ---------- |
| 1     | S01 | 0011 | P01 | 11    | 23  | 2022-02-13 |
| 2     | S02 | 0012 | P01 | 12    | 25  | 2022-02-14 |
| 3     | S03 | 0012 | P03 | 60    | 55  | 2022-02-14 |

### 输出样例:

| Eid  | EName |
| ---- | ----- |
| 0012 | 张立  |

## 8.

本题目要求编写嵌套查询 SQL 语句，
查询’A01’仓库中的职工中比’A02’任意一个职工薪水少的职工编号与姓名。

提示：请使用 SELECT 语句作答。

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

`employee`表：

| Eid  | EName | Wno | Salary |
| ---- | ----- | --- | ------ |
| 0010 | 张三  | A01 | 3600   |
| 0011 | 刘勇  | A01 | 2700   |
| 0012 | 张立  | A01 | 8500   |
| 0021 | 刘靖  | A02 | 2500   |
| 0022 | 王强  | A02 | 5600   |
| 0023 | 李军  |     | 5000   |
| 0031 | 王林  |     | 3500   |

### 输出样例:

| Eid  | EName |
| ---- | ----- |
| 0010 | 张三  |
| 0011 | 刘勇  |

## 9.

本题目要求编写 SQL 语句，
结合`sh_goods`表和`sh_goods_comment`表，查询用户评分为 5 星的商品对应的评论信息。

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

## 10.

本题目要求编写 DELETE 语句，删除选修’C 语言’课程的女生的选课记录。

### 表结构:

请在这里写定义表结构的 SQL 语句。例如：

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

` stu`表：

![stu1.JPG](https://images.ptausercontent.com/fcad1d1f-9d5c-45a9-9533-e19c0c6a5fa6.JPG)

`cou`表：

![cou.JPG](https://images.ptausercontent.com/bb3c9397-96a3-4521-8cff-6b8c1b13a273.JPG)

`sc`表：

![sc1.JPG](https://images.ptausercontent.com/c0c78e29-ffc1-406e-a62f-ce67b8661b29.JPG)

### 输出样例:

删除记录后，`sc`表如下：

![sc2.JPG](https://images.ptausercontent.com/97d96f20-6559-4eed-b062-089c504f5bf0.JPG)
