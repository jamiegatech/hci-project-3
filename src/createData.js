export const createData = (id, name, description, version) => {
  return {
    id: id,
    name: name,
    description: description,
    version: version,
    selected: false
  };
};
