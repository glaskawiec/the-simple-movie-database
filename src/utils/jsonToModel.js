function normalizeValue(value, schema) {
  if (!value) {
    return schema.default;
  }

  if (schema.type === 'array') {
    if (Array.isArray(value)) {
      if (schema.transform) {
        return normalizeValue(schema.transform(value), schema.model);
      }
      // eslint-disable-next-line no-use-before-define
      return value.map(e => jsonToModel(e, schema.model));
    }
    throw new Error(`${schema.key} is of type ${typeof value}, expected ${schema.type}`);
  }

  // eslint-disable-next-line valid-typeof
  if (schema.type && typeof value !== schema.type.toString().toLocaleLowerCase()) {
    throw new Error(`${schema.key} is of type ${typeof value}, expected ${schema.type}`);
  }

  if (schema.transform) {
    return schema.transform(value);
  }

  return value;
}

function jsonToModel(json, model) {
  const parsedModel = {};
  Object.entries(model).forEach(((e) => {
    const [key, value] = e;
    const normalizeSchema = model[key];
    const rawValue = json[value.key];
    parsedModel[key] = normalizeValue(rawValue, normalizeSchema);
  }));
  return parsedModel;
}

export default jsonToModel;
