package com.codesafe.model;

public class User {
    private String name;
    private String role;
    private int unusedField = 42; // unused

    public User(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }
}