var Schemas = {};

Schemas.Person = new SimpleSchema({
  firstName: {
    type: String,
    label: "Name"
    },
  lastName: {
    type: String,
    label: "Last Name"
    },
  password: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    }
  },
  age: {
    type: Number,
    label: "Age",
    optional: true,
    min: 0
    },
  birthDate: {
    type: Date,
    label: "Birth Date (YYYY-MM-DD)",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker"
      }
    } 
  },
  gender: {
    type: String,
    // allowedValues: ["Male", "Female"],
    autoform: {
      afFieldInput: {
        firstOption: "(Not Specified)",
        options: function() {
          return [
            {label: "Male", value: "Male"},
            {label: "Female", value: "Female"}
          ]
        }
      }
    }
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email"
  },
  phones: {
    type: Object,
    optional: true
  },
  'phones.home': {
     type: Number,
     optional: true
  },
  'phones.work': {
     type: Number,
     optional: true
  },
  'phones.cell': {
     type: Number,
     optional: true
  },
  transportation: {
    type: [String],
    optional: true,
    label: "Please specify your transportation means",
    autoform: {
      afFieldInput: {
        type: "select-checkbox",
        options: function() {
          return [
            {label: "Aeroplane", value: "Aeroplane"},
            {label: "Automobile", value: "Automobile"},
            {label: "Motorcycle", value: "Motorcycle"},
            {label: "Bicycle", value: "Bicycle"},
            {label: "On Foot", value: "onfoot"}
          ]
        }
      }
    }
  },
  registeredVoter: {
    type: Boolean,
    label: "I am a registered voter",
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox",
      }
    }
  },      
  registeredMailist: {
    type: Boolean,
    label: "I would like to receive promotional information",
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox",
      }
    }
  },
  comment: {
    type: String,
    label: "Tell us about yourself (optional)",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  }
})

Data.attachSchema(Schemas.Person);
