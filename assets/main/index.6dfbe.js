window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Board: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02f51Uge45OxasmUK5bgWZD", "Board");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whetherChessPostheSame = exports.chessplace = exports.safePlace = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var steplength = 640 / 15;
    var board = [];
    var path1 = [];
    var path2 = [];
    var path3 = [];
    var path4 = [];
    var originpos = [];
    var safePlace = [];
    exports.safePlace = safePlace;
    var chessplace = __spreadArrays(new Array(16)).fill(-1);
    exports.chessplace = chessplace;
    var whetherChessPostheSame = [];
    exports.whetherChessPostheSame = whetherChessPostheSame;
    var whetherChessPostheSameidx = 0;
    var whetherChessPostheSamePath = [];
    var whetherChessPostheSamePathidx = 0;
    var ClientTest_1 = require("./ClientTest");
    var ClientTest_2 = require("./ClientTest");
    var ClientTest_3 = require("./ClientTest");
    var color;
    (function(color) {
      color[color["red"] = 0] = "red";
      color[color["green"] = 1] = "green";
      color[color["yello"] = 2] = "yello";
      color[color["blue"] = 3] = "blue";
    })(color || (color = {}));
    var Boards = function(_super) {
      __extends(Boards, _super);
      function Boards() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this[0] = null;
        _this[1] = null;
        _this.l1 = null;
        _this.l2 = null;
        _this.players = null;
        return _this;
      }
      Boards.prototype.onLoad = function() {
        this.setboardposition();
        safePlace.push(1, 9, 14, 22, 27, 35, 40, 48);
      };
      Boards.prototype.start = function() {};
      Boards.prototype.update = function(dt) {};
      Boards.prototype.setboardposition = function() {
        for (var i = 0; i < 58; i++) {
          board.push({
            x: 0,
            y: 0,
            count_: 0
          });
          path1.push({
            x: 0,
            y: 0,
            count_: 0
          });
          path2.push({
            x: 0,
            y: 0,
            count_: 0
          });
          path3.push({
            x: 0,
            y: 0,
            count_: 0
          });
          path4.push({
            x: 0,
            y: 0,
            count_: 0
          });
        }
        for (var i = 0; i < 16; i++) originpos.push({
          x: 0,
          y: 0,
          count_: 0
        });
        board[12].x = 7 * steplength;
        board[12].y = 0;
        board[25].x = 0;
        board[25].y = -7 * steplength;
        board[38].x = -7 * steplength;
        board[38].y = 0;
        board[51].x = 0;
        board[51].y = 7 * steplength;
        for (var i = 0; i < 6; i++) {
          board[i].x = steplength;
          board[i].y = (7 - i) * steplength;
          board[6 + i].x = (2 + i) * steplength;
          board[6 + i].y = steplength;
          board[13 + i].x = (7 - i) * steplength;
          board[13 + i].y = -1 * steplength;
          board[19 + i].x = steplength;
          board[19 + i].y = (-2 - i) * steplength;
          board[26 + i].x = -1 * steplength;
          board[26 + i].y = (-7 + i) * steplength;
          board[32 + i].x = (-2 - i) * steplength;
          board[32 + i].y = -1 * steplength;
          board[39 + i].x = (i - 7) * steplength;
          board[39 + i].y = steplength;
          board[45 + i].x = -1 * steplength;
          board[45 + i].y = (2 + i) * steplength;
        }
        for (var i = 0; i < 52; i++) {
          path1[i] = board[i];
          path2[i] = board[(i + 13) % 52];
          path3[i] = board[(i + 26) % 52];
          path4[i] = board[(i + 39) % 52];
        }
        for (var i = 0; i < 6; i++) {
          path1[52 + i].x = 0;
          path1[52 + i].y = (6 - i) * steplength;
          path2[52 + i].x = (6 - i) * steplength;
          path2[52 + i].y = 0;
          path3[52 + i].x = 0;
          path3[52 + i].y = (i - 6) * steplength;
          path4[52 + i].x = -(6 - i) * steplength;
          path4[52 + i].y = 0;
        }
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
          originpos[4 * i + j].x = cc.find("player" + (i + 1).toString() + "/" + (4 * i + j).toString(), this.players).x;
          originpos[4 * i + j].y = cc.find("player" + (i + 1).toString() + "/" + (4 * i + j).toString(), this.players).y;
        }
      };
      Boards.prototype.newBoard = function() {
        whetherChessPostheSameidx = 0;
        whetherChessPostheSame.splice(0, whetherChessPostheSame.length);
        whetherChessPostheSamePathidx = 0;
        whetherChessPostheSamePath.splice(0, whetherChessPostheSame.length);
        for (var i = 0; i <= 51; i++) board[i].count_ = 0;
        for (var i = 52; i < 58; i++) {
          path1[i].count_ = 0;
          path2[i].count_ = 0;
          path3[i].count_ = 0;
          path4[i].count_ = 0;
        }
      };
      Boards.prototype.BeforeMove = function(player, idx, chess) {
        for (var i = 0; i < whetherChessPostheSameidx; ++i) {
          if (-1 === idx) break;
          if (ClientTest_2.moveChess[2] > 0 && board[ClientTest_2.moveChess[2]].count_ > 1 && whetherChessPostheSame[i] && whetherChessPostheSame) if (2 === whetherChessPostheSame[i].length && 2 === board[ClientTest_2.moveChess[2]].count_) {
            if (idx <= 51) if (chess.name == whetherChessPostheSame[i][0].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][1].name)).to(1, {
                scale: 1,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x, board[ClientTest_2.moveChess[2]].y, 0)
              }).start();
              whetherChessPostheSame.splice(i, 1);
              whetherChessPostheSameidx--;
              board[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSame[i][1].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][0].name)).to(1, {
                scale: 1,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x, board[ClientTest_2.moveChess[2]].y, 0)
              }).start();
              whetherChessPostheSame.splice(i, 1);
              whetherChessPostheSameidx--;
              board[ClientTest_2.moveChess[2]].count_ -= 1;
            }
          } else if (3 === whetherChessPostheSame[i].length && 3 === board[ClientTest_2.moveChess[2]].count_) {
            if (idx <= 51) if (chess.name == whetherChessPostheSame[i][0].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][1].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x - 8, board[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][2].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][2].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x + 8, board[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSame[i].splice(0, 1);
              board[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSame[i][1].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][0].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x - 8, board[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][2].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][2].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x + 8, board[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSame[i].splice(1, 1);
              board[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSame[i][2].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][0].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x - 8, board[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][1].name)).to(1, {
                scale: .5,
                position: cc.v3(board[ClientTest_2.moveChess[2]].x + 8, board[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSame[i].splice(2, 1);
              board[ClientTest_2.moveChess[2]].count_ -= 1;
            }
          } else if (4 === whetherChessPostheSame[i].length && 4 === board[ClientTest_2.moveChess[2]].count_) if (chess.name == whetherChessPostheSame[i][0].name) {
            whetherChessPostheSame[i].splice(0, 1);
            board[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSame[i][1].name) {
            whetherChessPostheSame[i].splice(1, 1);
            board[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSame[i][2].name) {
            whetherChessPostheSame[i].splice(2, 1);
            board[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSame[i][3].name) {
            whetherChessPostheSame[i].splice(3, 1);
            board[ClientTest_2.moveChess[2]].count_ -= 1;
          }
        }
      };
      Boards.prototype.goBackHome = function(player, idx, chess, chess2, i, j) {
        this.BeforeMove(player, idx, chess);
        cc.tween(chess2).to(3, {
          scale: 1,
          position: cc.v3(originpos[4 * i + j].x, originpos[4 * i + j].y, 0)
        }, cc.easeBackIn()).start();
        var execute = function(index, count_) {
          cc.tween(chess).to(.5, {
            scale: 1,
            position: cc.v3(board[index].x, board[index].y, 0)
          }).call(function() {
            count_ > 0 && index < 51 ? execute(index + 1, count_ - 1) : index >= 51 && count_ > 0 && execute(index - 51, count_ - 1);
          }).start();
        };
        execute(ClientTest_2.moveChess[2], (idx + 51 - ClientTest_2.moveChess[2] + 1) % 52);
        chessplace[4 * i + j] = -1;
        board[ClientTest_2.moveChess[2]].count_ -= 1;
      };
      Boards.prototype.move = function(player, playernum, idx, chess) {
        if (ClientTest_1.Gate[0] && idx > 51 && 0 === player) {
          ClientTest_2.moveChess[2] > 51 ? this.BeforeMovePath(path1, idx, chess) : this.BeforeMove(player, idx, chess);
          if (51 > ClientTest_2.moveChess[2]) {
            var execute_1 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && execute_1(index + 1, count_ - 1);
              }).start();
            };
            execute_1(ClientTest_2.moveChess[2], 51 - ClientTest_2.moveChess[2]);
          }
          var count_Path = 51 - ClientTest_2.moveChess[2];
          count_Path < 0 && (count_Path = 0);
          var execute_2 = function(index, count_) {
            cc.tween(chess).to(.5, {
              scale: 1,
              position: cc.v3(path1[index].x, path1[index].y, 0)
            }).call(function() {
              count_ > 0 && execute_2(index + 1, count_ - 1);
            }).start();
          };
          execute_2(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
          path1[idx].count_ += 1;
        } else if (ClientTest_1.Gate[1] && idx > 51 && 1 === player) {
          ClientTest_2.moveChess[2] > 51 ? this.BeforeMovePath(path2, idx, chess) : this.BeforeMove(player, idx, chess);
          if (12 > ClientTest_2.moveChess[2]) {
            var execute_3 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && execute_3(index + 1, count_ - 1);
              }).start();
            };
            execute_3(ClientTest_2.moveChess[2], 12 - ClientTest_2.moveChess[2]);
          }
          var count_Path = 12 - ClientTest_2.moveChess[2];
          count_Path < 0 && (count_Path = 0);
          var execute_4 = function(index, count_) {
            cc.tween(chess).to(.5, {
              scale: 1,
              position: cc.v3(path2[index].x, path2[index].y, 0)
            }).call(function() {
              count_ > 0 && execute_4(index + 1, count_ - 1);
            }).start();
          };
          execute_4(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
          path2[idx].count_ += 1;
        } else if (ClientTest_1.Gate[2] && idx > 51 && 2 === player) {
          ClientTest_2.moveChess[2] > 51 ? this.BeforeMovePath(path3, idx, chess) : this.BeforeMove(player, idx, chess);
          if (25 > ClientTest_2.moveChess[2]) {
            var execute_5 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && execute_5(index + 1, count_ - 1);
              }).start();
            };
            execute_5(ClientTest_2.moveChess[2], 25 - ClientTest_2.moveChess[2]);
          }
          var count_Path = 25 - ClientTest_2.moveChess[2];
          count_Path < 0 && (count_Path = 0);
          var execute_6 = function(index, count_) {
            cc.tween(chess).to(.5, {
              scale: 1,
              position: cc.v3(path3[index].x, path3[index].y, 0)
            }).call(function() {
              count_ > 0 && execute_6(index + 1, count_ - 1);
            }).start();
          };
          execute_6(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
          path3[idx].count_ += 1;
        } else if (ClientTest_1.Gate[3] && idx > 51 && 3 === player) {
          ClientTest_2.moveChess[2] > 51 ? this.BeforeMovePath(path4, idx, chess) : this.BeforeMove(player, idx, chess);
          if (38 > ClientTest_2.moveChess[2]) {
            var execute_7 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && execute_7(index + 1, count_ - 1);
              }).start();
            };
            execute_7(ClientTest_2.moveChess[2], 38 - ClientTest_2.moveChess[2]);
          }
          var count_Path = 38 - ClientTest_2.moveChess[2];
          count_Path < 0 && (count_Path = 0);
          var execute_8 = function(index, count_) {
            cc.tween(chess).to(.5, {
              scale: 1,
              position: cc.v3(path4[index].x, path4[index].y, 0)
            }).call(function() {
              count_ > 0 && execute_8(index + 1, count_ - 1);
            }).start();
          };
          execute_8(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
          path4[idx].count_ += 1;
        } else if (-1 == idx) cc.tween(chess).to(1, {
          scale: 1,
          position: cc.v3(originpos[4 * player + playernum].x, originpos[4 * player + playernum].y, 0)
        }).start(); else if (idx <= 51 && 0 != ClientTest_3.dir) {
          this.BeforeMove(player, idx, chess);
          if (-1 != ClientTest_2.moveChess[2]) {
            var execute_9 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && index < 51 ? execute_9(index + 1, count_ - 1) : index >= 51 && count_ > 0 && execute_9(index - 51, count_ - 1);
              }).start();
            };
            execute_9(ClientTest_2.moveChess[2], (idx + 51 - ClientTest_2.moveChess[2] + 1) % 52);
          } else cc.tween(chess).to(.5, {
            scale: 1,
            position: cc.v3(board[idx].x, board[idx].y, 0)
          }).start();
          board[idx].count_ += 1;
        }
      };
      Boards.prototype.changeMoveStatus = function(player, playernum, idx, chess, chess2) {
        if (-1 == idx) return;
        if (ClientTest_1.Gate[0] && idx > 51 && 0 === player) this.changeMoveStatusPath(path1, player, idx, 51, chess, chess2); else if (ClientTest_1.Gate[1] && idx > 51 && 1 === player) this.changeMoveStatusPath(path2, player, idx, 12, chess, chess2); else if (ClientTest_1.Gate[2] && idx > 51 && 2 === player) this.changeMoveStatusPath(path3, player, idx, 25, chess, chess2); else if (ClientTest_1.Gate[3] && idx > 51 && 3 === player) this.changeMoveStatusPath(path4, player, idx, 38, chess, chess2); else if (idx <= 51) {
          this.BeforeMove(player, idx, chess);
          if (board[idx].count_ < 2) {
            if (0 == ClientTest_3.dir) {
              cc.tween(chess).call(function() {
                cc.tween(chess).to(1, {
                  scale: .5,
                  position: cc.v3(board[idx].x - 8, board[idx].y - 8, 0)
                }, cc.easeBackIn()).start();
                cc.tween(chess2).to(1, {
                  scale: .5,
                  position: cc.v3(board[idx].x + 8, board[idx].y + 8, 0)
                }, cc.easeBackIn()).start();
              }).start();
              board[idx].count_ += 2;
            } else {
              if (-1 != ClientTest_2.moveChess[2]) {
                var execute_10 = function(index, count_) {
                  cc.tween(chess).to(.5, {
                    scale: 1,
                    position: cc.v3(board[index].x, board[index].y, 0)
                  }).call(function() {
                    if (count_ > 0 && index < 51) execute_10(index + 1, count_ - 1); else if (index >= 51 && count_ > 0) execute_10(index - 51, count_ - 1); else {
                      cc.tween(chess).to(2, {
                        scale: .5,
                        position: cc.v3(board[idx].x - 8, board[idx].y - 8, 0)
                      }, cc.easeBackIn()).start();
                      cc.tween(chess2).to(3, {
                        scale: .5,
                        position: cc.v3(board[idx].x + 8, board[idx].y + 8, 0)
                      }, cc.easeBackIn()).start();
                    }
                  }).start();
                };
                execute_10(ClientTest_2.moveChess[2], (idx + 51 - ClientTest_2.moveChess[2] + 1) % 52);
              } else {
                cc.tween(chess).to(2, {
                  scale: .5,
                  position: cc.v3(board[idx].x - 8, board[idx].y - 8, 0)
                }, cc.easeBackIn()).start();
                cc.tween(chess2).to(3, {
                  scale: .5,
                  position: cc.v3(board[idx].x + 8, board[idx].y + 8, 0)
                }, cc.easeBackIn()).start();
              }
              board[idx].count_ += 1;
            }
            whetherChessPostheSame[whetherChessPostheSameidx] = [];
            whetherChessPostheSame[whetherChessPostheSameidx][0] = chess;
            whetherChessPostheSame[whetherChessPostheSameidx][1] = chess2;
            whetherChessPostheSameidx++;
          } else if (board[idx].count_ >= 2) {
            var _loop_1 = function(i) {
              if (whetherChessPostheSame[i] && whetherChessPostheSame) if (2 === whetherChessPostheSame[i].length && 2 === board[idx].count_) {
                if (whetherChessPostheSame[i][0].name == chess2.name || whetherChessPostheSame[i][1].name == chess2.name) {
                  if (-1 != ClientTest_2.moveChess[2]) {
                    var execute_11 = function(index, count_) {
                      cc.tween(chess).to(.5, {
                        scale: 1,
                        position: cc.v3(board[index].x, board[index].y, 0)
                      }).call(function() {
                        if (count_ > 0 && index < 51) execute_11(index + 1, count_ - 1); else if (index >= 51 && count_ > 0) execute_11(index - 51, count_ - 1); else {
                          cc.tween(chess).to(1, {
                            scale: .25,
                            position: cc.v3(board[idx].x - 6, board[idx].y + 6, 0)
                          }, cc.easeBackIn()).start();
                          cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][0].name)).to(1, {
                            scale: .25,
                            position: cc.v3(board[idx].x - 6, board[idx].y - 6, 0)
                          }, cc.easeBackIn()).start();
                          cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][1].name)).to(1, {
                            scale: .25,
                            position: cc.v3(board[idx].x + 6, board[idx].y + 6, 0)
                          }, cc.easeBackIn()).start();
                        }
                      }).start();
                    };
                    execute_11(ClientTest_2.moveChess[2], (idx + 51 - ClientTest_2.moveChess[2] + 1) % 52);
                  } else {
                    cc.tween(chess).to(1, {
                      scale: .25,
                      position: cc.v3(board[idx].x - 6, board[idx].y + 6, 0)
                    }, cc.easeBackIn()).start();
                    cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][0].name)).to(1, {
                      scale: .25,
                      position: cc.v3(board[idx].x - 6, board[idx].y - 6, 0)
                    }, cc.easeBackIn()).start();
                    cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSame[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSame[i][1].name)).to(1, {
                      scale: .25,
                      position: cc.v3(board[idx].x + 6, board[idx].y + 6, 0)
                    }, cc.easeBackIn()).start();
                  }
                  whetherChessPostheSame[i].push(chess);
                  board[idx].count_ += 1;
                }
              } else if (3 === whetherChessPostheSame[i].length && 3 === board[idx].count_ && (whetherChessPostheSame[i][0].name == chess2.name || whetherChessPostheSame[i][1].name == chess2.name || whetherChessPostheSame[i][2].name == chess2.name)) {
                if (-1 != ClientTest_2.moveChess[2]) {
                  var execute_12 = function(index, count_) {
                    cc.tween(chess).to(.5, {
                      scale: 1,
                      position: cc.v3(board[index].x, board[index].y, 0)
                    }).call(function() {
                      count_ > 0 && index < 51 ? execute_12(index + 1, count_ - 1) : index >= 51 && count_ > 0 ? execute_12(index - 51, count_ - 1) : cc.tween(chess).to(1, {
                        scale: .25,
                        position: cc.v3(board[idx].x + 6, board[idx].y - 6, 0)
                      }, cc.easeBackIn()).start();
                    }).start();
                  };
                  execute_12(ClientTest_2.moveChess[2], (idx + 51 - ClientTest_2.moveChess[2] + 1) % 52);
                } else cc.tween(chess).to(1, {
                  scale: .25,
                  position: cc.v3(board[idx].x + 6, board[idx].y - 6, 0)
                }, cc.easeBackIn()).start();
                whetherChessPostheSame[i].push(chess);
                board[idx].count_ += 1;
              }
            };
            for (var i = 0; i < whetherChessPostheSameidx; ++i) _loop_1(i);
          }
        }
      };
      Boards.prototype.BeforeMovePath = function(player, idx, chess) {
        for (var i = 0; i < whetherChessPostheSamePathidx; ++i) {
          if (-1 === idx) break;
          if (ClientTest_2.moveChess[2] > 0 && player[ClientTest_2.moveChess[2]].count_ > 1 && whetherChessPostheSamePath[i] && whetherChessPostheSamePath) {
            if (2 === whetherChessPostheSamePath[i].length && 2 === player[ClientTest_2.moveChess[2]].count_) if (chess.name == whetherChessPostheSamePath[i][0].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][1].name)).to(1, {
                scale: 1,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x, player[ClientTest_2.moveChess[2]].y, 0)
              }).start();
              whetherChessPostheSamePath.splice(i, 1);
              whetherChessPostheSamePathidx--;
              player[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSamePath[i][1].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][0].name)).to(1, {
                scale: 1,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x, player[ClientTest_2.moveChess[2]].y, 0)
              }).start();
              whetherChessPostheSamePath.splice(i, 1);
              whetherChessPostheSamePathidx--;
              player[ClientTest_2.moveChess[2]].count_ -= 1;
            }
          } else if (3 === whetherChessPostheSamePath[i].length && 3 === player[ClientTest_2.moveChess[2]].count_) {
            if (chess.name == whetherChessPostheSamePath[i][0].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][1].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x - 8, player[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][2].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][2].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x + 8, player[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSamePath[i].splice(0, 1);
              player[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSamePath[i][1].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][0].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x - 8, player[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][2].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][2].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x + 8, player[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSamePath[i].splice(1, 1);
              player[ClientTest_2.moveChess[2]].count_ -= 1;
            } else if (chess.name == whetherChessPostheSame[i][2].name) {
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][0].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x - 8, player[ClientTest_2.moveChess[2]].y - 8, 0)
              }).start();
              cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][1].name)).to(1, {
                scale: .5,
                position: cc.v3(player[ClientTest_2.moveChess[2]].x + 8, player[ClientTest_2.moveChess[2]].y + 8, 0)
              }).start();
              whetherChessPostheSamePath[i].splice(2, 1);
              player[ClientTest_2.moveChess[2]].count_ -= 1;
            }
          } else if (4 === whetherChessPostheSamePath[i].length && 4 === player[ClientTest_2.moveChess[2]].count_) if (chess.name == whetherChessPostheSamePath[i][0].name) {
            whetherChessPostheSamePath[i].splice(0, 1);
            player[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSamePath[i][1].name) {
            whetherChessPostheSamePath[i].splice(1, 1);
            player[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSamePath[i][2].name) {
            whetherChessPostheSamePath[i].splice(2, 1);
            player[ClientTest_2.moveChess[2]].count_ -= 1;
          } else if (chess.name == whetherChessPostheSamePath[i][3].name) {
            whetherChessPostheSamePath[i].splice(3, 1);
            player[ClientTest_2.moveChess[2]].count_ -= 1;
          }
        }
      };
      Boards.prototype.changeMoveStatusPath = function(player, playernum, idx, boardIdx, chess, chess2) {
        ClientTest_2.moveChess[2] <= 51 ? this.BeforeMove(playernum, idx, chess) : this.BeforeMovePath(player, idx, chess);
        if (player[idx].count_ < 2 && idx > 51) {
          if (boardIdx > ClientTest_2.moveChess[2]) {
            var execute_13 = function(index, count_) {
              cc.tween(chess).to(.5, {
                scale: 1,
                position: cc.v3(board[index].x, board[index].y, 0)
              }).call(function() {
                count_ > 0 && execute_13(index + 1, count_ - 1);
              }).start();
            };
            execute_13(ClientTest_2.moveChess[2], boardIdx - ClientTest_2.moveChess[2]);
          }
          var count_Path = boardIdx - ClientTest_2.moveChess[2];
          count_Path < 0 && (count_Path = 0);
          var execute_14 = function(index, count_) {
            cc.tween(chess).to(.5, {
              scale: 1,
              position: cc.v3(player[index].x, player[index].y, 0)
            }).call(function() {
              if (count_ > 0) execute_14(index + 1, count_ - 1); else {
                cc.tween(chess).to(2, {
                  scale: .5,
                  position: cc.v3(player[idx].x - 8, player[idx].y - 8, 0)
                }, cc.easeBackIn()).start();
                cc.tween(chess2).to(2, {
                  scale: .5,
                  position: cc.v3(player[idx].x + 8, player[idx].y + 8, 0)
                }, cc.easeBackIn()).start();
              }
            }).start();
          };
          execute_14(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
          player[idx].count_ += 1;
          whetherChessPostheSamePath[whetherChessPostheSamePathidx] = [];
          whetherChessPostheSamePath[whetherChessPostheSamePathidx][0] = chess;
          whetherChessPostheSamePath[whetherChessPostheSamePathidx][1] = chess2;
          whetherChessPostheSamePathidx++;
        } else if (player[idx].count_ >= 2 && idx > 51) {
          var _loop_2 = function(i) {
            if (whetherChessPostheSamePath[i] && whetherChessPostheSamePath) if (2 === whetherChessPostheSamePath[i].length && 2 === player[idx].count_) {
              if (whetherChessPostheSamePath[i][0].name == chess2.name || whetherChessPostheSamePath[i][1].name == chess2.name) {
                if (boardIdx > ClientTest_2.moveChess[2]) {
                  var execute_15 = function(index, count_) {
                    cc.tween(chess).to(.5, {
                      scale: 1,
                      position: cc.v3(board[index].x, board[index].y, 0)
                    }).call(function() {
                      count_ > 0 && execute_15(index + 1, count_ - 1);
                    }).start();
                  };
                  execute_15(ClientTest_2.moveChess[2], boardIdx - ClientTest_2.moveChess[2]);
                }
                count_Path = boardIdx - ClientTest_2.moveChess[2];
                count_Path < 0 && (count_Path = 0);
                var execute_16 = function(index, count_) {
                  cc.tween(chess).to(.5, {
                    scale: 1,
                    position: cc.v3(player[index].x, player[index].y, 0)
                  }).call(function() {
                    if (count_ > 0) execute_16(index + 1, count_ - 1); else {
                      cc.tween(chess).to(1, {
                        scale: .25,
                        position: cc.v3(player[idx].x - 6, player[idx].y + 6, 0)
                      }, cc.easeBackIn()).start();
                      cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][0].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][0].name)).to(1, {
                        scale: .25,
                        position: cc.v3(player[idx].x - 6, player[idx].y - 6, 0)
                      }, cc.easeBackIn()).start();
                      cc.tween(cc.find("Canvas/board/player" + Math.trunc(parseInt(whetherChessPostheSamePath[i][1].name) / 4 + 1).toString() + "/" + whetherChessPostheSamePath[i][1].name)).to(1, {
                        scale: .25,
                        position: cc.v3(player[idx].x + 6, player[idx].y + 6, 0)
                      }, cc.easeBackIn()).start();
                    }
                  }).start();
                };
                execute_16(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
                player[idx].count_ += 1;
                whetherChessPostheSamePath[i].push(chess);
              }
            } else if (3 === whetherChessPostheSamePath[i].length && 3 === player[idx].count_ && (whetherChessPostheSame[i][0].name == chess2.name || whetherChessPostheSame[i][1].name == chess2.name || whetherChessPostheSame[i][2].name == chess2.name)) {
              if (boardIdx > ClientTest_2.moveChess[2]) {
                var execute_17 = function(index, count_) {
                  cc.tween(chess).to(.5, {
                    scale: 1,
                    position: cc.v3(board[index].x, board[index].y, 0)
                  }).call(function() {
                    count_ > 0 && execute_17(index + 1, count_ - 1);
                  }).start();
                };
                execute_17(ClientTest_2.moveChess[2], boardIdx - ClientTest_2.moveChess[2]);
              }
              count_Path = boardIdx - ClientTest_2.moveChess[2];
              count_Path < 0 && (count_Path = 0);
              var execute_18 = function(index, count_) {
                cc.tween(chess).to(.5, {
                  scale: 1,
                  position: cc.v3(player[index].x, player[index].y, 0)
                }).call(function() {
                  count_ > 0 ? execute_18(index + 1, count_ - 1) : cc.tween(chess).to(1, {
                    scale: .25,
                    position: cc.v3(player[idx].x + 6, player[idx].y - 6, 0)
                  }, cc.easeBackIn()).start();
                }).start();
              };
              execute_18(52, (idx - ClientTest_2.moveChess[2]) % 13 - count_Path);
              whetherChessPostheSamePath[i].push(chess);
              player[idx].count_ += 1;
            }
          };
          var count_Path, count_Path;
          for (var i = 0; i < whetherChessPostheSamePathidx; ++i) _loop_2(i);
        }
      };
      __decorate([ property(cc.Button) ], Boards.prototype, 0, void 0);
      __decorate([ property(cc.Node) ], Boards.prototype, 1, void 0);
      __decorate([ property(cc.Label) ], Boards.prototype, "l1", void 0);
      __decorate([ property(cc.Label) ], Boards.prototype, "l2", void 0);
      __decorate([ property(cc.Node) ], Boards.prototype, "players", void 0);
      Boards = __decorate([ ccclass ], Boards);
      return Boards;
    }(cc.Component);
    exports.default = Boards;
    cc._RF.pop();
  }, {
    "./ClientTest": "ClientTest"
  } ],
  ClientTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61996oppfhD5pmsgegeePA0", "ClientTest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Gate = exports.dir = exports.gamemode = exports.moveChess = void 0;
    var WebSocket_1 = require("./WebSocket");
    var Board_1 = require("./Board");
    var analysis_1 = require("./analysis");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var action = "Throw";
    var Dicepoint = 6;
    var Turn = 0;
    var func = "Board";
    var gamemode = 0;
    exports.gamemode = gamemode;
    var dicedisplay = false;
    var Board_2 = require("./Board");
    var Board_3 = require("./Board");
    var moveChess = [ -1, -1, -1 ];
    exports.moveChess = moveChess;
    var Gate = [ false, false, false, false ];
    exports.Gate = Gate;
    var dir = -1;
    exports.dir = dir;
    var ClientTest = function(_super) {
      __extends(ClientTest, _super);
      function ClientTest() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.players = null;
        _this.canvas = null;
        _this.turncolor = null;
        _this.Status = null;
        _this.Dice = null;
        _this.ip = null;
        _this.Analysis = null;
        _this.Board = null;
        _this.Gamemode = null;
        _this.Analysisfunc = null;
        return _this;
      }
      ClientTest.prototype.start = function() {
        this.piecesenabled(false);
      };
      ClientTest.prototype.connectsever = function() {
        var _this = this;
        WebSocket_1.default.uri = "ws://" + cc.find("ipbox", this.ip).getComponent(cc.EditBox).string;
        try {
          WebSocket_1.default.connect(function() {
            var msg = {
              Method: "test"
            };
            WebSocket_1.default.send(JSON.stringify(msg), function(data) {
              console.log(data);
              _this.ip.setPosition(0, 1e3);
              _this.Analysisfunc.GetAItosever();
            });
          });
        } catch (e) {
          console.log(e);
        }
      };
      ClientTest.prototype.playDiceAnimation = function() {
        var _this = this;
        this.Dice.getComponent(cc.Animation).play("diceanimation");
        this.schedule(function() {
          _this.Dice.getComponent(cc.Sprite).spriteFrame = cc.find("choose/dice" + Dicepoint.toString(), _this.Dice).getComponent(cc.Sprite).spriteFrame;
        }, 1);
      };
      ClientTest.prototype.Throwtosever = function() {
        var _this = this;
        var msg = {
          Method: "Throw"
        };
        console.log("request:", msg);
        exports.dir = dir = 1;
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          _this.updateboard(data["GS"]);
        });
      };
      ClientTest.prototype.Choosethrowtosever = function(event, customEventData) {
        var _this = this;
        var msg = {
          Method: "Throw",
          DicePoint: parseInt(customEventData)
        };
        console.log("request:", msg);
        exports.dir = dir = 1;
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          _this.playDiceAnimation();
          _this.updateboard(data["GS"]);
        });
      };
      ClientTest.prototype.Movetosever = function(index) {
        var _this = this;
        var msg = {
          Method: "Move",
          PlayerIndex: Turn,
          PieceIndex: index
        };
        console.log("request:", msg);
        exports.dir = dir = 2;
        moveChess[0] = Turn;
        moveChess[1] = index;
        moveChess[2] = Board_3.chessplace[4 * Turn + index];
        console.log(moveChess);
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          _this.updateboard(data["GS"]);
        });
      };
      ClientTest.prototype.NewGametosever = function() {
        var _this = this;
        var msg = {
          Method: "NewGame",
          GameMode: gamemode
        };
        console.log("request:", msg);
        exports.dir = dir = 0;
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          _this.updateboard(data["GS"]);
        });
      };
      ClientTest.prototype.Nexttosever = function() {
        var _this = this;
        var msg = {
          Method: "Next",
          PlayerIndex: Turn,
          PieceIndex: 0
        };
        console.log("request:", msg);
        if ("Move" == action) exports.dir = dir = 2; else {
          exports.dir = dir = 1;
          this.playDiceAnimation();
        }
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          moveChess[0] = Turn;
          moveChess[1] = parseInt(data["MovingPiece"]);
          moveChess[2] = Board_3.chessplace[4 * Turn + parseInt(data["MovingPiece"])];
          _this.updateboard(data["GS"]);
        });
      };
      ClientTest.prototype.checkSafePlace = function(index) {
        for (var i = 0; i < 8; i++) if (index == Board_2.safePlace[i]) return true;
        return false;
      };
      ClientTest.prototype.updateboard = function(data) {
        for (var i = 0; i < 4; i++) Gate[i] = data.Gate[i];
        0 == dir ? this.initalboard(data) : 2 == dir && this.moveupdateboard(data);
        Turn = parseInt(data.Turn);
        0 == Turn ? this.turncolor.color = cc.color(51, 200, 19) : 1 == Turn ? this.turncolor.color = cc.color(250, 255, 0) : 2 == Turn ? this.turncolor.color = cc.color(46, 184, 255) : 3 == Turn && (this.turncolor.color = cc.color(255, 0, 0));
        Dicepoint = data.DicePoint;
        action = false == data.Movable ? "Throw" : "Move";
        this.Dice.getComponent(cc.Button).enabled = "Throw" == action;
        this.Status.string = "Action:" + action;
      };
      ClientTest.prototype.initalboard = function(data) {
        this.canvas.newBoard();
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
          var tmp = 4 * i + j;
          Board_3.chessplace[tmp] = parseInt(data.Pieces[i][j]);
        }
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
          var tmp = 4 * i + j;
          var sameplace = false;
          for (var k = tmp; k < 16; k++) if (-1 != Board_3.chessplace[k] && -1 != Board_3.chessplace[tmp] && k != tmp && Board_3.chessplace[k] == Board_3.chessplace[tmp] && Math.trunc(k / 4) == i) {
            sameplace = true;
            var temp = cc.find("player" + (i + 1).toString() + "/" + (4 * i + k % 4).toString(), this.players);
            if (null == temp) {
              console.log("null");
              return;
            }
            this.canvas.changeMoveStatus(i, j, parseInt(data.Pieces[i][j]), cc.find("player" + (i + 1).toString() + "/" + tmp.toString(), this.players), cc.find("player" + (i + 1).toString() + "/" + k.toString(), this.players));
            break;
          }
          sameplace ? sameplace = false : this.canvas.move(i, j, parseInt(data.Pieces[i][j]), cc.find("player" + (i + 1).toString() + "/" + (4 * i + j).toString(), this.players));
        }
      };
      ClientTest.prototype.moveupdateboard = function(data) {
        var tmp = 4 * moveChess[0] + moveChess[1];
        Board_3.chessplace[tmp] = parseInt(data.Pieces[moveChess[0]][moveChess[1]]);
        var sepSafPlace = this.checkSafePlace(Board_3.chessplace[tmp]);
        var sameplace = false;
        for (var k = 0; k < 16; k++) if (-1 != Board_3.chessplace[k] && -1 != Board_3.chessplace[tmp] && k != tmp && Board_3.chessplace[k] == Board_3.chessplace[tmp]) {
          sameplace = true;
          if (Math.trunc(k / 4) === moveChess[0]) {
            var temp = cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players);
            var temp2 = cc.find("player" + (moveChess[0] + 1).toString() + "/" + k.toString(), this.players);
            if (null == temp || null == temp2) return;
            this.canvas.changeMoveStatus(moveChess[0], moveChess[1], Board_3.chessplace[tmp], cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players), cc.find("player" + (moveChess[0] + 1).toString() + "/" + k.toString(), this.players));
            break;
          }
          if (sepSafPlace) {
            var temp = cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players);
            var temp2 = cc.find("player" + Math.trunc(k / 4 + 1).toString() + "/" + k.toString(), this.players);
            if (null == temp || null == temp2) return;
            this.canvas.changeMoveStatus(moveChess[0], moveChess[1], Board_3.chessplace[tmp], cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players), cc.find("player" + Math.trunc(k / 4 + 1).toString() + "/" + k.toString(), this.players));
            break;
          }
          this.canvas.goBackHome(moveChess[0], Board_3.chessplace[tmp], cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players), cc.find("player" + Math.trunc(k / 4 + 1).toString() + "/" + k.toString(), this.players), Math.trunc(k / 4), Math.trunc(k % 4));
        }
        sameplace ? sameplace = false : this.canvas.move(moveChess[0], moveChess[1], Board_3.chessplace[tmp], cc.find("player" + (moveChess[0] + 1).toString() + "/" + tmp.toString(), this.players));
      };
      ClientTest.prototype.piecesenabled = function(Y) {
        var _this = this;
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) cc.find("player" + (i + 1).toString() + "/" + (4 * i + j).toString(), this.players).off(cc.Node.EventType.TOUCH_END, function() {
          _this.Movetosever(j);
        });
      };
      ClientTest.prototype.switchfunc = function() {
        if ("Board" == func) {
          func = "Analysis";
          this.node.setPosition(0, 1e3);
          this.Board.setPosition(0, 1e3);
          this.Analysis.setPosition(0, 0);
        } else if ("Analysis" == func) {
          func = "Board";
          this.node.setPosition(0, 0);
          this.Board.setPosition(-160, 0);
          this.Analysis.setPosition(0, 1e3);
        }
      };
      ClientTest.prototype.switchmod = function() {
        exports.gamemode = gamemode = 1 - gamemode;
        if (0 == gamemode) {
          this.Gamemode.getComponent(cc.Label).string = "Mode:Fast";
          cc.find("change", this.Gamemode).x = 160;
        } else if (1 == gamemode) {
          this.Gamemode.getComponent(cc.Label).string = "Mode:Classic";
          cc.find("change", this.Gamemode).x = 200;
        }
      };
      ClientTest.prototype.showdice = function() {
        dicedisplay = !dicedisplay;
        this.display(cc.find("choose", this.Dice), dicedisplay);
      };
      ClientTest.prototype.display = function(node, Y) {
        Y ? node.setPosition(0, 0) : node.setPosition(0, 1e3);
      };
      __decorate([ property(cc.Node) ], ClientTest.prototype, "players", void 0);
      __decorate([ property(Board_1.default) ], ClientTest.prototype, "canvas", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "turncolor", void 0);
      __decorate([ property(cc.Label) ], ClientTest.prototype, "Status", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "Dice", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "ip", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "Analysis", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "Board", void 0);
      __decorate([ property(cc.Node) ], ClientTest.prototype, "Gamemode", void 0);
      __decorate([ property(analysis_1.default) ], ClientTest.prototype, "Analysisfunc", void 0);
      ClientTest = __decorate([ ccclass ], ClientTest);
      return ClientTest;
    }(cc.Component);
    exports.default = ClientTest;
    cc._RF.pop();
  }, {
    "./Board": "Board",
    "./WebSocket": "WebSocket",
    "./analysis": "analysis"
  } ],
  WebSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "648fbRLrvJDb4W5eu4B6FI8", "WebSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Client = function() {
      function Client() {}
      Client.connect = function(callback) {
        Client.ws = new WebSocket(Client.uri);
        Client.ws.onopen = function() {
          console.log("connected to " + Client.uri);
          Client.isOpen = true;
          Client.callbackList = [];
          callback();
        };
        Client.ws.onclose = function(event) {
          console.log("connection closed (" + event.code + ")");
          Client.isOpen = false;
          Client.disconnect(event);
        };
        Client.ws.onmessage = function(event) {
          Client.callbackList[0](JSON.parse(event.data));
          Client.callbackList.shift();
        };
      };
      Client.send = function(msg, callback) {
        if (Client.isOpen) {
          Client.ws.send(msg);
          Client.callbackList.push(callback);
        }
      };
      Client.isOpen = false;
      return Client;
    }();
    exports.default = Client;
    cc._RF.pop();
  }, {} ],
  analysis: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d217W6DXBIm49p+D/TADPe", "analysis");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WebSocket_1 = require("./WebSocket");
    var ClientTest_1 = require("./ClientTest");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ai = [ "", "", "", "" ];
    var AiNames = [];
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Testtimes = null;
        _this.Data = null;
        _this.ChooseAI = null;
        _this.name0 = null;
        _this.name1 = null;
        _this.name2 = null;
        _this.name3 = null;
        _this.turn = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {};
      NewClass.prototype.GetAItosever = function() {
        var _this = this;
        var msg = {
          Method: "GetAI",
          PlayerIndex: 0,
          PieceIndex: 0
        };
        console.log("request:", msg);
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          AiNames = data["AINames"];
          for (var i = 0; i < 4; i++) {
            Ai[i] = data["AINames"][0];
            cc.find(i.toString() + "/name", _this.ChooseAI).getComponent(cc.Label).string = data["AINames"][0];
            for (var j = 0; j < 20; j++) cc.find(i.toString() + "/view/content/" + (20 * i + j).toString(), _this.ChooseAI).active = false;
          }
          for (var i = 0; i < 4; i++) for (var j = 0; j < data["AINames"].length; j++) {
            cc.find(i.toString() + "/view/content/" + (20 * i + j).toString(), _this.ChooseAI).active = true;
            cc.find(i.toString() + "/view/content/" + (20 * i + j).toString(), _this.ChooseAI).on("click", _this.SetAI, _this);
            cc.find(i.toString() + "/view/content/" + (20 * i + j).toString() + "/Background/Label", _this.ChooseAI).getComponent(cc.Label).string = data["AINames"][j];
          }
        });
      };
      NewClass.prototype.SetAI = function(btn) {
        Ai[Math.floor(parseInt(btn.name) / 20)] = AiNames[Math.floor(parseInt(btn.name) % 20)];
        0 == Math.floor(parseInt(btn.name) / 20) ? this.name0.string = AiNames[Math.floor(parseInt(btn.name) % 20)] : 1 == Math.floor(parseInt(btn.name) / 20) ? this.name1.string = AiNames[Math.floor(parseInt(btn.name) % 20)] : 2 == Math.floor(parseInt(btn.name) / 20) ? this.name2.string = AiNames[Math.floor(parseInt(btn.name) % 20)] : 3 == Math.floor(parseInt(btn.name) / 20) && (this.name3.string = AiNames[Math.floor(parseInt(btn.name) % 20)]);
      };
      NewClass.prototype.SetAItosever = function() {
        var msg = {
          Method: "SetAI",
          PlayerIndex: 0,
          PieceIndex: 0,
          AINames: Ai
        };
        console.log("request:", msg);
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
        });
      };
      NewClass.prototype.AItesttosever = function() {
        var msg = {
          Method: "AITest",
          PlayerIndex: 0,
          PieceIndex: 0,
          TestTimes: Number(this.Testtimes.string),
          GameMode: ClientTest_1.gamemode
        };
        console.log("request:", msg);
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
        });
        this.schedule(this.Showgameresult, 0, 0, 1);
      };
      NewClass.prototype.Showgameresult = function() {
        var _this = this;
        var msg = {
          Method: "GetGameResult",
          PlayerIndex: 0,
          PieceIndex: 0
        };
        console.log("request:", msg);
        WebSocket_1.default.send(JSON.stringify(msg), function(data) {
          console.log("response:", data);
          _this.updatedata(data["Result"]);
        });
      };
      NewClass.prototype.updatedata = function(data) {
        for (var i = 0; i < 4; i++) {
          cc.find("Eatensum/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = data["EatenSum"][i];
          cc.find("Eatothersum/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = data["EatOthersSum"][i];
          cc.find("Gateopenedsum/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = data["GateOpenedSum"][i];
          0 == parseInt(data["WinSum"][i]) ? cc.find("Turnusedavg/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = "0" : cc.find("Turnusedavg/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = parseFloat((parseInt(data["TurnUsedSum"][i]) / parseInt(data["WinSum"][i])).toFixed(2)).toString();
          cc.find("Winsum/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = data["WinSum"][i];
          0 == parseInt(data["GameCount"]) ? cc.find("Winavg/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = "0" : cc.find("Winavg/Player" + i.toString() + "/Label", this.Data).getComponent(cc.Label).string = parseFloat((100 * parseInt(data["WinSum"][i]) / parseInt(data["GameCount"])).toFixed(2)).toString() + "%";
        }
        this.turn.string = "Turn:" + data["GameCount"];
      };
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "Testtimes", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "Data", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ChooseAI", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "name0", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "name1", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "name2", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "name3", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "turn", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ClientTest": "ClientTest",
    "./WebSocket": "WebSocket"
  } ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "946f5XV/dNNZpV+Ds+xBbsy", "player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Board_1 = require("./Board");
    var ClientTest_1 = require("./ClientTest");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.race0 = null;
        _this.race1 = null;
        _this.race2 = null;
        _this.race3 = null;
        _this.canvas = null;
        _this.clientTest = null;
        _this.idx0 = 0;
        _this.idx1 = 0;
        _this.idx2 = 0;
        _this.idx3 = 0;
        _this.playerColor = "";
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.race0.on(cc.Node.EventType.TOUCH_END, function() {
          _this.clientTest.Movetosever(0);
        });
        this.race1.on(cc.Node.EventType.TOUCH_END, function() {
          _this.clientTest.Movetosever(1);
        });
        this.race2.on(cc.Node.EventType.TOUCH_END, function() {
          _this.clientTest.Movetosever(2);
        });
        this.race3.on(cc.Node.EventType.TOUCH_END, function() {
          _this.clientTest.Movetosever(3);
        });
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "race0", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "race1", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "race2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "race3", void 0);
      __decorate([ property(Board_1.default) ], NewClass.prototype, "canvas", void 0);
      __decorate([ property(ClientTest_1.default) ], NewClass.prototype, "clientTest", void 0);
      __decorate([ property ], NewClass.prototype, "playerColor", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Board": "Board",
    "./ClientTest": "ClientTest"
  } ]
}, {}, [ "Board", "ClientTest", "WebSocket", "analysis", "player" ]);