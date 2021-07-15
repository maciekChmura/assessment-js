/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */

exports.example = () => 'hello world';

exports.stripPrivateProperties = (propertiesToRemove, data) => {
  return data.map(item => {
    propertiesToRemove.forEach(property => {
      delete item[property];
    });
    return item;
  });
};

exports.excludeByProperty = (property, data) => {
  return data.filter(item => !Object.keys(item).includes(property));
};

exports.sumDeep = data => {
  return data.map(item =>
    item.objects.reduce(
      (sum, current) => ({ objects: sum.objects + current.val }),
      {
        objects: 0,
      }
    )
  );
};

exports.applyStatusColor = (colors, data) => {
  return data
    .map(item => {
      Object.keys(colors).forEach(color =>
        colors[color].includes(item.status) ? (item.color = color) : null
      );
      return item;
    })
    .filter(item => item.color);
};

exports.createGreeting = (greetFunction, greetType) => name =>
  greetFunction(greetType, name);

exports.setDefaults = defaultPropsObj => obj => ({
  ...defaultPropsObj,
  ...obj,
});

exports.fetchUserByNameAndUsersCompany = async (userName, services) => {
  const { fetchStatus, fetchUsers, fetchCompanyById } = services;
  const status = await fetchStatus();
  const users = await fetchUsers();
  const user = users.find(user => user.name === userName);
  const company = await fetchCompanyById(user.companyId);

  return {
    company,
    status,
    user,
  };
};
