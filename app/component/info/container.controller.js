const $inject = ['$scope', '$ngRedux', 'sanjiWindowService', 'cellularActions'];
const WINDOW_ID = 'sanji-cellular-ui';
class CellularInfoContainerController {
  constructor(...injects) {
    CellularInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.store = this.$ngRedux;
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.unsubscribe = this.store.connect(this.mapStateToThis, this.cellularActions)(this);
    this.sanjiWindowMgr.promise = this.getCellulars();
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.cellulars
    };
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.getCellulars({force: true});
    }
  }
}
CellularInfoContainerController.$inject = $inject;
export default CellularInfoContainerController;
