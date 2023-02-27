module.exports = {
  types: [
    { value: '✨feat', name: 'feat:    增加新的业务功能' },
    { value: '🐞fix', name: 'fix:    修复bug' },
    { value: '🚀perf', name: 'perf:     性能优化' },
    { value: '💎style', name: 'style:    更换代码风格,不影响运行结果' },
    { value: '🌠refactor', name: 'refactor:    重构代码' },
    { value: '🔂revert', name: 'revert:   代码回退撤销更改' },
    { value: '💄test', name: 'test:    测试用例新增、修改等' },
    { value: '📝docs', name: 'docs:    文档和注释相关变更' },
    { value: '🔧chore', name: 'chore:    更新依赖/修改脚手架配置等' },
    { value: '😃wip', name: 'wip:   开发中' },
    { value: '💥workflow', name: 'workflow:   工作流改进' },
    { value: '👷ci', name: 'ci:   持续集成相关' },
    { value: '📦build', name: 'build:   打包' },
    { value: '✔️release', name: 'release:  发布' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择一种你的提交类型: \n',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认以上提交说明？(y/n/e/h)'
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
}
