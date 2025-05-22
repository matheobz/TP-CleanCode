package com.codesafe.service;

import com.codesafe.model.User;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Tag("regression")
public class UserServiceTest {

    @Test
    void testAddAndRemoveUser() {
        UserService service = new UserService();

        service.addUser("Bob", "user");
        List<User> usersAfterAdd = service.getAllUsers();
        assertEquals(1, usersAfterAdd.size());
        assertEquals("Bob", usersAfterAdd.get(0).getName());

        service.removeUser("Bob");
        List<User> usersAfterRemove = service.getAllUsers();
        assertTrue(usersAfterRemove.isEmpty());
    }

    @Test
    @Tag("validation")
    void testAddMultipleUsers() {
        UserService service = new UserService();
        service.addUser("Claire", "manager");
        service.addUser("Alice", "admin");

        List<User> users = service.getAllUsers();
        assertEquals(2, users.size());
        assertTrue(users.stream().anyMatch(u -> u.getName().equals("Claire")));
        assertTrue(users.stream().anyMatch(u -> u.getRole().equals("admin")));
    }
}
