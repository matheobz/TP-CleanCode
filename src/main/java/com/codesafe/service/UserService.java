package com.codesafe.service;

import com.codesafe.model.User;
import java.util.ArrayList;
import java.util.List;

public class UserService {
    private final List<User> users = new ArrayList<>();

    public void init() {
        System.out.println("Initialisation du service utilisateur");
    }

    public void addUser(String name, String role) {
        users.add(new User(name, role));
        System.out.println("Utilisateur ajouté : " + name + " avec le rôle " + role);
    }

    public void removeUser(String name) {
        users.removeIf(u -> u.getName().equals(name));
    }

    public void printAllUsers() {
        for (User u : users) {
            System.out.println(u.getName() + " - " + u.getRole());
        }
    }

    public List<User> getAllUsers() {
        return new ArrayList<>(users);
    }

}
