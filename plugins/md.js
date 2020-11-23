import path from 'path';
import fs from 'fs';
import marked from 'marked';
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 请注意，当前文件的后缀从 .js 改为了 .ts
// 如果你看到这行注释，请确认文件后缀是 .ts
// 然后就可以删掉本注释了!!!!!!!!!!!!!!!!
const mdToJs = str => {
    const content = JSON.stringify(marked(str));
    return `export default ${content}`;
};
export function md() {
    return {
        configureServer: [
            async ({ app }) => {
                app.use(async (ctx, next) => {
                    if (ctx.path.endsWith('.md')) {
                        ctx.type = 'js';
                        const filePath = path.join(process.cwd(), ctx.path);
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString());
                    }
                    else {
                        await next();
                    }
                });
            },
        ],
        transforms: [{
                test: context => context.path.endsWith('.md'),
                transform: ({ code }) => mdToJs(code)
            }]
    };
}
