"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posix_1 = __importDefault(require("path/posix"));
const contants_1 = require("./contants");
const Post_1 = require("./entities/Post");
exports.default = {
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: posix_1.default.join(__dirname, './migrations'),
        pathTs: undefined,
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post_1.Post],
    dbName: 'lireddit',
    user: 'tosinomotayo',
    password: 'testing',
    debug: !contants_1.__prod__,
    type: 'postgresql',
    port: 5433,
    allowGlobalContext: true
};
//# sourceMappingURL=mikro-orm.config.js.map