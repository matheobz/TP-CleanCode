package com.codesafe;

import com.codesafe.service.UserService;

public class App {
    public static void main(String[] args) {
        UserService userService = new UserService();
        userService.init();

        userService.addUser("Bob", "admin");
        userService.addUser("Alice", "user");

        userService.printAllUsers();
    }
}
