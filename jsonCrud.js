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
var _this = this;
var API_URL = "http://localhost:3000/users";
document.addEventListener("DOMContentLoaded", function () {
    var userForm = document.getElementById("userForm");
    var userIdInput = document.getElementById("userId");
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var tableBody = document.getElementById("userTableBody");
    var alertBox = document.getElementById("alertBox");
    // Show bootstrap alert
    function showAlert(message, type) {
        if (type === void 0) { type = "success"; }
        alertBox.innerHTML = "\n      <div class=\"alert alert-".concat(type, " alert-dismissible fade show\" role=\"alert\">\n        ").concat(message, "\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n      </div>\n    ");
    }
    // Load all users (GET)
    function loadUsers() {
        return __awaiter(this, void 0, void 0, function () {
            var res, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(API_URL)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        users = _a.sent();
                        renderTable(users);
                        return [2 /*return*/];
                }
            });
        });
    }
    // Render users into table
    function renderTable(users) {
        tableBody.innerHTML = "";
        users.forEach(function (user, i) {
            var tr = document.createElement("tr");
            tr.innerHTML = "\n        <td>".concat(i + 1, "</td>\n        <td>").concat(user.name, "</td>\n        <td>").concat(user.age, "</td>\n        <td>\n          <button class=\"btn btn-sm btn-warning me-2\" data-action=\"edit\" data-id=\"").concat(user.id, "\">Edit</button>\n          <button class=\"btn btn-sm btn-danger\" data-action=\"delete\" data-id=\"").concat(user.id, "\">Delete</button>\n        </td>\n      ");
            tableBody.appendChild(tr);
        });
    }
    // Create or Update user (POST/PUT)
    userForm.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var id, user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    id = userIdInput.value.trim();
                    user = {
                        name: nameInput.value.trim(),
                        age: Number(ageInput.value) || 0 // ensure number
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!id) return [3 /*break*/, 3];
                    // PUT update
                    user.id = Number(id);
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(user)
                        })];
                case 2:
                    _a.sent();
                    showAlert("User \"".concat(user.name, "\" updated successfully!"), "success");
                    return [3 /*break*/, 5];
                case 3: 
                // POST create
                return [4 /*yield*/, fetch(API_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(user)
                    })];
                case 4:
                    // POST create
                    _a.sent();
                    setTimeout(function () {
                        showAlert("User \"".concat(user.name, "\" created successfully!"), "success");
                    }, 5000);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.error("Request failed:", err_1);
                    showAlert("Error saving user.", "danger");
                    return [3 /*break*/, 7];
                case 7:
                    userForm.reset();
                    userIdInput.value = "";
                    loadUsers();
                    return [2 /*return*/];
            }
        });
    }); });
    // Edit / Delete buttons
    tableBody.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var target, id, action, res, user;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    target = e.target;
                    id = target.getAttribute("data-id");
                    action = target.getAttribute("data-action");
                    if (!id || !action)
                        return [2 /*return*/];
                    if (!(action === "edit")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id))];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    user = _b.sent();
                    userIdInput.value = String((_a = user.id) !== null && _a !== void 0 ? _a : "");
                    nameInput.value = user.name;
                    ageInput.value = String(user.age);
                    _b.label = 3;
                case 3:
                    if (!(action === "delete")) return [3 /*break*/, 5];
                    if (!confirm("Delete this user?")) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), { method: "DELETE" })];
                case 4:
                    _b.sent();
                    showAlert("User deleted successfully!", "success");
                    loadUsers();
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
    // Initial load
    loadUsers();
});
