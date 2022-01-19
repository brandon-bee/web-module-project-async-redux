import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from '../actions';

const initialState = {
  monsters: [
    {
      "id":1,
      "type":"small",
      "species":"herbivore",
      "elements":[],
      "name":"Aptonoth",
      "description":"Docile herbivores that graze in packs. Their meat is considered a delicacy and is rich in nutrients. If one member of the herd is attacked, the rest will flee immediately.",
      "ailments":[],
      "locations":[
        {
          "id":1,
          "zoneCount":17,
          "name":"Ancient Forest"
        }
      ],
      "resistances":[],
      "weaknesses":[
        {
          "element":"fire",
          "stars":1,
          "condition":null
        },
        {
          "element":"water",
          "stars":1,
          "condition":null
        },
        {
          "element":"thunder",
          "stars":1,
          "condition":null
        },
        {
          "element":"ice",
          "stars":1,
          "condition":null
        }
      ],
      "rewards":[
        {
          "id":31,
          "item":{
            "id":67,
            "rarity":1,
            "carryLimit":10,
            "value":5,
            "name":"Raw Meat",
            "description":"Meat carved from a monster. Can be cooked, combined, or used to set a trap."
          },
          "conditions":[
            {
              "type":"carve",
              "rank":"low",
              "quantity":1,
              "chance":100,
              "subtype":"Body"
            },
            {
              "type":"carve",
              "rank":"high",
              "quantity":1,
              "chance":100,
              "subtype":"Body"
            }
          ]
        }
      ]
    }
  ],
  isFetching: false,
  error: '',
  isExpanded: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return({
        ...state,
        monsters: [],
        isFetching: true,
        error: '',
        isExpanded: false
      });
    case FETCH_FAIL:
      return({
        ...state,
        monsters: [],
        isFetching: false,
        error: action.payload,
        isExpanded: false
      });
    case FETCH_SUCCESS:
      return({
        ...state,
        monsters: action.payload,
        isFetching: false,
        error: '',
        isExpanded: false
      });
    default:
      return state;
  }
};