package com.codesafe;

import com.codesafe.service.UserService;

public class App {
    public static void main(String[] args) {
        UserService s = new UserService();
        s.init(); s.init(); // duplicate call
        s.addUser("Bob", "admin");
        s.addUser("Alice", "user");
        s.printAll();
    }
}