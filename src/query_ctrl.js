import {QueryCtrl} from 'app/plugins/sdk';
import './css/query-editor.css!'

export class GenericDatasourceQueryCtrl extends QueryCtrl {

  constructor($scope, $injector)  {
    super($scope, $injector);

    this.scope = $scope;
    this.target.target = this.target.target || 'select metric';
    this.target.mv = this.target.mv || 'Select Materialized View';
    this.target.column = this.target.column || 'Select Column';
    this.target.key = this.target.key || 'Select Key';
    this.target.type = this.target.type || 'timeserie';
  }

  listMaterializedViews(query) {
    return this.datasource.listMaterializedViews(query || '');
  }

  getColumns(query) {
     return this.target.mv !== 'Select Materialized View' ? this.datasource.getColumns(query || '', this.target.mv) : [];
  }

  toggleEditorMode() {
    this.target.rawQuery = !this.target.rawQuery;
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }

  onSetMv() {
    this.getColumns('').then(x => {
      this.target.columns = x;
      this.onChangeInternal()
    });
    this.getKeys('').then(x => {
      this.target.keys = x;
      this.onChangeInternal()
    });
  }

  getKeys(query) {
    return this.target.mv !== 'Select Materialized View' ? this.datasource.getKeys(query || '', this.target.mv) : [];
  }

  getKeys2(query) {
    return Promise.resolve(this.target.keys) || this.getKeys(query)
  }

  onColumnsChanged() {
    
  }

  getColumns2(query) {
    return Promise.resolve(this.target.columns) || this.getColumns(query)
  }
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';


