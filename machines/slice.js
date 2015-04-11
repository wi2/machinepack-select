module.exports = {

  friendlyName: 'Slice',
  description: 'Get a slice of an array',
  extendedDescription: '',

  sync: true,

  inputs: {
    "collection": {
      "friendlyName": "collection",
      "description": "A collection",
      "typeclass": "array",
      "required": true
    },
    "start": {
      "friendlyName": "start",
      "description": "A start index",
      "example": 2,
      "required": true
    },
    "end": {
      "friendlyName": "end",
      "description": "end index",
      "example": 5,
      "required": false
    },
    "include": {
      "friendlyName": "Include end",
      "description": "include the end of slice",
      "defaultsTo": false,
      "example": true,
      "type": "boolean",
      "name": "include"
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
          return inputs.collection.slice(inputs.start, inputs.end||null);
        }
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    },

  },

  fn: function (inputs,exits) {
    var result;
    if (!Array.isArray(inputs.collection)) { return exits.error(); }
    else if (!inputs.collection.length) { return exits.emptyError(); }
    try {
      if (inputs.include && inputs.end) { var end = inputs.end + 1; }
      result = inputs.collection.slice(inputs.start, end||inputs.end||inputs.collection.length);
    } catch (err) { return exits.error(err); }

    return exits.success(result);
  },

};
