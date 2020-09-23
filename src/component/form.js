import React, { Component } from 'react';
import { withTheme } from 'react-jsonschema-form';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import axios from 'axios';

const Form = withTheme(MuiTheme);
// const schema = {
//     "$schema": "http://json-schema.org/draft-04/schema#",
//     "type": "object",
//     "properties": {
//       "setup": {
//         "type": "array",
//         "items": [
//           {
//             "type": "object",
//             "properties": {
//               "ref": {
//                 "type": "string"
//               },
//               "result_validation": {
//                 "type": "string"
//               },
//               "queryData": {
//                 "type": "object",
//                 "properties": {
//                   "query": {
//                     "type": "string"
//                   },
//                   "db_url": {
//                     "type": "string"
//                   },
//                   "user_name": {
//                     "type": "string"
//                   },
//                   "password": {
//                     "type": "string"
//                   }
//                 },
//                 "required": [
//                   "query",
//                   "db_url",
//                   "user_name",
//                   "password"
//                 ]
//               }
//             },
//             "required": [
//               "ref",
//               "result_validation",
//               "queryData"
//             ]
//           }
//         ]
//       },
//       "phases": {
//         "type": "array",
//         "items": [
//           {
//             "type": "object",
//             "properties": {
//               "ref": {
//                 "type": "string"
//               },
//               "node_type": {
//                 "type": "string"
//               },
//               "logical_checks": {
//                 "type": "string"
//               },
//               "transition_time": {
//                 "type": "integer"
//               },
//               "result_validation": {
//                 "type": "string"
//               },
//               "curl_data": {
//                 "type": "object",
//                 "properties": {
//                   "api": {
//                     "type": "string"
//                   },
//                   "header_appenders": {
//                     "type": "object",
//                     "properties": {
//                       "a": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "a"
//                     ]
//                   },
//                   "body_appenders": {
//                     "type": "object",
//                     "properties": {
//                       "b": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "b"
//                     ]
//                   }
//                 },
//                 "required": [
//                   "api",
//                   "header_appenders",
//                   "body_appenders"
//                 ]
//               }
//             },
//             "required": [
//               "ref",
//               "node_type",
//               "logical_checks",
//               "transition_time",
//               "result_validation",
//               "curl_data"
//             ]
//           },
//           {
//             "type": "object",
//             "properties": {
//               "ref": {
//                 "type": "string"
//               },
//               "node_type": {
//                 "type": "string"
//               },
//               "logical_checks": {
//                 "type": "string"
//               },
//               "transition_time": {
//                 "type": "integer"
//               },
//               "result_validation": {
//                 "type": "string"
//               },
//               "query_data": {
//                 "type": "object",
//                 "properties": {
//                   "query": {
//                     "type": "string"
//                   },
//                   "db_url": {
//                     "type": "string"
//                   },
//                   "user_name": {
//                     "type": "string"
//                   },
//                   "password": {
//                     "type": "string"
//                   }
//                 },
//                 "required": [
//                   "query",
//                   "db_url",
//                   "user_name",
//                   "password"
//                 ]
//               }
//             },
//             "required": [
//               "ref",
//               "node_type",
//               "logical_checks",
//               "transition_time",
//               "result_validation",
//               "query_data"
//             ]
//           },
//           {
//             "type": "object",
//             "properties": {
//               "ref": {
//                 "type": "string"
//               },
//               "node_type": {
//                 "type": "string"
//               },
//               "workflow-name": {
//                 "type": "string"
//               },
//               "logical_checks": {
//                 "type": "string"
//               },
//               "transition_time": {
//                 "type": "integer"
//               },
//               "result_validation": {
//                 "type": "string"
//               }
//             },
//             "required": [
//               "ref",
//               "node_type",
//               "workflow-name",
//               "logical_checks",
//               "transition_time",
//               "result_validation"
//             ]
//           }
//         ]
//       },
//       "tear_down": {
//         "type": "array",
//         "items": [
//           {
//             "type": "object",
//             "properties": {
//               "ref": {
//                 "type": "string"
//               },
//               "queryData": {
//                 "type": "object",
//                 "properties": {
//                   "query": {
//                     "type": "string"
//                   },
//                   "db_url": {
//                     "type": "string"
//                   },
//                   "user_name": {
//                     "type": "string"
//                   },
//                   "password": {
//                     "type": "string"
//                   }
//                 },
//                 "required": [
//                   "query",
//                   "db_url",
//                   "user_name",
//                   "password"
//                 ]
//               }
//             },
//             "required": [
//               "ref",
//               "queryData"
//             ]
//           }
//         ]
//       }
//     },
//     "required": [
//       "setup",
//       "phases",
//       "tear_down"
//     ]
//   };

const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
          name: {
              type: "string"
          }
      }
    }
};

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        // console.log(formData);
        
    }

    render() {
        return (
            <div style={{width: "50%", margin: "auto", paddingTop: "50px"}}>
                <Form schema={schema} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}