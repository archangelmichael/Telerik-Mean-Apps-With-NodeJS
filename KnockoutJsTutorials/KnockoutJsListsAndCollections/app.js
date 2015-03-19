'use strict';

// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    self.reservationNameLabel = ko.observable("Enter reservation name:");
    self.reservationMealLabel = ko.observable("Select a meal for your reservation");


    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { id: 0, mealName: "Standard (sandwich)", price: 0 },
        { id: 1, mealName: "Premium (lobster)", price: 34.95 },
        { id: 2, mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);

    self.reservationName = ko.observable("");
    self.selectedMeal = ko.observable(self.availableMeals[0]);

    self.totalSurcharge = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < self.seats().length; i++)
            total += self.seats()[i].meal().price;
        return total;
    });

    self.addSeat = function addSeat(name, meal) {
        if(name && name.length > 3 && meal) {
            self.seats.push(new SeatReservation(name, meal));
        }
    };
    
    self.removeSeat = function(seat) {
        self.seats.remove(seat)
    };
}

ko.applyBindings(new ReservationsViewModel());

/**
 * Created by Radi on 3/19/2015.
 */
 
