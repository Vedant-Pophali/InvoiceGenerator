package Trial;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        Bird bird = new Bird();
        Animal animal = bird;
        FlightEnabled flier = bird;
        Trackable tracking = bird;
        bird.move();
        flier.takeOff();
        flier.fly();
        flier.land();
        tracking.track();
        inFlight(flier);
        inFlight(new Jet());

        Trackable truck = new Truck();
        truck.track();

        double kmsTravelled=100;
        double milesTravelled=kmsTravelled*FlightEnabled.KM_TO_MILES;
        System.out.println("Miles travelled = "+milesTravelled);

        ArrayList<FlightEnabled> fliers=new ArrayList<>();
        fliers.add(bird);

        List<FlightEnabled> betterFlies = new ArrayList<>();
        betterFlies.add(bird);

    }
    public static void inFlight(FlightEnabled flier){
        flier.takeOff();flier.fly();
        if(flier instanceof Trackable tracking){
            tracking.track();
        }
        flier.land();
    }

}