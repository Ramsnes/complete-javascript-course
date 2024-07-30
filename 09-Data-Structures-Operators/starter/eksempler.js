const mortensSjappe = {
  truckName: 'Eksempel name',
  forrett: ['gyros', 'pai'],
  hovedmeny: ['sodd', 'lapskaus'],
  åpningstider: {
    fre: {
      åpen: 8,
      stenging: 20,
    },
    lør: {
      åpen: 12,
      stenging: 18,
    },
  },
  bestilling: function ({
    truckName = 'default truck',
    time = 'default tid',
    address = 'default adresse',
    forrettIndex = 0,
    hovedIndex = 0,
  }) {
    console.log(
      `Bestilling mottatt! ${this.forrett[forrettIndex]} og ${this.hovedmeny[hovedIndex]} vil bli levert til ${address} ved klokken ${time} fra ${truckName}.`
    );
  },
  åpningsInfo: function ({ åpning, stenging }) {
    console.log(
      `(Called w/ own input) Åpningstider i dag er mellom klokken ${åpning} til ${stenging}.`
    );
  },
};

//// Calling methods ////

// bestilling called
mortensSjappe.bestilling({
  truckName: 'Mortens truck',
  time: '18.30',
  address: 'Nordre gate',
  forrettIndex: 0,
  hovedIndex: 0,
});
// Alt. way of calling
const ordreVariabel = {
  truckName: 'Shady van',
  time: '20.30',
  address: 'Anders buens gate',
  forrettIndex: 1,
  hovedIndex: 1,
};
mortensSjappe.bestilling(ordreVariabel);

// åpningsInfo called
mortensSjappe.åpningsInfo({
  åpning: '12',
  stenging: '20',
});

// Accessing the property values within the object
const {
  åpningstider: {
    fre: { åpen, stenging },
  },
} = mortensSjappe;
console.log(
  `(Logged with template literal) Åpningstider vanligvis er mellom kl.${åpen} til ${stenging}`
);
