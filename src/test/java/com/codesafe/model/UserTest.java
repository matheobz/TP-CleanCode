package com.codesafe.model;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Tag("regression")
public class UserTest {

    @Test
    void shouldCreateUserWithCorrectNameAndRole() {
        User user = new User("Alice", "admin");

        assertEquals("Alice", user.getName());
        assertEquals("admin", user.getRole());
    }
}
