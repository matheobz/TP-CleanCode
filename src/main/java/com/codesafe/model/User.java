package com.codesafe.model;

public class User {
    private String name;
    private String nametest;
    private String role
    prusedField = 42; // unused

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