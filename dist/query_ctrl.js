'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericDatasourceQueryCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdk = require('app/plugins/sdk');

require('./css/query-editor.css!');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericDatasourceQueryCtrl = exports.GenericDatasourceQueryCtrl = function (_QueryCtrl) {
  _inherits(GenericDatasourceQueryCtrl, _QueryCtrl);

  function GenericDatasourceQueryCtrl($scope, $injector) {
    _classCallCheck(this, GenericDatasourceQueryCtrl);

    var _this = _possibleConstructorReturn(this, (GenericDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(GenericDatasourceQueryCtrl)).call(this, $scope, $injector));

    _this.scope = $scope;
    _this.target.target = _this.target.target || 'select metric';
    _this.target.mv = _this.target.mv || 'Select Materialized View';
    _this.target.column = _this.target.column || 'Select Column';
    _this.target.key = _this.target.key || 'Select Key';
    _this.target.type = _this.target.type || 'timeserie';
    return _this;
  }

  _createClass(GenericDatasourceQueryCtrl, [{
    key: 'listMaterializedViews',
    value: function listMaterializedViews(query) {
      return this.datasource.listMaterializedViews(query || '');
    }
  }, {
    key: 'getColumns',
    value: function getColumns(query) {
      return this.target.mv !== 'Select Materialized View' ? this.datasource.getColumns(query || '', this.target.mv) : [];
    }
  }, {
    key: 'toggleEditorMode',
    value: function toggleEditorMode() {
      this.target.rawQuery = !this.target.rawQuery;
    }
  }, {
    key: 'onChangeInternal',
    value: function onChangeInternal() {
      this.panelCtrl.refresh(); // Asks the panel to refresh data.
    }
  }, {
    key: 'onSetMv',
    value: function onSetMv() {
      var _this2 = this;

      this.getColumns('').then(function (x) {
        _this2.target.columns = x;
        _this2.onChangeInternal();
      });
      this.getKeys('').then(function (x) {
        _this2.target.keys = x;
        _this2.onChangeInternal();
      });
    }
  }, {
    key: 'getKeys',
    value: function getKeys(query) {
      return this.target.mv !== 'Select Materialized View' ? this.datasource.getKeys(query || '', this.target.mv) : [];
    }
  }, {
    key: 'getKeys2',
    value: function getKeys2(query) {
      return Promise.resolve(this.target.keys) || this.getKeys(query);
    }
  }, {
    key: 'onColumnsChanged',
    value: function onColumnsChanged() {}
  }, {
    key: 'getColumns2',
    value: function getColumns2(query) {
      return Promise.resolve(this.target.columns) || this.getColumns(query);
    }
  }]);

  return GenericDatasourceQueryCtrl;
}(_sdk.QueryCtrl);

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
//# sourceMappingURL=query_ctrl.js.map
