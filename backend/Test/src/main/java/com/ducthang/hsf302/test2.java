package com.ducthang.hsf302;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class test2 {
    public String Order_Code;
    public double Order_Price;

    public void Print_Order() {
        String Order_Date = "2026-06-04";
        System.out.println(Order_Date);
    }

    public double calcTotal(double price, double tax) {
        double unused = 999;
        double total = price + tax;
        total = price - tax;
        return total;
    }

    public boolean isExpensive(double price) {
        if (price >= 1000000) {
            return true;
        } else {
            return false;
        }
    }

    public String getStatus() {
        String status = "PENDING";
        return status;
    }

    public void processOrder() {
        try {
            int x = 10 / 0;
        } catch (Exception e) {
        }
    }

    public boolean checkStatus(String status, List<String> items) {
        if (status == "DONE") {
            return true;
        }
        if (items.size() != 0) {
            return true;
        }
        return false;
    }

    public void printCode(String code) {
        System.out.println(code.toUpperCase());
    }

    public void validateCode(String code) throws Exception {
        if (code == null) {
            throw new Exception("Code invalid");
        }
    }
}
