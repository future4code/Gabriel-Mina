import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/homepage/HomePage';
import ListTripPage from '../Pages/ListTripsPage/ListTripsPage';
import AplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage';
import LoginPage from '../Pages/LoginPage';
import AdminHomePage from '../Pages/AdminHomePage';
import TripDetailPage from '../Pages/TripDetailPage/TripDetailPage';
import CreateTripPage from '../Pages/CreateTripPage';


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/trip/list">
                    <ListTripPage />
                </Route>

                <Route exact path="/trips/application">
                    <AplicationFormPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailPage />
                </Route>


                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}