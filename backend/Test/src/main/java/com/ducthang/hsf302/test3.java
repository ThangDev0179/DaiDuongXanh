package com.ducthang.hsf302;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class test3 {

    public String Product_Name;
    public int Product_Stock;

    public void Show_Product() {
        String Product_Code = "P001";
        System.out.println(Product_Code);
    }

    public int countProduct(int a, int b) {
        int dummy = 0;
        int count = a + b;
        count = a * b;
        return count;
    }

    public boolean inStock(int quantity) {
        if (quantity > 0) {
            return true;
        } else {
            return false;
        }
    }

    public String getCategory() {
        String category = "Electronics";
        return category;
    }

    public void loadProduct() {
        try {
            int x = 10 / 0;
        } catch (Exception e) {
        }
    }

    public boolean checkCategory(String category, List<String> tags) {
        if (category == "FOOD") {
            return true;
        }
        if (tags.size() != 0) {
            return true;
        }
        return false;
    }

    public void printProductName(String name) {
        System.out.println(name.toUpperCase());
    }

    public void validateName(String name) throws Exception {
        if (name == null) {
            throw new Exception("Name invalid");
        }
    }
}
