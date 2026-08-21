DYAA ICAS：按学生姓名显示 Grade
================================

这次只需要上传/替换两个文件：
1. index.html
2. student_grade_config.js

原来的 config.js 不要改，也不要删除。

设置学生 Grade：
打开 student_grade_config.js，修改 students 里面的内容。

例子：

window.DYAA_STUDENT_GRADE_CONFIG = {
  students: {
    "Amy Chen": "G",
    "Ben Lee": "C",
    "Chris Wang": ["D", "E"]
  }
};

说明：
- "Amy Chen": "G"       -> Amy 只看到 Grade G
- "Ben Lee": "C"        -> Ben 只看到 Grade C
- ["D", "E"]            -> 可以看到 Grade D 和 Grade E
- "ALL"                  -> 可以看到全部 Grade
- 姓名不区分英文大小写；前后和重复空格会自动处理。
- 没有配置的姓名不能开始考试。
- 学生必须先输入姓名并点击 Show My Papers，系统才会显示允许的 Grade 和年份。
- 每个 Grade 下面仍显示该 Grade 已有的全部年份。

这不是登录系统。知道另一个已配置姓名的人仍可以输入那个姓名，因此它适合课堂分配题目，不属于严格账号权限控制。

同时保留之前的 10 分钟规则：
考试超过 10 分钟后，如果学生刷新、关闭或离开页面，会自动提交当前答案，即使还有未答题。
