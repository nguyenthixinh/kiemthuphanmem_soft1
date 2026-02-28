package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.Collections;

public class StudentAnalyzerTest {

    StudentAnalyzer analyzer = new StudentAnalyzer();

    // ===== TEST COUNT =====

    @Test
    void testCountExcellentStudents_NormalCase() {
        assertEquals(2,
                analyzer.countExcellentStudents(
                        Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0)
                ));
    }

    @Test
    void testCountExcellentStudents_EmptyList() {
        assertEquals(0,
                analyzer.countExcellentStudents(Collections.emptyList()));
    }

    // ===== TEST AVERAGE =====

    @Test
    void testCalculateValidAverage_NormalCase() {
        assertEquals(8.17,
                analyzer.calculateValidAverage(
                        Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0)
                ),
                0.01);
    }

    @Test
    void testCalculateValidAverage_AllInvalid() {
        assertEquals(0,
                analyzer.calculateValidAverage(Arrays.asList(-5.0, 20.0)));
    }
}