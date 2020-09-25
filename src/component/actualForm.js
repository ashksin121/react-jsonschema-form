import React, {useState} from "react";
import Form from "@rjsf/material-ui";
import TextField from '@material-ui/core/TextField';

const schema = {
    "type": "object",
    "properties": {
    "setup": {
        "type": "array",
        "items": 
        {
            "type": "object",
            "properties": {
            "ref": {
                "type": "string"
            },
            "result_validation": {
                "type": "string"
            },
            "queryData": {
                "type": "object",
                "properties": {
                "query": {
                    "type": "string"
                },
                "db_url": {
                    "type": "string"
                },
                "user_name": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
                },
                "required": [
                "query",
                "db_url",
                "user_name",
                "password"
                ]
            }
            },
            "required": [
            "ref",
            "result_validation",
            "queryData"
            ]
        }
        
    },
    "phases": {
        "type": "array",
        "items": 
        {
            "type": "object",
            "properties": {
            "ref": {
                "type": "string"
            },
            "node_type": {
                "type": "string"
            },
            "logical_checks": {
                "type": "string"
            },
            "transition_time": {
                "type": "integer"
            },
            "result_validation": {
                "type": "string"
            },
            "curl_data": {
                "type": "object",
                "properties": {
                "api": {
                    "type": "string"
                },
                "header_appenders": {
                    "type": "object",
                    "properties": {
                    "a": {
                        "type": "string"
                    }
                    },
                    "required": [
                    "a"
                    ]
                },
                "body_appenders": {
                    "type": "object",
                    "properties": {
                    "b": {
                        "type": "string"
                    }
                    },
                    "required": [
                    "b"
                    ]
                }
                },
                "required": [
                "api",
                "header_appenders",
                "body_appenders"
                ]
            }
            },
            "required": [
            "ref",
            "node_type",
            "logical_checks",
            "transition_time",
            "result_validation",
            "curl_data"
            ]
        }
        
    },
    "tear_down": {
        "type": "array",
        "items": 
        {
            "type": "object",
            "properties": {
            "ref": {
                "type": "string"
            },
            "queryData": {
                "type": "object",
                "properties": {
                "query": {
                    "type": "string"
                },
                "db_url": {
                    "type": "string"
                },
                "user_name": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
                },
                "required": [
                "query",
                "db_url",
                "user_name",
                "password"
                ]
            }
            },
            "required": [
            "ref",
            "queryData"
            ]
        }
    }
    },
    "required": [
    "setup",
    "phases",
    "tear_down"
    ]
}

// const schema = {
//     type: "array",
//     items: {
//       type: "object",
//       properties: {
//           name: {
//               type: "string"
//           }
//       }
//     }
// };
const log = (type) => console.log.bind(console, type);
export default function Home() {
    const [formData, setFormData] = useState(null);
    const handleSubmit = () => {
        console.log(formData)
        document.getElementById("formResponse").value = JSON.stringify({"formData": formData}, null, 4)
    }
    return (
        <div style={{width: "50%", margin: "auto", padding: "50px 0"}}>
        <Form schema={schema}
            formData={formData}
            onChange={e=>setFormData(e.formData)}
            onSubmit={handleSubmit}
            onError={log("errors")} />
        <TextField
        style={{marginTop: "20px"}}
          id="formResponse"
          fullWidth
          multiline
          rows={50}
          variant="outlined"
        />
        </div>
    );
}