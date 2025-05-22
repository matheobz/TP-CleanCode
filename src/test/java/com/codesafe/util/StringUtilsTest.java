package com.codesafe.util;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@Tag("regression")
public class StringUtilsTest {

    @Test
    void testIsNullOrEmpty() {
        assertTrue(StringUtils.isNullOrEmpty(null));
        assertTrue(StringUtils.isNullOrEmpty(""));
        assertFalse(StringUtils.isNullOrEmpty("not empty"));
    }
}

