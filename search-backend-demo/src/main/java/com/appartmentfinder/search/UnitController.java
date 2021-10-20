package com.appartmentfinder.search;

import java.lang.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * A (demo) class to handle GET API requests for units. Can return filtered lists.
 */
@RestController
public class UnitController {

    // Idealy this would be given by some other class that generates a list of places, but for testing this is what will work
    private Unit[] units = {new Unit(1, "worst western", 300.0, false), new Unit(2, "la keenta", 400.0, true), new Unit(3, "holiday out", 350.0, true), new Unit(4, "marry ott", 476.0, true), new Unit(5, "fake name", 100.0, false)};

    /*
    units[0] = new Unit(1, "worst western", 300.0, false);
    units[2] = new Unit(2, "la keenta", 400.0, true);
    units[3] = new Unit(3, "holiday out", 350.0, true);
    units[4] = new Unit(4, "marry ott", 476.0, true);
    units[5] = new Unit(5, "fake name", 100.0, false);
    */

    /**
     * Seaches for Units under the specified price. Default is 1000.
     * @param price price to find units under
     * @return array of units of the correct price.
     */
    @GetMapping("/price")
    public Unit[] price(@RequestParam(value = "price", defaultValue = "default") String price) {
        Unit[] results = new Unit[units.length];
        //Convert input (price) into a double
        //Not sure if there is a better way to do this, there probably is
        double priceDouble;
        if (price.equals("default")) {
            priceDouble = 1000;
        } else {
            priceDouble = Double.parseDouble(price);
        } // if
        //Search for any valid units
        int counter = 0;
        for (int i = 0; i < units.length; i++) {
            if (units[i].getPrice() < priceDouble) {
                results[counter] = units[i];
                counter++;
            } // if
        } // for
        return results;
    } // price

    /**
     * Searches for Units that allow pets. Default is true.
     * @param pet if pets are allowed
     * @return array of units that allow pets
     */
    @GetMapping("/pets")
    public Unit[] pets(@RequestParam(value = "pet", defaultValue = "true") String pet) {
        Unit[] results = new Unit[units.length];
        //Convert input (pet) into a boolean
        //Not sure if there is a better way to do this, there probably is
        boolean petBool;
        if (pet.equals("true")) {
            petBool = true;
        } else {
            petBool = false;
        } // if
        //Search for any valid units
        int counter = 0;
        for (int i = 0; i < units.length; i++) {
            if (units[i].getPet() == petBool) {
                results[counter] = units[i];
                counter++;
            } // if
        } // for
        return results;
    } // pet
} // UnitController
