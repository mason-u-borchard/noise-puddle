module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "fileName": false
          }
        ]
      ]
    },
    "production": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "fileName": false
          }
        ]
      ]
    },
    "test": {
      "plugins": [
        "babel-plugin-styled-components",
        {
          "displayName": false
        }
      ]
    }
  }
}

// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           node: 'current',
//         },
//       },
//     ],
//     ['@babel/preset-react']
//   ],
//   "plugins": [
//     [
//       "babel-plugin-styled-components",
//       {
//         "fileName": false
//       }
//     ]
//   ]
// };