module.exports = function(plop) {
  plop.setGenerator('Component (stateless)', {
    description: 'A presentational React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component\'s name?',
        validate(value) {
          return value.length ? true : 'Name cannot be blank';
        }
      }
    ],
    actions: [
      {type: 'add', path: 'application/components/{{properCase name}}/index.js', templateFile: 'templates/stateless-component.hbs'},
      {type: 'add', path: 'application/components/{{properCase name}}/styles.js', templateFile: 'templates/component-styles.hbs'}
    ]
  });

  plop.setGenerator('Component (stateful)', {
    description: 'A stateful React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component\'s name?',
        validate(value) {
          return value.length ? true : 'Name cannot be blank';
        }
      }
    ],
    actions: [
      {type: 'add', path: 'application/components/{{properCase name}}/index.js', templateFile: 'templates/stateful-component.hbs'},
      {type: 'add', path: 'application/components/{{properCase name}}/styles.js', templateFile: 'templates/component-styles.hbs'}
    ]
  });
};
