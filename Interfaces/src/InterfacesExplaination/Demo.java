package InterfacesExplaination;
/*
    class->class = extends
    class->interface = extends
    interface->interface = implements
*/

interface  A{ // don't have to be defined , nothing to be written inside
    int age=19;// initalization of declared variables a must as they are final & static
    String city="Chennai";

    void show();
    void config();
}

interface X{
    void time();
    void date();
}

class B implements A,X{ // use implements keyword

    @Override
    public void show() {
        System.out.println("Show Method");
    }

    @Override
    public void config() {
        System.out.println("Config Method");
    }

    @Override
    public void time() {
        System.out.println("Time Method");
    }

    @Override
    public void date() {
        System.out.println("Date Method");
    }
}
public class Demo {
    public static void main(String[] args) {
        B obj = new B();
        obj.show();
        obj.config();
        System.out.println(A.age);
        obj.time();
        obj.date();
        System.out.println(A.city);
    }
}
