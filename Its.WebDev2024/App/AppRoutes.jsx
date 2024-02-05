import React, { Component } from 'react';
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import NotFound from "./Components/NotFound";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '*',
        element: <NotFound />
    },
];

export default AppRoutes;
