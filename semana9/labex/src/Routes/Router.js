import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ListTripPage from '../Pages/ListTripsPage';
import AplicationFormPage from '../Pages/ApplicationFormPage';
import LoginPage from '../Pages/LoginPage';
import AdminHomePage from '../Pages/AdminHomePage';
import TripDetailPage from '../Pages/TripDetailPage';
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
                    <TripDetailPage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <HomePage />
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}