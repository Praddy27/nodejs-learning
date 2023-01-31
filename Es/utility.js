const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function search(options) {
  let query = {};

  if (options.query_string) {
    query.query_string = {
      query: options.query_string
    };
  }

  if (options.term) {
    query.term = {
      [options.term.field]: options.term.value
    };
  }

  if (options.match) {
    query.match = {
      [options.match.field]: options.match.value
    };
  }

  if (options.multi_match) {
    query.multi_match = {
      fields: options.multi_match.fields,
      query: options.multi_match.value
    };
  }

  if (options.bool) {
    query.bool = {
      must: options.bool.must,
      should: options.bool.should,
      must_not: options.bool.must_not
    };
  }

  if (options.filtered) {
    query.filtered = {
      query: options.filtered.query,
      filter: options.filtered.filter
    };
  }

  if (options.nested) {
    query.nested = {
      path: options.nested.path,
      query: options.nested.query
    };
  }

  if (options.range) {
    query.range = {
      [options.range.field]: {
        gte: options.range.gte,
        lte: options.range.lte
      }
    };
  }

  if (options.exists) {
    query.exists = {
      field: options.exists.field
    };
  }

  if (options.missing) {
    query.missing = {
      field: options.missing.field
    };
  }

  return query;
}

async function runSearch(index, options) {
  const query = await search(options);
  const result = await client.search({
    index: index,
    body: {
      query: query
    }
  });

  return result.body.hits.hits;
}
