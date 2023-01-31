const options = {
  query_string: "some search term",
  term: {
    field: "field_name",
    value: "value"
  },
  match: {
    field: "field_name",
    value: "value"
  },
  multi_match: {
    fields: ["field1", "field2"],
    value: "value"
  },
  bool: {
    must: [
      {
        term: {
          field: "field_name",
          value: "value"
        }
      }
    ],
    should: [
      {
        match: {
          field: "field_name",
          value: "value"
        }
      }
    ],
    must_not: [
      {
        term: {
          field: "field_name",
          value: "value"
        }
      }
    ]
  },
  filtered: {
    query: {
      match: {
        field: "field_name",
        value: "value"
      }
    },
    filter: {
      range: {
        field: "field_name",
        gte: 1,
        lte: 10
      }
    }
  },
  nested: {
    path: "nested_field",
    query: {
      match: {
        "nested_field.field_name": "value"
      }
    }
  },
  range: {
    field: "field_name",
    gte: 1,
    lte: 10
  },
  exists: {
    field: "field_name"
  },
  missing: {
    field: "field_name"
  }
};
