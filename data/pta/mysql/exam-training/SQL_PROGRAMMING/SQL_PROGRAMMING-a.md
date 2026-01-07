## 1.

### Answer ✅

```sql
select sname,nation,phone
from student
where sname like '%李%'
```

## 2.

### Answer ✅

```sql
select cno,cname
from course
limit 3
```

## 3.

### Answer ✅

```sql
select sname,class
from students
where sname like '%明%'
```

## 4.

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

### Answer ✅

```sql
select *
from student
where sex='男' and TIMESTAMPDIFF(year,birth,'2021-09-01')>=24;
```

## 6.

### Answer ✅

```sql
select name,category_id ,price 
from sh_goods 
order by category_id asc,price desc
```

## 7.

### Answer ✅

```sql
select id,category_id,name
from sh_goods
```

## 8.

### Answer ✅

```sql
select name,price as old_price,
        stock as old_stock,price * 0.75 as new_price,
        stock + 850 as new_stock
from sh_goods 
where score = 5.0
```

## 9.

### Answer ✅

```sql
select id,name ,price 
from sh_goods 
where price between 2000 and 6000
```

## 10.

### Answer ✅

```sql
select id,name,price
from goods
where price is NULL
```

## 11.

### Answer ✅

```sql
select id,name,price
from goods
where name like '%pad%'
```

## 12.

### Answer ✅

```sql
select id,name,price
from sh_goods
where category_id=3 and score = 5.0
```

## 13.

### Answer ✅

```sql
select name,price,score
from sh_goods 
where score = 4.5 or price <10
```

## 14.

### Answer ✅

```sql
select distinct DepartmentID 
from Teacher
```

## 15.

### Answer ✅

```sql
select StudentName ,Birth  
from Student
where Birth>=all(select Birth from Student)
```

## 16.

### Answer ✅

```sql
select ClassID
from Class
where StudentNum > 5
```

## 17.

### Answer ✅

```sql
select max(grade) as max_grade
from Grade 
where CourseID='Dp010001'
```

## 18.

### Answer ✅

```sql
select StudentID,Grade
from Grade
where CourseID = 'Dp010004'
order by Grade desc,StudentID asc;
```

## 19.

### Answer ✅

```sql
select distinct sno,score
from course join sc on course.cno = sc.cno
where cname like '%数据库%' and score between 80 and 90
```

## 20.

### Answer ✅

```sql
update sc join cou on cou.cno=sc.cno  
set grade=60 where grade<60 and cname='高等数学'
```

## 21.

### Answer ✅

```sql
insert into warehouse(Wno,city,size)
 values('D01','绍兴',11000);
```

## 22.

### Answer ✅

```sql
update orders 
set QTY = QTY * 1.4
where Pid in (select Pid from product where PName like '%螺母%')
```

## 23.

### Answer ✅

```sql
delete from product
 where sale_price>=100
```

## 24.

### Answer ✅

```sql
select *
from student
where birth < (select birth from student where sname = '伍容华')
```

## 25.

### Answer ✅

```sql
select *
from `product`
where Weight between 40 and 65;
```

## 26.

### Answer ✅

```sql
select *
from `supplier`
where City not in ('上海','北京','天津');
```

## 27.

### Answer ✅

```sql
select Pid
from `product`
where PName like '%M%' and Weight >30
```

## 28.

### Answer ✅

```sql
select Eid,EName
from `employee`
where Wno is null
```

## 29.

### Answer ✅

```sql
SELECT * FROM Product WHERE  purchase_price  BETWEEN 50 AND 150;
```

## 30.

### Answer ✅

```sql
SELECT PName, Weight_g / 1000 as Weight_kg
FROM product;
```

## 31.

### Answer ✅

```sql
select stu.sno,sname,grade
from stu join sc on stu.sno=sc.sno
where cno='C002'
order by grade desc 
limit 2
```

## 32.

### Answer ✅

```sql
update sc join stu on sc.sno=stu.sno
set grade=grade*1.05
where grade < 75 and sex=0
```

## 33.

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

### Answer ✅

```sql
select ProductID, ProductName
from products
where UnitsInStock < UnitsOnOrder
```

## 35.

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

### Answer ✅

```sql
Insert into stu
select * 
from student
where dept='数计学院'
```

## 40.

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

### Answer ✅

```sql
select cno 课程号
from sc 
where sno='S001' and cno not in
(select cno from sc where sno ='S003')
```

## 42.

### Answer ✅

```sql
select sname 姓名,mname 专业名,SUM(credit) 总学分
FROM stu,major,cou,sc
WHERE stu.sno=sc.sno and cou.cno=sc.cno and stu.mno=major.mno
group by sname,mname
having count(sc.cno)>=2 and min(grade)>=80 and count(sc.cno)=count(grade)
```

## 43.

### Answer ✅

```sql
select count(distinct cno) 门数 from sc
```

## 44.

### Answer ✅

```sql
select cno 课程号,count(sno) 选修人数
from sc
group by 课程号
order by 选修人数 desc
limit 3;
```

## 45.

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

### Answer ✅

```sql
select sh_goods.id, name
from sh_goods left join sh_goods_comment on sh_goods.id = sh_goods_comment.goods_id 
where sh_goods_comment.content is null
```

## 47.

### Answer ✅

```sql
select sg.name, sgc.content
from sh_goods sg, sh_goods_comment sgc
where sg.id = sgc.goods_id and score = 5
```

## 48.

### Answer ✅

```sql
select sg.id gid, sgc.id cid, sgc.name cname, score
from sh_goods sg join sh_goods_category sgc on sg.category_id = sgc.id
where score = 5
```

## 49.

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

### Answer ✅

```sql
select course.cno,cname,count(sno) total
from course left join score on course.cno=score.cno
where attribute ='必修'
group by course.cno,cname
```

## 52.

### Answer ✅

```sql
select sname,dept from student,score,course
where student.sno = score.sno 
and course.cno = score.cno 
and cname='大学语文' 
and grade >80
```

## 53.

### Answer ✅

```sql
select empno,ename,sal,grade from emp,salgrade
where sal between losal and hisal
```

## 54.

### Answer ✅

```sql
select a.empno 员工编号,a.ename 员工姓名,a.mgr 上司编号,b.ename 上司姓名
from emp a left join emp b on a.mgr = b.empno
```

## 55.

### Answer ✅

```sql
select DepartmentHeader from Teacher,Department
where Teacher.DepartmentID = Department.DepartmentID and TeacherID = 'dep01001'
```

## 56.

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

### Answer ✅

```sql
select student.sno, sname, course.cno, cname, term, grade
from student, course, score
where student.sno = score.sno and course.cno = score.cno
```

## 58.

### Answer ✅

```sql
select sc.sno 学号,cname 课程名,grade 成绩
from cou,sc,(select sno,avg(grade) avgscore from sc  group by sno) sc_avg
where cou.cno=sc.cno  and sc.sno=sc_avg.sno and grade>avgscore
```

## 59.

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

### Answer ✅

```sql
select sno 学号,round(avg(grade),1) 平均成绩
from score
group by sno
having count(cno)>=2
```

## 62.

### Answer ✅

```sql
select gid 商品编号,sum(quantity) 销售总数量
from recorder
group by gid
```

## 63.

### Answer ✅

```sql
select avg(score) 平均分, max(score) 最高分, min(score) 最低分
from sc
where cno = '0000001'
```

## 64.

### Answer ✅

```sql
select sno 学号,count(*) 选课门数,sum(score) 考试总成绩
from sc
group by sno
order by sno
```

## 65.

### Answer ✅

```sql
select keyword, count(*) goodscount
from sh_goods
group by keyword
```

## 66.

### Answer ✅

```sql
select category_id, max(price) max_price
from sh_goods
group by category_id
```

## 67.

### Answer ✅

```sql
select max(stock) stock1, min(stock) stock2
from sh_goods
```

## 68.

### Answer ✅

```sql
select category_id, avg(price) average
from sh_goods
group by category_id
having count(*) > 2
```

## 69.

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

### Answer ✅

```sql
select maker from product
where model in (select model from pc)
group by maker
having count(*) >=3
```

## 71.

### Answer ✅

```sql
select students.sno,sname,cno,score
from students left join sc on sc.sno = students.sno
```

## 72.

### Answer ✅

```sql
select count(*)
from product
where PName like '%螺母%'
```

## 73.

### Answer ✅

```sql
select max(Salary) max_Salary,min(Salary) min_Salary
from employee
```

## 74.

### Answer ✅

```sql
select Wno,count(Eid) Count_Eid
from employee
where Wno is not null
group by Wno
```

## 75.

### Answer ✅

```sql
select Eid,EName
from employee
where Wno = 'A01' and Salary > (select max(Salary) from employee where Wno = 'A02')
```

## 76.

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

### Answer ✅

```sql
select Eid,EName
from employee where Eid != '0011' and not exists
(select * from orders b where Eid = '0011' and not exists 
(select * from orders where employee.Eid=Eid))
```

## 78.

### Answer ✅

```sql
select maker
from product,pc
where product.model=pc.model 
and ram = (select min(ram) from pc)
and speed = (select max(speed) from pc where ram = (select min(ram) from pc))
```

## 79.

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

### Answer ✅

```sql
select Eid,EName
from employee
where Wno = 'A01' and Salary < any(
    select Salary from employee where Wno = 'A02')
```

## 81.

### Answer ✅

```sql
select dept 院部,count(sno) 总人数
from student
group by dept
order by count(sno) desc
```

## 82.

### Answer ✅

```sql
select sno 学号, avg(grade) 平均分
from score
group by sno
having count(*) >= 2
```

## 83.

### Answer ✅

```sql
delete 
from sc
where SCScore3 < 60
```

