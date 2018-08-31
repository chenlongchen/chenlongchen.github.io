/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SenceManger = __webpack_require__(1);

var _SenceManger2 = _interopRequireDefault(_SenceManger);

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function a() {
	setTimeout(function () {
		var w = window.innerWidth;
		var _ = window.innerHeight;
		var SCALE = 1;
		if (w < _) {
			// console.log("竖屏");
			SCALE = w / 750;
			sence.rotation = Math.PI / 2;
			sence.scale.set(SCALE, SCALE);
			app.renderer.resize(w, _);
			sence.position.set(w, 0);
		} else {
			// console.log("横屏");
			SCALE = _ / 750;
			sence.rotation = 0;
			sence.scale.set(SCALE, SCALE);
			app.renderer.resize(w, _);
			sence.position.set(0, 0);
		}
	}, 300);
}
var resources = ['images/2.png', 'images/3.png', 'images/4.png', 'images/block.png', 'images/boom.png', 'images/box.png', 'images/box1.png', 'images/down.png', 'images/up.png', 'images/left.png', 'images/right.png', 'images/key.png', 'images/downbtn.png', 'images/upbtn.png', 'images/leftbtn.png', 'images/rightbtn.png', 'images/hiter.png', 'images/opacity.png', 'images/player.png', 'images/replay.png', 'images/wall.png'];

for (var i = 1; i < 25; i++) {
	resources.push('images/bombing/' + i + '.png');
}

var Loader = new PIXI.loaders.Loader();
Loader.add(resources).onProgress.add(function (e) {
	// console.log((Math.round(e.progress)+"%"))
});
Loader.load(function (loader, resources) {
	senceManger.loadScene(_game2.default, { app: app, senceManger: senceManger });
});

var pixelRatio = window.devicePixelRatio;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var SCALE = screenWidth / 750;
var sence = new PIXI.Container();

// const app = new PIXI.Application({
//     width: screenWidth * pixelRatio,
//     height: screenHeight * pixelRatio,
//     antialias: true,
//     transparent: true,
//     resolution: pixelRatio
// })

var app = new PIXI.Application({
	width: screenWidth,
	height: screenHeight,
	antialias: true,
	transparent: true
});
// const stats = new Stats();
// stats.showPanel(0);
// document.body.appendChild( stats.dom );


app.renderer.autoResize = true;
app.stage.addChild(sence);

sence.rotation = Math.PI / 2;
app.renderer.resize(screenWidth, screenHeight);
sence.position.set(screenWidth, 0);

document.getElementById('canvas').append(app.renderer.view);

// a();
// window.onresize = a;
// window.onorientationchange = a;

var senceManger = new _SenceManger2.default(sence, app);

app.ticker.add(function () {
	// stats.begin();
	if (senceManger.renderSence.length != 0) {
		for (var _i = 0; _i < senceManger.renderSence.length; _i++) {
			senceManger.renderSence[_i].renderGame();
		}
	}
	// stats.end();
});

// console.log(senceManger);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  简单场景管理类
 */
var SenceManger = function () {
  function SenceManger(stage, app) {
    _classCallCheck(this, SenceManger);

    this.currentScene = null, this.stage = stage;
    this.app = app;
    this.renderSence = []; //
  }

  _createClass(SenceManger, [{
    key: "loadScene",
    value: function loadScene(t, i) {
      this.currentScene = i ? new t(i) : new t();
      this.stage.removeChildren();
      this.stage.addChild(this.currentScene);
    }
  }]);

  return SenceManger;
}();

exports.default = SenceManger;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createMap = __webpack_require__(3);

var _createMap2 = _interopRequireDefault(_createMap);

var _boomManger = __webpack_require__(6);

var _boomManger2 = _interopRequireDefault(_boomManger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 *  游戏场景
 */


var Sence = function (_PIXI$Container) {
    _inherits(Sence, _PIXI$Container);

    function Sence(option) {
        _classCallCheck(this, Sence);

        var _this = _possibleConstructorReturn(this, (Sence.__proto__ || Object.getPrototypeOf(Sence)).call(this));

        _this.app = option.app;
        _this.sence = new PIXI.Container();
        _this.senceManger = option.senceManger;
        _this.init();
        return _this;
    }

    _createClass(Sence, [{
        key: 'init',
        value: function init() {
            var map = new _createMap2.default(0);
            this.sence.addChild(map.spriteContainer);

            this.addChild(this.sence);
            var boom = new _boomManger2.default(map, {
                Container: this,
                width: this.app.renderer.view.width,
                height: this.app.renderer.view.height,
                senceManger: this.senceManger
            });
            this.senceManger.renderSence.push(boom);
            // console.log(this.senceManger);
        }
    }]);

    return Sence;
}(PIXI.Container);

exports.default = Sence;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(4);

var _map2 = _interopRequireDefault(_map);

var _Astart = __webpack_require__(5);

var _Astart2 = _interopRequireDefault(_Astart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createMap = function () {
    function createMap(index) {
        _classCallCheck(this, createMap);

        this.map = _map2.default[index]; //当前关卡
        this.player = null; //炸弹人
        this.spriteContainer = new PIXI.Container(); //地图主体
        this.box = new PIXI.Container(); //所有实体
        this.MapPool = []; // 存储所有地图精灵对象
        this.end = []; //敌人
        this.canMove = []; //存储所有可移动的格子的 行列位置
        this.KeyItem = []; //存放木箱的容器 用于随机放置钥匙
        this.haskey = null;
        this.timer = null;
        this.background = new PIXI.particles.ParticleContainer(this.map.length * this.map[0].length, {
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true
        });
        this.drawMap(this.map);
        this.pushKey();
        this.goto();
    }

    _createClass(createMap, [{
        key: 'pushKey',
        value: function pushKey() {
            var index = this.randnum(0, this.KeyItem.length);
            var keyRoom = this.KeyItem[index];
            var key = new PIXI.Sprite(PIXI.Texture.fromImage('images/key.png'));
            key.position.set(keyRoom.x, keyRoom.y);
            keyRoom.keyRoom = key;
            this.haskey = keyRoom;
            var nowIndex = this.box.children.indexOf(keyRoom);
            this.box.addChildAt(key, nowIndex);
        }

        //敌人运动

    }, {
        key: 'goto',
        value: function goto() {
            var _this = this;

            clearInterval(this.timer);
            this.timer = setInterval(function () {
                _this.moveball();
            }, 500);
        }
    }, {
        key: 'moveball',
        value: function moveball() {
            var arr = ['up', 'down', 'left', 'right'];
            for (var i = 0; i < this.end.length; i++) {
                var type = arr[this.randnum(0, 4)];
                this.ballHelper(type, this.end[i], this.MapPool);
            }
        }
    }, {
        key: 'ballHelper',
        value: function ballHelper(type, point, map) {
            switch (type) {
                case "up":
                    if (map[point.row - 1][point.col].val == 1 || map[point.row - 1][point.col].val == 5) return false;

                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row - 1][point.col].val = 2;
                    point.row = point.row - 1;
                    // point.position.set(point.col*50,point.row*50);

                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 500, TWEEN.Ease.linear).call(function () {
                        // this.moveball();
                    });

                    return true;
                    break;
                case "down":
                    if (map[point.row + 1][point.col].val == 1 || map[point.row + 1][point.col].val == 5) return false;

                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row + 1][point.col].val = 2;
                    point.row = point.row + 1;
                    // point.position.set(point.col*50,point.row*50);
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 500, TWEEN.Ease.linear).call(function () {
                        // this.moveball();
                    });

                    return true;
                    break;
                case "left":
                    if (map[point.row][point.col - 1].val == 1 || map[point.row][point.col - 1].val == 5) return false;

                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row][point.col - 1].val = 2;
                    point.col = point.col - 1;
                    // point.position.set(point.col*50,point.row*50);
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 500, TWEEN.Ease.linear).call(function () {
                        // this.moveball();
                    });

                    return true;
                    break;
                case "right":
                    if (map[point.row][point.col + 1].val == 1 || map[point.row][point.col + 1].val == 5) return false;

                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row][point.col + 1].val = 2;
                    point.col = point.col + 1;
                    // point.position.set(point.col*50,point.row*50);
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 500, TWEEN.Ease.linear).call(function () {
                        // this.moveball();
                    });

                    return true;
                    break;
            }
        }

        //A* 有待修改

    }, {
        key: 'moveHiter',
        value: function moveHiter(obj) {

            // let posArr = this.noRepeat(3,0,this.canMove.length-1);
            // for (let i = 0; i < this.end.length; i++) {
            //     let pos = this.canMove[posArr[i]];
            //     this.moveEnemy(this.MapPool,this.end[i],this.MapPool[pos.row][pos.col],()=>{
            //
            //     });
            // }
        }
    }, {
        key: 'drawMap',
        value: function drawMap(level) {
            for (var i = 0; i < level.length; i++) {

                this.MapPool[i] = [];

                for (var j = 0; j < level[i].length; j++) {

                    var obj = new PIXI.Sprite();
                    obj.position.set(j * 50, i * 50);

                    //背景地图
                    var bg = new PIXI.Sprite();
                    bg.position.set(j * 50, i * 50);
                    bg.texture = PIXI.Texture.fromImage('images/block.png');
                    bg.boType = 0; //当前格子的类型
                    bg.val = 0; // A*的状态

                    switch (level[i][j]) {
                        case 0:
                            //绘制绿色通道
                            obj.texture = PIXI.Texture.fromImage('images/opacity.png');
                            obj.boType = 0; //当前格子的类型
                            obj.val = 0; // A*的状态

                            this.canMove.push({ row: i, col: j }); //存储位置
                            break;
                        case 1:
                            //绘制灰色墙 box
                            obj.texture = PIXI.Texture.fromImage('images/box.png');
                            obj.boType = 1;
                            obj.val = 1;
                            break;
                        case 2:
                            //绘制蓝色墙 box1
                            obj.texture = PIXI.Texture.fromImage('images/box1.png');
                            obj.boType = 2;
                            obj.val = 1;
                            break;
                        case 3:
                            //绘制 敌人 player
                            obj.texture = PIXI.Texture.fromImage('images/4.png');
                            obj.boType = 3;
                            obj.val = 2;
                            this.end.push(obj);
                            break;
                        case 4:
                            //绘制 炸弹人
                            obj.texture = PIXI.Texture.fromImage('images/down.png');
                            obj.boType = 4;
                            obj.val = 4;
                            this.player = obj;
                            break;
                        case 5:
                            //绘制 可爆破木箱
                            obj.texture = PIXI.Texture.fromImage('images/3.png');
                            obj.boType = 5;
                            obj.val = 5;
                            this.KeyItem.push(obj);
                            break;
                    }
                    obj.row = i;
                    obj.col = j;
                    this.MapPool[i][j] = obj; //存储数据
                    this.box.addChild(obj);
                    this.background.addChild(bg);
                }
            }

            this.spriteContainer.addChild(this.background, this.box);
        }
    }, {
        key: 'moveEnemy',
        value: function moveEnemy(MapPool, player, end, callback) {
            var path = (0, _Astart2.default)(MapPool, player, end);
            // console.log(path);
            if (!path) {
                console.log("无路可走");
            } else {
                for (var i = 0; i < path.length; i++) {
                    !function (i) {
                        var timer = null;
                        timer = setTimeout(function () {
                            //更新map组坐标位置
                            MapPool[player.row][player.col].val = 0;
                            MapPool[path[i].row][path[i].col].val = 2;
                            player.row = path[i].row;
                            player.col = path[i].col;
                            player.position.set(path[i].x, path[i].y);
                            if (i == path.length - 1) {
                                console.log("end");
                                callback && callback();
                            }
                            clearTimeout(timer);
                        }, i * 500); //iTime为动画延时，下一个path都比上一个path延时iTime
                    }(i);
                }
            }
        }
    }, {
        key: 'noRepeat',
        value: function noRepeat(n, min, max) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                arr[i] = parseInt(Math.random() * (max - min + 1) + min);
                for (var j = 0; j < i; j++) {
                    if (arr[i] == arr[j]) {
                        i = i - 1;
                        break;
                    }
                }
            }
            return arr;
        }
    }, {
        key: 'randnum',
        value: function randnum(start, end) {
            return Math.floor(Math.random() * (end - start) + start);
        }
    }]);

    return createMap;
}();

exports.default = createMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// 750/50 = 15 行
// 1000 /50  20列
//  1 是实体外墙
//  0 是通道
//  2 是实体墙
//  3 是敌人
//  4 是炸弹人
//  5 是可爆破木箱

var mapData = [];
mapData[0] = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
exports.default = mapData;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getRounds(points, current) {
    var u = null; //上
    var l = null; //左
    var d = null; //下
    var r = null; //右
    var rounds = [];
    // 上
    if (current.row - 1 >= 0) {
        u = points[current.row - 1][current.col];
        rounds.push(u);
    }
    // 左
    if (current.col - 1 >= 0) {
        l = points[current.row][current.col - 1];
        rounds.push(l);
    }
    // 下
    if (current.row + 1 < points.length) {
        d = points[current.row + 1][current.col];
        rounds.push(d);
    }
    // 右
    if (current.col + 1 < points[0].length) {
        r = points[current.row][current.col + 1];
        rounds.push(r);
    }
    return rounds;
}
// 监测是否在列表中
function inList(list, current) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (current.row == list[i].row && current.col == list[i].col || current == list[i]) return true;
    }
    return false;
}
//寻找路径（astar算法）-地图、起点、终点
function findway(points, start, end) {
    var opens = []; // 存放可检索的方块(开启列表)
    var closes = []; // 存放已检索的方块（关闭列表）
    var cur = null; // 当前指针
    var bFind = true; // 是否检索
    // 设置开始点的F、G为0并放入opens列表（F=G+H）
    start.F = 0;
    start.G = 0;
    start.H = 0;
    // 将起点压入closes数组，并设置cur指向起始点
    closes.push(start);
    cur = start;
    // 如果起始点紧邻结束点则不计算路径直接将起始点和结束点压入closes数组
    if (Math.abs(start.row - end.row) + Math.abs(start.col - end.col) == 1) {
        end.P = start;
        closes.push(end);
        bFind = false;
    }

    // 计算路径
    while (cur && bFind) {
        //如果当前元素cur不在closes列表中，则将其压入closes列表中
        if (!inList(closes, cur)) closes.push(cur);
        // 然后获取当前点四周点
        var rounds = getRounds(points, cur);
        // 当四周点不在opens数组中并且可移动，设置G、H、F和父级P，并压入opens数组
        for (var i = 0; i < rounds.length; i++) {
            if (rounds[i].val == 1 || inList(closes, rounds[i]) || inList(opens, rounds[i])) continue;else if (!inList(opens, rounds[i]) && rounds[i].val != 1) {
                rounds[i].G = cur.G + 1; //不算斜的，只算横竖，设每格距离为1
                rounds[i].H = Math.abs(rounds[i].col - end.col) + Math.abs(rounds[i].row - end.row);
                rounds[i].F = rounds[i].G + rounds[i].H;
                rounds[i].P = cur; //cur为.P的父指针
                opens.push(rounds[i]);
            }
        }
        // 如果获取完四周点后opens列表为空，则代表无路可走，此时退出循环
        if (!opens.length) {
            cur = null;
            opens = [];
            closes = [];
            break;
        }
        // 按照F值由小到大将opens数组排序
        opens.sort(function (a, b) {
            return a.F - b.F;
        });
        // 取出opens数组中F值最小的元素，即opens数组中的第一个元素
        var oMinF = opens[0];
        var aMinF = []; // 存放opens数组中F值最小的元素集合
        // 循环opens数组，查找F值和cur的F值一样的元素，并压入aMinF数组。即找出和最小F值相同的元素有多少
        for (var i = 0; i < opens.length; i++) {
            if (opens[i].F == oMinF.F) aMinF.push(opens[i]);
        }
        // 如果最小F值有多个元素
        if (aMinF.length > 1) {
            // 计算元素与cur的曼哈顿距离
            for (var i = 0; i < aMinF.length; i++) {
                aMinF[i].D = Math.abs(aMinF[i].row - cur.row) + Math.abs(aMinF[i].col - cur.col);
            }
            // 将aMinF按照D曼哈顿距离由小到大排序（按照数值的大小对数字进行排序）
            aMinF.sort(function (a, b) {
                return a.D - b.D;
            });
            oMinF = aMinF[0];
        }
        // 将cur指向D值最小的元素
        cur = oMinF;
        // 将cur压入closes数组
        if (!inList(closes, cur)) closes.push(cur);
        // 将cur从opens数组中删除
        for (var i = 0; i < opens.length; i++) {
            if (opens[i] == cur) {
                opens.splice(i, 1); //将第i个值删除
                break;
            }
        }
        // 找到最后一点，并将结束点压入closes数组
        if (cur.H == 1) {
            end.P = cur;
            closes.push(end);
            cur = null;
        }
    }
    if (closes.length) {
        // 从结尾开始往前找
        var dotCur = closes[closes.length - 1];
        var path = []; // 存放最终路径
        var i = 0;
        while (dotCur) {
            path.unshift(dotCur); // 将当前点压入path数组的头部
            dotCur = dotCur.P; // 设置当前点指向父级
            if (!dotCur.P) {
                dotCur = null;
            }
        }
        return path;
    } else {
        return false;
    }
}
exports.default = findway;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MoveManger = __webpack_require__(7);

var _MoveManger2 = _interopRequireDefault(_MoveManger);

var _ButtonManger = __webpack_require__(8);

var _ButtonManger2 = _interopRequireDefault(_ButtonManger);

var _layaManger = __webpack_require__(9);

var _layaManger2 = _interopRequireDefault(_layaManger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 *  控制人物移动
 *  继承 EventEmitter
 */


var boomManger = function (_PIXI$utils$EventEmit) {
    _inherits(boomManger, _PIXI$utils$EventEmit);

    function boomManger(map, layaOption) {
        _classCallCheck(this, boomManger);

        var _this = _possibleConstructorReturn(this, (boomManger.__proto__ || Object.getPrototypeOf(boomManger)).call(this));

        _this.maxlen = 2; //控制最多同时存在几个炸弹
        _this.boom = new PIXI.Container(); //存放炸弹对象
        _this.delay = 3000; //炸弹爆炸延迟时间
        _this.map = map; //地图数据
        _this.layaOption = layaOption;
        _this.layaOut = new _layaManger2.default(_this.layaOption.Container, _this.layaOption.width, _this.layaOption.height, _this.layaOption.senceManger);
        _this.init(_this.layaOption);
        return _this;
    }

    _createClass(boomManger, [{
        key: 'init',
        value: function init(param) {
            var _this2 = this;

            var Move = new _MoveManger2.default(param.height, param.width);
            var Button = new _ButtonManger2.default(this.layaOption.Container);
            Button.on("move", function (type) {
                // console.log(type);
                if (Move.CanMove(type, _this2.map.player, _this2.map.MapPool)) {
                    if (_this2.hitBox(_this2.map.haskey, _this2.map.player)) {
                        _this2.layaOut.showLaya("恭喜您通关了"); //出弹框
                    }
                }
            });
            Button.on("boom", function (type) {
                // console.log('boom');
                var newTarget = _this2.map.player;
                // console.log(newTarget.row);
                // console.log(newTarget.col);
                var obj = {
                    row: newTarget.row,
                    col: newTarget.col,
                    x: newTarget.x,
                    y: newTarget.y,
                    parent: newTarget.parent
                };

                _this2.createboom(obj);
            });
        }
    }, {
        key: 'renderGame',
        value: function renderGame() {
            for (var len = this.map.end, i = 0; i < len.length; i++) {
                if (this.hitBox(len[i], this.map.player)) {
                    // console.log("game over!");
                    this.layaOut.showLaya("很遗憾失败"); //出弹框
                    clearInterval(this.map.timer);
                }
            }
        }

        /**
         * obj 当前玩家位置
         */

    }, {
        key: 'createboom',
        value: function createboom(obj) {
            var _this3 = this;

            //限制炸弹数
            if (this.boom.children.length < this.maxlen) {
                var Sprite = this.createSprite('images/boom.png', { x: obj.x, y: obj.y });
                Sprite.row = obj.row;
                Sprite.col = obj.col;
                obj.parent.addChild(this.boom);
                this.boom.addChild(Sprite);
                var timerOut = null;
                timerOut = setTimeout(function () {
                    var position = _this3.boomRange(_this3.map.MapPool, obj); //炸弹爆炸位置
                    // console.log(position);
                    for (var item in position) {
                        if (position[item] != null) {
                            Sprite.visible = false; //解决动画播放透明度一般的时候看得见炸弹的Bug
                            _this3.PlayAnimation(position[item], function () {
                                //更新当前存在炸弹个数
                                _this3.boom.removeChild(Sprite);
                            });
                        }
                    }
                    clearTimeout(timerOut);
                }, this.delay);
            }
        }

        /**
         * 如果要扩大爆炸范围就用for 循环处理坐标 这里只是简单处理
         *  如果是多个 就直接存储 row col 然后从map 中提取sprite 即可  需要注意异步问题
         * val = 1  代表 是实体墙 不可爆破
         */

    }, {
        key: 'boomRange',
        value: function boomRange(map, point) {
            // console.log(point);
            var pos = {};
            pos.self = point; //处理当前位置爆破错位问题
            pos.up = map[point.row - 1][point.col].val == 1 ? null : map[point.row - 1][point.col];
            pos.down = map[point.row + 1][point.col].val == 1 ? null : map[point.row + 1][point.col];
            pos.left = map[point.row][point.col - 1].val == 1 ? null : map[point.row][point.col - 1];
            pos.right = map[point.row][point.col + 1].val == 1 ? null : map[point.row][point.col + 1];
            return pos;
        }
    }, {
        key: 'renderHit',
        value: function renderHit(target) {
            for (var map = this.map.MapPool, i = 0; i < map.length; i++) {
                for (var j = 0; j < map[i].length; j++) {
                    if (this.hitBox(map[i][j], target)) {

                        switch (map[i][j].val) {
                            case 2:
                                //炸到了敌人
                                // console.log("炸到了敌人加分~");
                                this.destoryEnemy(map[i][j]);
                                break;
                            case 4:
                                //炸到了自己 游戏结束
                                this.destorySelf(map[i][j]);
                                break;
                            case 5:
                                //炸到了木箱子
                                this.destoryWoodenBox(map[i][j]);
                                break;
                        }
                    }
                }
            }
        }
        //炸到敌人处理

    }, {
        key: 'destoryEnemy',
        value: function destoryEnemy(target) {
            target.texture = PIXI.Texture.fromImage('images/opacity.png');
            target.boType = 0; //当前格子的类型
            target.val = 0; // A*的状态
            // console.log("add score!");
        }
    }, {
        key: 'destorySelf',
        value: function destorySelf(target) {
            target.visible = false; //简单处理 直接隐藏
            this.layaOut.showLaya('很遗憾失败');
            clearInterval(this.map.timer); //停止敌人运动
        }
        //炸到木箱

    }, {
        key: 'destoryWoodenBox',
        value: function destoryWoodenBox(target) {
            target.texture = PIXI.Texture.fromImage('images/opacity.png');
            target.boType = 0; //当前格子的类型
            target.val = 0; // A*的状态
        }
    }, {
        key: 'hitBox',
        value: function hitBox(source, target) {
            if (Math.abs(source.x - target.x) < source.width / 2 + target.width / 2 && Math.abs(source.y - target.y) < source.height / 2 + target.height / 2) {
                return true;
            }
            return false;
        }
        /**
         * obj 坐标位置
         */

    }, {
        key: 'PlayAnimation',
        value: function PlayAnimation(obj, callback) {
            var _this4 = this;

            var AnimatedSprite = this.createAnimatedSprite("images/bombing/", 25, { x: obj.x, y: obj.y, loop: !1, animationSpeed: 0.3 }, 1);
            AnimatedSprite.play();
            AnimatedSprite.onFrameChange = function (e) {
                //爆炸时才做判断是否发生碰撞
                _this4.renderHit(AnimatedSprite);
            };
            AnimatedSprite.onComplete = function (e) {
                AnimatedSprite.parent.removeChild(AnimatedSprite);
                callback && callback();
            };
            obj.parent.addChild(AnimatedSprite);
        }
    }, {
        key: 'createSprite',
        value: function createSprite(name, opt) {
            var newSprite = new PIXI.Sprite.fromImage(name);
            if (opt) {
                for (var key in opt) {
                    if (typeof newSprite[key] != "undefined") {
                        newSprite[key] = opt[key];
                    }
                }
            }
            return newSprite;
        }
    }, {
        key: 'createAnimatedSprite',
        value: function createAnimatedSprite(name, num, opt, start) {
            var Textures = [],
                i = void 0,
                AnimatedSpriteInstance = void 0;
            i = start || 0;
            for (; i < num; i++) {
                var Texture = PIXI.Texture.fromImage(name + i + '.png');
                Textures.push(Texture);
            }
            AnimatedSpriteInstance = new PIXI.extras.AnimatedSprite(Textures);
            if (opt) {
                for (var key in opt) {
                    if (typeof AnimatedSpriteInstance[key] != "undefined") {
                        AnimatedSpriteInstance[key] = opt[key];
                    }
                }
            }
            return AnimatedSpriteInstance;
        }
    }]);

    return boomManger;
}(PIXI.utils.EventEmitter);

exports.default = boomManger;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  控制人物移动
 *  继承 EventEmitter
 */
var MoveManger = function (_PIXI$utils$EventEmit) {
    _inherits(MoveManger, _PIXI$utils$EventEmit);

    function MoveManger(width, height) {
        _classCallCheck(this, MoveManger);

        var _this = _possibleConstructorReturn(this, (MoveManger.__proto__ || Object.getPrototypeOf(MoveManger)).call(this));

        _this.viewWdith = width;
        _this.viewHeight = height;
        return _this;
    }

    _createClass(MoveManger, [{
        key: "moveSence",
        value: function moveSence(target) {

            var startX = Math.floor(this.viewWdith / 2 / 50); //中心点
            var endX = Math.floor((target.parent.parent.parent.width - this.viewWdith) / 50);

            var startY = Math.floor(this.viewHeight / 2 / 50); //中心点
            var endY = Math.floor((target.parent.parent.parent.height - this.viewHeight) / 50);

            if (target.col >= startX && target.col <= startX + endX) {
                // target.parent.parent.parent.position.x = -(target.col-startX)*50;
                TWEEN.Tween.get(target.parent.parent.parent).to({ x: -(target.col - startX) * 50 }, 200, TWEEN.Ease.linear);
            }

            // console.log(target.row);

            if (target.row >= startY && target.row <= startY + endY) {
                // target.parent.parent.parent.position.y = -(target.row-startY)*50;
                TWEEN.Tween.get(target.parent.parent.parent).to({ y: -(target.row - startY) * 50 }, 200, TWEEN.Ease.linear);
            }
        }

        //判断下一步是否可以移动
        /**
         * type  当前动作类型
         * map 当前地图二维数组
         * point type {col,row} 当前人物在二维数组中的位置
         */
        // 除了实体墙跟木盒子 其他的都可以移动  1  5

    }, {
        key: "CanMove",
        value: function CanMove(type, point, map) {
            switch (type) {
                case "up":
                    if (map[point.row - 1][point.col].val == 1 || map[point.row - 1][point.col].val == 5) return false;

                    github = true; //修改移动状态
                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row - 1][point.col].val = 4;
                    point.row = point.row - 1;

                    point.texture = PIXI.Texture.fromImage('images/up.png');
                    // point.position.set(point.col*50,point.row*50);
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 200, TWEEN.Ease.linear).call(function () {
                        github = false;
                    });
                    this.moveSence(point);
                    return true;
                    break;
                case "down":
                    if (map[point.row + 1][point.col].val == 1 || map[point.row + 1][point.col].val == 5) return false;

                    github = true; //修改移动状态
                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row + 1][point.col].val = 4;
                    point.row = point.row + 1;
                    // point.position.set(point.col*50,point.row*50);
                    point.texture = PIXI.Texture.fromImage('images/down.png');
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 200, TWEEN.Ease.linear).call(function () {
                        github = false;
                    });
                    this.moveSence(point);
                    return true;
                    break;
                case "left":
                    if (map[point.row][point.col - 1].val == 1 || map[point.row][point.col - 1].val == 5) return false;

                    github = true; //修改移动状态
                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row][point.col - 1].val = 4;
                    point.col = point.col - 1;
                    // point.position.set(point.col*50,point.row*50);
                    point.texture = PIXI.Texture.fromImage('images/left.png');
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 200, TWEEN.Ease.linear).call(function () {
                        github = false;
                    });
                    this.moveSence(point);

                    return true;
                    break;
                case "right":
                    if (map[point.row][point.col + 1].val == 1 || map[point.row][point.col + 1].val == 5) return false;

                    github = true; //修改移动状态
                    //更新位置
                    map[point.row][point.col].val = 0;
                    map[point.row][point.col + 1].val = 4;
                    point.col = point.col + 1;
                    // point.position.set(point.col*50,point.row*50);
                    point.texture = PIXI.Texture.fromImage('images/right.png');
                    TWEEN.Tween.get(point).to({ x: point.col * 50, y: point.row * 50 }, 200, TWEEN.Ease.linear).call(function () {
                        github = false;
                    });

                    this.moveSence(point);
                    return true;
                    break;
            }
        }
    }]);

    return MoveManger;
}(PIXI.utils.EventEmitter);

exports.default = MoveManger;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  键盘监听
 *  继承 EventEmitter
 */
var ButtonManger = function (_PIXI$utils$EventEmit) {
    _inherits(ButtonManger, _PIXI$utils$EventEmit);

    function ButtonManger(parent) {
        _classCallCheck(this, ButtonManger);

        var _this = _possibleConstructorReturn(this, (ButtonManger.__proto__ || Object.getPrototypeOf(ButtonManger)).call(this));

        _this.parent = parent;
        _this.ButtonContainer = new PIXI.Container();
        _this.enableTouch = true; //不可同时移动
        _this.init();
        return _this;
    }

    _createClass(ButtonManger, [{
        key: "init",
        value: function init() {
            var _this2 = this;

            // console.log(this.parent);
            //移动中不可以点击任何按钮
            this.parent.addChild(this.ButtonContainer);

            this.createButton("images/upbtn.png", 0, 150).on("pointerdown", function () {
                if (github) return;
                _this2.emit('move', "up");
            });

            this.createButton("images/downbtn.png", 0, 270).on("pointerdown", function () {
                if (github) return;
                _this2.emit('move', "down");
            });

            this.createButton("images/leftbtn.png", 0, 390).on("pointerdown", function () {
                if (github) return;
                _this2.emit('move', "left");
            });

            this.createButton("images/rightbtn.png", 0, 510).on("pointerdown", function () {
                if (github) return;
                _this2.emit('move', "right");
            });

            this.createButton("images/hiter.png", 600, 650).on("pointerdown", function () {
                _this2.emit('boom', "boom");
            });
        }
    }, {
        key: "createButton",
        value: function createButton(name, x, y) {
            var newSprite = new PIXI.Sprite.fromImage(name);
            newSprite.interactive = true;
            newSprite.position.set(x, y);
            this.ButtonContainer.addChild(newSprite);
            return newSprite;
        }
    }]);

    return ButtonManger;
}(PIXI.utils.EventEmitter);

exports.default = ButtonManger;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 *  弹出层
 *  继承 EventEmitter
 */


var layaManger = function (_PIXI$Graphics) {
    _inherits(layaManger, _PIXI$Graphics);

    function layaManger(Container, width, height, senceManger) {
        _classCallCheck(this, layaManger);

        var _this = _possibleConstructorReturn(this, (layaManger.__proto__ || Object.getPrototypeOf(layaManger)).call(this));

        _this.layaOut = new PIXI.Graphics();
        _this.Container = Container;
        _this.viewWidth = width;
        _this.viewHeight = height;
        _this.senceManger = senceManger;
        _this.Container.addChild(_this);
        _this.visible = false;
        _this.createLaya();

        _this.createButton('images/replay.png', _this.viewHeight / 2, _this.viewWidth / 2 - 100).on("touchstart", function () {
            _this.hideLaya();
            _this.senceManger.renderSence.length = 0;
            _this.senceManger.loadScene(_game2.default, { app: _this.senceManger.app, senceManger: _this.senceManger });
        });
        _this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6
        });
        _this.message = new PIXI.Text("失败", _this.style);
        _this.message.anchor.set(0.5, 0.5);
        _this.message.position.set(_this.viewHeight / 2, _this.viewWidth / 2 - 100);
        _this.addChild(_this.message);
        return _this;
    }

    _createClass(layaManger, [{
        key: 'createLaya',
        value: function createLaya() {
            this.clear();
            this.beginFill(0x000000, 0.5);
            this.drawRect(0, 0, this.viewHeight, this.viewWidth);
            this.endFill();
        }
    }, {
        key: 'createButton',
        value: function createButton(name, x, y) {
            var newSprite = new PIXI.Sprite.fromImage(name);
            newSprite.interactive = true;
            newSprite.alpha = 0;
            newSprite.anchor.set(0.5, 0.5);
            newSprite.position.set(x, y);
            this.addChild(newSprite);
            return newSprite;
        }
    }, {
        key: 'showLaya',
        value: function showLaya(str) {
            this.visible = true;
            this.message.text = str;
            TWEEN.Tween.get(this.children[0]).to({ alpha: 1, y: this.viewWidth / 2 }, 400, TWEEN.Ease.linear);
        }
    }, {
        key: 'hideLaya',
        value: function hideLaya() {
            this.visible = false;
            TWEEN.Tween.get(this.children[0]).to({ alpha: 0, y: this.viewWidth / 2 - 100 }, 400, TWEEN.Ease.linear);
        }
    }]);

    return layaManger;
}(PIXI.Graphics);

exports.default = layaManger;

/***/ })
/******/ ]);