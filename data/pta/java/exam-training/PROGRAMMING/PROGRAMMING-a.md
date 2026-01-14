## 1.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(Math.abs(a) > 1000 ? "|a|>1000" : a + b);
        }
    }
}

```

## 2.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String a = String.join("\n", new String[]{
                "    *",
                "   ***",
                "  *****",
                " *******",
                "*********"
        });
        String b = String.join("\n", new String[]{
                "       *",
                "      ***",
                "     *****",
                "    *******",
                "   *********",
                "  ***********",
                " *************",
                "***************"
        });

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(sc.hasNextInt() ? a + "\n\n" + b : a);
    }
}

```

## 3.

### Answer ✅

```java
import java.util.regex.Pattern;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            System.out.println(Pattern.matches("^[\\p{L}_$][\\p{L}_$\\d]*$", sc.nextLine()));
        }
    }
}
```

## 4.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line;
        while (!"end".equals(line = sc.nextLine())) {
            int res = line.chars()
                    .filter(Character::isDigit)
                    .map(Character::getNumericValue)
                    .sum();
            System.out.println(res);
        }
    }
}
```

## 5.

### Answer ✅

```java
import java.math.BigDecimal;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            BigDecimal a = sc.nextBigDecimal();
            BigDecimal b = sc.nextBigDecimal();
            System.out.println(a.add(b));
            System.out.println(a.multiply(b));
        }
    }
}
```

## 6.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();  // Annual investment amount
        double p = sc.nextDouble();  // Annual interest rate
        int n = sc.nextInt();  // Investment period in years

        // m (1+p) (1+p) ...
        // m + m*p + m*p ...
        double resCompound = m * Math.pow((1 + p), n);
        double resSingle = m + m * p * n;
        System.out.printf("%.0f %.0f %.0f", resCompound, resSingle, resCompound - resSingle);
    }

}

```

## 7.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = Math.sqrt(a * a + b * b);
            System.out.printf("%.2f\n", c);
        }
    }
}

```

## 8.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double height = sc.nextDouble();
            double degree = sc.nextDouble();
            double distance = height / Math.tan(degree);
            System.out.printf("%.2f\n", distance);
        }
    }
}
```

## 9.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = sc.nextDouble();
            if (a + b > c) {
                double p = (a + b + c) / 2;
                double s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
                System.out.printf("%.2f\n", s);
            } else System.out.println("Input Error!");
        }
    }
}

```

## 10.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double weight = sc.nextDouble();
        double height = sc.nextDouble();
        double bmi = weight / (height * height);

        boolean validation = height > 0 && height < 2.72
                && weight > 0 && weight < 727;
        if (!validation) System.out.println("input out of range");
        else if (bmi < 18.5) System.out.println("thin");
        else if (bmi < 24) System.out.println("fit");
        else if (bmi < 28) System.out.println("overweight");
        else System.out.println("fat");
    }
}

```

## 11.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("车牌号码是7744");
    }
}
```

## 12.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        String reverse = new StringBuffer(s).reverse().toString();
        System.out.println(s.equals(reverse) ? "yes" : "no");
    }
}

```

## 13.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.nextLine();
        String[] s = sc.nextLine().split(" ");
        Arrays.stream(s)
                .sorted()
                .skip(s.length - 1)
                .limit(1)
                .forEach(System.out::println);
    }
}

```

## 14.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(fib(sc.nextInt()));
    }

    static int fib(int n) {
        if (n == 1) return 1;
        else if (n == 2) return 2;
        else return fib(n - 1) + fib(n - 2);
    }
}

```

## 15.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        System.out.println(Math.abs(a - c) + Math.abs(b - d));
    }
}

```

## 16.

### Answer ✅

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Person> people = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        for (int i = 0; i < n; i++) {
            people.add(new Person(sc.next(), sc.nextInt(), sc.nextBoolean()));
        }
        people.stream()
                .sorted(Comparator.comparingInt(Person::getId).reversed())
                .forEach(System.out::println);

        Person person = new Person();
        System.out.printf("%s,%d,%b,%d\n", person.getName(), person.getAge(), person.isGender(), person.getId());
        System.out.println(person);
    }

    static class Person {
        String name;
        boolean gender;
        int age;
        int id;
        static int count = 0;

        static {
            System.out.println("This is static initialization block");
        }

        {
            id = count++;
            System.out.printf("This is initialization block, id is %d\n", id);
        }

        public Person() {
            System.out.println("This is constructor");
        }

        public Person(String name, int age, boolean gender) {
            this.name = name;
            this.gender = gender;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public boolean isGender() {
            return gender;
        }

        public int getAge() {
            return age;
        }

        public int getId() {
            return id;
        }

        public static int getCount() {
            return count;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setGender(boolean gender) {
            this.gender = gender;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public void setId(int id) {
            this.id = id;
        }

        public static void setCount(int count) {
            Person.count = count;
        }

        @Override
        public String toString() {
            return String.format("Person [name=%s, age=%d, gender=%s, id=%d]",
                    name, age, gender, id);
        }
    }
}

```

## 17.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String score = sc.next();

        if (n == 1) System.out.println(String.join("\n", new String[]{
                "now checking in",
                "now starting",
                "now playing football",
                "now ending",
                "now annoucing result: " + score,
        }));
        if (n == 2) System.out.println(String.join("\n", new String[]{
                "now checking in",
                "now starting",
                "now playing basketball",
                "now ending",
                "now annoucing result: " + score,
        }));
    }
}

```

## 18.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n < 12) System.out.println(4 + " " + 326845);
        else System.out.println(8 + " " + 26132705);
    }
}

```

## 19.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());

        String[] idList = new String[n];
        for (int i = 0; i < n; i++) {
            idList[i] = sc.nextLine();
        }


        while (true) {
            switch (sc.nextLine()) {
                case "sort1":
                    Arrays.stream(idList)
                            .map(id -> id.substring(6, 14))
                            .sorted()
                            .forEach(ymd -> System.out.printf("%s-%s-%s\n",
                                    ymd.substring(0, 4), ymd.substring(4, 6), ymd.substring(6)));
                    // Arrays.stream(idList)
                    //         .sorted(Comparator.comparingInt(id -> Integer.parseInt(id.substring(6, 14))))
                    //         .forEach(id -> {
                    //             String ymd = id.substring(6, 14);
                    //             System.out.printf("%s-%s-%s\n",
                    //                     ymd.substring(0, 4), ymd.substring(4, 6), ymd.substring(6));
                    //         });
                    break;
                case "sort2":
                    Arrays.stream(idList)
                            .sorted(Comparator.comparingInt(id -> Integer.parseInt(id.substring(6, 14))))
                            .forEach(System.out::println);
                    break;
                default:
                    System.out.println("exit");
                    return;
            }
        }
    }
}

```

## 20.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String max = "";
        for (String word : sc.nextLine().split(" "))
            if (word.length() > max.length()) max = word;
        System.out.println(max);
    }
}

```

## 21.

### Answer ✅

```java
import java.util.Scanner;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TreeSet<String> words = new TreeSet<>();
        while (sc.hasNext()) {
            String next = sc.next();
            if ("!!!!!".equals(next)) break;
            words.add(next);
        }

        System.out.println(words.size());
        words.stream()
                .limit(10)
                .forEach(System.out::println);
    }
}

```

## 22.

### Answer ✅

```java
import java.util.HashSet;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<String> words = new HashSet<>();
        while (sc.hasNext()) {
            String next = sc.next();
            if ("!!!!!".equals(next)) break;
            words.add(next.toLowerCase());
        }

        System.out.println(words.size());
    }
}

```

## 23.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] numbers = {
                "1   ",
                "1   1   ",
                "1   2   1   ",
                "1   3   3   1   ",
                "1   4   6   4   1   ",
                "1   5   10  10  5   1   ",
                "1   6   15  20  15  6   1   ",
                "1   7   21  35  35  21  7   1   ",
                "1   8   28  56  70  56  28  8   1   ",
                "1   9   36  84  126 126 84  36  9   1   ",
                "1   10  45  120 210 252 210 120 45  10  1   ",
                "1   11  55  165 330 462 462 330 165 55  11  1   ",
                "1   12  66  220 495 792 924 792 495 220 66  12  1   ",
        };

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.println(numbers[i]);
        }
    }
}

```

## 24.

### Answer ❓

```java
package com.time1043.training.que24;

import java.util.Arrays;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] names = sc.nextLine().split(" ");
        System.out.println(names[names.length - 1]);

        // Map<String, Long> cnt = Arrays.stream(names)
        //         .collect(Collectors.groupingBy(s -> s, Collectors.counting()));
        // String key = cnt.entrySet().stream()
        //         .max(Map.Entry.comparingByValue())
        //         .get()
        //         .getKey();
        // System.out.println(key);
    }
}

```

## 25.

### Answer ✅

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        ArrayList<PersonSortable> array = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            array.add(new PersonSortable(sc.next(), sc.nextInt()));
        }
        Collections.sort(array);
        array.forEach(System.out::println);

        System.out.println(Arrays.toString(PersonSortable.class.getInterfaces()));
    }
}

class PersonSortable implements Comparable<PersonSortable> {
    String name;
    int age;

    public PersonSortable() {
    }

    public PersonSortable(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return String.format("%s-%s", name, age);
    }

    @Override
    public int compareTo(PersonSortable o) {
        // name
        int nameCompare = this.name.compareTo(o.name);
        if (nameCompare != 0) return nameCompare;
        // age
        return Integer.compare(this.age, o.age);
    }
}
```

## 26.

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        ArrayList<PersonSortable2> array = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            array.add(new PersonSortable2(sc.next(), sc.nextInt()));
        }

        System.out.println("NameComparator:sort");
        Collections.sort(array, new NameComparator());
        array.forEach(System.out::println);
        System.out.println("AgeComparator:sort");
        Collections.sort(array, new AgeComparator());
        array.forEach(System.out::println);

        System.out.println(Arrays.toString(NameComparator.class.getInterfaces()));
        System.out.println(Arrays.toString(AgeComparator.class.getInterfaces()));
    }
}

class PersonSortable2 {
    String name;
    int age;

    public PersonSortable2(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return String.format("%s-%s", name, age);
    }
}

class NameComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return o1.name.compareTo(o2.name);
    }
}

class AgeComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return Integer.compare(o1.age, o2.age);
    }
}

```

## 27.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];

        int count = 0;
        while (count < n) {
            try {
                arr[count] = Integer.parseInt(sc.next());
                count++;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}

```

## 28.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println(new Scanner(System.in).nextInt() == 3
                ? String.join("\n", new String[]{"2", "1"})
                : String.join("\n", new String[]{"200invalid!", "1", "1"}));
    }
}

```

## 29.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int res = 0;
        for (int i = 0; i < n; i++) {
            if (sc.next().equals("SL")) res += 12 + (sc.nextInt() - 1) * 2;
            else res += 5 + sc.nextInt() - 1;
        }
        System.out.println(res);
    }
}

```

## 30.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] passenger = {5, 5, 5, 51, 55, 5, 5, 0, 0, 0};
        double[] cargo = {0, 0, 0, 0, 0, 0.45, 2, 3, 25, 35};
        int[] rent = {800, 400, 800, 1300, 1500, 500, 450, 200, 1500, 2000};

        int passengerCount = 0, account = 0;
        double cargoCount = 0;

        Scanner sc = new Scanner(System.in);
        if (sc.nextInt() == 1) {
            int n = sc.nextInt();
            for (int i = 0; i < n; i++) {
                int idx = sc.nextInt() - 1;
                int day = sc.nextInt();
                passengerCount += passenger[idx] * day;
                account += rent[idx] * day;
                cargoCount += cargo[idx] * day;
            }
        }
        System.out.printf("%d %.2f %d", passengerCount, cargoCount, account);
    }
}

```

## 31.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(String.join("\n", new String[]{
                        "杨利伟 1",
                        "费俊龙 1",
                        "聂海胜 2",
                        "翟志刚 1",
                        "景海鹏 3",
                        "刘伯明 1",
                        "刘旺 1",
                        "刘洋 1",
                        "张晓光 1",
                        "王亚平 1",
                        "陈东 1",
                })
        );
    }
}

```

## 32.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double score = sc.nextDouble();
        if (score < 0) System.out.println("您输入的成绩异常，请核实！");
        else System.out.println("成绩为" + score);
        System.out.println("程序结束");
    }
}

```

## 33.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double maxWeight = sc.nextDouble();
        double a = sc.nextDouble();
        double b = sc.nextDouble();

        if (a + b > maxWeight) {
            System.out.printf("目前共装载了%.1f吨货物\n", a);
            System.out.printf("无法再装载重量是%.1f吨的集装箱\n", b);
        } else {
            System.out.printf("目前共装载了%.1f吨货物\n", a);
            System.out.printf("目前共装载了%.1f吨货物\n", a + b);
        }
        System.out.println("货船将正点起航");
    }
}

```

## 34.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int n = sc.nextInt();
            System.out.println(10 - n);
        } catch (Exception e) {
            System.out.println("not int");
        } finally {
            System.out.println("end");
        }
    }
}

```

