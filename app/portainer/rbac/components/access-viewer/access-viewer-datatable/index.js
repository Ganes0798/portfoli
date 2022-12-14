import './access-viewer-datatable.css';

export const accessViewerDatatable = {
  templateUrl: './access-viewer-datatable.html',
  controller: 'GenericDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    tableKey: '@',
    orderBy: '@',
    dataset: '<',
    isAdmin: '<',
  },
};
