const fs = require('fs');
const path = require('path');

const fileTypeRegex = /name(.+?).tpl/;
const types = {
  component: 'component',
  container: 'container',
  reducer: 'reducer'
};
const paths = {
  component: 'src/components/{{dashCase name}}/{{dashCase name}}',
  container: 'src/containers/{{dashCase name}}/{{dashCase name}}',
  reducer: 'src/reducers/{{dashCase name}}-reducer/{{dashCase name}}-reducer',
};

const getActionsFromTemplates = type => {
  const templateFiles = fs.readdirSync(path.join(__dirname, `/plop-templates/${type}/`));

  return templateFiles.map(fileName => {
    const ext = fileName.match(fileTypeRegex)[1];

    return {
      type: 'add',
      path: `${paths[type]}${ext}`,
      templateFile: `plop-templates/${type}/${fileName}`
    };
  });
};

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Presentation component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    }],
    actions: () => {
      const actions = getActionsFromTemplates(types.component);

      actions.push({
        type: 'modify',
        path: './src/scss/_components.scss',
        pattern: /(\s+)('\.\/components.*');/,
        template: '$1$2,$1\'./../components/{{dashCase name}}/{{dashCase name}}\';'
      });

      return actions;
    }
  });

  plop.setGenerator('container', {
    description: 'Container component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'container name'
    }],
    actions: () => {
      const actions = getActionsFromTemplates(types.container);
      return actions;
    }
  });

  plop.setGenerator('reducer', {
    description: 'Reducer',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'reducer name'
    }],
    actions: () => {
      const actions = getActionsFromTemplates(types.reducer);
      return actions;
    }
  });
};
