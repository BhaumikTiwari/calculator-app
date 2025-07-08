package com.bhaumik.calculator.Service;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {
   public int add(int a, int b){
       return a+b;
   }
   public int subtract(int a, int b){
       return a-b;
   }

   public int multiply(int a, int b){
       return a*b;
   }

   public double divide(int a, int b) throws Exception {
       if (b==0){
           throw new ArithmeticException("can not be divided by zero");
       }
       return (double)a/b;
   }
}
