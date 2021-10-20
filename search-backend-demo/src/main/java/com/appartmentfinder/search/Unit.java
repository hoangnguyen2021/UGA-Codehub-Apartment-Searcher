package com.appartmentfinder.search;

/**
 * A (probably) temporary class to descibe a housing unit.
 */
public class Unit {

    private int id;
    private String name;
    private double price;
    private boolean petFriendly;

    /**
     * Constructs a Unit with basic parameters.
     * 
     * @param id id
     * @param name name
     * @param price price
     * @param petFriendly are pets allowed
     */
    public Unit (int id, String name, double price, boolean petFriendly) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.petFriendly = petFriendly;
    } // Unit


    /**
     * Gets id
     * @return int id
     */
    public int getID() {
        return id;
    } // getID

    /**
     * Gets name
     * 
     * @return String name
     */
    public String getName() {
        return name;
    } // getName

    /**
     * gets price
     * @return double price
     */
    public double getPrice() {
        return price;
    }

    /**
     * gets if pet friendly
     * @return boolean if pet friendly
     */
    public boolean getPet(){
        return petFriendly;
    }
    
} // Unit
