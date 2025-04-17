package com.codesafe.service;

import com.codesafe.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {
    private List<User> users = new ArrayList<>();

    public void init() {
        System.out.println("Initializing user service");
    }

    public void addUser(String name, String role) {
        users.add(new User(name, role));
        System.out.println("User added: " + name);
        System.out.println("User added: " + name); // duplicate output
    }

    public void removeUser(String name) {
        users.removeIf(u -> u.getName().equals(name));
    }

    public void printAll() {
        for (User u : users) {
            System.out.println(u.getName() + " - " + u.getRole());
        }
    }
}