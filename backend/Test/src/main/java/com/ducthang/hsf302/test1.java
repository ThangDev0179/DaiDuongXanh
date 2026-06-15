package com.ducthang.hsf302;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class test1 {
    public String StudentName;
    public int StudentAge;

    public void Get_Student() {
        String Student_Id = "ST001";
        System.out.println(Student_Id);
    }

    public int getScore(int math, int english) {
        int extra = 100;
        int total = math + english;
        total = math - english;
        return total;
    }

    public boolean isPassed(int score) {
        if (score >= 50) {
            return true;
        } else {
            return false;
        }
    }

    public String getGreeting() {
        String greeting = "Hello Student";
        return greeting;
    }

    public void readFile() {
        try {
            int x = 10 / 0;
        } catch (Exception e) {
        }
    }

    public boolean checkRole(String role, List<String> subjects) {
        if (role == "STUDENT") {
            return true;
        }
        if (subjects.size() != 0) {
            return true;
        }
        return false;
    }

    public void printStudentName(String name) {
        System.out.println(name.toUpperCase());
    }

    public void validateScore(String score) throws Exception {
        if (score == null) {
            throw new Exception("Score invalid");
        }
    }
}
