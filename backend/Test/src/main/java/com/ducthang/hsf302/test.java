package com.ducthang.hsf302;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class test {

    public String UserName;
    public int UserAge;

    public void Print_Info() {
        String First_Name = "Thang";
        System.out.println(First_Name);
    }

    public int calculate(int a, int b) {
        int temp = 999;
        int result = a + b;
        result = a - b;
        return result;
    }

    public boolean isAdult(int age) {
        if (age >= 18) {
            return true;
        } else {
            return false;
        }
    }

    public String getMessage() {
        String msg = "Hello SonarQube";
        return msg;
    }

    public void riskyDivide() {
        try {
            int x = 10 / 0;
        } catch (Exception e) {
        }
    }

    public boolean check(String role, List<String> items) {
        if (role == "ADMIN") {
            return true;
        }
        if (items.size() != 0) {
            return true;
        }
        return false;
    }

    public void printUpperName(String name) {
        System.out.println(name.toUpperCase());
    }

    public void validate(String input) throws Exception {
        if (input == null) {
            throw new Exception("Invalid");
        }
    }
}