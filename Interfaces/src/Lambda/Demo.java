package Lambda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Demo {
    record Person(String firstname, String lastname) {
        @Override
        public String toString() {
            return firstname + " " + lastname;
        }
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>(Arrays.asList(
                new Demo.Person("Vedant","Pophali"),
                new Person("Aditya","GV"),
                new Person("Surya","K")));
        var comparatorLastName = new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                return o1.lastname.compareTo(o2.lastname);
            }
        };
        people.sort((o1, o2) -> o1.lastname.compareTo(o2.lastname));
        System.out.println(people);

    }
}
