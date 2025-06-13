package Trial;
enum FlightStages implements Trackable{GROUNDED,LAUNC,CRUISE,DATA_COLLECTION;
    @Override
    public void track() {
        if(this!=GROUNDED){
            System.out.println("Monitoring "+this);
        }
    }
}
record DragonFly(String name,String type) implements FlightEnabled {

    @Override
    public void takeOff() {
    }

    @Override
    public void land() {
    }

    @Override
    public void fly() {
    }
}
class Satellite implements  OrbitEarth{
    public void acheiveOrbit(){
        System.out.println("Orbit acheived!");
    }
    @Override
    public void achieveOrbit() {
    }
    @Override
    public void takeOff() {
    }
    @Override
    public void land() {
    }
    @Override
    public void fly() {

    }
}
interface  OrbitEarth extends FlightEnabled{
    void achieveOrbit();
}

interface FlightEnabled{
    double KM_TO_MILES = 1.60934;
    double MILES_TO_KM = 0.621371;
    abstract void takeOff();
    abstract void land();
    void fly();
}
interface Trackable{
    void track();
}
public abstract class Animal {
    public abstract void move();
}