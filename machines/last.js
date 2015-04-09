module.exports = {


  friendlyName: 'Last',
  description: 'Get the last element',
  extendedDescription: '',

  inputs: {
    "collection": {
      "friendlyName": "collection",
      "description": "A collection",
      "typeclass": "array",
      "required": true
    },
    "pop": {
      "friendlyName": "pop",
      "description": "A boolean to specify if use pop method",
      "example": true,
      "required": false,
      "defaultsTo": false,
      "type": "boolean",
      "name": "pop"
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.',
    },
    emptyError: {
      description: 'Empty collection.',
    },
    success: {
      description: 'Done.',
      "getExample": function(inputs, env, input) {
        if (Array.isArray(inputs.collection) && inputs.collection.length) {
          var last;
          if (inputs.pop) {
            last = inputs.collection.pop();
          } else {
            last = inputs.collection[inputs.collection.length-1];
          }
          return {
            last: last,
            collection: inputs.collection
          };
        }
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    },

  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.collection)) {
      return exits.error();
    } else if (!inputs.collection.length) {
      return exits.emptyError();
    }
    var last;
    if (inputs.pop) {
      last = inputs.collection.pop();
    } else {
      last = inputs.collection[inputs.collection.length-1];
    }
    return exits.success({
      last: last,
      collection: inputs.collection
    });
  },

};
