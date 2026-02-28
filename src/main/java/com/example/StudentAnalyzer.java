package com.example;

import java.util.List;

public class StudentAnalyzer {

    /**
     * Đếm số học sinh giỏi (>= 8.0)
     */
    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }

        int count = 0;

        for (Double score : scores) {
            if (score == null) continue;

            // validate
            if (score >= 0 && score <= 10) {
                if (score >= 8.0) {
                    count++;
                }
            }
        }

        return count;
    }

    /**
     * Tính trung bình các điểm hợp lệ
     */
    public double calculateValidAverage(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }

        double sum = 0;
        int validCount = 0;

        for (Double score : scores) {
            if (score == null) continue;

            if (score >= 0 && score <= 10) {
                sum += score;
                validCount++;
            }
        }

        if (validCount == 0) {
            return 0;
        }

        return sum / validCount;
    }
}