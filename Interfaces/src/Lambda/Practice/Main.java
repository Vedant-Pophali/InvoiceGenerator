package Lambda.Practice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.function.BiConsumer;
import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("alpha", "bravo", "charlie", "delta"));
        for (String s : list) {
            System.out.println(s);
        }
        System.out.println("----");
        list.forEach((s) -> System.out.println(s));
        System.out.println("----");
        String prefix = "NATO";
        list.forEach((var myString) -> {
            char firstChar = myString.charAt(0);
            System.out.println(myString + " " + firstChar);
        });
        int result = Calculator((a, b) -> a + b, 5, 10);
        var result2 = Calculator(( a,  b) -> a / b, 10.0, 5.0);
        var result3 = Calculator(( a,  b) -> a.toUpperCase()+" "+b.toUpperCase(), "Vedant", "Pophali");
        System.out.println("----");

        //co-ordinates
        var coords= Arrays.asList(
                new double[]{47.2160,-95.2348},
                new double[]{29.1566,-89.2495},
                new double[]{35.1556,-90.0659}
        );
        coords.forEach(s->System.out.println(Arrays.toString(s)));

        BiConsumer<Double,Double> p1 = (lat,lang) ->
            System.out.printf("[lat:%.3f long:%.3f]%n",lat,lang);
        var firstPoint = coords.get(0);
        var secondPoint = coords.get(1);
        var thirdPoint = coords.get(2);
        processPoint(firstPoint[0],firstPoint[1],p1);
        processPoint(secondPoint[0],secondPoint[1],p1);
        processPoint(thirdPoint[0],thirdPoint[1],p1);
        System.out.println("----");
        coords.forEach(s->processPoint(s[0],s[0],p1));
        list.removeIf(s -> s.equalsIgnoreCase("bravo"));
        list.forEach(s-> System.out.println(s));
        System.out.println("----");

        list.addAll(List.of("echo","easy","earnest"));
        list.forEach(s-> System.out.println(s));
        System.out.println("----");
        list.removeIf(s-> s.startsWith("ea"));
        list.forEach(s-> System.out.println(s));

        list.replaceAll(s-> s.charAt(0)+"-"+s.toUpperCase());
        System.out.println("----");
        list.forEach(s-> System.out.println(s));

        String emptyStrings[] = new String[10];
        System.out.println(Arrays.toString(emptyStrings));
        Arrays.fill(emptyStrings,"");
        System.out.println(Arrays.toString(emptyStrings));

        Arrays.setAll(emptyStrings,(i)->" "+(i+1)+". ");
        System.out.println(Arrays.toString(emptyStrings));

        Arrays.setAll(emptyStrings,(i)->" "+(i+1)+". "
        +switch (i){
            case 0 -> "one";
            case 1 -> "two";
            case 2 -> "three";
            default -> "";
        }
        );
        System.out.println(Arrays.toString(emptyStrings));
        String names[] = {
                "Anantha", "Bhargavi", "Chandramouli", "Dharmesh", "Eshwar", "Ganesh",
                "Hariharan", "Iyengar", "Janaki", "Krishnan", "Lakshmi", "Madhavan",
                "Natarajan", "Omprakash", "Padmanabhan", "Quirishi", "Raghavan", "Seshadri",
                "Thirumalai", "Umashankar", "Venkatesh", "Wathsala", "Xarun", "Yatindra", "Zara"
        };
        String randomlList[] = randomlySelectedValues(100,names,()->new Random().nextInt(0,names.length));
        System.out.println(Arrays.toString(randomlList));

    }
    public static <T> T Calculator(Operations<T> fucntion,T a,T b) {
        T result = fucntion.operate(a,b);
        System.out.println("Result of operation : "+result);
        return result;
    }
    public static <T> void processPoint(T t1,T t2, BiConsumer<T, T> fucntion) {
         fucntion.accept(t1,t2);
    }
    public  static  String[] randomlySelectedValues(int count,
                                                    String[] values,
                                                    Supplier<Integer> s){
        String selectedValues[]= new String[count];
        for(int i=0;i<count;i++){
            selectedValues[i]=values[s.get()];
        }
        return selectedValues;
    }
}