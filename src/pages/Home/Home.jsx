import React, { useState } from "react";
import { useLocation, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import Header from "../../components/Header/Header";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import BookMenu from "../../components/BookMenu/BookMenu";
import RentSteps from "../../components/RentSteps/RentSteps";
import HotDeals from "../../components/HotDeals/HotDeals";
import HomeTestimonials from "../../components/HomeTestimonials/HomeTestimonials";
import CallSection from "../../components/CallSection/CallSection";
import Footer from '../../components/Footer/Footer';


import About from "../../components/About/About";
import Models from "../../components/Models/Models";
import Testimonials from "../../components/Testimonials/Testimonials";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    const location = useLocation();
    const history = useHistory();
    const { path } = useRouteMatch();
   
    return (
        <>
            <Switch>
                <Route exact path="/" >
                    <Header />
                    <HomeMenu />
                    <BookMenu />
                    <RentSteps />
                    <HotDeals />
                    <HomeTestimonials />
                    <CallSection />
                    <Footer />
                </Route>

                <Route exact path="/about" >
                    <About />               
                </Route>

                <Route exact path="/models" >
                    <Models />               
                </Route> 

                <Route exact path="/testimonials" >
                    <Testimonials />               
                </Route>

                <Route exact path="/team" >
                    <Team />               
                </Route>

                <Route exact path="/contact" >
                    <Contact />               
                </Route>
            </Switch>
        </>
    );
}

export default Home;



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
