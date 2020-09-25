import React, {uaeState, useState} from "react";
import Form from "@rjsf/material-ui";
import axios from 'axios';

const schema = {
    "type": "object",
    "properties": {
      "setup": {
        "type": "array",
        "items": {
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
                "db_password": {
                  "type": "string"
                },
                "db_username": {
                  "type": "string"
                },
                "db_type": {
                  "type": "string"
                }
              },
              "required": [
                "query",
                "db_url",
                "db_username",
                "db_type"
              ]
            }
          },
          "required": [
            "ref",
            "queryData"
          ]
        }
      },
      "phases": {
        "type": "array",
        "items": {
          "type": "object",
          "oneOf": [
            {
              "properties": {
                "result_validation": {
                  "type": "string"
                },
                "curl_data": {
                  "type": "object",
                  "properties": {
                    "host": {
                      "type": "string"
                    },
                    "path": {
                      "type": "string"
                    },
                    "header_appender": {
                      "additionalProperties": {
                        "type": "string"
                      }
                    },
                    "body_appender": {
                      "additionalProperties": {
                        "type": "string"
                      }
                    }
                  },
                  "required": [
                    "host",
                    "path",
                    "header_appender",
                    "body_appender"
                  ]
                }
              }
            },
            {
              "properties": {
                "query_data": {
                  "type": "object",
                  "properties": {
                    "query": {
                      "type": "string"
                    },
                    "db_url": {
                      "type": "string"
                    },
                    "db_password": {
                      "type": "string"
                    },
                    "db_username": {
                      "type": "string"
                    },
                    "db_type": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "query",
                    "db_url",
                    "db_password",
                    "db_username",
                    "db_type"
                  ]
                }
              },
              "required": [
                "query_data"
              ]
            },
            {
              "properties": {
                "workflow-name": {
                  "type": "string"
                }
              },
              "required": [
                "workflow-name"
              ]
            }
          ],
          "allOf": [
            {
              "properties": {
                "ref": {
                  "type": "string"
                },
                "node_type": {
                  "type": "string"
                },
                "logical_checks": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "properties": {
                      "ref": {
                        "type": "string"
                      }
                    }
                  }
                },
                "transition_time": {
                  "type": "integer"
                }
              }
            }
          ]
        }
      },
      "tear_down": {
        "type": "array",
        "items": {
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
                "db_password": {
                  "type": "string"
                },
                "db_username": {
                  "type": "string"
                },
                "db_type": {
                  "type": "string"
                }
              },
              "required": [
                "query",
                "db_url",
                "db_password",
                "db_username",
                "db_type"
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
    "required": []
  };
const log = (type) => console.log.bind(console, type);
export default function Home() {
    const [formData, setFormData] = useState(null);
    return (
        <div style={{width: "50%", margin: "auto", paddingTop: "50px"}}>
        <Form schema={schema}
            formData={formData}
            onChange={e=>setFormData(e.formData)}
            onSubmit={() => {
                axios.post("http://localhost:8080/nightswatch", formData)
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
            }}
            onError={log("errors")} />
        </div>
    );
}