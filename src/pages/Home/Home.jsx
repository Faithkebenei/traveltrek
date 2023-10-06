import React from "react";

import Header from "../../components/Header/Header";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import BookMenu from "../../components/BookMenu/BookMenu";
import RentSteps from "../../components/RentSteps/RentSteps";
import HotDeals from "../../components/HotDeals/HotDeals";
import HomeTestimonials from "../../components/HomeTestimonials/HomeTestimonials";

const Home = () => {
    function fibonacci(n) {
        let fibonacciNumbers = [];
        let first = 0;
        let second = 1;
        let sum = 0;
        for (let i = 0; i < n; i++){
            sum = first + second;
            fibonacciNumbers.push(first);
            first = second;
            second = sum;
            sum = 0;
        }
        return fibonacciNumbers;
    }

    function fib(n) {
        const fibArray = [0, 1];
        for( let i = 2; i< n; i++){
            fibArray[i] = fibArray[i-1] + fibArray[i - 2] 
        }
        return fibArray
    }


    function factorial(n) {
        let product = 1;
        for( let i = 2; i<=n; i++){
            product = product * i
        }
        return product
    }

    function isPrime(n){  
        if(n < 2){
            return false;
        }      
        for(let i = 2; i< n; i++){
           if(n % i === 0){
            return false
           }else {
            return true;
           }
        }
    }
  
    function isPowerOfTwo(n) {
        if(n < 1){
            return false;
        }
        while (n > 1) {
            if(n % 2 === 0){
                n = n / 2;
                return false;
            }else {
                n = n / 2;
                return true;
            }
        }
    }


    
    return (
        <>
        <Header />
        <div id="home">
        <HomeMenu />
        </div>  
        <BookMenu />  
        <RentSteps />
        <HotDeals />
        <HomeTestimonials />
        </>
    )
}

export default Home;
