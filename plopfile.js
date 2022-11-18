module.exports = plop => {
  plop.setPartial('fetchAllServiceName', 'fetchAll{{pascalCase name}}Api');
  plop.setPartial('fetchAllServiceCount', 'fetchAll{{pascalCase name}}CountApi');
  plop.setPartial('fetchOneServiceName', 'fetchOne{{pascalCase singularName}}Api');
  plop.setPartial('addServiceName', 'add{{pascalCase singularName}}Api');
  plop.setPartial('updateServiceName', 'update{{pascalCase singularName}}Api');
  plop.setPartial('deleteServiceName', 'delete{{pascalCase singularName}}Api');

  plop.setGenerator('service', {
    description: 'Create services files',
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your entity name?',
      },
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'singularName',
        // Prompt to display on command line
        message: 'What is your entity singular name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{kebabCase name}}.js',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: 'append',
        path: 'src/constants/endpoints.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export const {{camelCase name}}Endpoint = '/{{kebabCase name}}';`,
      },
    ],
  });
};
