package Trial;

public class Bird extends Animal implements FlightEnabled,Trackable{
    @Override
    public void move() {
        System.out.println(getClass().getSimpleName() +" Flaps Wings");
    }

    @Override
    public void takeOff() {
        System.out.println(getClass().getSimpleName()+" Takes Off");
    }

    @Override
    public void land() {
        System.out.println(getClass().getSimpleName()+" Lands");
    }

    @Override
    public void fly() {
        System.out.println(getClass().getSimpleName()+" Flying");
    }

    @Override
    public void track() {
        System.out.println(getClass().getSimpleName()+" Tracking co-ordinates");
    }
}