"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJSON = loadJSON;
var client_1 = require("@prisma/client");
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var prisma = new client_1.PrismaClient();
function loadJSON(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var fullPath, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    fullPath = path_1.default.join(process.cwd(), filePath);
                    return [4 /*yield*/, promises_1.default.readFile(fullPath, 'utf-8')];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, JSON.parse(data)];
                case 2:
                    error_1 = _a.sent();
                    console.error("Erro ao carregar ".concat(filePath, ":"), error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, stacks, userData, user, stackMap, _i, stacks_1, stack, existingStack, _a, projects_1, project, stackIds, existingProject, _b, stackIds_1, stackId, newProject, _c, stackIds_2, stackId;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, loadJSON('lib/data/projects.json')];
                case 1:
                    projects = _d.sent();
                    return [4 /*yield*/, loadJSON('lib/data/stacks.json')];
                case 2:
                    stacks = _d.sent();
                    return [4 /*yield*/, loadJSON('lib/data/user.json')];
                case 3:
                    userData = _d.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "gabrielrobertoac@gmail.com" },
                            update: {},
                            create: __assign({}, userData)
                        })];
                case 4:
                    user = _d.sent();
                    stackMap = new Map();
                    _i = 0, stacks_1 = stacks;
                    _d.label = 5;
                case 5:
                    if (!(_i < stacks_1.length)) return [3 /*break*/, 11];
                    stack = stacks_1[_i];
                    return [4 /*yield*/, prisma.stack.findFirst({
                            where: {
                                name: stack.name,
                                userId: user.id
                            }
                        })];
                case 6:
                    existingStack = _d.sent();
                    if (!!existingStack) return [3 /*break*/, 8];
                    return [4 /*yield*/, prisma.stack.create({
                            data: {
                                name: stack.name,
                                designation: stack.designation,
                                image: stack.image,
                                userId: user.id,
                                projectIds: [] // Initialize with empty array
                            }
                        })];
                case 7:
                    existingStack = _d.sent();
                    console.log("Stack created: ".concat(stack.name));
                    return [3 /*break*/, 9];
                case 8:
                    console.log("Stack already exists: ".concat(stack.name));
                    _d.label = 9;
                case 9:
                    // Store in our map for later use
                    stackMap.set(stack.name, existingStack.id);
                    _d.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 5];
                case 11:
                    console.log("Stacks processed.");
                    _a = 0, projects_1 = projects;
                    _d.label = 12;
                case 12:
                    if (!(_a < projects_1.length)) return [3 /*break*/, 26];
                    project = projects_1[_a];
                    stackIds = project.stacks
                        .filter(function (stackName) { return stackMap.has(stackName); })
                        .map(function (stackName) { return stackMap.get(stackName); });
                    return [4 /*yield*/, prisma.project.findFirst({
                            where: {
                                title: project.title,
                                userId: user.id
                            }
                        })];
                case 13:
                    existingProject = _d.sent();
                    if (!existingProject) return [3 /*break*/, 19];
                    console.log("Project already exists: ".concat(project.title));
                    // Update the project's stacks
                    return [4 /*yield*/, prisma.project.update({
                            where: { id: existingProject.id },
                            data: {
                                stackIds: stackIds
                            }
                        })];
                case 14:
                    // Update the project's stacks
                    _d.sent();
                    _b = 0, stackIds_1 = stackIds;
                    _d.label = 15;
                case 15:
                    if (!(_b < stackIds_1.length)) return [3 /*break*/, 18];
                    stackId = stackIds_1[_b];
                    return [4 /*yield*/, prisma.stack.update({
                            where: { id: stackId },
                            data: {
                                projectIds: {
                                    push: existingProject.id
                                }
                            }
                        })];
                case 16:
                    _d.sent();
                    _d.label = 17;
                case 17:
                    _b++;
                    return [3 /*break*/, 15];
                case 18:
                    console.log("Updated stacks for project: ".concat(project.title));
                    return [3 /*break*/, 25];
                case 19: return [4 /*yield*/, prisma.project.create({
                        data: {
                            title: project.title,
                            description: project.description,
                            image: project.image,
                            github: project.github,
                            deploy: project.deploy,
                            userId: user.id,
                            stackIds: stackIds
                        }
                    })];
                case 20:
                    newProject = _d.sent();
                    _c = 0, stackIds_2 = stackIds;
                    _d.label = 21;
                case 21:
                    if (!(_c < stackIds_2.length)) return [3 /*break*/, 24];
                    stackId = stackIds_2[_c];
                    return [4 /*yield*/, prisma.stack.update({
                            where: { id: stackId },
                            data: {
                                projectIds: {
                                    push: newProject.id
                                }
                            }
                        })];
                case 22:
                    _d.sent();
                    _d.label = 23;
                case 23:
                    _c++;
                    return [3 /*break*/, 21];
                case 24:
                    console.log("Project created: ".concat(project.title));
                    _d.label = 25;
                case 25:
                    _a++;
                    return [3 /*break*/, 12];
                case 26: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
